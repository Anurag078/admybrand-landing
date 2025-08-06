"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CTA() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent SSR mismatch

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Marketing?</h2>
      <p className="text-lg mb-6">
        Start your free trial today and unlock the power of AI-driven insights.
      </p>
      <button
        className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Get Started Free
      </button>
    </motion.section>
  );
}
