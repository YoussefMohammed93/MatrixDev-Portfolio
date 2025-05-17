"use client";

import dynamic from "next/dynamic";
import ServicesSection from "@/components/services-section";

const ServicesBackground = dynamic(
  () => import("@/components/services/ServicesBackground"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 bg-background/30" />,
  }
);

export default function ServicesSectionWrapper() {
  return (
    <div id="services" className="relative w-full overflow-hidden">
      <ServicesBackground />
      <ServicesSection />
    </div>
  );
}
