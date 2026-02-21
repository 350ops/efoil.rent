"use client";

import { useState, useMemo } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import type { DateRange } from "./booking-types";

interface CalendarProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDateInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  const d = date.getTime();
  return d > start.getTime() && d < end.getTime();
}

function isPast(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

function getCalendarDays(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  // Monday = 0, Sunday = 6
  const startWeekday = (firstDay.getDay() + 6) % 7;

  const cells: (number | null)[] = [];

  for (let i = 0; i < startWeekday; i++) {
    cells.push(null);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(d);
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

export function Calendar({ dateRange, onDateRangeChange }: CalendarProps) {
  const today = new Date();
  const [displayMonth, setDisplayMonth] = useState(today.getMonth());
  const [displayYear, setDisplayYear] = useState(today.getFullYear());

  const cells = useMemo(
    () => getCalendarDays(displayYear, displayMonth),
    [displayYear, displayMonth]
  );

  const isCurrentMonth =
    displayMonth === today.getMonth() && displayYear === today.getFullYear();

  function goToPrevMonth() {
    if (isCurrentMonth) return;
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  }

  function goToNextMonth() {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  }

  function handleDayClick(day: number) {
    const clickedDate = new Date(displayYear, displayMonth, day);
    clickedDate.setHours(0, 0, 0, 0);

    if (isPast(clickedDate)) return;

    if (!dateRange.start || (dateRange.start && dateRange.end)) {
      // Start new selection
      onDateRangeChange({ start: clickedDate, end: null });
    } else {
      // Complete the range
      if (clickedDate < dateRange.start) {
        onDateRangeChange({ start: clickedDate, end: dateRange.start });
      } else if (isSameDay(clickedDate, dateRange.start)) {
        // Clicked same day — treat as single-day selection
        onDateRangeChange({ start: clickedDate, end: clickedDate });
      } else {
        onDateRangeChange({ start: dateRange.start, end: clickedDate });
      }
    }
  }

  function getCellClassName(day: number): string {
    const date = new Date(displayYear, displayMonth, day);
    date.setHours(0, 0, 0, 0);

    const base =
      "w-10 h-10 flex items-center justify-center text-sm rounded-lg transition-colors";

    if (isPast(date)) {
      return `${base} text-neutral-400 dark:text-neutral-600 cursor-not-allowed opacity-40`;
    }

    const isStart = dateRange.start && isSameDay(date, dateRange.start);
    const isEnd = dateRange.end && isSameDay(date, dateRange.end);
    const inRange = isDateInRange(date, dateRange.start, dateRange.end);
    const isToday = isSameDay(date, today);

    if (isStart && isEnd) {
      return `${base} bg-highlight text-black font-bold rounded-full cursor-pointer`;
    }
    if (isStart) {
      return `${base} bg-highlight text-black font-bold rounded-l-full cursor-pointer`;
    }
    if (isEnd) {
      return `${base} bg-highlight text-black font-bold rounded-r-full cursor-pointer`;
    }
    if (inRange) {
      return `${base} bg-highlight/20 text-neutral-900 dark:text-white cursor-pointer`;
    }
    if (isToday) {
      return `${base} ring-1 ring-highlight text-neutral-900 dark:text-white cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800`;
    }

    return `${base} text-neutral-900 dark:text-white cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800`;
  }

  return (
    <div>
      {/* Month navigation header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPrevMonth}
          disabled={isCurrentMonth}
          className={`p-1.5 rounded-lg transition-colors ${
            isCurrentMonth
              ? "text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
              : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer"
          }`}
        >
          <DynamicIcon name="chevron-left" className="w-5 h-5" />
        </button>
        <span className="text-sm font-semibold text-neutral-900 dark:text-white">
          {MONTH_NAMES[displayMonth]} {displayYear}
        </span>
        <button
          onClick={goToNextMonth}
          className="p-1.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer transition-colors"
        >
          <DynamicIcon name="chevron-right" className="w-5 h-5" />
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAY_LABELS.map((label) => (
          <div
            key={label}
            className="w-10 h-8 flex items-center justify-center text-xs font-medium text-neutral-500 dark:text-neutral-500"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, index) =>
          day === null ? (
            <div key={`empty-${index}`} className="w-10 h-10" />
          ) : (
            <button
              key={`day-${day}`}
              onClick={() => handleDayClick(day)}
              disabled={isPast(new Date(displayYear, displayMonth, day))}
              className={getCellClassName(day)}
            >
              {day}
            </button>
          )
        )}
      </div>
    </div>
  );
}
