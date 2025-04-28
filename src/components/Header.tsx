
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find which section is currently in view for active nav highlighting
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        if (!sectionId) return;
        
        const sectionTop = section.getBoundingClientRect().top;
        // If section is in viewport
        if (sectionTop < 200 && sectionTop >= -200) {
          current = sectionId;
        }
      });
      
      if (current) {
        setActiveLink(current);
      } else if (window.scrollY <= 100) {
        setActiveLink("home");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setMobileMenuOpen(false);
    setActiveLink(id);
    
    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-white/0 py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-blue-600">
          Portfolio<span className="text-gray-800">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.id);
              }}
              className={cn(
                "text-sm font-medium nav-link transition-colors",
                activeLink === item.id
                  ? "text-blue-600 active"
                  : "text-gray-700 hover:text-blue-600"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 mobile-nav">
          <div className="container-custom flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.id);
                }}
                className={cn(
                  "text-base font-medium px-2 py-1 border-l-2 transition-colors",
                  activeLink === item.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-700"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
