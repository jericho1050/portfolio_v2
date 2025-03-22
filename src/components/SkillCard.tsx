
import React, { useState } from "react";
import { Skill } from "../data/skills";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate the percentage for display
  const percentage = skill.level * 20;
  
  // Define skill level label based on percentage
  const getSkillLabel = (level: number) => {
    if (level === 5) return "Expert";
    if (level === 4) return "Advanced";
    if (level === 3) return "Intermediate";
    if (level === 2) return "Basic";
    return "Beginner";
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
        <span className="text-primary text-lg md:text-xl font-medium">{skill.name.substring(0, 2)}</span>
        
        {/* Subtle circular pulse animation */}
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-soft" />
      </div>
      
      <h3 className="text-base md:text-lg font-display font-bold mb-2 text-center">{skill.name}</h3>
      
      <div className="mt-auto pt-4">
        <div className="flex justify-between mb-1.5 text-xs">
          <span className="font-medium text-muted-foreground">Proficiency</span>
          <span className="font-medium text-primary">{percentage}%</span>
        </div>
        
        <Progress 
          value={percentage} 
          className="h-2 bg-secondary/50" 
        />
        
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          <span>Beginner</span>
          <span className={`transition-colors duration-300 ${skill.level >= 3 ? "text-primary font-medium" : ""}`}>
            {getSkillLabel(skill.level)}
          </span>
          <span>Expert</span>
        </div>
      </div>
      
      {/* Experience indicators */}
      <div className="flex justify-center mt-3 space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div 
            key={level}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              level <= skill.level 
                ? "bg-primary scale-100" 
                : "bg-primary/20 scale-75"
            } ${
              isHovered && level <= skill.level ? "scale-125" : ""
            }`}
            style={{ 
              transitionDelay: `${level * 50}ms`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
