"use client";

import React from "react";
import UnifiedSkillMarquee from "./UnifiedSkillMarquee";

import { motion } from "framer-motion";

export default function SkillMarqueeWrapper() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-20 md:py-24 relative"
    >
      <div className="text-center mb-8 px-5 sm:px-6">
        <motion.h2
          variants={titleVariants}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          My Skills
        </motion.h2>
        <motion.p
          variants={titleVariants}
          className="text-lg text-muted-foreground max-w-4xl mx-auto pb-8"
        >
          Continuous flow of technologies I work with daily. Specialized in
          modern web frameworks and libraries that power responsive, interactive
          user experiences. From frontend essentials to backend integrations,
          these tools form the foundation of my development workflow.{" "}
        </motion.p>
      </div>
      <div className="relative w-full overflow-hidden py-8">
        <div className="w-[100vw] relative left-[calc(-50vw+50%)]">
          <UnifiedSkillMarquee speed={25} itemSize="large" />
        </div>
      </div>
    </motion.section>
  );
}
