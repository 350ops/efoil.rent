"use client";

import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does Manta Fleet manage?",
      answer:
        "We manage the day-to-day operational spend for your marine fleet — including fuel and bunkering, routine and emergency maintenance, parts and equipment procurement, and marina or port service fees. We act as your operational partner, handling vendor relationships and spend on your behalf, then invoice you against agreed terms.",
    },
    {
      question: "Which types of clients do you work with?",
      answer:
        "Our core clients are yacht management companies, resort operators with marine assets, marina operators, and charter businesses. We work on a B2B contract basis — if you operate one or more vessels and want tighter cost control, we can help.",
    },
    {
      question: "How does invoicing and billing work?",
      answer:
        "We operate on an invoice-and-contract model. You agree a scope and service level with us, we handle the spend and procurement on your behalf, and you receive a clean monthly invoice with a full breakdown by vessel, category, and job reference. No surprise charges.",
    },
    {
      question: "Can you manage procurement across multiple vessels or locations?",
      answer:
        "Yes. Our Operations and Enterprise plans are built for multi-vessel and multi-location fleets. We track spend per asset, apply category-level controls, and reconcile everything in a single report. We also have vendor relationships across UK marinas and international ports.",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "Typically we can onboard a new client within 1–2 weeks. This includes agreeing the contract terms, mapping your vessels and cost centres, and introducing your account manager. Contact us at hello@efoil.rent to begin the conversation.",
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
            We have quick answers to the most popular questions below
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
                  <DynamicIcon name="plus" className="w-5 h-5 text-black" />
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

