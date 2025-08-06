"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Peter M.",
    feedback: "ADmyBRAND transformed our ad performance within weeks!",
    image: "/images/user1.jpg",
    tagline: "Marketing Director",
    rating: 5,
  },
  {
    name: "Raj K.",
    feedback: "The AI insights saved us hours in campaign planning.",
    image: "/images/user2.jpg",
    tagline: "Growth Strategist",
    rating: 4,
  },
  {
    name: "Lucifer T.",
    feedback: "Super intuitive. My entire team loves it!",
    image: "/images/user3.jpg",
    tagline: "Product Manager",
    rating: 5,
  },
  {
    name: "Nina S.",
    feedback: "Game-changing! We hit 2x ROI within a month.",
    image: "/images/user1.jpg",
    tagline: "Performance Analyst",
    rating: 4,
  },
  {
    name: "Arjun R.",
    feedback: "Seamless setup and brilliant automation.",
    image: "/images/user2.jpg",
    tagline: "Campaign Lead",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Set client rendering flag
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsWide(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll when not hovered
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isHovered]);

  // Keyboard arrow navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isClient) return null;

  // Determine which testimonials to show
  const visibleTestimonials = isWide
    ? testimonials.slice(currentIndex, currentIndex + 2)
    : [testimonials[currentIndex]];

  return (
    <section
      className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-blue-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Users Say
      </motion.h2>

      <div className={`relative mx-auto ${isWide ? "max-w-5xl grid md:grid-cols-2 gap-6" : "max-w-2xl"}`}>
       <AnimatePresence mode="sync">
          {visibleTestimonials.map((t, index) => (
            <motion.div
              key={`${t.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl px-8 py-6 text-left"
            >
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-blue-200"
                />
                <div>
                  <p className="font-semibold text-blue-800 text-md">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="italic text-gray-700 text-base leading-relaxed">“{t.feedback}”</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === i ? "bg-blue-600" : "bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
