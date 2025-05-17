"use client";

import { useParams } from "next/navigation";
import ProjectPageClient from "@/components/project-page-client";

export default function ProjectPageWrapper() {
  const params = useParams();
  const id = params.id as string;

  return <ProjectPageClient id={id} />;
}
