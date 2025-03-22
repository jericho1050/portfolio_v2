
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { Input } from "./ui/input";
import { SearchIcon, FilterIcon } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";

// Get unique categories from all projects
const getAllCategories = () => {
  const categories = projects.flatMap(project => project.tags || []);
  return ["All", ...Array.from(new Set(categories))];
};

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = getAllCategories();

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (project.description?.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || 
                           (project.tags && project.tags.includes(selectedCategory));
    
    return matchesSearch && matchesCategory;
  });

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

        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full sm:w-40">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category, index) => (
                  <SelectItem key={index} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {filteredProjects.length === 0 ? (
          <div className="text-center py-10 glass-card rounded-xl animate-fade-in">
            <p className="text-muted-foreground">No projects found. Try a different search term or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
