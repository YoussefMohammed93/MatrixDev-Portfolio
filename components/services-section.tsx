"use client";

import ServiceCard from "@/components/service-card";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesData } from "@/data/servicesData";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

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
    <>
      <section
        ref={sectionRef}
        className="py-20 md:py-24 relative overflow-hidden z-10 bg-muted dark:bg-muted/50"
        aria-labelledby="services-heading"
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <motion.h2
              id="services-heading"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              My Services
            </motion.h2>
            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Specialized expertise in modern web development technologies and
              best practices to bring your digital vision to life.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
