"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-900 border-t border-blue-100"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-6">
            About <span className="text-purple-600">ADmyBRAND</span>
          </h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            ADmyBRAND is a <strong className="text-indigo-600">unified marketing platform</strong> that empowers businesses
            to plan, launch, and manage ad campaigns effortlessly across digital,
            print, and outdoor media.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From startups to enterprises, our intuitive tools and powerful insights
            help teams make smarter decisions — faster.
          </p>
        </motion.div>

        <motion.img
          src="/about-illustration.svg"
          alt="About us illustration"
          className="w-full max-h-[400px] object-contain drop-shadow-lg rounded-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
