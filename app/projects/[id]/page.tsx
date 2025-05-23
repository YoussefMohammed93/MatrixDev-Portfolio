"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";
import ProjectPageClient from "@/components/project-page-client";

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectPageClient id={id} />
    </Suspense>
  );
}
