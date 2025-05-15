"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useTheme } from "next-themes"

export default function ProjectCard3D({ project }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const { theme } = useTheme()

  // Track mouse position for 3D effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
    setIsHovered(false)
  }

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
      <Card className="h-full overflow-hidden border-2 hover:border-primary/50">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"
            style={{
              opacity: isHovered ? 0.8 : 0.6,
            }}
          />
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-4">
            <Button variant="default" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 3D shadow effect */}
      <div
        className="absolute -z-10 inset-0 rounded-lg opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.4 : 0,
          transform: "translateZ(-50px)",
          background: theme === "dark" ? "rgba(124, 58, 237, 0.2)" : "rgba(79, 70, 229, 0.2)",
          filter: "blur(20px)",
          transformStyle: "preserve-3d",
        }}
      />
    </motion.div>
  )
}
