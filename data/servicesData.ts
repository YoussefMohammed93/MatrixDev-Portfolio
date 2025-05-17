export interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  darkColor: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Creating responsive, accessible, and performant user interfaces using modern frontend technologies like React.js and Next.js. Focusing on clean code, component-based architecture, and optimal user experience.",
    icon: "code",
    color: "#4f46e5",
    darkColor: "#6366f1",
  },
  {
    id: 2,
    title: "Next.js Full Stack Development",
    description:
      "Building complete web applications with Next.js, leveraging server-side rendering, API routes, and database integration. Creating scalable, SEO-friendly applications with optimized performance.",
    icon: "layers",
    color: "#0ea5e9",
    darkColor: "#38bdf8",
  },
  {
    id: 3,
    title: "React Native Mobile Development",
    description:
      "Developing cross-platform mobile applications for iOS and Android using React Native. Creating native-like experiences with smooth animations, offline capabilities, and device-specific optimizations.",
    icon: "smartphone",
    color: "#ec4899",
    darkColor: "#f472b6",
  },
];
