"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{
          duration: 0.45,
          ease: [0.25, 0.8, 0.25, 1], // smooth cubic bezier animation
        }}
        className="transition-wrapper min-h-screen px-4 sm:px-6 md:px-8 py-6"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
