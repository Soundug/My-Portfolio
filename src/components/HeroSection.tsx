import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const revealElements = heroRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => {
      setTimeout(() => {
        el.classList.add('active');
      }, 300);
    });
  }, []);

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreClick = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-60 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          <div className="space-y-6 reveal">
            <p className="text-blue-600 font-medium mb-2 reveal">Hello, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 reveal">
              Soundarya <span className="gradient-text">Goski</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 mb-6 reveal">
              Visual Computing student
            </h2>
            <p className="text-lg text-gray-600 max-w-xl reveal">
              I specialize in creating innovative solutions in computer vision, data visualization, combining technical expertise with creative problem-solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal">
              <Button 
                size="lg" 
                onClick={handleContactClick}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Contact Me
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={handleExploreClick}
              >
                Explore My Work
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4 reveal">
              <a href="https://github.com/Soundug" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
                <Github size={20} className="text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/soundarya567/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
                <Linkedin size={20} className="text-gray-700" />
              </a>
              <a href="soundaryagsk@gmail.com" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
                <Mail size={20} className="text-gray-700" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Developer workspace with laptop" 
                className="rounded-2xl shadow-2xl w-full max-w-lg object-cover z-10 relative"
              />
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity z-20"
          aria-label="Scroll Down"
        >
          <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
          <div className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors animate-bounce">
            <ArrowDown size={20} className="text-blue-500" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
