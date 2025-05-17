"use client";

import ProjectCard3D from "@/components/project-card-3d";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Fullstack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "3D Product Configurator",
    description:
      "Interactive 3D product visualization tool with customization options.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Three.js", "React Three Fiber", "GLSL"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    description:
      "Data visualization dashboard with real-time updates and interactive charts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "D3.js", "WebSockets", "Tailwind CSS"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "Content generation tool powered by AI with customizable templates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    category: "Fullstack",
    githubUrl: "https://github.com/youssefmohammed/ai-content-generator",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "Cross-platform mobile application for social networking and content sharing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile Apps",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Mobile app for tracking workouts, nutrition, and health metrics with personalized insights.Mobile app for tracking workouts, nutrition, and health metrics with personalized insights.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "TypeScript", "GraphQL", "Health Kit"],
    category: "Mobile Apps",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSectionWrapper() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-24">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            A selection of my recent work showcasing my skills in web
            development. Each project represents a unique challenge tackled
            using modern technologies and best practices. From responsive web
            applications to cross-platform mobile solutions, these projects
            demonstrate my ability to deliver polished, user-focused
            experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <Tabs
            defaultValue="All"
            value={activeFilter}
            onValueChange={setActiveFilter}
            className="w-full max-w-md"
          >
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Frontend">Frontend</TabsTrigger>
              <TabsTrigger value="Fullstack">Fullstack</TabsTrigger>
              <TabsTrigger value="Mobile Apps">Mobile Apps</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard3D project={project} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
