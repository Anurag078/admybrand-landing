"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is ADmyBRAND?",
    answer:
      "ADmyBRAND is a marketing automation platform powered by AI that helps you manage, optimize, and scale your campaigns.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! You can try all Pro features free for 14 days — no credit card required.",
  },
  {
    question: "Who can use ADmyBRAND?",
    answer:
      "ADmyBRAND is designed for marketers, agencies, and businesses of all sizes looking to streamline and enhance their marketing strategies using AI.",
  },
  {
    question: "What features does ADmyBRAND offer?",
    answer:
      "AI-driven campaign management, performance analytics, automated content creation, and multi-channel integration.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! You can cancel your subscription at any time from your dashboard — no questions asked.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center">
      {/* ✅ Changed background gradient to match Contact section */}
      <motion.h2
        className="text-3xl font-bold mb-10 text-blue-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4 text-left">
        {/* ✅ Mapping full faqs array — not limited to 2 */}
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 border cursor-pointer transition shadow-md ${
                isOpen
                  ? "bg-blue-100 border-blue-600"
                  : "bg-white border-gray-200 hover:bg-blue-50"
              }`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue-800">
                  {faq.question}
                </h3>
                <span className="text-xl text-blue-600">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-blue-700"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
