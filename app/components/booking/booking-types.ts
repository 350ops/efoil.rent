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
