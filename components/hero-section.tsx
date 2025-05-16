"use client";

import HeroCanvasWrapper from "@/components/hero-canvas-wrapper";

import { useState, useEffect } from "react";
import { ArrowDown, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const controls = useAnimation();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = [
    "Frontend Developer",
    "Next.js Full Stack Developer",
    "React.js Specialist",
    "React Native Mobile Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const scrollToNextSection = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const buttonVariants = {
    tap: {
      scale: 0.95,
    },
  };

  const scrollIndicatorVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.8,
      transition: { duration: 0.5 },
    },
  };

  const textAnimationVariants = {
    initial: {
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.95,
    },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.19, 1.0, 0.22, 1.0],
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.19, 1.0, 0.22, 1.0],
      },
    },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Youssef Mohammed",
    jobTitle: textOptions[currentTextIndex],
    url: "https://youssefmohammed.com",
    sameAs: [
      "https://github.com/youssefmohammed",
      "https://linkedin.com/in/youssefmohammed",
    ],
    description:
      "Frontend Developer specializing in Next.js, React, and React Native",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden"
        aria-label="Hero section"
        role="region"
      >
        <HeroCanvasWrapper />
        <div
          className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-6 text-center"
          role="presentation"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col items-center"
          >
            <motion.div
              className="absolute inset-0 bg-background/10 backdrop-blur-sm rounded-xl"
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
              aria-hidden="true"
            />
            <motion.div
              className="relative z-10 flex flex-col items-center px-5 sm:px-6 pb-8 pt-20 rounded-xl"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div variants={itemVariants}>
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 md:mb-5"
                  id="hero-heading"
                >
                  Hello, I'm{" "}
                  <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                    Youssef Mohammed
                  </span>
                </h1>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="h-8 md:h-10 mb-3 md:mb-5 overflow-hidden"
                aria-live="polite"
                aria-atomic="true"
              >
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentTextIndex}
                    variants={textAnimationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-xl md:text-2xl lg:text-3xl font-medium sm:font-semibold text-primary/90"
                    id="role-heading"
                  >
                    {textOptions[currentTextIndex]}
                  </motion.h2>
                </AnimatePresence>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3
                  className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl leading-relaxed"
                  id="skills-heading"
                >
                  Crafting exceptional digital experiences with{" "}
                  <span className="text-primary/90 font-medium">Next.js</span>,{" "}
                  <span className="text-primary/90 font-medium">React.js</span>,
                  and{" "}
                  <span className="text-primary/90 font-medium">
                    React Native
                  </span>
                </h3>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p
                  className="text-md md:text-lg text-muted-foreground mb-8 max-w-xl"
                  id="bio-paragraph"
                >
                  Computer Science student at Mansoura University, passionate
                  about creating intuitive and performant user interfaces.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-5 justify-center mb-12"
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="rounded-full w-full sm:w-auto px-10"
                    onClick={() =>
                      window.open(
                        "https://github.com/YoussefMohammed93",
                        "_blank",
                        "noopener noreferrer"
                      )
                    }
                    aria-label="Visit my GitHub profile"
                  >
                    <Github className="h-5 w-5" aria-hidden="true" />
                    <span>GitHub Profile</span>
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="rounded-full w-full sm:w-auto px-10"
                    variant="outline"
                    onClick={() =>
                      window.open("mailto:contact@youssefmohammed2093.com")
                    }
                    aria-label="Send me an email"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    <span>Contact Me</span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="absolute bottom-6 md:bottom-10 animate-pulse"
            >
              <motion.div
                variants={scrollIndicatorVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-2 items-center cursor-pointer group"
                onClick={scrollToNextSection}
                role="button"
                tabIndex={0}
                aria-label="Scroll to next section"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    scrollToNextSection();
                  }
                }}
              >
                <span className="text-sm md:text-base text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                  Explore My Work
                </span>
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <ArrowDown
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
