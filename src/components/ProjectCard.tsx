import React from "react";
import { ExternalLink, Github, Award } from "lucide-react";
import { Project } from "../data/projects";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden hover-scale animate-fade-in relative"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      {project.achievement && (
        <div className="absolute top-3 right-3 z-10">
          <Badge 
            variant="default" 
            className="bg-gradient-to-br from-amber-400 to-amber-600 text-white text-xs flex items-center gap-1 font-semibold shadow-lg px-2.5 py-1 border border-amber-700/50 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Award size={12} className="text-white" />
            {project.achievement}
          </Badge>
        </div>
      )}
      
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground font-medium hover:underline"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
