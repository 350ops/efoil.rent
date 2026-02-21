"use client";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";

export function Hero() {
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
              This is your Amazing App
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-6 py-3 text-sm bg-highlight text-black rounded-xl cursor-pointer font-semibold transition-all flex items-center justify-center gap-2">
                Get Started
                <DynamicIcon name="arrow-right" className="w-5 h-5" />
              </button>
            </div>

            {/* App Store Badges */}
            <div className="flex md:flex-row flex-col flex-wrap gap-4 pt-4 mt-auto">
              <button className="px-6 py-2 cursor-pointer bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                <Image src="/img/apple.svg" className="w-5 h-5 dark:invert" alt="App Store" width={20} height={20} />
                <div className="text-left">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Download on the</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">App Store</div>
                </div>
              </button>
              <button className="px-6 py-2 bg-white cursor-pointer dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                <Image src="/img/google.svg" className="w-5 h-5 dark:invert" alt="Google Play" width={20} height={20} />
                <div className="text-left">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Get it on</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div 
          
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0 }}
          className="w-full md:w-1/2 bg-highlight rounded-4xl flex-shrink overflow-hidden relative">
            <div className="relative lg:h-[600px] flex items-start justify-center translate-y-1/5">
              <div className="relative">
                {/* Decorative Circle */}


                {/* Phone Mockup */}
                <motion.div 
                initial={{ opacity: 1, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }}
                className="relative z-10 w-96 h-[800px] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-[70px] border-10 border-neutral-800 dark:border-neutral-700">
                  <Image src="/img/app-hero.png" className="w-full rounded-[60px]" alt="Phone" width={320} height={800} />
                </motion.div>
              </div>
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
