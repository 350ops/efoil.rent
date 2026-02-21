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
          {/* Left Column - eFoil Board Image */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: cubicBezier(0.4, 0, 0.2, 1) }}
            className="relative h-[500px] flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full h-full">
              {/* Decorative Background */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: 18 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.7, ease: cubicBezier(0.4, 0, 0.2, 1) }}
                className="absolute inset-0 bg-highlight rounded-[4rem] transform scale-95">
              </motion.div>

              {/* eFoil Board Image */}
              <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/img/efoil-board.jpg"
                  alt="Audi e-tron eFoil board — premium electric hydrofoil"
                  fill
                  className="object-cover"
                />
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
            <div className="inline-block px-4 py-1.5 bg-highlight rounded-full">
              <span className="text-xs uppercase font-bold text-black">What is an eFoil?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight my-4">
              Your concierge for flying on water
            </h2>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              An eFoil — short for <strong>electric hydrofoil surfboard</strong> — lets you glide silently
              above the water's surface. The Audi e-tron eFoil combines a rechargeable battery,
              an electric motor, and a hydrofoil mast to lift you off the Indian Ocean.
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              Speed is controlled by a wireless handheld remote. Altitude is managed by shifting
              your body weight — most beginners are up and flying within a single session.
            </p>

            <div className="space-y-4">
              {[
                "50 km/h top speed with up to 120 minutes of ride time",
                "Fully enclosed silent jet propulsion — zero emissions",
                "Delivered to your yacht, resort, or private island in Maldives",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <DynamicIcon name="check-circle" className="size-5 flex-shrink-0" />
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
