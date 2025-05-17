"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "My Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const [isProjectsPage, setIsProjectsPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      setIsProjectsPage(pathname.startsWith("/projects"));
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full py-8 md:py-10 border-t bg-muted dark:bg-muted/50 backdrop-blur-sm"
    >
      <motion.div
        className="max-w-[1360px] mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-8">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start space-y-3"
          >
            <Link
              href={isProjectsPage ? "/" : "#hero"}
              aria-label="Go to home page"
              className="text-xl sm:text-2xl font-bold tracking-tighter"
            >
              Matrix<span className="text-primary">Dev</span>
            </Link>
            <p className="text-base text-muted-foreground max-w-xs text-left">
              Frontend developer specializing in Next.js, with expertise in
              React and React Native, creating seamless user experiences.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start space-y-3"
          >
            <h3 className="text-base font-semibold">Navigation</h3>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={isProjectsPage ? `/${link.href}` : link.href}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start space-y-3"
          >
            <h3 className="text-base font-semibold">Connect With Me</h3>
            <div className="flex items-center space-x-3">
              <motion.div whileHover="hover" whileTap="tap">
                <Link
                  href="https://www.linkedin.com/in/youssef-mohammed-6893a031b"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="LinkedIn Profile"
                    className={cn(
                      "focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap">
                <Link
                  href="mailto:youssefmohammed2093@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Email"
                    className={cn(
                      "focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap">
                <Link
                  href="https://www.facebook.com/youssef.mohammed.612783"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Facebook"
                    className={cn(
                      "focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap">
                <Link
                  href="https://github.com/YoussefMohammed93"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="GitHub Profile"
                    className={cn(
                      "focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Youssef Mohammed. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
