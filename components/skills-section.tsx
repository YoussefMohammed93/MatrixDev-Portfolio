"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import SkillsMarquee from "@/components/skills-marquee";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-24 relative overflow-hidden bg-background"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            id="skills-heading"
            variants={titleVariants}
            initial={mounted ? "hidden" : false}
            animate={mounted && isInView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={subtitleVariants}
            initial={mounted ? "hidden" : false}
            animate={mounted && isInView ? "visible" : "hidden"}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive toolkit of modern technologies I use to build
            exceptional digital experiences
          </motion.p>
        </div>

        {/* Marquee Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted && isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <SkillsMarquee />
        </motion.div>
      </div>
    </section>
  );
}
