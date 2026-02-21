"use client";

import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is my data safe with this app?",
      answer:
        "Yes! We use industry-leading encryption standards to ensure your data is completely secure. Your information is encrypted both in transit and at rest, and we never share your data with third parties.",
    },
    {
      question: "Which platforms are supported?",
      answer:
        "We support a wide range of platforms, including iOS, Android, Web, and Desktop applications. You can seamlessly sync your data across all your devices for a unified experience.",
    },
    {
      question: "How can I restore my account?",
      answer:
        "You can restore your account using your recovery phrase or backup key. Simply go to the login page, select 'Restore Account', and follow the step-by-step instructions. Make sure to keep your recovery phrase in a safe place.",
    },
    {
      question: "How long do transactions take?",
      answer:
        "Transaction times vary depending on network conditions, but typically complete within 5-10 minutes. You can track the status of your transactions in real-time through our app.",
    },
    {
      question: "Are there any fees for using the app?",
      answer:
        "The app is free to download and use. However, standard network fees may apply for certain transactions. We always display all fees transparently before you confirm any action.",
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

