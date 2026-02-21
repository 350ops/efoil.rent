"use client";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";
export function CTA() {
  const stats = [
    { value: "15%+", label: "Average fleet cost reduction" },
    { value: "B2B Only", label: "Contract-based, no consumer billing" },
    { value: "UK & Global", label: "Vendor network coverage" },
  ];

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Take control of your fleet costs.
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Let Manta Fleet handle the fuel, maintenance, and procurement — while you get clear invoices, real savings, and no operational headache.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <div className="flex flex-wrap gap-4 pt-4 mt-auto">
            <a href="mailto:hello@efoil.rent" className="px-8 py-3 cursor-pointer bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
              Get a Quote
            </a>
            <a href="#pricing" className="px-8 py-3 cursor-pointer bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl font-semibold hover:shadow-lg transition-shadow">
              View Plans
            </a>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-zinc-950 rounded-2xl px-10 py-6 flex flex-col items-center shadow-lg"
            >
              <span className="text-3xl font-bold text-zinc-900 dark:text-white">{stat.value}</span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

