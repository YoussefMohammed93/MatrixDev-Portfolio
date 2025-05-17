"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMobile } from "@/hooks/use-mobile";

export default function TimelineCanvas() {
  const { theme } = useTheme();
  const isMobile = useMobile ? useMobile() : false;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const primaryColor = theme === "dark" ? "#8b5cf6" : "#6366f1";
  const secondaryColor = theme === "dark" ? "#ec4899" : "#f472b6";
  const tertiaryColor = theme === "dark" ? "#0ea5e9" : "#3b82f6";
  const backgroundColor = theme === "dark" ? "#09090b" : "#ffffff";

  if (!mounted) return null;

  return (
    <div
      className="absolute inset-0 z-0 opacity-40 overflow-hidden"
      style={{ backgroundColor }}
    >
      <motion.div
        className="absolute w-24 h-24 rounded-full"
        style={{
          backgroundColor: primaryColor,
          left: "20%",
          top: "30%",
        }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-md"
        style={{
          backgroundColor: secondaryColor,
          right: "25%",
          bottom: "35%",
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-lg"
        style={{
          backgroundColor: tertiaryColor,
          right: "15%",
          top: "20%",
        }}
        animate={{
          x: [0, 32, 0],
          y: [0, 32, 0],
          rotate: [0, 120, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {!isMobile && (
        <>
          <motion.div
            className="absolute w-24 h-24 rounded-full"
            style={{
              backgroundColor: primaryColor,
              opacity: 0.5,
              left: "10%",
              bottom: "20%",
            }}
            animate={{
              scale: [1, 1.6, 1],
              x: [0, 64, 0],
              y: [0, -32, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.div
            className="absolute w-10 h-10 rounded-md"
            style={{
              backgroundColor: secondaryColor,
              opacity: 0.6,
              right: "10%",
              top: "50%",
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
            className="absolute w-32 h-32 rounded-lg"
            style={{
              backgroundColor: tertiaryColor,
              opacity: 0.7,
              left: "40%",
              bottom: "10%",
            }}
            animate={{
              y: [0, -64, 0],
              x: [0, -48, 0],
              rotate: [0, -180, 0],
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
