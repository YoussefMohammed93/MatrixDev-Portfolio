export interface Skill {
  id: string;
  name: string;
  icon: string;
  iconDark?: string; // Optional dark mode icon
  category: string;
}

export const skillsData: Skill[] = [
  // Frontend Technologies
  {
    id: "html5",
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "frontend",
  },
  {
    id: "css3",
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "frontend",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "frontend",
  },
  {
    id: "react",
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    iconDark: "/next-js-icon.svg",
    category: "frontend",
  },
  {
    id: "svelte",
    name: "Svelte",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    category: "frontend",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: "/bootstrap-icon.svg",
    category: "frontend",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "frontend",
  },
  {
    id: "shadcn",
    name: "Shadcn UI",
    icon: "/shadcn-ui.png",
    category: "frontend",
  },
  {
    id: "framer",
    name: "Framer Motion",
    icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    iconDark: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    category: "frontend",
  },
  {
    id: "gsap",
    name: "GSAP",
    icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    iconDark: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    category: "frontend",
  },

  // Backend & Database
  {
    id: "nodejs",
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "backend",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "backend",
  },

  // Development Tools
  {
    id: "git",
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "tools",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    iconDark: "/github-icon.svg",
    category: "tools",
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "tools",
  },
  {
    id: "npm",
    name: "npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    category: "tools",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    iconDark: "/vercel-icon.svg",
    category: "tools",
  },
  {
    id: "cursor",
    name: "Cursor",
    icon: "https://www.cursor.com/assets/images/logo.svg",
    iconDark: "https://www.cursor.com/assets/images/logo.svg",
    category: "tools",
  },
  {
    id: "windsurf",
    name: "Windsurf",
    icon: "https://windsurf.com/favicon.svg",
    category: "tools",
  },
];
