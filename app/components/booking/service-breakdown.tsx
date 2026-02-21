"use client";

import { useMemo } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import {
  computeRentalDays,
  computeHoursPerDay,
  computeDistanceFromMale,
  computePricing,
} from "./booking-utils";
import type {
  DateRange,
  TimeSelection,
  Location,
  ServiceSelection,
  EfoilSelection,
} from "./booking-types";

// ── Constants ──────────────────────────────────────────────

const EFOIL_MODELS: {
  key: keyof EfoilSelection;
  label: string;
  icon: string;
}[] = [
  { key: "awakeRavik", label: "AWAKE RÄVIK", icon: "waves" },
  { key: "audiEtron", label: "AUDI e-TRON", icon: "zap" },
  { key: "fliteboard", label: "FLITEBOARD", icon: "sailboat" },
];

// ── Props ──────────────────────────────────────────────────

interface ServiceBreakdownProps {
  dateRange: DateRange;
  time: TimeSelection;
  location: Location;
  services: ServiceSelection;
  onServicesChange: (services: ServiceSelection) => void;
}

// ── Component ──────────────────────────────────────────────

export function ServiceBreakdown({
  dateRange,
  time,
  location,
  services,
  onServicesChange,
}: ServiceBreakdownProps) {
  const days = computeRentalDays(dateRange.start, dateRange.end);
  const hoursPerDay = computeHoursPerDay(time.startTime, time.endTime);
  const distanceKm = computeDistanceFromMale(location.lat, location.lng);
  const pricing = useMemo(
    () => computePricing(services, dateRange, time, location),
    [services, dateRange, time, location]
  );

  const totalUnits =
    services.efoils.awakeRavik +
    services.efoils.audiEtron +
    services.efoils.fliteboard;

  // ── Handlers ───────────────────────────────────────────

  const setEfoilQty = (key: keyof EfoilSelection, value: number) => {
    onServicesChange({
      ...services,
      efoils: { ...services.efoils, [key]: value },
    });
  };

  const toggleInstructor = () => {
    onServicesChange({
      ...services,
      instructorEnabled: !services.instructorEnabled,
    });
  };

  // ── Render ─────────────────────────────────────────────

  return (
    <div className="space-y-1">
      {/* eFoil models */}
      {EFOIL_MODELS.map((model) => (
        <LineItem
          key={model.key}
          icon={model.icon}
          label={model.label}
          detail={`$500/unit/day${days > 1 ? ` × ${days}d` : ""}`}
          total={services.efoils[model.key] * 500 * days}
        >
          <QuantityStepper
            value={services.efoils[model.key]}
            onChange={(v) => setEfoilQty(model.key, v)}
          />
        </LineItem>
      ))}

      {/* Instructor */}
      <LineItem
        icon="graduation-cap"
        label="Instructor"
        detail={`$90/hr × ${hoursPerDay}h/day${days > 1 ? ` × ${days}d` : ""}`}
        total={pricing.instructorTotal}
        dimmed={!services.instructorEnabled}
      >
        <ToggleSwitch
          checked={services.instructorEnabled}
          onChange={toggleInstructor}
        />
      </LineItem>

      {/* Delivery (read-only) */}
      <LineItem
        icon="truck"
        label="Delivery"
        detail={
          distanceKm <= 40
            ? `${Math.round(distanceKm)}km — flat rate`
            : `${Math.round(distanceKm)}km — base +${Math.ceil(distanceKm - 40)}km`
        }
        total={pricing.deliveryTotal}
      />

      {/* Green Tax (read-only) */}
      <LineItem
        icon="leaf"
        label="Green Tax"
        detail={`$6 × ${totalUnits} pers. × ${days}d`}
        total={pricing.greenTaxTotal}
      />

      {/* Service Charge (read-only) */}
      <LineItem
        icon="percent"
        label="Service Charge"
        detail="10% on subtotal"
        total={pricing.serviceCharge}
        isLast
      />

      {/* Grand Total */}
      <div className="flex items-center justify-between pt-4 mt-1 border-t-2 border-neutral-300 dark:border-neutral-700">
        <span className="text-base font-bold text-neutral-900 dark:text-white">
          Total
        </span>
        <span className="text-xl font-bold text-neutral-900 dark:text-white">
          ${pricing.grandTotal.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

// ── LineItem ────────────────────────────────────────────────

function LineItem({
  icon,
  label,
  detail,
  total,
  dimmed,
  isLast,
  children,
}: {
  icon: string;
  label: string;
  detail: string;
  total: number;
  dimmed?: boolean;
  isLast?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`py-3 ${
        isLast ? "" : "border-b border-neutral-200 dark:border-neutral-800"
      } ${dimmed ? "opacity-50" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 shrink-0 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
            <DynamicIcon
              name={icon as any}
              className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-white leading-tight">
              {label}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {detail}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {children}
          <span className="w-[3.25rem] text-right text-sm font-semibold text-neutral-900 dark:text-white tabular-nums">
            ${total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── QuantityStepper ────────────────────────────────────────

function QuantityStepper({
  value,
  onChange,
  min = 0,
  max = 10,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
          value <= min
            ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
            : "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-700 cursor-pointer"
        }`}
      >
        <DynamicIcon name="minus" className="w-3 h-3" />
      </button>
      <span className="w-5 text-center text-sm font-semibold text-neutral-900 dark:text-white">
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
          value >= max
            ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
            : "bg-highlight text-black hover:bg-highlight/90 cursor-pointer"
        }`}
      >
        <DynamicIcon name="plus" className="w-3 h-3" />
      </button>
    </div>
  );
}

// ── ToggleSwitch ───────────────────────────────────────────

function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
        checked ? "bg-highlight" : "bg-neutral-300 dark:bg-neutral-700"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
