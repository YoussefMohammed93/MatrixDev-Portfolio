"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TimelineBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const primaryColor = isDark ? "#8b5cf6" : "#6366f1";
  const secondaryColor = isDark ? "#ec4899" : "#f472b6";
  const tertiaryColor = isDark ? "#0ea5e9" : "#3b82f6";

  return (
    <div
      className="absolute inset-0 z-0 opacity-30 overflow-hidden"
      style={{
        background: isDark
          ? "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.2) 30%, rgba(0, 0, 0, 0) 70%)"
          : "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 30%, rgba(255, 255, 255, 0) 70%)",
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="absolute w-12 h-12 sm:w-32 sm:h-32 rounded-full"
        style={{
          backgroundColor: primaryColor,
          left: "20%",
          top: "50%",
          opacity: 0.4,
        }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-14 h-14 sm:w-32 sm:h-32 rounded-md"
        style={{
          backgroundColor: secondaryColor,
          right: "25%",
          bottom: "15%",
          opacity: 0.4,
        }}
        animate={{
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-10 h-10 sm:w-32 sm:h-32 rounded-lg"
        style={{
          backgroundColor: tertiaryColor,
          right: "15%",
          top: "20%",
          opacity: 0.4,
        }}
        animate={{
          x: [0, 15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
