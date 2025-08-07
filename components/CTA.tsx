"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CTA() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500 text-white text-center rounded-xl shadow-xl mx-4 md:mx-16 my-12"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
        🚀 Supercharge Your Marketing Today!
      </h2>
      <p className="text-lg md:text-xl mb-8 font-medium opacity-90">
        Start your free trial now and discover the power of AI-driven performance.
      </p>
      <button
        className="bg-white text-blue-700 hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
      >
        💡 Get Started Free
      </button>
    </motion.section>
  );
}
