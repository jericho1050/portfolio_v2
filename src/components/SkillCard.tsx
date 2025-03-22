
import React from "react";
import { Skill } from "../data/skills";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl text-center hover-scale animate-fade-in"
      style={{ animationDelay: `${0.2 + index * 0.05}s` }}
    >
      {/* Placeholder for skill icon */}
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <span className="text-primary text-xl font-medium">{skill.name.substring(0, 2)}</span>
      </div>
      
      <h3 className="text-lg font-display font-bold mb-2">{skill.name}</h3>
      
      <div className="flex justify-center mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className={`w-2 h-2 rounded-full mx-0.5 ${
              i < skill.level ? "bg-primary" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
