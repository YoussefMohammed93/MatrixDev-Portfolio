export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  challenge: string;
  solution: string;
  image: string;
  galleryImages: string[];
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Linkup - Fullstack Social Media Platform",
    description:
      "A full-featured social media platform with user authentication, post creation, and real-time updates.",
    detailedDescription:
      "This social media platform allows users to connect, share content, and interact with each other. It features user authentication, post creation, real-time updates, and a responsive design that works across all device sizes.",
    challenge:
      "The main challenge was creating a seamless social media experience while ensuring fast page loads and maintaining SEO performance. Additionally, implementing real-time updates and user authentication required careful integration with backend services.",
    solution:
      "I leveraged Next.js server-side rendering to optimize page load times and SEO. The application uses a combination of static generation for product pages and server-side rendering for dynamic content. For user authentication, I integrated Firebase with a custom login flow that supports multiple authentication methods.",
    image: "/linkup-1.png",
    galleryImages: ["/linkup-2.png", "/linkup-3.png", "/linkup-4.png"],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Convex DB",
      "Clerk Authentication",
    ],
    category: "Fullstack",
    liveUrl: "https://linkup-demo.vercel.app",
    githubUrl: "https://github.com/YoussefMohammed93/LinkUp",
    featured: true,
  },
  {
    id: 2,
    title: "Taskmate - Task Management App",
    description:
      "Task management application with real-time updates, user authentication, and task creation.",
    detailedDescription:
      "This task management application allows users to create, edit, and delete tasks. It features real-time updates, user authentication, and a responsive design that works across all device sizes.",
    challenge:
      "Creating a performant task management application with intuitive drag-and-drop functionality across different devices and browsers was challenging. Managing complex task relationships while maintaining a responsive interface required careful implementation.",
    solution:
      "I implemented a custom drag-and-drop system using react-dnd library, which provided a seamless user experience for task organization. The application uses optimistic UI updates for immediate feedback while handling background synchronization with the database. Context-based state management helped maintain performance even with complex task hierarchies and relationships.",
    image: "/taskmate-1.png",
    galleryImages: [
      "/taskmate-2.png",
      "/taskmate-3.png",
      "/taskmate-4.png",
      "/taskmate-5.png",
      "/taskmate-6.png",
      "/taskmate-7.png",
    ],
    tags: [
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "Tailwind CSS",
      "ConvexDB",
      "Clerk Authentication",
    ],
    category: "Fullstack",
    liveUrl: "https://task-mate-demo.vercel.app",
    githubUrl: "https://github.com/YoussefMohammed93/TaskMate",
    featured: true,
  },
  {
    id: 3,
    title: "Frontend Hub",
    description:
      "Frontend Hub - A comprehensive learning platform for web developers.",
    detailedDescription:
      "Frontend Hub is a centralized learning platform for aspiring and professional frontend developers. It features interactive tutorials, comprehensive documentation, structured learning roadmaps, and a blog with the latest industry trends and best practices. The platform helps users master HTML, CSS, JavaScript, and modern frameworks.",
    challenge:
      "Creating an intuitive learning experience that caters to developers of all skill levels while organizing complex technical content in an accessible way. Ensuring content remained up-to-date with rapidly evolving frontend technologies.",
    solution:
      "I developed a Next.js application with a content management system that organizes learning paths, documentation, and blog content. The platform features interactive code playgrounds, progress tracking, and personalized learning recommendations based on user skill level and interests.",
    image: "/frontend-hub-1.png",
    galleryImages: [
      "/frontend-hub-2.png",
      "/frontend-hub-3.png",
      "/frontend-hub-4.png",
      "/frontend-hub-5.png",
      "/frontend-hub-6.png",
      "/frontend-hub-7.png",
    ],
    tags: [
      "Next.js",
      "ConvexDB",
      "Typescript",
      "Tailwind CSS",
      "Shadcn UI",
      "Clerk Authentication",
    ],
    category: "Frontend",
    liveUrl: "https://frontend-hub-demo.vercel.app",
    githubUrl: "https://github.com/YoussefMohammed93/Front-end-hub",
    featured: true,
  },
  {
    id: 4,
    title: "Voxa Chat",
    description:
      "A real-time messaging application built with React Native, inspired by WhatsApp's clean interface.",
    detailedDescription:
      "Voxa Chat is a mobile messaging application featuring chat screens, contact lists, and a streamlined onboarding flow. The app includes interactive message features like swipe replies and long-press menus, along with robust image handling capabilities including in-message display and full-screen viewing.",
    challenge:
      "Implementing natural-feeling message interactions like swipe replies and long-press menus proved challenging. Image handling across different devices and ensuring proper display in both message threads and full-screen mode required significant optimization.",
    solution:
      "I built the application using React Native for the frontend with Convex powering the backend for real-time messaging capabilities. The UI design takes inspiration from WhatsApp's clean interface while adding custom interaction patterns for an intuitive messaging experience.",
    image: "/voxa-1.png",
    galleryImages: [
      "/voxa-2.jpeg",
      "/voxa-3.jpeg",
      "/voxa-4.jpeg",
      "/voxa-5.jpeg",
      "/voxa-6.jpeg",
      "/voxa-7.jpeg",
    ],
    tags: ["React Native", "ConvexDB", "Real-time Messaging", "Mobile App"],
    category: "Mobile Apps",
    githubUrl: "https://github.com/YoussefMohammed93/Voxa-Chat-App-ReactNative",
    featured: true,
  },
  {
    id: 5,
    title: "Notion Clone",
    description:
      "A Notion clone built with Next.js, ConvexDB, and Clerk Authentication.",
    detailedDescription:
      "This Notion clone application allows users to create, edit, and delete notes, notebooks, and tags. It features real-time updates, user authentication, and a responsive design that works across all device sizes.",
    challenge:
      "Creating a performant Notion clone application with intuitive drag-and-drop functionality across different devices and browsers was challenging. Managing complex note relationships while maintaining a responsive interface required careful implementation.",
    solution:
      "I built the application using Next.js for the frontend with ConvexDB powering the backend for real-time messaging capabilities. The UI design takes inspiration from WhatsApp's clean interface while adding custom interaction patterns for an intuitive messaging experience.",
    image: "/notion-1.png",
    galleryImages: ["/notion-2.png", "/notion-3.png", "/notion-4.png"],
    tags: [
      "Next.js",
      "Convex",
      "Clerk Authentication",
      "Tailwind CSS",
      "Typescript",
    ],
    category: "Fullstack",
    liveUrl: "https://notion-clone-matrix.vercel.app",
    githubUrl: "https://github.com/YoussefMohammed93/Notion-Clone",
    featured: false,
  },
  {
    id: 6,
    title: "Sneakers E-Commerce",
    description:
      "A responsive e-commerce website for sneakers built with React.js and Tailwind CSS.",
    detailedDescription:
      "This sneakers e-commerce website showcases a collection of premium footwear with product listings, detailed product pages, and a shopping cart. The site features responsive design that works seamlessly across all device sizes, from mobile to desktop.",
    challenge:
      "As one of my first React projects, the main challenge was implementing e-commerce functionality like product filtering, cart management, and checkout flow while maintaining clean code organization and state management.",
    solution:
      "I built the application using React.js with custom hooks for state management. The site implements advanced performance optimizations including lazy loading of images, code splitting, and optimized asset delivery for faster page loads. Tailwind CSS provided a utility-first approach that helped create a consistent design system.",
    image: "/ecommerce-1.png",
    galleryImages: ["/ecommerce-2.png", "/ecommerce-3.png", "/ecommerce-4.png"],
    tags: ["React.js", "Javascript", "Tailwind CSS", "Responsive Design"],
    category: "Frontend",
    liveUrl: "https://e-commerce-react-js-matrix.vercel.app",
    githubUrl: "https://github.com/YoussefMohammed93/E-Commerce-ReactJS",
    featured: false,
  },
  {
    id: 7,
    title: "Matbook - Social Media Website",
    description:
      "A real-time social media platform with user profiles, posts, and interactions.",
    detailedDescription:
      "Matbook is a social media platform where users can create profiles, share posts, and interact with content in real-time. The application features a responsive design, user authentication, and a dynamic feed that updates instantly when new content is posted.",
    challenge:
      "Implementing real-time updates across the platform while maintaining performance was challenging. Creating an intuitive user experience that encourages engagement required careful consideration of interaction design and feedback mechanisms.",
    solution:
      "I developed a Next.js application with Prisma for database management and Auth0 for secure authentication. The platform uses server-side rendering for initial page loads and client-side updates for real-time interactions, creating a seamless user experience with optimal performance.",
    image: "/matbook-1.png",
    galleryImages: ["/matbook-2.png", "/matbook-3.png", "/matbook-4.png"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Auth0"],
    category: "Fullstack",
    liveUrl: "https://e-commerce-react-js-matrix.vercel.app",
    githubUrl: "https://github.com/YoussefMohammed93/Matbook",
    featured: false,
  },
  {
    id: 8,
    title: "Slack Clone",
    description:
      "A real-time messaging application built with Next.js, inspired by Slack's clean interface.",
    detailedDescription:
      "This Slack clone application allows users to create, edit, and delete messages. It features real-time updates, user authentication, and a responsive design that works across all device sizes.",
    challenge:
      "Creating a performant Slack clone application with intuitive drag-and-drop functionality across different devices and browsers was challenging. Managing complex message relationships while maintaining a responsive interface required careful implementation.",
    solution:
      "I developed a React application that uses multiple weather data providers for accurate forecasts. The app implements interactive maps using Mapbox and custom data visualization components for weather conditions. Location detection and search functionality allow users to quickly find forecasts for any location.",
    image: "/slack-clone-1.png",
    galleryImages: ["/slack-clone-2.png"],
    tags: ["Next.js", "Auth0", "ConvexDB", "Typescript"],
    category: "Fullstack",
    liveUrl: "https://slack-clone-matrix.vercel.app",
    githubUrl: "https://github.com/YoussefMohammed93/Slack-Clone",
    featured: false,
  },
  {
    id: 9,
    title: "Full Responsive Dashboard",
    description:
      "A responsive admin dashboard built with Bootstrap, HTML, and CSS.",
    detailedDescription:
      "This admin dashboard was my first project focused on responsive design principles. It features a clean interface with various UI components including charts, tables, and form elements that adapt seamlessly to different screen sizes.",
    challenge:
      "As my first responsive web project, the main challenge was understanding and implementing Bootstrap's grid system and responsive utilities while ensuring consistent appearance across devices from mobile to desktop.",
    solution:
      "I leveraged Bootstrap's responsive framework along with custom CSS to create a flexible dashboard layout. The project helped me master responsive design concepts including media queries, flexible grids, and mobile-first development approaches.",
    image: "/dashboard-1.png",
    galleryImages: ["/dashboard-2.png", "/dashboard-3.png", "/dashboard-4.png"],
    tags: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
    category: "Frontend",
    liveUrl: "https://dashboard-bootstrap-matrix.vercel.app",
    githubUrl: "https://github.com/YoussefMohammed93/Dashboard-Bootstrap",
    featured: false,
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return category === "All"
    ? projects
    : projects.filter((project) => project.category === category);
}
