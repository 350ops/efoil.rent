import type {
  DateRange,
  TimeSelection,
  Location,
  ServiceSelection,
  PricingBreakdown,
} from "./booking-types";

// ── Constants ──────────────────────────────────────────────
const EFOIL_PRICE_PER_UNIT_PER_DAY = 500;
const INSTRUCTOR_RATE_PER_HOUR = 90;
const DELIVERY_BASE_PRICE = 150;
const DELIVERY_BASE_RADIUS_KM = 40;
const DELIVERY_EXTRA_PER_KM = 3;
const GREEN_TAX_PER_PERSON_PER_DAY = 6;
const SERVICE_CHARGE_RATE = 0.1;

const MALE_LAT = 4.1755;
const MALE_LNG = 73.5093;

// ── Helpers ────────────────────────────────────────────────

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/**
 * Number of rental days (inclusive). Same-day selection = 1.
 */
export function computeRentalDays(start: Date | null, end: Date | null): number {
  if (!start || !end) return 0;
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = Math.round(
    (end.getTime() - start.getTime()) / msPerDay
  );
  return Math.max(diff, 1);
}

/**
 * Hours between two "HH:MM" time strings. Minimum 1 hour.
 */
export function computeHoursPerDay(
  startTime: string,
  endTime: string
): number {
  const [sh, sm] = startTime.split(":").map(Number);
  const [eh, em] = endTime.split(":").map(Number);
  const diff = (eh * 60 + em - (sh * 60 + sm)) / 60;
  return Math.max(diff, 1);
}

/**
 * Haversine distance (km) from Malé center to a given coordinate.
 */
export function computeDistanceFromMale(lat: number, lng: number): number {
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat - MALE_LAT);
  const dLng = toRad(lng - MALE_LNG);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(MALE_LAT)) *
      Math.cos(toRad(lat)) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Delivery cost: $150 flat within 40 km, then +$3 per extra km.
 */
export function computeDeliveryCost(distanceKm: number): number {
  if (distanceKm <= DELIVERY_BASE_RADIUS_KM) return DELIVERY_BASE_PRICE;
  const extra = Math.ceil(distanceKm - DELIVERY_BASE_RADIUS_KM);
  return DELIVERY_BASE_PRICE + extra * DELIVERY_EXTRA_PER_KM;
}

// ── Full pricing breakdown ─────────────────────────────────

export function computePricing(
  services: ServiceSelection,
  dateRange: DateRange,
  time: TimeSelection,
  location: Location | null
): PricingBreakdown {
  const days = computeRentalDays(dateRange.start, dateRange.end);
  const hoursPerDay = computeHoursPerDay(time.startTime, time.endTime);

  const totalUnits =
    services.efoils.awakeRavik +
    services.efoils.audiEtron +
    services.efoils.fliteboard;

  const efoilTotal = totalUnits * EFOIL_PRICE_PER_UNIT_PER_DAY * days;

  const instructorTotal = services.instructorEnabled
    ? INSTRUCTOR_RATE_PER_HOUR * hoursPerDay * days
    : 0;

  const distanceKm = location
    ? computeDistanceFromMale(location.lat, location.lng)
    : 0;
  const deliveryTotal = location ? computeDeliveryCost(distanceKm) : 0;

  const greenTaxTotal = GREEN_TAX_PER_PERSON_PER_DAY * totalUnits * days;

  const subtotal =
    efoilTotal + instructorTotal + deliveryTotal + greenTaxTotal;
  const serviceCharge =
    Math.round(subtotal * SERVICE_CHARGE_RATE * 100) / 100;

  return {
    efoilTotal,
    instructorTotal,
    deliveryTotal,
    greenTaxTotal,
    serviceCharge,
    grandTotal: subtotal + serviceCharge,
  };
}
