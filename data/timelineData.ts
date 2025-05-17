export interface TimelineEvent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  startDate: string;
  endDate: string | "Present";
  type: "education" | "career";
  icon?: string;
  logo?: string;
  color?: string;
  location?: string;
  skills?: string[];
  achievements?: string[];
  url?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "education-1",
    title: "Computer Science",
    subtitle: "Mansoura University",
    description:
      "Studying Computer Science with focus on software development and web technologies.",
    startDate: "2022",
    endDate: "Present",
    type: "education",
    location: "Mansoura, Egypt",
    skills: [
      "Algorithms",
      "Data Structures",
      "Software Engineering",
      "Web Development",
      "Operating Systems",
    ],
    color: "#4f46e5",
  },
  {
    id: "career-2",
    title: "IEEE Frontend Developer Vicehead",
    subtitle: "Frontend Developer",
    description:
      "Leading the frontend development of IEEE Mansoura Student Branch Chapter, responsible for website architecture and team coordination",
    startDate: "2024",
    endDate: "Present",
    type: "career",
    location: "Mansoura, Egypt",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "CSS3",
      "HTML5",
    ],
    achievements: [
      "Mentored people in team",
      "Worked on IEEE Website of chapter",
      "Built open source projects",
    ],
    color: "#ec4899",
  },
  {
    id: "career-3",
    title: "Frontend Developer",
    subtitle: "Freelance",
    description:
      "Leading development of web applications using Next.js. Responsible for frontend architecture, performance optimization, and mentoring junior developers.",
    startDate: "2024",
    endDate: "Present",
    type: "career",
    location: "Remote",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    achievements: [
      "Built a portfolio website for a startup company",
      "Developed an e-commerce platform with payment integration",
      "Implemented responsive dashboards for data visualization",
    ],
    color: "#0ea5e9",
  },
];
