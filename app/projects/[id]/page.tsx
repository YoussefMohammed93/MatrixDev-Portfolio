import ProjectDetail from "@/components/project-detail";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projectsData";

type PageProps = {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const projectId = parseInt(params.id, 10);
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

export default function ProjectPage({ params }: PageProps) {
  const projectId = parseInt(params.id, 10);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
