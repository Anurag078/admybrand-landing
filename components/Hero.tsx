"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  // Ensure smooth scrolling behavior globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#00264d] via-[#003366] to-[#004080] text-white overflow-hidden">
      {/* 🔵 Floating Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full top-[-80px] left-[-80px] blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bg-indigo-400/20 rounded-full top-[50%] left-[60%] blur-3xl animate-spin-slow" />
        <div className="absolute w-64 h-64 bg-purple-400/30 rounded-full bottom-[-80px] right-[-80px] blur-2xl animate-pulse" />
      </div>
      {/* 👋 Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-6 relative z-10"
      >
        {"Welcome to "}
        <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent">
          ADmyBRAND
        </span>{" "}
        {"AI Suite"}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg text-white/80 max-w-2xl relative z-10"
      >
        Supercharge your marketing with AI — automate campaigns, gain insights, and boost conversions effortlessly.
      </motion.p>
      {/* CTA Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 bg-yellow-400/90 backdrop-blur-md text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition relative z-10"
          >
            Get Started
          </motion.button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Welcome to ADmyBRAND AI Suite!</DialogTitle>
            <DialogDescription>
              Ready to supercharge your marketing? Fill out the form below to get started.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>This is where your sign-up form or more information would go.</p>
            <p>For now, imagine a form with email and password fields here.</p>
          </div>
        </DialogContent>
      </Dialog>
      {/* 🔽 Scroll Down Indicator (WORKS) */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-6 text-white/80 text-sm flex flex-col items-center z-10 cursor-pointer"
        onClick={() => {
          const section = document.getElementById("features")
          if (section) {
            section.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <span>Scroll Down</span>
        <svg
          className="w-5 h-5 mt-1 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
