"use client";

import { notFound } from "next/navigation";
import { useEffect } from "react";
import ProjectDetail from "@/components/project-detail";
import { getProjectById } from "@/data/projectsData";

interface ProjectPageClientProps {
  id: string;
}

export default function ProjectPageClient({ id }: ProjectPageClientProps) {
  let projectId: number;

  try {
    projectId = parseInt(id, 10);

    if (isNaN(projectId)) {
      const matches = id.match(/\d+/);
      if (matches && matches.length > 0) {
        projectId = parseInt(matches[0], 10);
      }
    }

    console.log("Parsed project ID:", projectId, "Type:", typeof projectId);
  } catch (error) {
    console.error("Error parsing project ID:", error);
    return notFound();
  }

  const project = getProjectById(projectId);
  console.log("Project found:", project ? "Yes" : "No");

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Youssef Mohammed`;

      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", project.description);
      }
    }
  }, [project]);

  if (isNaN(projectId)) {
    console.error("Invalid project ID format:", id);
    return notFound();
  }

  if (!project) {
    console.error("Project not found with ID:", projectId);
    return notFound();
  }

  return <ProjectDetail project={project} />;
}
