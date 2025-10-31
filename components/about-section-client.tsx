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
    once: true,
    amount: 0.15,
    margin: "0px 0px -100px 0px",
  });
  const prefersReducedMotion = useReducedMotion();

  // Container animation with stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
        when: "beforeChildren",
      },
    },
  };

  // Image animation - slide in from left with scale
  const imageVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, x: -60, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Content animation - slide in from right
  const contentVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
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
        className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start"
      >
        {childrenArray.map((child, index) => {
          // First child is the image
          if (index === 0) {
            return (
              <motion.div
                key={index}
                variants={imageVariants}
                className={cn(child.props?.className || "")}
              >
                {child}
              </motion.div>
            );
          }

          // Second child is the content
          return (
            <motion.div
              key={index}
              variants={contentVariants}
              className={cn(child.props?.className || "")}
            >
              {child}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
});

// Export animation variants for use in parent component
export const aboutAnimations = {
  heading: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  underline: {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "5rem",
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  },
  paragraph: (delay: number) => ({
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  }),
  badge: (delay: number) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay, ease: [0.34, 1.56, 0.64, 1] },
    },
  }),
  button: (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay, ease: "easeOut" },
    },
  }),
};

export default AboutSectionClient;

// Animation wrapper components for individual elements
export function AboutHeading({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AboutUnderline() {
  return (
    <motion.div
      className="h-1 bg-gradient-to-r from-primary to-primary/50 mb-4 sm:mb-6"
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "5rem", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    />
  );
}

export function AboutParagraph({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.p
      className="text-base sm:text-lg text-muted-foreground leading-relaxed"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

export function AboutTechStack({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="pt-6 sm:pt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AboutButtons({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="pt-3 sm:pt-4 flex flex-wrap gap-3 sm:gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
