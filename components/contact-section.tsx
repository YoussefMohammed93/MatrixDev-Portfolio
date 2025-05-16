"use client";

import { useRef, memo } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import { Card, CardContent } from "@/components/ui/card";

// Dynamically import the ContactCanvas component with SSR disabled
const ContactCanvas = dynamic(() => import("@/components/contact-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background/30" />,
});

// Add structured data for the contact section
const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Youssef Mohammed",
  description:
    "Get in touch with Youssef Mohammed, Frontend Developer specializing in Next.js, React.js, and React Native",
  url: "https://youssefmohammed.com/#contact",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@youssefmohammed2093.com",
    contactType: "customer service",
  },
};

const ContactSection = memo(function ContactSection() {
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

  const cardVariants = {
    hidden: prefersReducedMotion ? { opacity: 0.9 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      <section
        id="contact"
        ref={sectionRef}
        className="py-20 sm:py-24 md:py-32 relative overflow-hidden min-h-[800px]"
        aria-labelledby="contact-heading"
      >
        <ContactCanvas />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
              id="contact-heading"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss potential opportunities?
              I&apos;d love to hear from you. Fill out the form below or reach
              out directly.
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10"
          >
            <Card className="border-2 shadow-lg backdrop-blur-lg bg-background/60">
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-5">
                    <ContactInfo />
                  </div>
                  <div className="lg:col-span-7">
                    <ContactForm />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
});

export default ContactSection;
