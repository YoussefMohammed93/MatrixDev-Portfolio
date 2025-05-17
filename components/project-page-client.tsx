"use client";

import { notFound } from "next/navigation";
import { useEffect } from "react";
import ProjectDetail from "@/components/project-detail";
import { getProjectById } from "@/data/projectsData";

interface ProjectPageClientProps {
  id: string;
}

export default function ProjectPageClient({ id }: ProjectPageClientProps) {
  const projectId = parseInt(id, 10);
  const project = getProjectById(projectId);

  useEffect(() => {
    if (project) {
      // Update document title on the client side
      document.title = `${project.title} | Youssef Mohammed`;

      // You could also update meta description if needed
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", project.description);
      }
    }
  }, [project]);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
