"use client";

import type { ServiceData } from "@/data/servicesData";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";
import { Code, Layers, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const getIcon = () => {
    switch (service.icon) {
      case "code":
        return <Code className="w-8 h-8" />;
      case "layers":
        return <Layers className="w-8 h-8" />;
      case "smartphone":
        return <Smartphone className="w-8 h-8" />;
      default:
        return <Code className="w-8 h-8" />;
    }
  };

  // Prevent hydration mismatch by using default color until mounted
  const currentColor =
    mounted && theme === "dark" ? service.darkColor : service.color;

  return (
    <motion.div
      ref={cardRef}
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1 + 0.2,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className="h-full overflow-hidden border-2 border-border bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow duration-300 group relative"
        style={{
          borderColor: isHovered ? currentColor : "",
          transform: isHovered
            ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${
                mousePosition.x * -5
              }deg)`
            : "perspective(1000px) rotateX(0) rotateY(0)",
          transition: "transform 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ backgroundColor: currentColor }}
        />
        <CardContent className="p-6 flex flex-col items-center text-center relative h-full">
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: isHovered ? 1.2 : 1,
              transition: { duration: 0.3 },
            }}
            className="flex items-center justify-center p-4 rounded-full mb-4 w-16 h-16"
            style={{
              color: currentColor,
              backgroundColor: isHovered ? `${currentColor}10` : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            {getIcon()}
          </motion.div>
          <h3 className="text-xl font-bold my-3">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
