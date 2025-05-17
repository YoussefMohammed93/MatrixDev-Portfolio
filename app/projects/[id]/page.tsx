import ProjectPageClient from "@/components/project-page-client";

import type { Metadata } from "next";
import { getProjectById } from "@/data/projectsData";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
    keywords: [...project.tags, "Youssef Mohammed", "Portfolio", "Project"],
  };
}

export default function ProjectPage({ params }: Props) {
  return <ProjectPageClient id={params.id} />;
}
