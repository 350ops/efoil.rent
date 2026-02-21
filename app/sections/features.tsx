"use client";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";
import { cubicBezier } from "motion/react";
import * as motion from "motion/react-client"

export function Features() {
  const features = [
    {
      icon: "anchor",
      title: "Fleet Operations",
      description: "End-to-end management of your marine equipment and vessels — scheduling, deployment, and upkeep handled for you",
      accentColor: "lime",
    },
    {
      icon: "fuel",
      title: "Fuel & Maintenance",
      description: "Controlled spend on bunkering, routine servicing, and emergency repairs with real-time cost tracking",
      accentColor: "lime",
      isHighlight: true,
    },
    {
      icon: "package",
      title: "Procurement",
      description: "We source and purchase parts, supplies, and marine equipment on your behalf with transparent pricing",
      accentColor: "lime",
    },
    {
      icon: "bar-chart-2",
      title: "Reporting & Reconciliation",
      description: "Clear invoicing, spend summaries, and reconciliation reports — matched to vessels, jobs, and cost centres",
      accentColor: "lime",
    },
  ];

  return (
    <section id="features" className="py-[27px] -mt-[234px] -mb-[234px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: cubicBezier(0.4, 0, 0.2, 1) }}
          className="mb-16 rounded-3xl overflow-hidden relative"
        >
          <Image
            src="/solar-panels-deck.png"
            alt="Solar panels on yacht teak deck"
            width={1200}
            height={480}
            className="w-full h-64 md:h-80 object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col items-center justify-end pb-8 text-center px-6">
            <div className="inline-block px-4 py-1.5 bg-highlight rounded-full mb-3">
              <span className="text-xs uppercase font-bold text-black">Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Every aspect of your operation in one dashboard
            </h2>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay:0.4,
          ease: cubicBezier(0.4, 0, 0.2, 1) 
        }}
        className="flex flex-row justify-center gap-8 flex-wrap">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col items-center justify-center w-36 h-36 rounded-full relative transition-all duration-300 cursor-default ${feature.isHighlight ? "bg-black" : "bg-white dark:bg-zinc-950"}`}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center mb-2 ${feature.isHighlight ? "bg-black/10" : "bg-neutral-100 dark:bg-zinc-900"}`}>
                <DynamicIcon name={feature.icon as any} className={`w-5 h-5 ${feature.isHighlight ? "text-highlight" : ""}`} />
              </div>
              <span className={`text-xs font-bold text-center leading-tight px-3 ${feature.isHighlight ? "text-white" : "text-zinc-800 dark:text-white"}`}>
                {feature.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

