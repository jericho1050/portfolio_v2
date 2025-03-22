export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: number; // 1-5
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other';

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend", level: 5 },
  { name: "TypeScript", icon: "typescript", category: "frontend", level: 4 },
  { name: "JavaScript", icon: "javascript", category: "frontend", level: 5 },
  { name: "HTML5", icon: "html", category: "frontend", level: 5 },
  { name: "CSS3", icon: "css", category: "frontend", level: 5 },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend", level: 4 },
  { name: "Three.js", icon: "threejs", category: "frontend", level: 3 },
  
  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend", level: 4 },
  { name: "Express", icon: "express", category: "backend", level: 4 },
  { name: "MongoDB", icon: "mongodb", category: "backend", level: 3 },
  { name: "PostgreSQL", icon: "postgresql", category: "backend", level: 3 },
  { name: "GraphQL", icon: "graphql", category: "backend", level: 2 },
  
  // Tools
  { name: "Git", icon: "git", category: "tools", level: 4 },
  { name: "Docker", icon: "docker", category: "tools", level: 3 },
  { name: "AWS", icon: "aws", category: "tools", level: 2 },
  
  // Other
  { name: "Figma", icon: "figma", category: "other", level: 3 },
  { name: "Testing", icon: "testing", category: "other", level: 3 },
  { name: "UI/UX", icon: "ux", category: "other", level: 4 }
];

export const getSkillsByCategory = (category: SkillCategory) => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (count: number = 6) => {
  return skills
    .sort((a, b) => b.level - a.level)
    .slice(0, count);
};
