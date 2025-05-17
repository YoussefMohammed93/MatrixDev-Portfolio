"use client";

import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";

const HeroCanvas = dynamic(() => import("@/components/hero-canvas"), {
  loading: () => null, // Remove the spinner to avoid flickering
  ssr: false, // Disable SSR for Three.js component
});

export default function HeroCanvasWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {isClient && (
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      )}
    </div>
  );
}
