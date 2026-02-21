"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import type { TimeSelection } from "./booking-types";

interface TimeSelectorProps {
  time: TimeSelection;
  onTimeChange: (time: TimeSelection) => void;
}

function generateTimeOptions(): string[] {
  const options: string[] = [];
  for (let h = 6; h <= 20; h++) {
    for (const m of [0, 30]) {
      if (h === 20 && m === 30) break;
      options.push(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
      );
    }
  }
  return options;
}

const TIME_OPTIONS = generateTimeOptions();

export function TimeSelector({ time, onTimeChange }: TimeSelectorProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Start Time */}
      <div className="flex-1 space-y-1.5">
        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          Start Time
        </label>
        <div className="relative">
          <DynamicIcon
            name="clock"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500 pointer-events-none"
          />
          <select
            value={time.startTime}
            onChange={(e) =>
              onTimeChange({ ...time, startTime: e.target.value })
            }
            className="appearance-none w-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl pl-10 pr-10 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-highlight cursor-pointer"
          >
            {TIME_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <DynamicIcon
            name="chevron-down"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500 pointer-events-none"
          />
        </div>
      </div>

      {/* End Time */}
      <div className="flex-1 space-y-1.5">
        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          End Time
        </label>
        <div className="relative">
          <DynamicIcon
            name="clock"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500 pointer-events-none"
          />
          <select
            value={time.endTime}
            onChange={(e) =>
              onTimeChange({ ...time, endTime: e.target.value })
            }
            className="appearance-none w-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl pl-10 pr-10 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-highlight cursor-pointer"
          >
            {TIME_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <DynamicIcon
            name="chevron-down"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
