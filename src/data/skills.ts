export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: number; // 1-5
}

export type SkillCategory = 'frontend' | 'backend' | 'cloud' | 'tools' | 'other';

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "React", category: "frontend", level: 4 },
  { name: "TypeScript", icon: "Typescript", category: "frontend", level: 4 },
  { name: "JavaScript", icon: "Javascript", category: "frontend", level: 4 },
  { name: "HTML5", icon: "Html5", category: "frontend", level: 5 },
  { name: "CSS3", icon: "Css3", category: "frontend", level: 4 },
  { name: "Tailwind CSS", icon: "Tailwindcss", category: "frontend", level: 4 },
  { name: "Three.js", icon: "Threejs", category: "frontend", level: 2 },
  { name: "Next.js", icon: "Nextjs", category: "frontend", level: 4 },
  { name: "Vite", icon: "Vite", category: "frontend", level: 3 },
  { name: "Material UI", icon: "MaterialUi", category: "frontend", level: 3 },
  { name: "React Router", icon: "Reactrouter", category: "frontend", level: 3 },
  { name: "Bootstrap", icon: "Bootstrap", category: "frontend", level: 3 },
  
  // Backend
  { name: "Django", icon: "Django", category: "backend", level: 4 },
  { name: "Django Rest Framework", icon: "Django", category: "backend", level: 4 },
  { name: "Flask", icon: "Flask", category: "backend", level: 4 },
  { name: "FastAPI", icon: "Fastapi", category: "backend", level: 4 },
  { name: "Quart", icon: "Python", category: "backend", level: 3 },
  { name: "Node.js", icon: "Nodejs", category: "backend", level: 3 },
  { name: "Express", icon: "Express", category: "backend", level: 3 },
  { name: "MongoDB", icon: "Mongodb", category: "backend", level: 3 },
  { name: "PostgreSQL", icon: "Postgresql", category: "backend", level: 3 },
  { name: "Sqlite", icon: "Sqlite", category: "backend", level: 3 },
  { name: "GraphQL", icon: "Graphql", category: "backend", level: 2 },
  { name: "Web3.js", icon: "Web3Dotjs", category: "backend", level: 2 },
  
  // Cloud
  { name: "AWS", icon: "Amazonaws", category: "tools", level: 3 },
  { name: "Heroku", icon: "Heroku", category: "cloud", level: 3 },
  { name: "Neon", icon: "Neon", category: "cloud", level: 3 },
  { name: "Digital Ocean", icon: "Digitalocean", category: "cloud", level: 3 },
  { name: "Azure Static Web Apps", icon: "Microsoftazure", category: "cloud", level: 3 },
  { name: "Azure", icon: "Microsoftazure", category: "cloud", level: 3 },
  { name: "Netlify", icon: "Netlify", category: "cloud", level: 3 },
  { name: "Vercel", icon: "Vercel", category: "cloud", level: 3 },
  { name: "Together Ai", icon: "Openai", category: "cloud", level: 3 },
  
  // Tools
  { name: "Git", icon: "Git", category: "tools", level: 4 },
  { name: "Docker", icon: "Docker", category: "tools", level: 3 },
  { name: "Nvim", icon: "Neovim", category: "tools", level: 3 },
  { name: "Github Copilot", icon: "Github", category: "tools", level: 3 },
  
  // Other
  { name: "Photoshop", icon: "Adobephotoshop", category: "other", level: 4 },
  { name: "Figma", icon: "Figma", category: "other", level: 3 },
  { name: "Testing", icon: "Jest", category: "other", level: 3 },
  { name: "UI/UX", icon: "Framer", category: "other", level: 3 }
];

export const getSkillsByCategory = (category: SkillCategory) => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (count: number = 6) => {
  return skills
    .sort((a, b) => b.level - a.level)
    .slice(0, count);
};
