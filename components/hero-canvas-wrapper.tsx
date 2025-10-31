"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroCanvas = dynamic(() => import("@/components/hero-canvas"), {
  ssr: false,
  loading: () => <div aria-hidden="true"></div>,
});

export default function HeroCanvasWrapper() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
    </div>
  );
}
