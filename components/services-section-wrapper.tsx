"use client";

import dynamic from "next/dynamic";
import ServicesSection from "@/components/services-section";

// In Next.js 15, ssr: false is not allowed in Server Components
// We need to use a different approach for dynamic imports
const ServicesBackground = dynamic(
  () => import("@/components/services/ServicesBackground"),
  {
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
