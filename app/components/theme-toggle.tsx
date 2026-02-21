"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DynamicIcon } from 'lucide-react/dynamic';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative h-10 w-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative size-8 rounded-lg cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
         <DynamicIcon name="moon" className="h-5 w-5 text-white" />
      ) : (
        <DynamicIcon name="sun" className="h-5 w-5 text-black" />
      )}
    </button>
  );
}

