"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMobile } from "@/hooks/use-mobile";

export default function ServicesBackground() {
  const { theme } = useTheme();
  const isMobile = useMobile ? useMobile() : false;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const frontendColor = isDark ? "#6366f1" : "#4f46e5"; // indigo
  const fullstackColor = isDark ? "#38bdf8" : "#0ea5e9"; // sky
  const mobileColor = isDark ? "#f472b6" : "#ec4899"; // pink

  return (
    <div
      className="absolute inset-0 z-0 opacity-30 overflow-hidden"
      style={{
        background: isDark
          ? "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 30%, rgba(0, 0, 0, 0) 70%)"
          : "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.2) 30%, rgba(255, 255, 255, 0) 70%)",
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full"
        style={{
          backgroundColor: frontendColor,
          left: "15%",
          top: "20%",
          opacity: 0.5,
        }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-md"
        style={{
          backgroundColor: fullstackColor,
          right: "20%",
          bottom: "25%",
          opacity: 0.5,
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-0 h-0"
        style={{
          borderLeft: isMobile
            ? "25px solid transparent"
            : "40px solid transparent",
          borderRight: isMobile
            ? "25px solid transparent"
            : "40px solid transparent",
          borderBottom: isMobile
            ? `50px solid ${mobileColor}`
            : `80px solid ${mobileColor}`,
          right: "30%",
          top: "30%",
          opacity: 0.5,
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {!isMobile && (
        <>
          <motion.div
            className="absolute w-12 h-12 rounded-full"
            style={{
              backgroundColor: frontendColor,
              opacity: 0.3,
              left: "10%",
              bottom: "15%",
            }}
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.div
            className="absolute w-8 h-8 rounded-md"
            style={{
              backgroundColor: fullstackColor,
              opacity: 0.4,
              right: "10%",
              top: "15%",
            }}
            animate={{
              rotate: [0, 360, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute w-0 h-0"
            style={{
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: `40px solid ${mobileColor}`,
              left: "40%",
              bottom: "10%",
              opacity: 0.4,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, -20, 0],
              rotate: [0, -120, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          />
        </>
      )}
    </div>
  );
}
