"use client";

import Link from "next/link";
import ProjectCard3D from "@/components/project-card-3d";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { getFeaturedProjects } from "@/data/projectsData";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const featuredProjects = getFeaturedProjects();

  const filteredProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.category === activeFilter);

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
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my recent web development projects
            showcasing modern technologies and user-focused solutions.
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
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
