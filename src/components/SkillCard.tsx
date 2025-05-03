
import React, { useState } from "react";
import { Skill } from "../data/skills";
import { motion } from "framer-motion";
// Import correct icon components from react-icons
import { 
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNextdotjs, SiVite, SiMui, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiSqlite, SiGraphql, SiDjango, SiFlask, SiFastapi,
  SiAmazon, SiHeroku, SiDigitalocean, SiNetlify, SiVercel,
  SiGit, SiDocker, SiNeovim, SiGithub, SiAdobephotoshop, SiFigma, SiJest, SiFramer,
  SiPython, SiOpenai, SiThreedotjs, SiBootstrap
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

// Icon mapping for all skills with correct names
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  React: SiReact,
  Typescript: SiTypescript,
  Javascript: SiJavascript,
  Html5: SiHtml5,
  Css3: SiCss3,
  Tailwindcss: SiTailwindcss,
  Threejs: SiThreedotjs,
  Nextjs: SiNextdotjs,
  Vite: SiVite,
  MaterialUi: SiMui,
  Reactrouter: SiReact,
  Bootstrap: SiBootstrap,
  Django: SiDjango,
  Flask: SiFlask,
  Fastapi: SiFastapi,
  Python: SiPython,
  Nodejs: SiNodedotjs,
  Express: SiExpress,
  Mongodb: SiMongodb,
  Postgresql: SiPostgresql,
  Sqlite: SiSqlite,
  Graphql: SiGraphql,
  Web3Dotjs: SiJavascript,
  Amazonaws: SiAmazon,
  Heroku: SiHeroku,
  Neon: SiPostgresql,
  Digitalocean: SiDigitalocean,
  Microsoftazure: VscAzure,
  Azure: VscAzure,
  Netlify: SiNetlify,
  Vercel: SiVercel,
  Openai: SiOpenai,
  Git: SiGit,
  Docker: SiDocker,
  Neovim: SiNeovim,
  Github: SiGithub,
  Adobephotoshop: SiAdobephotoshop,
  Figma: SiFigma,
  Jest: SiJest,
  Framer: SiFramer,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get the appropriate icon component or fallback to first two letters
  const renderIcon = () => {
    const IconComponent = iconMap[skill.icon];
    
    if (IconComponent) {
      return <IconComponent className="text-primary w-8 h-8" />;
    }
    
    return <span className="text-primary text-xl font-semibold">{skill.name.substring(0, 2)}</span>;
  };
  
  return (
    <motion.div 
      className="glass-card p-4 md:p-6 rounded-xl hover-scale group relative overflow-hidden h-full flex flex-col"
      style={{ animationDelay: `${0.2 + index * 0.05}s` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background glow effect on hover */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-all duration-500 group-hover:opacity-10 rounded-xl"
      />
      
      {/* Skill icon */}
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20 relative">
        {renderIcon()}

        {/* Subtle circular pulse animation */}
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-soft" />
      </div>
      
      <h3 className="text-base md:text-lg font-display font-bold text-center">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillCard;
