"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p className="text-muted-foreground">
          Feel free to reach out to me through any of these channels. I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 bg-primary/10 p-2 rounded-full">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:contact@youssefmohammed2093.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              contact@youssefmohammed2093.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 bg-primary/10 p-2 rounded-full">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Location</h4>
            <p className="text-muted-foreground">Mansoura, Egypt</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-3">Connect With Me</h3>
        <div className="flex gap-3">
          <motion.div
            whileHover="hover"
            whileTap="tap"
          >
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
                  "",
                  "focus-visible:ring-2 focus-visible:ring-primary"
                )}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover="hover"
            whileTap="tap"
          >
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
                  "",
                  "focus-visible:ring-2 focus-visible:ring-primary"
                )}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="https://www.facebook.com/profile.php?id=61552702670893"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button
                variant="outline"
                size="icon"
                aria-label="Facebook Profile"
                className={cn(
                  "",
                  "focus-visible:ring-2 focus-visible:ring-primary"
                )}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
