"use client";

import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";
export function Mission() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 md:min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: cubicBezier(0.4, 0, 0.2, 1) }}
            className="relative h-[500px] flex items-center justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Background */}
              <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: 18 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.7, ease: cubicBezier(0.4, 0, 0.2, 1) }}
              className="absolute inset-0 bg-highlight rounded-[4rem] transform scale-95"></motion.div>

              {/* Phone Mockup */}
              <div className="relative z-10 w-72  bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[50px] border-8 border-zinc-700 shadow-2xl">
                <Image src="/img/app-screen.png" className="w-full rounded-[40px]" alt="Phone" width={320} height={800} />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
          
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0, ease: cubicBezier(0.4, 0, 0.2, 1) }}
          className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-highlight rounded-full mb-4">
              <span className="text-xs uppercase font-bold text-black">How It Works</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
              We handle the operations. You focus on your guests.
            </h2>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              Manta Fleet acts as your dedicated fleet operations partner. We manage the spend, the vendors, and the logistics — from fuel top-ups at the marina to emergency parts procurement — while you stay in control through clear invoicing and regular reporting.
            </p>

            <div className="space-y-4">
              {[
                "Contract-based B2B model — invoice-driven, no hidden charges",
                "Spend controls by vessel, category, and cost centre",
                "Fast vendor network across UK marinas and international ports",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <DynamicIcon name="check-circle" className="size-5" />
                  <p className="text-zinc-700 dark:text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

