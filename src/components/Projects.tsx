
import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { Input } from "./ui/input";
import { 
  Search, 
  Filter, 
  SortAsc, 
  SortDesc, 
  Calendar, 
  Code, 
  X,
  ChevronDown
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

// Get unique categories from all projects
const getAllCategories = () => {
  const categories = projects.flatMap(project => project.tags || []);
  return ["All", ...Array.from(new Set(categories))];
};

// Get unique technologies from all projects
const getAllTechnologies = () => {
  const technologies = projects.flatMap(project => project.technologies);
  return Array.from(new Set(technologies));
};

type SortOption = "newest" | "oldest" | "name" | null;

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Number of projects to display per page
  
  const categories = useMemo(() => getAllCategories(), []);
  const technologies = useMemo(() => getAllTechnologies(), []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        // Match search term
        const matchesSearch = 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          (project.description?.toLowerCase().includes(searchTerm.toLowerCase()));
        
        // Match selected category
        const matchesCategory = 
          selectedCategory === "All" || 
          (project.tags && project.tags.includes(selectedCategory));
        
        // Match selected technologies (if any are selected)
        const matchesTech = 
          selectedTech.length === 0 || 
          selectedTech.some(tech => project.technologies.includes(tech));
        
        return matchesSearch && matchesCategory && matchesTech;
      })
      .sort((a, b) => {
        // Apply sorting
        switch (sortOption) {
          case "newest":
            return (b.date?.getTime() || 0) - (a.date?.getTime() || 0);
          case "oldest":
            return (a.date?.getTime() || 0) - (b.date?.getTime() || 0);
          case "name":
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
  }, [searchTerm, selectedCategory, selectedTech, sortOption]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Generate page numbers for pagination
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisiblePages = 5; // Maximum number of page links to show

    if (totalPages <= maxVisiblePages) {
      // If total pages are less than max visible, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of middle pages
      let startPage = Math.max(currentPage - 1, 2);
      let endPage = Math.min(currentPage + 1, totalPages - 1);

      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        endPage = Math.min(4, totalPages - 1);
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(totalPages - 3, 2);
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push("ellipsis-start");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push("ellipsis-end");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  // Handle technology selection
  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech) 
        : [...prev, tech]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedTech([]);
    setSortOption("newest");
    setCurrentPage(1); // Reset to first page
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

        {/* Enhanced search and filter bar */}
        <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 mb-10  mx-auto shadow-sm border border-white/20">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-10"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-40">
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto gap-2">
                  <SortAsc className="h-4 w-4" />
                  <span>Sort</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => setSortOption("newest")}
                  className={sortOption === "newest" ? "bg-secondary" : ""}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Newest First
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortOption("oldest")}
                  className={sortOption === "oldest" ? "bg-secondary" : ""}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Oldest First
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortOption("name")}
                  className={sortOption === "name" ? "bg-secondary" : ""}
                >
                  <SortAsc className="mr-2 h-4 w-4" />
                  Name (A-Z)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Technology filters */}
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm font-medium">Filter by Technology:</p>
              
              {selectedTech.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => setSelectedTech([])}
                >
                  Clear
                  <X className="ml-1 h-3 w-3" />
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant={selectedTech.includes(tech) ? "default" : "outline"}
                  className="cursor-pointer transition-colors"
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Active filters summary */}
          {(searchTerm || selectedCategory !== "All" || selectedTech.length > 0) && (
            <div className="mt-4 pt-3 border-t border-border flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">Active filters:</span>
              
              {searchTerm && (
                <Badge variant="secondary" className="text-xs gap-1 pl-2">
                  Search: {searchTerm}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setSearchTerm("")} />
                </Badge>
              )}
              
              {selectedCategory !== "All" && (
                <Badge variant="secondary" className="text-xs gap-1 pl-2">
                  Category: {selectedCategory}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setSelectedCategory("All")} />
                </Badge>
              )}
              
              {selectedTech.map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs gap-1 pl-2">
                  {tech}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => toggleTech(tech)} 
                  />
                </Badge>
              ))}
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="ml-auto h-6 text-xs"
                onClick={clearFilters}
              >
                Reset all
              </Button>
            </div>
          )}
        </div>
        
        {/* Display filtered projects or empty state */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-xl animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
              <Filter className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No matching projects</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filters to find what you're looking for.</p>
            <Button onClick={clearFilters}>Clear All Filters</Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => handlePageChange(currentPage - 1)} 
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                    )}
                    
                    {pageNumbers.map((page, index) => (
                      typeof page === 'number' ? (
                        <PaginationItem key={index}>
                          <PaginationLink 
                            onClick={() => handlePageChange(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={index}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => handlePageChange(currentPage + 1)} 
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;