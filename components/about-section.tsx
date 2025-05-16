"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, FileText } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Youssef Mohammed",
  jobTitle: "Frontend Developer",
  description:
    "Frontend Developer specializing in Next.js, React.js, and React Native",
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "CSS",
    "React Native",
    "Web Development",
  ],
  url: "https://youssefmohammed.com",
};

const AboutSection = memo(function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 0.9 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.6 },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />
      <section
        id="about"
        ref={sectionRef}
        className="py-16 sm:py-20 md:py-24 bg-muted dark:bg-muted/50"
        aria-labelledby="about-heading"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative h-[500px] rounded-lg overflow-hidden order-2 md:order-1 md:col-span-4 w-full"
            >
              <Image
                src="/me-about.jpg"
                alt="Youssef Mohammed - Frontend Developer"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 33vw"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
                quality={95}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="space-y-5 sm:space-y-6 order-1 md:order-2 md:col-span-8"
            >
              <motion.div variants={itemVariants}>
                <h2
                  id="about-heading"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-3 sm:mb-4"
                >
                  About Me
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-primary mb-4 sm:mb-6"></div>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-muted-foreground"
              >
                I am a Frontend developer specializing in Next.js, with 3 years
                of experience and a strong foundation in front-end technologies
                like React, JavaScript, CSS. I excel at building dynamic,
                responsive web applications and have extended my skill set to
                include mobile app development using React Native.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-muted-foreground"
              >
                Passionate about creating seamless user experiences, I thrive in
                collaborative environments and am committed to continuous
                learning and growth in the ever-evolving field of web and mobile
                development. I'm also a student in the Faculty of Computer
                Science at Mansoura University.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-muted-foreground"
              >
                Outside of coding, I enjoy exploring new technologies,
                contributing to open-source projects, and staying updated with
                trends in software development. I believe in writing clean,
                maintainable code and refining my skills through hands-on
                projects and community engagement.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="pt-3 sm:pt-4 flex flex-wrap gap-3 sm:gap-4"
              >
                <Button className="gap-2" aria-label="Download CV" asChild>
                  <a href="/resume.pdf" download="Youssef_Mohammed_CV.pdf">
                    <FileText className="h-4 w-4" />
                    <span>Download CV</span>
                  </a>
                </Button>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
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
                    <Facebook className="size-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
});

export default AboutSection;
