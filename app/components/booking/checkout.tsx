"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { loadStripe, type StripePaymentRequestButtonElementOptions } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useTheme } from "next-themes";
import { DynamicIcon } from "lucide-react/dynamic";
import type {
  PricingBreakdown,
  DateRange,
  TimeSelection,
  Location,
  ServiceSelection,
  PaymentStatus,
} from "./booking-types";

// ── Stripe singleton (lazy to ensure env var is available) ──

let _stripePromise: ReturnType<typeof loadStripe> | null = null;
function getStripePromise() {
  if (!_stripePromise) {
    _stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );
  }
  return _stripePromise;
}

// ── Props ──────────────────────────────────────────────────

interface CheckoutProps {
  clientSecret: string;
  pricing: PricingBreakdown;
  dateRange: DateRange;
  time: TimeSelection;
  location: Location;
  services: ServiceSelection;
  onBack: () => void;
  onSuccess: () => void;
}

// ── Outer wrapper (Elements provider) ──────────────────────

export function Checkout({
  clientSecret,
  pricing,
  dateRange,
  time,
  location,
  services,
  onBack,
  onSuccess,
}: CheckoutProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const options = useMemo(
    () => ({
      clientSecret,
      appearance: {
        theme: (isDark ? "flat" : "stripe") as "flat" | "stripe",
        variables: {
          colorPrimary: "#DFEC58",
          colorBackground: isDark ? "#171717" : "#f5f5f5",
          colorText: isDark ? "#ffffff" : "#171717",
          colorDanger: "#ef4444",
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          borderRadius: "12px",
          spacingUnit: "4px",
        },
        rules: {
          ".Input": {
            backgroundColor: isDark ? "#262626" : "#ffffff",
            border: `1px solid ${isDark ? "#404040" : "#d4d4d4"}`,
          },
          ".Input:focus": {
            borderColor: "#DFEC58",
            boxShadow: "0 0 0 1px #DFEC58",
          },
          ".Label": {
            color: isDark ? "#a3a3a3" : "#525252",
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase" as const,
            letterSpacing: "0.05em",
          },
          ".Tab": {
            backgroundColor: isDark ? "#262626" : "#ffffff",
            border: `1px solid ${isDark ? "#404040" : "#d4d4d4"}`,
          },
          ".Tab--selected": {
            backgroundColor: isDark ? "#171717" : "#f5f5f5",
            borderColor: "#DFEC58",
          },
        },
      },
    }),
    [clientSecret, isDark]
  );

  return (
    <Elements stripe={getStripePromise()} options={options}>
      <CheckoutForm
        pricing={pricing}
        dateRange={dateRange}
        time={time}
        location={location}
        services={services}
        onBack={onBack}
        onSuccess={onSuccess}
      />
    </Elements>
  );
}

// ── Inner form ─────────────────────────────────────────────

function CheckoutForm({
  pricing,
  onBack,
  onSuccess,
}: Omit<CheckoutProps, "clientSecret">) {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState<PaymentStatus>("ready");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentRequest, setPaymentRequest] = useState<ReturnType<
    NonNullable<typeof stripe>["paymentRequest"]
  > | null>(null);

  // ── Initialize Payment Request (Apple Pay / Google Pay) ──
  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "eFoil Maldives Booking",
        amount: Math.round(pricing.grandTotal * 100),
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });

    pr.on("paymentmethod", async (ev) => {
      if (!stripe || !elements) {
        ev.complete("fail");
        return;
      }

      setStatus("processing");

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        undefined as unknown as string, // clientSecret is bound via Elements
        { payment_method: ev.paymentMethod.id },
        { handleActions: false }
      );

      if (error) {
        ev.complete("fail");
        setErrorMessage(error.message ?? "Payment failed");
        setStatus("error");
      } else if (paymentIntent?.status === "requires_action") {
        ev.complete("success");
        const { error: actionError } = await stripe.confirmCardPayment(
          paymentIntent.client_secret!
        );
        if (actionError) {
          setErrorMessage(actionError.message ?? "Authentication failed");
          setStatus("error");
        } else {
          setStatus("succeeded");
          onSuccess();
        }
      } else {
        ev.complete("success");
        setStatus("succeeded");
        onSuccess();
      }
    });
  }, [stripe, elements, pricing.grandTotal, onSuccess]);

  // ── Handle card form submission ──────────────────────────
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!stripe || !elements) return;

      setStatus("processing");
      setErrorMessage(null);

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.href,
        },
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message ?? "Payment failed. Please try again.");
        setStatus("error");
      } else {
        setStatus("succeeded");
        onSuccess();
      }
    },
    [stripe, elements, onSuccess]
  );

  // ── Success state ────────────────────────────────────────
  if (status === "succeeded") {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="w-16 h-16 mx-auto bg-highlight/20 rounded-full flex items-center justify-center">
          <DynamicIcon
            name="check"
            className="w-8 h-8 text-highlight"
          />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          Booking Confirmed!
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto">
          You&apos;ll receive a confirmation email shortly. Our team will
          contact you to arrange delivery details.
        </p>
      </div>
    );
  }

  // ── Loading state ────────────────────────────────────────
  if (!stripe || !elements) {
    return (
      <div className="space-y-4">
        {/* Back + header */}
        <div>
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors mb-2 cursor-pointer"
          >
            <DynamicIcon name="arrow-left" className="w-3 h-3" />
            Back to services
          </button>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Complete Payment
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Review your order and pay securely
          </p>
        </div>
        {/* Skeleton */}
        <div className="space-y-3 animate-pulse">
          <div className="h-12 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />
          <div className="h-12 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />
          <div className="h-12 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />
        </div>
      </div>
    );
  }

  // ── Payment form ─────────────────────────────────────────
  const prButtonOptions: StripePaymentRequestButtonElementOptions = {
    paymentRequest: paymentRequest!,
    style: {
      paymentRequestButton: {
        type: "default",
        theme: "dark",
        height: "48px",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Back + header */}
      <div>
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors mb-2 cursor-pointer"
        >
          <DynamicIcon name="arrow-left" className="w-3 h-3" />
          Back to services
        </button>
        <h3 className="text-base font-bold text-neutral-900 dark:text-white">
          Complete Payment
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Review your order and pay securely
        </p>
      </div>

      {/* Order summary */}
      <OrderSummary pricing={pricing} />

      {/* Apple Pay / Google Pay */}
      {paymentRequest && (
        <div className="space-y-3">
          <PaymentRequestButtonElement options={prButtonOptions} />
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
            <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
              or pay with card
            </span>
            <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      )}

      {/* Card input */}
      <PaymentElement options={{ layout: "tabs" }} />

      {/* Error message */}
      {errorMessage && (
        <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
          <DynamicIcon
            name="alert-circle"
            className="w-4 h-4 text-red-500 shrink-0"
          />
          <p className="text-sm text-red-500">{errorMessage}</p>
        </div>
      )}

      {/* Pay button */}
      <button
        type="submit"
        disabled={!stripe || !elements || status === "processing"}
        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
          status === "processing"
            ? "bg-highlight/70 text-black/70 cursor-wait"
            : "bg-highlight text-black cursor-pointer hover:bg-highlight/90"
        }`}
      >
        {status === "processing" ? (
          <>
            <DynamicIcon
              name="loader-2"
              className="w-5 h-5 animate-spin"
            />
            Processing...
          </>
        ) : (
          <>
            <DynamicIcon name="lock" className="w-4 h-4" />
            Pay ${pricing.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </>
        )}
      </button>

      {/* Security badge */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500">
        <DynamicIcon name="shield-check" className="w-3.5 h-3.5" />
        Secured by Stripe
      </div>
    </form>
  );
}

// ── Order Summary ──────────────────────────────────────────

function OrderSummary({ pricing }: { pricing: PricingBreakdown }) {
  const fmt = (n: number) =>
    n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const lines: { label: string; amount: number; dimmed?: boolean }[] = [
    { label: "eFoils", amount: pricing.efoilTotal },
    {
      label: "Instructor",
      amount: pricing.instructorTotal,
      dimmed: pricing.instructorTotal === 0,
    },
    { label: "Delivery", amount: pricing.deliveryTotal },
    { label: "Green Tax", amount: pricing.greenTaxTotal },
    { label: "Service Charge (10%)", amount: pricing.serviceCharge },
  ];

  return (
    <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-xl p-4 space-y-2">
      {lines.map((line) => (
        <div
          key={line.label}
          className={`flex items-center justify-between text-sm ${
            line.dimmed
              ? "text-neutral-400 dark:text-neutral-600"
              : "text-neutral-600 dark:text-neutral-300"
          }`}
        >
          <span>{line.label}</span>
          <span className="tabular-nums">${fmt(line.amount)}</span>
        </div>
      ))}
      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-2 mt-2 flex items-center justify-between">
        <span className="text-sm font-bold text-neutral-900 dark:text-white">
          Total
        </span>
        <span className="text-base font-bold text-neutral-900 dark:text-white tabular-nums">
          ${fmt(pricing.grandTotal)}
        </span>
      </div>
    </div>
  );
}
