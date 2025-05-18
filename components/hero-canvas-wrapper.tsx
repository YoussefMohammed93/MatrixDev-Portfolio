"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroCanvas = dynamic(() => import("@/components/hero-canvas"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
        role="progressbar"
      ></div>
    </div>
  ),
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
