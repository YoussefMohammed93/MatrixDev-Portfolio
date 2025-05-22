"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsData } from "./skillsData";
import { useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface SkillItemProps {
  name: string;
  icon: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
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
        icon: { base: 50, sm: 70 },
        fontSize: { base: 14, sm: 16 },
      },
    };

    const dimensions = sizeMap[size];

    return (
      <div
        className="flex flex-col items-center justify-center mx-4 sm:mx-8"
        style={{
          width: `${dimensions.container.base}px`,
          minWidth: `${dimensions.container.base}px`,
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
            priority={true}
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
  speed: _speed = 40,
  itemSize = "medium",
  backgroundColor = "transparent",
  textColor,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [skills, setSkills] = useState(skillsData);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const shuffled = [...skillsData].sort(() => Math.random() - 0.5);
    setSkills(shuffled);
  }, []);

  const marqueeSpeed = isMobile ? 20 : 25;

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
          {skills.slice(0, 10).map((skill, index) => (
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
      <Marquee
        speed={marqueeSpeed}
        gradient={false}
        pauseOnHover={false}
        direction="left"
        className="h-full"
        delay={0}
        loop={2}
      >
        {skills.map((skill, index) => (
          <SkillItem
            key={`${skill.name}-${index}`}
            name={skill.name}
            icon={skill.icon}
            size={itemSize}
            textColor={textColor}
          />
        ))}
        {skills.map((skill, index) => (
          <SkillItem
            key={`${skill.name}-duplicate-${index}`}
            name={skill.name}
            icon={skill.icon}
            size={itemSize}
            textColor={textColor}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default UnifiedSkillMarquee;
