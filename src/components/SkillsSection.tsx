
import { useEffect, useRef } from "react";
import { Code2, Layout, Database, Terminal } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  className?: string;
}

const SkillCategory = ({ title, skills, icon, className }: SkillCategoryProps) => (
  <div className={`skill-card reveal ${className}`}>
    <div className="flex items-center gap-3 mb-4 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-gray-700">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const skillsData = [
    {
      title: "Web Technologies",
      icon: <Layout size={24} />,
      skills: ["Javascript", "HTML/CSS", "React", "Angular", "Typescript", "Asp.NET"]
    },
    {
      title: "Programming Languages and Database",
      icon: <Database size={24} />,
      skills: ["C++", "C#", "Python", "Golang", "MySQL"]
    },
    {
      title: "Data Science/ML",
      icon: <Code2 size={24} />,
      skills: ["NumPy", "Matplotlib", "Pandas", "Flask", "OpenCV", "PyTorch"]
    },
    {
      title: "Tools & Other",
      icon: <Terminal size={24} />,
      skills: ["Git", "Visual Studio", "Anaconda", "Figma", "CI/CD"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-gray-600 reveal">
            I've worked with a variety of programming languages, tools, and frameworks. 
            Here's an overview of my technical expertise and what I can bring to your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 dark:bg-gray-900 text-gray-900 dark:text-white">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              className={`transition-all duration-500 delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
