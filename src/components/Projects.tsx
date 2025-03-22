
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-secondary/30 py-24">
      <div className="section-container">
        <div className="text-center mx-auto max-w-2xl mb-16 animate-fade-in">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore a collection of my latest projects showcasing a range of technologies and solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
