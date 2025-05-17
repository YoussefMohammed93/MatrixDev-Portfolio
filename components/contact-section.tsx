"use client";


import dynamic from "next/dynamic";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

import { useRef, memo } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ContactCanvas = dynamic(() => import("@/components/contact-canvas"), {
  loading: () => <div className="absolute inset-0 z-0" />,
});

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
        <div className="max-w-[1360px] mx-auto px-5 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto relative z-10">
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
          </div>
        </div>
      </section>
    </>
  );
});

export default ContactSection;
