"use client";

import Image from "next/image";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { FileText, Github, Linkedin, Twitter } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="John Doe - Full Stack Developer"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground"
            >
              I'm a passionate Full-Stack Developer with expertise in building
              modern, interactive web applications. With over 5 years of
              experience, I specialize in React, Next.js, Node.js, and Three.js.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground"
            >
              My approach combines technical excellence with creative
              problem-solving, resulting in applications that are not only
              functional but also visually stunning and user-friendly.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-wrap gap-4"
            >
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Download CV
              </Button>

              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
