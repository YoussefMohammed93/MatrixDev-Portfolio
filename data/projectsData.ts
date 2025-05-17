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
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration.",
    detailedDescription:
      "This e-commerce platform provides a complete shopping experience with product browsing, cart management, secure checkout, and payment processing. Built with Next.js for optimal performance and SEO, it features server-side rendering for fast page loads and improved search engine visibility.",
    challenge:
      "The main challenge was creating a seamless shopping experience while ensuring fast page loads and maintaining SEO performance. Additionally, implementing a secure payment system that works across different regions required careful integration with payment gateways.",
    solution:
      "I leveraged Next.js server-side rendering to optimize page load times and SEO. The application uses a combination of static generation for product pages and server-side rendering for dynamic content. For payments, I integrated Stripe with a custom checkout flow that supports multiple currencies and payment methods.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Fullstack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "3D Product Configurator",
    description:
      "Interactive 3D product visualization tool with customization options.",
    detailedDescription:
      "This 3D product configurator allows users to visualize products in three dimensions and customize various aspects like colors, materials, and components. Built with React and Three.js, it provides an immersive experience that helps customers make informed purchasing decisions.",
    challenge:
      "Creating a performant 3D experience on the web that works across different devices and browsers was challenging. Managing complex 3D models while keeping load times reasonable required careful optimization.",
    solution:
      "I used React Three Fiber to integrate Three.js with React, allowing for declarative scene creation. The application implements progressive loading techniques, where low-resolution models load first and are replaced with higher quality versions. Custom shaders were developed for realistic material rendering while maintaining performance.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["React", "Three.js", "React Three Fiber", "GLSL"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    description:
      "Data visualization dashboard with real-time updates and interactive charts.",
    detailedDescription:
      "This real-time dashboard provides businesses with up-to-date analytics and data visualization. It features interactive charts, customizable widgets, and real-time data updates through WebSocket connections. The dashboard is fully responsive and works across all device sizes.",
    challenge:
      "Handling real-time data updates while maintaining a smooth user experience was the primary challenge. Additionally, creating interactive visualizations that work well on both desktop and mobile required careful design considerations.",
    solution:
      "I implemented WebSocket connections for real-time data updates and used D3.js for creating custom, interactive visualizations. The application uses a responsive design approach with different visualization layouts for various screen sizes. Data caching and throttling mechanisms were implemented to prevent performance issues during high-frequency updates.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["Next.js", "D3.js", "WebSockets", "Tailwind CSS"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "Content generation tool powered by AI with customizable templates.",
    detailedDescription:
      "This AI-powered content generation tool helps users create high-quality content for various purposes. It features customizable templates, tone adjustment, and integration with popular content management systems. The application uses advanced natural language processing to generate human-like text.",
    challenge:
      "Integrating with AI APIs while providing a user-friendly interface was challenging. Ensuring the generated content was relevant and high-quality required careful prompt engineering and result processing.",
    solution:
      "I built a React frontend that communicates with a Node.js backend, which in turn interfaces with the OpenAI API. The application implements a template system that allows users to define the structure and parameters of the content they want to generate. Results are processed and formatted before being presented to the user.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    category: "Fullstack",
    githubUrl: "https://github.com/youssefmohammed/ai-content-generator",
    featured: true
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "Cross-platform mobile application for social networking and content sharing.",
    detailedDescription:
      "This social media application allows users to connect, share content, and interact with each other across different platforms. Built with React Native, it provides a native-like experience on both iOS and Android devices with features like real-time messaging, content feeds, and user profiles.",
    challenge:
      "Creating a consistent user experience across different platforms while implementing complex features like real-time messaging and media sharing was challenging. Managing state across the application and handling offline functionality added additional complexity.",
    solution:
      "I used React Native with Expo for cross-platform development, Firebase for backend services including authentication and real-time database, and Redux for state management. The application implements offline-first architecture with local data persistence and synchronization when connectivity is restored.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile Apps",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Mobile app for tracking workouts, nutrition, and health metrics with personalized insights.",
    detailedDescription:
      "This fitness tracking application helps users monitor their workouts, nutrition, and health metrics. It provides personalized insights and recommendations based on user data and goals. The app integrates with health platforms on iOS and Android for comprehensive health tracking.",
    challenge:
      "Integrating with platform-specific health APIs while maintaining a unified codebase was challenging. Creating accurate analytics and personalized recommendations required complex data processing and algorithm development.",
    solution:
      "I developed a React Native application that uses platform-specific modules to integrate with Apple HealthKit and Google Fit. The app implements custom algorithms for analyzing user data and generating personalized recommendations. GraphQL was used for efficient data fetching and updates.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["React Native", "TypeScript", "GraphQL", "Health Kit"],
    category: "Mobile Apps",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 7,
    title: "Portfolio Website Generator",
    description:
      "A tool that helps developers create professional portfolio websites with minimal configuration.",
    detailedDescription:
      "This portfolio website generator allows developers to create professional portfolio websites by simply providing their information and selecting from various templates and themes. The tool generates a fully responsive, SEO-optimized website that can be easily customized and deployed.",
    challenge:
      "Creating a flexible system that generates high-quality, customizable websites while keeping the user interface simple was challenging. Balancing automation with customization options required careful design decisions.",
    solution:
      "I built a Next.js application that uses a wizard-like interface to collect user information and preferences. The tool generates code based on templates and user inputs, allowing for preview and customization at each step. The final output is a complete Next.js project that can be deployed to Vercel or other hosting platforms.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Code Generation"],
    category: "Fullstack",
    githubUrl: "#",
    featured: false
  },
  {
    id: 8,
    title: "Weather Application",
    description:
      "A weather forecasting application with location-based predictions and interactive maps.",
    detailedDescription:
      "This weather application provides accurate forecasts with location-based predictions and interactive maps. Users can view current conditions, hourly forecasts, and extended predictions for multiple locations. The app features beautiful visualizations of weather data and severe weather alerts.",
    challenge:
      "Integrating with weather APIs and displaying complex meteorological data in an intuitive way was challenging. Creating interactive maps that work well on both desktop and mobile devices required careful implementation.",
    solution:
      "I developed a React application that uses multiple weather data providers for accurate forecasts. The app implements interactive maps using Mapbox and custom data visualization components for weather conditions. Location detection and search functionality allow users to quickly find forecasts for any location.",
    image: "/placeholder.svg?height=400&width=600",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["React", "Mapbox", "Weather API", "Data Visualization"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return category === "All" 
    ? projects 
    : projects.filter(project => project.category === category);
}
