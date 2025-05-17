"use client";

import TimelineItem from "./TimelineItem";

import { useRef, useState, useEffect } from "react";
import { timelineEvents } from "@/data/timelineData";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });
  const prefersReducedMotion = useReducedMotion();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
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

  const timelineStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: timelineEvents.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type":
          event.type === "education"
            ? "EducationalOccupationalCredential"
            : "WorkPosition",
        name: event.title,
        description: event.description,
        startDate: event.startDate,
        endDate: event.endDate,
        location: event.location,
      },
    })),
  };

  return (
    <>
      {isMounted && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(timelineStructuredData),
          }}
        />
      )}
      <section
        ref={sectionRef}
        className="py-10 sm:py-16 md:py-24 w-full overflow-hidden bg-muted dark:bg-muted/50"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-[1360px] mx-auto px-2 xs:px-3 sm:px-5 w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.h2
              id="timeline-heading"
              variants={titleVariants}
              initial="hidden"
              animate={isMounted && isInView ? "visible" : "hidden"}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4"
            >
              My Journey
            </motion.h2>
            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate={isMounted && isInView ? "visible" : "hidden"}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2"
            >
              Explore my education and professional experience that has shaped
              my skills and expertise in frontend and full-stack development.
            </motion.p>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="relative w-full">
              {timelineEvents
                .sort((a, b) => {
                  const dateA =
                    a.endDate === "Present"
                      ? new Date().getFullYear()
                      : parseInt(a.endDate);
                  const dateB =
                    b.endDate === "Present"
                      ? new Date().getFullYear()
                      : parseInt(b.endDate);
                  return dateB - dateA;
                })
                .map((event, index) => (
                  <TimelineItem
                    key={event.id}
                    event={event}
                    index={index}
                    isInView={isMounted && isInView}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
