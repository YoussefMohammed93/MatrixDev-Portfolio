import type { Metadata } from "next";
import ProjectsPageClient from "@/components/projects-page-client";

export const metadata: Metadata = {
  title: "Projects | Youssef Mohammed",
  description:
    "Explore my portfolio of web and mobile development projects showcasing my skills in React, Next.js, and React Native.",
  keywords: [
    "Youssef Mohammed",
    "Frontend Developer",
    "React Projects",
    "Next.js Projects",
    "React Native Projects",
    "Web Development Portfolio",
    "Mobile Development Portfolio",
  ],
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
