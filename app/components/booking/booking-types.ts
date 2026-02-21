export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface TimeSelection {
  startTime: string; // "HH:MM" format
  endTime: string;   // "HH:MM" format
}

export interface Location {
  lat: number;
  lng: number;
}

export interface EfoilSelection {
  awakeRavik: number;
  audiEtron: number;
  fliteboard: number;
}

export interface ServiceSelection {
  efoils: EfoilSelection;
  instructorEnabled: boolean;
}

export interface PricingBreakdown {
  efoilTotal: number;
  instructorTotal: number;
  deliveryTotal: number;
  greenTaxTotal: number;
  serviceCharge: number;
  grandTotal: number;
}

export interface BookingState {
  dateRange: DateRange;
  time: TimeSelection;
  location: Location | null;
  services: ServiceSelection;
}

// ── Payment types ──────────────────────────────────────────

export type PaymentStatus =
  | "idle"
  | "creating"
  | "ready"
  | "processing"
  | "succeeded"
  | "error";

export interface PaymentState {
  status: PaymentStatus;
  clientSecret: string | null;
  error: string | null;
}

/** Payload sent to POST /api/create-payment-intent */
export interface CreatePaymentIntentRequest {
  amount: number; // in cents (USD)
  metadata: {
    dateStart: string;
    dateEnd: string;
    startTime: string;
    endTime: string;
    locationLat: number;
    locationLng: number;
    efoilAwakeRavik: number;
    efoilAudiEtron: number;
    efoilFliteboard: number;
    instructorEnabled: boolean;
  };
}

/** Response from POST /api/create-payment-intent */
export interface CreatePaymentIntentResponse {
  clientSecret: string;
}
