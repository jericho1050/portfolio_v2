
import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { getSkillsByCategory, SkillCategory } from "../data/skills";
import { useIsMobile } from "../hooks/use-mobile";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");
  const isMobile = useIsMobile();
  
  const categories: { id: SkillCategory; label: string }[] = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "cloud", label: "Cloud" },
    { id: "tools", label: "Tools" },
    { id: "other", label: "Other" },
  ];
  
  const activeSkills = getSkillsByCategory(activeCategory);
  
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mx-auto max-w-2xl mb-12 animate-fade-in">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            I'm proficient in a range of technologies across the full development stack.
          </p>
        </div>
        
        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid - adjust columns based on screen size */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {activeSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
