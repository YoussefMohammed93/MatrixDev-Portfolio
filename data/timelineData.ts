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
      "Programming",
    ],
    color: "#4f46e5",
  },
  {
    id: "career-2",
    title: "IEEE Frontend Developer Head",
    subtitle: "Frontend Developer",
    description:
      "Leading the frontend development of IEEE Mansoura Student Branch Chapter, responsible for website architecture and team coordination",
    startDate: "2024",
    endDate: "2025",
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
      "Mentored 25 peoples in the team",
      "Worked on IEEE Main Website of the chapter",
      "Built open source projects",
    ],
    color: "#ec4899",
  },
  {
    id: "career-3",
    title: "Frontend Developer",
    subtitle: "Freelance",
    description:
      "Successfully delivered 30+ real-world projects for clients worldwide. Leading development of web applications using modern technologies. Responsible for frontend architecture, performance optimization, and delivering high-quality solutions.",
    startDate: "2024",
    endDate: "Present",
    type: "career",
    location: "Remote",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Native",
      "Node.js",
      "MongoDB",
      "Framer Motion",
      "GSAP",
    ],
    achievements: [
      "Completed 30+ real-world projects for clients globally",
      "Built full-stack e-commerce platforms with payment integration",
      "Developed responsive dashboards and admin panels",
      "Created mobile applications using React Native",
      "Implemented modern UI/UX with animations and micro-interactions",
    ],
    color: "#0ea5e9",
  },
];
