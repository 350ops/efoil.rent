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

export interface BookingState {
  dateRange: DateRange;
  time: TimeSelection;
  location: Location | null;
}
