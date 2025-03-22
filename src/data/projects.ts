
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart functionality, user authentication, and payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=2670&auto=format&fit=crop",
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/yourusername/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A productivity app for managing personal and team tasks with real-time updates and collaboration features.",
    imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2ed?q=80&w=2669&auto=format&fit=crop",
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/yourusername/taskmanager",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"]
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "An interactive weather application with forecasts, location search, and customizable user preferences.",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2670&auto=format&fit=crop",
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/yourusername/weatherapp",
    technologies: ["React", "OpenWeather API", "Chart.js"]
  },
  {
    id: "project-4",
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media analytics with data visualization and reporting features.",
    imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2674&auto=format&fit=crop",
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/yourusername/socialdashboard",
    technologies: ["Angular", "D3.js", "Node.js", "Express"]
  }
];
