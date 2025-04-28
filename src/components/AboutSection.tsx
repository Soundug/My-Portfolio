import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { User, MapPin, Mail, School, Languages } from "lucide-react";

const AboutSection = () => {
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

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8 reveal"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500 rounded-lg z-0"></div>
              <img 
                src="/Soundarya-Goski-2.jpg"
                alt="Soundarya Goski - Professional headshot" 
                className="rounded-lg shadow-lg z-10 relative w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4 reveal">
              <h3 className="text-2xl font-bold text-gray-800">
                Hello, I'm Soundarya Goski
              </h3>
              <p className="text-lg text-gray-600">
                A passionate Visual Computing student with a Master's degree from TU Wien. 
                I combine technical expertise in computer vision and machine learning to create 
                innovative solutions that bridge technology and creativity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8 reveal">
              <Card className="p-4 bg-blue-50 border-none">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-blue-600" />
                  <h4 className="font-bold">Location</h4>
                </div>
                <p className="text-gray-600">Vienna, Austria</p>
              </Card>
              <Card className="p-4 bg-blue-50 border-none">
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} className="text-blue-600" />
                  <h4 className="font-bold">Email</h4>
                </div>
                <p className="text-gray-600 truncate">soundaryagsk@gmail.com</p>
              </Card>
              <Card className="p-4 bg-blue-50 border-none">
                <div className="flex items-center gap-2 mb-2">
                  <School size={16} className="text-blue-600" />
                  <h4 className="font-bold">Education</h4>
                </div>
                <p className="text-gray-600">MSc Visual Computing, TU Wien</p>
              </Card>
              <Card className="p-4 bg-blue-50 border-none">
                <div className="flex items-center gap-2 mb-2">
                  <Languages size={16} className="text-blue-600" />
                  <h4 className="font-bold">Languages</h4>
                </div>
                <p className="text-gray-600">
                  English, French, Japanese, 
                  German, Hindi
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
