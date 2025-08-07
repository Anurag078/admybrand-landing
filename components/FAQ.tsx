"use client";

import { useState } from "react";

const faqData = [
   {
    question: "What is ADmyBRAND?",
    answer:
      "ADmyBRAND is a marketing automation platform powered by AI that helps you manage, optimize, and scale your campaigns.",
  },
  {
    question: "What services does ADmyBRAND provide?",
    answer: "We offer AI-powered marketing services including brand promotions, data analytics, and media campaigns across multiple platforms.",
  },
   {
    question: "Who can use ADmyBRAND?",
    answer:
      "ADmyBRAND is designed for marketers, agencies, and businesses of all sizes looking to streamline and enhance their marketing strategies using AI.",
  },
  {
    question: "How can I start a campaign?",
    answer: "Simply sign up, choose your plan, and our dashboard will guide you through the campaign creation process step by step.",
  },
  {
    question: "Is support available 24/7?",
    answer: "Our support is available during business hours for all plans, and 24/7 for Professional and Enterprise users.",
  },
    {
    question: "Is there a free trial?",
    answer:
      "Yes! You can try all Pro features free for 14 days — no credit card required.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan anytime directly from your dashboard.",
  },
    {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! You can cancel your subscription at any time from your dashboard — no questions asked.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-28 py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">Frequently Asked Questions</h2>
        <p className="mb-10 text-lg text-gray-600">
          Everything you need to know about our product and services.
        </p>

        <div className="space-y-6 text-left">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow transition duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center font-semibold text-blue-700"
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
