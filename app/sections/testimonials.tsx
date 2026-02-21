"use client";
import { DynamicIcon } from "lucide-react/dynamic";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      name: "James Hartwell",
      role: "Yacht Charter Captain",
      company: "M/Y Serenity",
      initials: "JH",
      content:
        "The team coordinated perfectly with our position in the North Malé Atoll. The instructor arrived on tender, set up everything, and our guests were flying within 20 minutes. Outstanding service.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      role: "Resort Activities Director",
      company: "Private Island Resort",
      initials: "PM",
      content:
        "We added eFoil sessions to our activity menu without any capital investment. Guests consistently rate it as the highlight of their stay. The partnership model is exactly what we needed.",
      rating: 5,
    },
    {
      name: "Thomas Bouchard",
      role: "First-time Rider",
      company: "Maldives Vacation",
      initials: "TB",
      content:
        "I had zero experience and was honestly nervous. The instructor was incredible — I was gliding above the water within my first session. One of the most unforgettable experiences of my life.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: cubicBezier(0.4, 0, 0.2, 1) }}
          className="text-center mb-16 space-y-3">
          <div className="inline-block px-4 py-1.5 bg-highlight rounded-full">
            <span className="text-xs uppercase font-bold text-black">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Loved by guests worldwide
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From superyacht captains to first-time riders — hear what our guests have to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: cubicBezier(0.4, 0, 0.2, 1)
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white flex flex-col dark:bg-black rounded-3xl p-8 space-y-6 hover:shadow-xl dark:hover:shadow-lime-400/5 transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <DynamicIcon key={i} name="star" className="w-5 h-5 text-transparent fill-black dark:fill-white" />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-500">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
