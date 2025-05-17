import ProjectDetail from "@/components/project-detail";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projectsData";

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id, 10);
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: "Project Not Found | Youssef Mohammed",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Youssef Mohammed`,
    description: project.description,
    keywords: [
      "Youssef Mohammed",
      "Frontend Developer",
      ...project.tags,
      project.category,
      "Web Development",
      "Portfolio Project",
    ],
  };
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id, 10);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
