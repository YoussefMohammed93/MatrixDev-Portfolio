"use client";

import { cn } from "@/lib/utils";
import { useRef, memo, ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface AboutSectionClientProps {
  children: ReactNode;
}

const AboutSectionClient = memo(function AboutSectionClient({
  children,
}: AboutSectionClientProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true, // Changed to true for better performance
    amount: 0.1, // Reduced threshold for earlier triggering
    margin: "0px 0px -50px 0px", // Adjusted margin
  });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08, // Further reduced stagger time
        when: "beforeChildren",
        duration: 0.3, // Added explicit duration
      },
    },
  };

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 0.95 } : { opacity: 0, y: 5 }, // Further reduced y distance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.3, // Further reduced duration
        ease: "easeOut",
      },
    },
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div ref={sectionRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        layout="position"
        layoutRoot
      >
        {childrenArray.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={cn(child.props?.className || "")}
            layout="position"
            layoutId={`about-item-${index}`}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default AboutSectionClient;
