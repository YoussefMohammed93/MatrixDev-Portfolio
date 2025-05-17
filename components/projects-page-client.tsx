"use client";

import ProjectCard3D from "@/components/project-card-3d";

import { useState, useRef } from "react";
import { projects } from "@/data/projectsData";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectsPageClient() {
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
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            My Projects
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of web and mobile development projects
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
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="h-full"
            >
              <ProjectCard3D project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
