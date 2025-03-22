
import React from "react";
import { Skill } from "../data/skills";
import { Progress } from "./ui/progress";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl hover-scale animate-fade-in group"
      style={{ animationDelay: `${0.2 + index * 0.05}s` }}
    >
      {/* Skill icon */}
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-transform group-hover:rotate-12">
        <span className="text-primary text-xl font-medium">{skill.name.substring(0, 2)}</span>
      </div>
      
      <h3 className="text-lg font-display font-bold mb-2 text-center">{skill.name}</h3>
      
      <div className="mt-4">
        <Progress value={skill.level * 20} className="h-2" />
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
