"use client";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";

export function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Ready to Fly?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Book your eFoil experience today and create unforgettable memories above the crystal-clear waters of Maldives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <a
            href="https://wa.me/9606783344?text=Hi%21+I%27d+like+to+book+an+eFoil+experience."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 cursor-pointer bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2"
          >
            <DynamicIcon name="message-circle" className="w-5 h-5" />
            Book via WhatsApp
          </a>
          <a
            href="mailto:hello@efoil.rent"
            className="px-8 py-3 cursor-pointer border border-zinc-400 dark:border-zinc-600 rounded-xl font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <DynamicIcon name="mail" className="w-5 h-5" />
            Email Us
          </a>
        </div>

        <div className="flex flex-row items-center justify-center mt-10 gap-2">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0.4 }}
            className="relative w-60 h-40 rounded-2xl overflow-hidden shadow-2xl scale-90">
            <Image className="object-cover" src="/img/efoil-action.jpg" alt="eFoil action shot" fill />
          </motion.div>
          <div className="relative w-60 h-44 rounded-2xl overflow-hidden shadow-2xl -mx-4 z-20">
            <Image className="object-cover" src="/img/efoil-drone.png" alt="eFoil drone view" fill />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0.4 }}
            className="relative w-60 h-40 rounded-2xl overflow-hidden shadow-2xl scale-90">
            <Image className="object-cover" src="/img/maldives-sunset.png" alt="Maldives sunset" fill />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
