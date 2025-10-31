"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { skillsData } from "@/data/skillsData";

export default function SkillsMarquee() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div
        className="flex gap-8 md:gap-12 animate-scroll"
        style={{
          width: "max-content",
        }}
      >
        {/* Render items twice for seamless infinite loop */}
        {[...skillsData, ...skillsData].map((skill, index) => {
          // Determine which icon to use based on theme
          const isDark =
            mounted && (resolvedTheme === "dark" || theme === "dark");
          const iconSrc =
            isDark && skill.iconDark ? skill.iconDark : skill.icon;

          return (
            <div
              key={`${skill.id}-${index}`}
              className="flex flex-col items-center justify-center gap-3 min-w-[80px] md:min-w-[100px] group"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110">
                {mounted ? (
                  <Image
                    src={iconSrc}
                    alt={skill.name}
                    fill
                    className="object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-muted/50 rounded-lg animate-pulse" />
                )}
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
