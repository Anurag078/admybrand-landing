"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$0/mo",
    features: ["Basic tools to get started."],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["All features", "Analytics dashboard"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Tailored solutions for teams & agencies"],
    highlight: false,
  },
];

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ⌨️ Keyboard navigation logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => {
          if (prev === null || prev === plans.length - 1) return 0;
          return prev + 1;
        });
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => {
          if (prev === null || prev === 0) return plans.length - 1;
          return prev - 1;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-10 text-blue-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Simple, Transparent Pricing
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, i) => {
          const isActive = activeIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: plan.highlight ? 1.05 : 1,
              }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl shadow-lg transition-all cursor-pointer ${
                plan.highlight
                  ? "bg-blue-600 text-white border-4 border-blue-400"
                  : "bg-white text-gray-800"
              } ${isActive ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setActiveIndex(isActive ? null : i)}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, j) => (
                  <li key={j}>✓ {feature}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Use ← and → arrow keys to explore pricing plans
      </p>
    </section>
  );
}
