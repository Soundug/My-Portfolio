
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-bold">
              Portfolio<span className="text-blue-400">.</span>
            </a>
            <p className="mt-4 text-gray-400 max-w-md">
              A passionate software developer focused on creating clean, user-friendly applications.
              Specialized in frontend development with expertise in React, TypeScript, and modern web technologies.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/Soundug" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/soundarya567/" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="soundaryagsk@gmail.com" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development", 
                "Frontend Development", 
                "UI/UX Design", 
                "Computer Vision Projects"
              ].map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 flex justify-center items-center gap-1">
            <span>&copy; {currentYear} Soundarya Goski. All Rights Reserved.</span>
            <span className="mx-1">|</span>
            <span className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by SG
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
