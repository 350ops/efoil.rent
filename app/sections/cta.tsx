"use client";
import Image from "next/image";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";
export function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Ready to get started?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Join thousands of users who are already experiencing the future of digital solutions.
          Download now and start your journey.
        </p>


        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <div className="flex flex-wrap gap-4 pt-4 mt-auto">
            <button className="px-6 py-2 cursor-pointer bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:shadow-lg transition-shadow flex items-center gap-2">
              <Image src="/img/apple.svg" className="w-5 h-5 dark:invert" alt="App Store" width={20} height={20} />
              <div className="text-left">
                <div className="text-xs ">Download on the</div>
                <div className="text-sm font-semibold ">App Store</div>
              </div>
            </button>
            <button className="px-6 py-2 bg-white cursor-pointer dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg transition-shadow flex items-center gap-2">
              <Image src="/img/google.svg" className="w-5 h-5 dark:invert" alt="Google Play" width={20} height={20} />
              <div className="text-left">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Get it on</div>
                <div className="text-sm font-semibold ">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0.4 }}
            className="relative">
            <Image className="w-60 rounded-2xl shadow-2xl scale-90" src="/img/app-screen.png" alt="CTA Image" width={500} height={500} />
          </motion.div>
          <Image className="w-60 rounded-2xl shadow-2xl -mx-10 relative z-20" src="/img/app-hero.png" alt="CTA Image" width={500} height={500} />
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0.4 }}
            className="relative">
            <Image className="w-60 rounded-2xl shadow-2xl scale-90" src="/img/app-screen-2.png" alt="CTA Image" width={500} height={500} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

