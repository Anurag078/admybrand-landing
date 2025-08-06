"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator } from "react-icons/fa"; // ✅ Import icon

export default function PricingCalculator() {
  const [users, setUsers] = useState(5);
  const [aiCredits, setAiCredits] = useState(100);
  const [yearly, setYearly] = useState(false);

  const basePrice = 19;
  const aiCreditRate = 0.1;
  const total = users * basePrice + aiCredits * aiCreditRate;
  const finalPrice = yearly ? total * 0.85 : total;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-50 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl rounded-3xl p-6 sm:p-10 text-left"
      >
        {/* Icon with animation */}
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="text-blue-700 text-5xl flex justify-center mb-4"
        >
          <FaCalculator />
        </motion.div>

        <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">
          Interactive Pricing Calculator
        </h2>

        <div className="space-y-6 text-gray-800">
          <div>
            <label className="block font-medium mb-1">
              Number of users: <span className="text-blue-700 font-semibold">{users}</span>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              value={users}
              onChange={(e) => setUsers(parseInt(e.target.value))}
              className="w-full h-2 accent-blue-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              AI Credits: <span className="text-purple-700 font-semibold">{aiCredits}</span>
            </label>
            <input
              type="range"
              min={0}
              max={1000}
              step={10}
              value={aiCredits}
              onChange={(e) => setAiCredits(parseInt(e.target.value))}
              className="w-full h-2 accent-purple-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
              id="yearly"
              className="h-4 w-4"
            />
            <label htmlFor="yearly" className="text-sm">
              <span className="font-medium">Bill yearly</span> and save <span className="text-green-600 font-semibold">15%</span>
            </label>
          </div>

          <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 mt-6 border border-white/30 shadow-inner">
            <p className="text-lg font-medium text-gray-700 text-center">
              Estimated Monthly Cost:
            </p>
            <p className="text-4xl font-extrabold text-blue-700 text-center">
              ${finalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
