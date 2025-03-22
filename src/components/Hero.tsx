
import React from "react";
import ThreeScene from "./ThreeScene";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-16 pb-24 flex flex-col justify-center">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Full-Stack Developer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Creating digital experiences with precision & purpose
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              I craft elegant solutions using modern technologies, focused on
              performance, accessibility, and exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <ThreeScene />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
        <a
          href="#projects"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="Scroll to projects"
        >
          <span className="text-sm font-medium mb-2">Scroll down</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
