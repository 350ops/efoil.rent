"use client";
import { DynamicIcon } from "lucide-react/dynamic";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";

export function Hero() {
  const expenses = [
    { label: "Fuel & Bunkering", amount: "£12,400", change: "-8%", down: true },
    { label: "Maintenance & Repairs", amount: "£6,200", change: "-14%", down: true },
    { label: "Procurement", amount: "£9,850", change: "-11%", down: true },
    { label: "Marina & Port Fees", amount: "£3,100", change: "-5%", down: true },
  ];

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

            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white">
              Fleet Management for Yachts, Resorts & Marinas
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg my-6">
              Manta Fleet handles your entire marine fleet operation — fuel, maintenance, and procurement — with full spend visibility and control. So you can focus on your guests, not your costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:hello@efoil.rent" className="group px-6 py-3 text-sm bg-highlight text-black rounded-xl cursor-pointer font-semibold transition-all flex items-center justify-center gap-2">
                Get a Quote
                <DynamicIcon name="arrow-right" className="w-5 h-5" />
              </a>
              <button className="group px-6 py-3 text-sm border border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200 rounded-xl cursor-pointer font-semibold transition-all flex items-center justify-center gap-2 hover:border-neutral-500"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                How It Works
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex md:flex-row flex-col flex-wrap gap-4 pt-4 mt-auto">
              <div className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center gap-2">
                <DynamicIcon name="trending-down" className="w-4 h-4 text-lime-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Reduce Fleet Costs</span>
              </div>
              <div className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center gap-2">
                <DynamicIcon name="shield-check" className="w-4 h-4 text-lime-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Spend Control</span>
              </div>
              <div className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center gap-2">
                <DynamicIcon name="file-text" className="w-4 h-4 text-lime-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Clear Invoicing & SLAs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Fleet Expense Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0 }}
            className="w-full md:w-1/2 bg-highlight rounded-4xl flex-shrink overflow-hidden relative p-6 md:p-10 flex flex-col justify-center gap-4">

            <div className="bg-white/30 rounded-2xl px-5 py-3 flex items-center justify-between">
              <span className="text-sm font-bold text-black">Fleet Cost Overview — Q1 2025</span>
              <span className="text-xs font-semibold bg-black/10 text-black rounded-full px-3 py-1">Live</span>
            </div>

            {expenses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: cubicBezier(0.4, 0, 0.2, 1) }}
                className="bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <DynamicIcon name={i === 0 ? "fuel" : i === 1 ? "wrench" : i === 2 ? "package" : "anchor"} className="w-4 h-4 text-zinc-700" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-800">{item.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-zinc-900">{item.amount}</div>
                  <div className="text-xs font-semibold text-emerald-600">{item.change} vs last quarter</div>
                </div>
              </motion.div>
            ))}

            <div className="bg-black rounded-2xl px-5 py-4 flex items-center justify-between mt-1">
              <span className="text-sm font-bold text-white">Total savings this quarter</span>
              <span className="text-lg font-black text-highlight">£4,820</span>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-row items-center justify-center mt-10">
          <DynamicIcon name="chevron-down" className="size-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}


const ProductHuntBadge = () => {
  return (
    <div className="px-3 py-2 flex font-bold flex-row items-center gap-2 absolute top-4 right-4 z-20 rounded-xl bg-[#FF5E57] text-white font-bold">
      <div className="size-8 bg-white rounded-full flex items-center justify-center">
        <span className="text-[#FF5E57] text-2xl font-black">P</span>
      </div>
      <div>
        <p className="text-[8px] font-black uppercase -mb-1">Featured on</p>
        <p className="text-lg font-bold">Product Hunt</p>
      </div>
      <div className="ml-2 flex flex-col items-center justify-center">
        <DynamicIcon name="chevron-up" className="size-4 -mb-1" fill="white" />
        <span className="text-[11px] font-black">43</span>
      </div>
    </div>
  );
};
