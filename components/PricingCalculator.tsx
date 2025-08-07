"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator } from "react-icons/fa";

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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white/30 border border-white/40 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 md:p-12 text-left"
      >
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="text-blue-700 text-5xl flex justify-center mb-6"
        >
          <FaCalculator />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-900 text-center drop-shadow-md">
          💸 Interactive Pricing Calculator
        </h2>

        <div className="space-y-8 text-gray-800">
          {/* User Slider */}
          <div>
            <label className="block font-medium mb-2 text-lg">
              Number of users:{" "}
              <span className="text-blue-700 font-semibold">{users}</span>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              value={users}
              onChange={(e) => setUsers(parseInt(e.target.value))}
              className="w-full h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full appearance-none cursor-pointer transition-all"
            />
          </div>

          {/* AI Credits Slider */}
          <div>
            <label className="block font-medium mb-2 text-lg">
              AI Credits:{" "}
              <span className="text-purple-700 font-semibold">{aiCredits}</span>
            </label>
            <input
              type="range"
              min={0}
              max={1000}
              step={10}
              value={aiCredits}
              onChange={(e) => setAiCredits(parseInt(e.target.value))}
              className="w-full h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full appearance-none cursor-pointer transition-all"
            />
          </div>

          {/* Yearly Billing Checkbox */}
          <div className="flex items-center space-x-3 mt-2">
            <input
              type="checkbox"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
              id="yearly"
              className="h-5 w-5 accent-green-500"
            />
            <label htmlFor="yearly" className="text-md">
              <span className="font-semibold">Bill yearly</span> and save{" "}
              <span className="text-green-600 font-semibold">15%</span>
            </label>
          </div>

          {/* Final Price Display */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 mt-6 border border-white/30 shadow-inner hover:shadow-lg transition-all duration-300">
            <p className="text-lg font-medium text-gray-700 text-center">
              Estimated {yearly ? "Yearly" : "Monthly"} Cost:
            </p>
            <p className="text-5xl font-extrabold text-blue-700 text-center mt-2">
              ${finalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
