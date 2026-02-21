"use client";
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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay:0.2, ease: cubicBezier(0.4, 0, 0.2, 1) }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-1.5 bg-highlight rounded-full">
            <span className="text-xs uppercase font-bold text-black">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Full fleet management,<br />
            zero operational headache
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We take care of every line item — fuel, maintenance, and procurement — so your operation runs smoothly and your costs stay under control.
          </p>
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
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col min-h-80 relative bg-white dark:bg-zinc-950 rounded-3xl p-8 hover:border-lime-400 dark:hover:border-lime-400 transition-all duration-300 ${feature.isHighlight ? "!bg-highlight" : ""}`}
            >
              {/* Icon */}
              <div className={`mb-6 w-14 h-14 bg-neutral-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform ${feature.isHighlight ? "!bg-black/10" : ""}`}>
                <DynamicIcon name={feature.icon as any} className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold text-zinc-900 dark:text-white mb-1 mt-auto ${feature.isHighlight ? "!text-black" : ""}`}>
                {feature.title}
              </h3>
              <p className={`text-zinc-600 text-sm dark:text-zinc-400 ${feature.isHighlight ? "!text-black" : ""}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

