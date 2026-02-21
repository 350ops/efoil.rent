"use client";
import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";
import { BookingPanel } from "../components/booking/booking-panel";

export function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row flex-col gap-4">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: cubicBezier(0.4, 0, 0.2, 1) }}
            className="bg-white dark:bg-neutral-950 p-6 md:p-12 rounded-4xl w-full md:w-1/2 flex flex-col">

            <div className="inline-block px-3 py-1 bg-highlight rounded-full mb-4 self-start">
              <span className="text-xs uppercase font-bold text-black tracking-wider">AWAKE RÄVIK · AUDI e-TRON · FLITEBOARD</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white">
              eFoil Rental Maldives
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg my-6">
              Premium Audi e-tron eFoil delivered directly to your yacht, resort, or private island.
              Professional instruction included — no experience needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsBookingOpen((prev) => !prev)}
                className="group px-6 py-3 text-sm bg-highlight text-black rounded-xl cursor-pointer font-semibold transition-all flex items-center justify-center gap-2"
              >
                {isBookingOpen ? "Close Booking" : "Start Booking"}
                <DynamicIcon
                  name={isBookingOpen ? "x" : "calendar"}
                  className="w-5 h-5"
                />
              </button>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-6 py-3 text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-xl cursor-pointer font-semibold transition-all flex items-center justify-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                View Packages
              </a>
            </div>

            {/* Booking Panel (inline) */}
            <BookingPanel isOpen={isBookingOpen} />

            {/* Contact Badges */}
            <div className="flex md:flex-row flex-col flex-wrap gap-4 pt-4 mt-auto">
              <a
                href="https://www.instagram.com/efoil.rent/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 cursor-pointer bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                <DynamicIcon name="instagram" className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Follow us on</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">@efoil.rent</div>
                </div>
              </a>
              <a
                href="mailto:hello@efoil.rent"
                className="px-6 py-2 bg-white cursor-pointer dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                <DynamicIcon name="mail" className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Email us at</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">hello@efoil.rent</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - eFoil Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0 }}
            className="w-full md:w-1/2 bg-highlight rounded-4xl flex-shrink overflow-hidden relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/img/efoil-hero.jpeg"
              alt="eFoil rider flying above the crystal-clear waters of Maldives"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="w-full flex flex-row items-center justify-center mt-10">
          <DynamicIcon name="chevron-down" className="size-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
