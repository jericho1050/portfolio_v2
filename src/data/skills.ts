export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'cloud' | 'tools' | 'other';

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "React", category: "frontend" },
  { name: "TypeScript", icon: "Typescript", category: "frontend" },
  { name: "JavaScript", icon: "Javascript", category: "frontend" },
  { name: "HTML5", icon: "Html5", category: "frontend" },
  { name: "CSS3", icon: "Css3", category: "frontend" },
  { name: "Tailwind CSS", icon: "Tailwindcss", category: "frontend" },
  { name: "Three.js", icon: "Threejs", category: "frontend" },
  { name: "Next.js", icon: "Nextjs", category: "frontend" },
  { name: "Vite", icon: "Vite", category: "frontend" },
  { name: "Material UI", icon: "MaterialUi", category: "frontend" },
  { name: "React Router", icon: "Reactrouter", category: "frontend" },
  { name: "Bootstrap", icon: "Bootstrap", category: "frontend" },
  
  // Backend
  { name: "Django", icon: "Django", category: "backend" },
  { name: "Django Rest Framework", icon: "Django", category: "backend" },
  { name: "Flask", icon: "Flask", category: "backend" },
  { name: "FastAPI", icon: "Fastapi", category: "backend" },
  { name: "Quart", icon: "Python", category: "backend" },
  { name: "Node.js", icon: "Nodejs", category: "backend" },
  { name: "Express", icon: "Express", category: "backend" },
  { name: "MongoDB", icon: "Mongodb", category: "backend" },
  { name: "PostgreSQL", icon: "Postgresql", category: "backend" },
  { name: "Sqlite", icon: "Sqlite", category: "backend" },
  { name: "GraphQL", icon: "Graphql", category: "backend" },
  { name: "Web3.js", icon: "Web3Dotjs", category: "backend" },
  
  // Cloud
  { name: "AWS", icon: "Amazonaws", category: "tools" },
  { name: "Heroku", icon: "Heroku", category: "cloud" },
  { name: "Neon", icon: "Neon", category: "cloud" },
  { name: "Digital Ocean", icon: "Digitalocean", category: "cloud" },
  { name: "Azure Static Web Apps", icon: "Microsoftazure", category: "cloud" },
  { name: "Azure", icon: "Microsoftazure", category: "cloud" },
  { name: "Netlify", icon: "Netlify", category: "cloud" },
  { name: "Vercel", icon: "Vercel", category: "cloud" },
  { name: "Together Ai", icon: "Openai", category: "cloud" },
  
  // Tools
  { name: "Git", icon: "Git", category: "tools" },
  { name: "Docker", icon: "Docker", category: "tools" },
  { name: "Nvim", icon: "Neovim", category: "tools" },
  { name: "Github Copilot", icon: "Github", category: "tools" },
  
  // Other
  { name: "Photoshop", icon: "Adobephotoshop", category: "other" },
  { name: "Figma", icon: "Figma", category: "other" },
  { name: "Testing", icon: "Jest", category: "other" },
  { name: "UI/UX", icon: "Framer", category: "other" }
];

export const getSkillsByCategory = (category: SkillCategory) => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (count: number = 6) => {
  return skills.slice(0, count);
};
