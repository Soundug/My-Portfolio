import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
}

const ProjectCard = ({ title, description, image, tags, github, liveDemo }: ProjectCardProps) => (
  <div className="project-card reveal">
    <img 
      src={image} 
      alt={title} 
      className="w-full aspect-video object-cover"
    />
    <div className="project-overlay">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-200 mb-4 text-center">{description}</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-3 py-1 rounded-full bg-blue-600/20 text-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {github && (
          <Button size="sm" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              Code
            </a>
          </Button>
        )}
        
        {liveDemo && (
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      title: "Blender Solar Panel VR Simulation",
      description: "Designed and developed a 3D solar panel simulation using Blender, demonstrating my 3D modeling and visualization skills aligned with VR/AR applications",
      image: "/public/ecoSolar_render1.png",
      tags: ["Blender", "HTML5 Canvas", "Virtual Reality"],
      github: "https://github.com/Soundug/ecoSolar_Blender_Demo"
    },
    {
      title: "Frontend Portfolio Website",
      description: "A website-based resume that showcases my education, experience and projects.",
      image: "/Animation.gif",
      tags: ["HTML/Tailwind CSS", "React.js", "TypeScript", "UI/UX"],
      github: "https://github.com/Soundug/My-Portfolio",
    },
    {
      title: "E-commerce Webscraper",
      description: "A webscraper built using Python and selenium to pull data from ecommerce websites based on search keywords.",
      image: "/public/ecomm_webscraper.png",
      tags: ["Python", "HTML/CSS", "BeautifulSoup", "requests", "Selenium"],
      github: "https://github.com/Soundug/Webscraper"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-gray-600 reveal">
            Here's a selection of my recent work. Each project reflects my commitment to quality, 
            creativity, and technical proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
