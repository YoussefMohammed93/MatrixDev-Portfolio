"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineIconProps {
  type: "education" | "career";
  color?: string;
  isInView: boolean;
  customIcon?: string;
}

export default function TimelineIcon({
  type,
  color,
  isInView,
  customIcon,
}: TimelineIconProps) {
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const defaultColor = type === "education" ? "bg-primary" : "bg-purple-500";
  const bgColorClass = color ? "" : defaultColor;

  const customColorStyle = color ? { backgroundColor: color } : {};

  return (
    <motion.div
      variants={iconVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        "relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-md",
        bgColorClass
      )}
      style={customColorStyle}
    >
      {customIcon ? (
        <img
          src={customIcon}
          alt={`${type} icon`}
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
        />
      ) : type === "education" ? (
        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
      ) : (
        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
      )}
    </motion.div>
  );
}
