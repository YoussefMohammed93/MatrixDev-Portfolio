"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef, useMemo } from "react";

import { skillsData } from "./skillsData";
import { useReducedMotion } from "framer-motion";

interface SkillItemProps {
  name: string;
  icon: string;
  size?: "small" | "medium" | "large";
  textColor?: string;
}

const SkillItem: React.FC<SkillItemProps> = React.memo(
  ({ name, icon, size = "medium", textColor }) => {
    const sizeMap = {
      small: {
        container: { base: 60, sm: 80 },
        icon: { base: 30, sm: 40 },
        fontSize: { base: 10, sm: 12 },
      },
      medium: {
        container: { base: 80, sm: 110 },
        icon: { base: 40, sm: 55 },
        fontSize: { base: 12, sm: 14 },
      },
      large: {
        container: { base: 100, sm: 140 },
        icon: { base: 80, sm: 70 },
        fontSize: { base: 14, sm: 16 },
      },
    };

    const dimensions = sizeMap[size];

    return (
      <div
        className="flex flex-col items-center justify-center mx-4 sm:mx-6"
        style={{
          width: `${dimensions.container.base}px`,
          maxWidth: `${dimensions.container.sm}px`,
        }}
      >
        <div
          className="relative mb-1 sm:mb-2"
          style={{
            width: dimensions.icon.base,
            height: dimensions.icon.base,
          }}
        >
          <Image
            src={icon}
            alt={name}
            width={dimensions.icon.sm}
            height={dimensions.icon.sm}
            className="object-contain w-full h-full"
            style={{ filter: textColor ? `invert(1)` : "none" }}
          />
        </div>
        <p
          className="text-center font-medium truncate w-full"
          style={{
            fontSize: `${dimensions.fontSize.base}px`,
            color: textColor || "inherit",
          }}
        >
          {name}
        </p>
      </div>
    );
  }
);

SkillItem.displayName = "SkillItem";

const UnifiedSkillMarquee: React.FC<{
  speed?: number;
  itemSize?: "small" | "medium" | "large";
  backgroundColor?: string;
  textColor?: string;
}> = ({
  speed = 40,
  itemSize = "medium",
  backgroundColor = "transparent",
  textColor,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const allSkills = useMemo(() => {
    // Use the skills data directly without random shuffling
    // to ensure consistent rendering between server and client
    return [...skillsData];
  }, []);

  // State for client-side shuffled skills
  const [clientSideSkills, setClientSideSkills] = useState<typeof allSkills>(
    []
  );
  const [isClientSide, setIsClientSide] = useState(false);

  // Create a continuous loop by duplicating the skills array
  // We need enough copies to ensure the animation is seamless
  const loopedSkills = useMemo(() => {
    // Use clientSideSkills if available (after client-side hydration), otherwise use allSkills
    const skillsToUse =
      isClientSide && clientSideSkills.length > 0
        ? clientSideSkills
        : allSkills;
    return [...skillsToUse, ...skillsToUse, ...skillsToUse, ...skillsToUse];
  }, [allSkills, clientSideSkills, isClientSide]);

  // After initial render, shuffle skills on the client side
  useEffect(() => {
    // Mark that we're now on the client side
    setIsClientSide(true);

    // Shuffle the skills array on the client side only
    const shuffled = [...allSkills].sort(() => Math.random() - 0.5);
    setClientSideSkills(shuffled);
  }, [allSkills]);

  // Measure container and content width
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const updateWidths = () => {
        // Only need to measure content width for animation
        setContentWidth(contentRef.current?.offsetWidth || 0);
      };

      updateWidths();

      // Update measurements on window resize
      window.addEventListener("resize", updateWidths);
      return () => window.removeEventListener("resize", updateWidths);
    }
  }, []);

  // Animation implementation using requestAnimationFrame for smooth continuous motion

  useEffect(() => {
    if (shouldReduceMotion || contentWidth === 0) return;

    // Calculate the width of one set of skills (1/4 of the total content)
    const singleSetWidth = contentWidth / 4;

    // Create a seamless animation using requestAnimationFrame for smooth motion
    let animationFrame: number;
    let lastTime = performance.now();
    let position = 0;

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Calculate how much to move based on time and speed
      const pixelsToMove = (speed * deltaTime) / 1000;

      // Update position
      position -= pixelsToMove;

      // If we've moved beyond one set width, reset to create seamless loop
      if (position <= -singleSetWidth) {
        // Reset position but maintain the exact overflow to prevent jumps
        position = position + singleSetWidth;
      }

      // Apply the transform directly to the DOM for maximum performance
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${position}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrame = requestAnimationFrame(animate);

    // Clean up animation on unmount
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [shouldReduceMotion, contentWidth, speed]);

  // If user prefers reduced motion, show static content
  if (shouldReduceMotion) {
    return (
      <div
        className="w-full overflow-hidden"
        style={{
          backgroundColor,
          height:
            itemSize === "small"
              ? "100px"
              : itemSize === "large"
              ? "180px"
              : "140px",
        }}
      >
        <div className="flex flex-row flex-wrap justify-center items-center h-full px-4">
          {(isClientSide && clientSideSkills.length > 0
            ? clientSideSkills
            : allSkills
          )
            .slice(0, 10)
            .map((skill, index) => (
              <SkillItem
                key={`${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
                size={itemSize}
                textColor={textColor}
              />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{
        backgroundColor,
        height:
          itemSize === "small"
            ? "100px"
            : itemSize === "large"
            ? "180px"
            : "140px",
      }}
    >
      <div ref={contentRef} className="flex flex-row items-center h-full">
        {loopedSkills.map((skill, index) => (
          <SkillItem
            key={`${skill.name}-${index}`}
            name={skill.name}
            icon={skill.icon}
            size={itemSize}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default UnifiedSkillMarquee;
