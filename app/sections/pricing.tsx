"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { cubicBezier } from "motion/react";
import * as motion from "motion/react-client";

export function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out our platform",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "24/7 support",
        "1GB storage",
        "Community access",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      description: "Best for professional users",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "API access",
        "Custom integrations",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Unlimited storage",
        "Custom contracts",
        "SLA guarantee",
        "Advanced security",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: cubicBezier(0.4, 0, 0.2, 1) }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-1.5 bg-highlight rounded-full">
            <span className="text-xs uppercase font-bold text-black">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to scale up or down.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: cubicBezier(0.4, 0, 0.2, 1),
          }}
          className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-white dark:bg-zinc-950 rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-highlight shadow-2xl shadow-highlight/20 scale-105"
                  : "border border-transparent"
              }`}
            >
              {/* Badge for highlighted plan */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-highlight text-black text-xs font-bold rounded-full uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {plan.name}
              </h3>

              {/* Plan Description */}
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-zinc-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <DynamicIcon
                      name="check-circle"
                      className={`size-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "text-highlight"
                          : "text-zinc-400 dark:text-zinc-600"
                      }`}
                    />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full cursor-pointer py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-highlight text-black hover:bg-highlight/90"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 text-sm text-zinc-600 dark:text-zinc-400"
        >
          All plans include a 14-day free trial. No credit card required.{" "}
          <a href="#" className="text-zinc-900 dark:text-white font-semibold hover:underline">
            Compare plans →
          </a>
        </motion.p>
      </div>
    </section>
  );
}

