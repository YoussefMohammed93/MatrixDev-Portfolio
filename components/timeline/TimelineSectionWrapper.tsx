"use client";

import dynamic from "next/dynamic";
import TimelineSection from "./TimelineSection";

const TimelineBackground = dynamic(() => import("./TimelineBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background/30" />,
});

export default function TimelineSectionWrapper() {
  return (
    <div id="timeline" className="relative w-full overflow-hidden">
      <TimelineBackground />
      <TimelineSection />
    </div>
  );
}
