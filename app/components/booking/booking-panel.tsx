"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { cubicBezier } from "motion/react";
import { DynamicIcon } from "lucide-react/dynamic";
import { Calendar } from "./calendar";
import { TimeSelector } from "./time-selector";
import { LocationMap } from "./location-map";
import { ServiceBreakdown } from "./service-breakdown";
import { Checkout } from "./checkout";
import { computePricing } from "./booking-utils";
import type {
  DateRange,
  TimeSelection,
  Location,
  ServiceSelection,
  PaymentState,
} from "./booking-types";

interface BookingPanelProps {
  isOpen: boolean;
}

const EASE = cubicBezier(0.4, 0, 0.2, 1);

export function BookingPanel({ isOpen }: BookingPanelProps) {
  const [step, setStep] = useState(1);
  const [dateRange, setDateRange] = useState<DateRange>({
    start: null,
    end: null,
  });
  const [time, setTime] = useState<TimeSelection>({
    startTime: "10:30",
    endTime: "12:30",
  });
  const [location, setLocation] = useState<Location | null>(null);
  const [locationSelected, setLocationSelected] = useState(false);
  const [services, setServices] = useState<ServiceSelection>({
    efoils: { awakeRavik: 0, audiEtron: 0, fliteboard: 0 },
    instructorEnabled: false,
  });
  const [payment, setPayment] = useState<PaymentState>({
    status: "idle",
    clientSecret: null,
    error: null,
  });

  const isDateReady = dateRange.start !== null && dateRange.end !== null;

  const totalEfoils =
    services.efoils.awakeRavik +
    services.efoils.audiEtron +
    services.efoils.fliteboard;
  const isServiceReady = totalEfoils > 0;

  // Format selected dates for summary display
  const formatDate = (date: Date | null) => {
    if (!date) return "—";
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleLocationChange = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  const handleMapInteraction = () => {
    setLocationSelected(true);
  };

  const createPaymentIntent = async () => {
    const pricing = computePricing(services, dateRange, time, location);
    const amountInCents = Math.round(pricing.grandTotal * 100);

    setPayment({ status: "creating", clientSecret: null, error: null });

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInCents,
          metadata: {
            dateStart: dateRange.start!.toISOString(),
            dateEnd: dateRange.end!.toISOString(),
            startTime: time.startTime,
            endTime: time.endTime,
            locationLat: location!.lat,
            locationLng: location!.lng,
            efoilAwakeRavik: services.efoils.awakeRavik,
            efoilAudiEtron: services.efoils.audiEtron,
            efoilFliteboard: services.efoils.fliteboard,
            instructorEnabled: services.instructorEnabled,
          },
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to initialize payment");
      }

      const { clientSecret } = await res.json();
      setPayment({ status: "ready", clientSecret, error: null });
      setStep(4);
    } catch (err) {
      setPayment({
        status: "error",
        clientSecret: null,
        error:
          err instanceof Error
            ? err.message
            : "Failed to initialize payment",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: EASE,
          }}
          className="overflow-hidden"
        >
          <div className="mt-6 p-5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
            {/* Step 1: Date & Time Selection */}
            {step === 1 && (
              <div className="space-y-5">
                {/* Panel header */}
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Select your dates
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Choose start and end dates for your eFoil rental
                  </p>
                </div>

                {/* Calendar */}
                <div className="flex justify-center">
                  <Calendar
                    dateRange={dateRange}
                    onDateRangeChange={setDateRange}
                  />
                </div>

                {/* Selected dates summary */}
                {dateRange.start && (
                  <div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="px-2 py-1 bg-highlight/20 text-neutral-900 dark:text-white rounded-lg font-medium">
                      {formatDate(dateRange.start)}
                    </span>
                    {dateRange.end &&
                      !isSameDay(dateRange.start, dateRange.end) && (
                        <>
                          <span>→</span>
                          <span className="px-2 py-1 bg-highlight/20 text-neutral-900 dark:text-white rounded-lg font-medium">
                            {formatDate(dateRange.end)}
                          </span>
                        </>
                      )}
                  </div>
                )}

                {/* Time selectors */}
                <TimeSelector time={time} onTimeChange={setTime} />

                {/* Continue button */}
                <button
                  onClick={() => setStep(2)}
                  disabled={!isDateReady}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                    isDateReady
                      ? "bg-highlight text-black cursor-pointer hover:bg-highlight/90"
                      : "bg-neutral-300 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed opacity-60"
                  }`}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Location Selection */}
            {step === 2 && (
              <div className="space-y-5">
                {/* Back button + header */}
                <div>
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors mb-2 cursor-pointer"
                  >
                    <DynamicIcon name="arrow-left" className="w-3 h-3" />
                    Back to dates
                  </button>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Select delivery location
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Drag the map to position the pin on your delivery location
                  </p>
                </div>

                {/* Map */}
                <LocationMap
                  onLocationChange={handleLocationChange}
                  onInteraction={handleMapInteraction}
                />

                {/* Coordinates display */}
                {location && (
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <DynamicIcon name="map-pin" className="w-3 h-3" />
                    <span>
                      {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                    </span>
                  </div>
                )}

                {/* Continue button */}
                <button
                  onClick={() => setStep(3)}
                  disabled={!locationSelected}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                    locationSelected
                      ? "bg-highlight text-black cursor-pointer hover:bg-highlight/90"
                      : "bg-neutral-300 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed opacity-60"
                  }`}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 3: Service Breakdown */}
            {step === 3 && (
              <div className="space-y-5">
                {/* Back button + header */}
                <div>
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors mb-2 cursor-pointer"
                  >
                    <DynamicIcon name="arrow-left" className="w-3 h-3" />
                    Back to location
                  </button>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Configure your rental
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Select eFoil models and optional services
                  </p>
                </div>

                {/* Service breakdown */}
                <ServiceBreakdown
                  dateRange={dateRange}
                  time={time}
                  location={location!}
                  services={services}
                  onServicesChange={setServices}
                />

                {/* Continue to payment button */}
                <button
                  onClick={createPaymentIntent}
                  disabled={
                    !isServiceReady || payment.status === "creating"
                  }
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                    isServiceReady && payment.status !== "creating"
                      ? "bg-highlight text-black cursor-pointer hover:bg-highlight/90"
                      : "bg-neutral-300 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed opacity-60"
                  }`}
                >
                  {payment.status === "creating" ? (
                    <span className="flex items-center justify-center gap-2">
                      <DynamicIcon
                        name="loader-2"
                        className="w-4 h-4 animate-spin"
                      />
                      Preparing checkout...
                    </span>
                  ) : (
                    "Continue to Payment"
                  )}
                </button>
                {payment.status === "error" && (
                  <p className="text-sm text-red-500 text-center">
                    {payment.error}
                  </p>
                )}
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && payment.clientSecret && (
              <Checkout
                clientSecret={payment.clientSecret}
                pricing={computePricing(services, dateRange, time, location)}
                dateRange={dateRange}
                time={time}
                location={location!}
                services={services}
                onBack={() => setStep(3)}
                onSuccess={() => {
                  // Payment succeeded — stay on confirmation view
                }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
