"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl: string;
}

export default function ProjectCard3D({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full transition-all duration-300"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease",
      }}
    >
      <Card className="h-full overflow-hidden !bg-muted/30 border-2 hover:border-primary/50">
        <div className="relative h-40 md:h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"
            style={{
              opacity: isHovered ? 0.8 : 0.6,
            }}
          />
          {project.category && (
            <div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full bg-background/80 text-foreground">
              {project.category}
            </div>
          )}
        </div>
        <CardContent className="p-4 md:p-5">
          <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-full flex gap-2 mt-3">
            {project.liveUrl && (
              <Button variant="default" size="sm" asChild className="w-full">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Demo
                </a>
              </Button>
            )}
            <Button variant="outline" size="sm" asChild className="w-full">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Code className="h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <div
        className="absolute -z-10 inset-0 rounded-lg opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.4 : 0,
          transform: "translateZ(-50px)",
          background:
            theme === "dark"
              ? "rgba(124, 58, 237, 0.2)"
              : "rgba(79, 70, 229, 0.2)",
          filter: "blur(20px)",
          transformStyle: "preserve-3d",
        }}
      />
    </motion.div>
  );
}
