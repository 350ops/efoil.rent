"use client";

import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is an eFoil?",
      answer:
        "An eFoil — short for electric hydrofoil surfboard — is a cutting-edge watersport device. It merges traditional hydrofoil surfing with advanced electric propulsion, allowing riders to glide silently above the water. An eFoil consists of a board with a rechargeable battery, an electric motor, and a hydrofoil (mast with underwater wing). Speed is controlled via a wireless handheld remote, while altitude is managed by shifting body weight.",
    },
    {
      question: "How does eFoil delivery to yachts and resorts work?",
      answer:
        "We connect you with trusted partners who bring the Audi e-tron eFoil directly to your yacht, liveaboard, or resort. They handle all transport, setup, and equipment handover — you just show up and fly.",
    },
    {
      question: "Is eFoiling suitable for beginners?",
      answer:
        "Yes. All our partners provide professional instruction and safety briefings. The Audi e-tron eFoil is beginner-friendly, and most riders are up and flying within a short session. No prior experience is required.",
    },
    {
      question: "What is the minimum rental duration?",
      answer:
        "Our partners offer flexible packages starting from 2-hour sessions. You can also arrange to keep the eFoil for the duration of your stay (multiple days) for maximum freedom on the water.",
    },
    {
      question: "What happens if the weather is bad on my booking day?",
      answer:
        "Safety is paramount. Our partners monitor weather conditions and will work with you to reschedule if conditions are unsafe for riding. Weather-related cancellations are always fully refundable or rescheduled at no charge.",
    },
    {
      question: "Is a safety briefing included?",
      answer:
        "Yes. Every rental includes a safety briefing and equipment overview from the provider. Life vests, helmets, and all essential protective gear are standard — provided at no extra cost.",
    },
    {
      question: "How do I book an eFoil rental?",
      answer:
        "Simply contact us via WhatsApp or email with your dates and location. We will coordinate with our partners to find the best package for you and handle all booking arrangements. It's that simple.",
    },
    {
      question: "What eFoil equipment is used?",
      answer:
        "Our partners exclusively use the Audi e-tron eFoil, known for its safety features, performance, and silence. The Aeroloop inflatable board combines the rigidity of a hardboard with portable safety. We ensure you ride the best equipment available in the Maldives.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-highlight rounded-full">
            <span className="text-sm font-bold text-black uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Frequently asked questions
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Common questions about eFoil rentals in Maldives
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer dark:bg-zinc-950 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-zinc-400 dark:text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`flex-shrink-0 rounded-full flex items-center justify-center duration-500 transition-transform ${
                    openIndex === index ? "rotate-135" : ""
                  }`}
                >
                  <DynamicIcon name="plus" className="w-5 h-5 text-black dark:text-white" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pl-16 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
