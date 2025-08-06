"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  BarChart,
  Users,
  CreditCard,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: <Bot className="text-blue-600 w-8 h-8 mb-4" />,
    title: "AI Campaign Automation",
    description: "Automate your marketing workflow with our smart AI engine.",
    more: "Save time with intelligent content, targeting, and optimization suggestions.",
  },
  {
    icon: <BarChart className="text-purple-600 w-8 h-8 mb-4" />,
    title: "Real-time Insights",
    description: "Get actionable data from live dashboards and smart alerts.",
    more: "Track KPIs, user actions, and trends in real-time.",
  },
  {
    icon: <Users className="text-pink-600 w-8 h-8 mb-4" />,
    title: "Team Collaboration",
    description: "Empower your team with tools to plan and execute faster.",
    more: "Assign tasks, share assets, and monitor performance together.",
  },
  {
    icon: <CreditCard className="text-green-600 w-8 h-8 mb-4" />,
    title: "Smart Budgeting",
    description: "Optimize ad spend using AI predictions and suggestions.",
    more: "Adjust campaigns automatically based on performance goals.",
  },
  {
    icon: <LayoutDashboard className="text-orange-600 w-8 h-8 mb-4" />,
    title: "Unified Dashboard",
    description: "See everything in one place — campaigns, leads, and revenue.",
    more: "No need to switch tabs. Manage and monitor with ease.",
  },
  {
    icon: <Settings className="text-cyan-600 w-8 h-8 mb-4" />,
    title: "Easy Integrations",
    description: "Connect your favorite tools in seconds.",
    more: "Supports Hubspot, Zapier, Meta, Google, Slack, and more.",
  },
];

export default function Features() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ⌨️ Add left/right keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setOpenIndex((prev) => {
          if (prev === null || prev === features.length - 1) return 0;
          return prev + 1;
        });
      } else if (e.key === "ArrowLeft") {
        setOpenIndex((prev) => {
          if (prev === null || prev === 0) return features.length - 1;
          return prev - 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="features"
      className="py-20 px-6 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-center"
    >
      <h2 className="text-3xl font-bold mb-10 text-blue-900">Key Features</h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((f, i) => {
          const isActive = openIndex === i;

          return (
            <motion.div
              key={i}
              onClick={() => setOpenIndex(isActive ? null : i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`bg-white p-6 rounded-2xl shadow-xl cursor-pointer transition hover:shadow-2xl ${
                isActive ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center"
              >
                {f.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 mt-3">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-sm text-gray-500"
                >
                  {f.more}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Use ← and → arrow keys to explore features
      </p>
    </section>
  );
}
