
import { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

const ExperienceItem = ({ title, company, period, description, index }: ExperienceItemProps) => (
  <div className={`reveal ${index % 2 === 0 ? 'lg:translate-x-12' : 'lg:-translate-x-12'}`}>
    <div className="bg-white rounded-lg shadow-md p-6 relative border-t-4 border-blue-500">
      <div className="absolute -top-10 left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
        <Briefcase size={24} className="text-white" />
      </div>
      
      <div className="mt-4">
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">{period}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-blue-600 font-medium mb-4">{company}</p>
        
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className="min-w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
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

  const experiences = [
    {
      title: "Associate Product Software Engineer",
      company: "Wolters Kluwer Pvt Ltd",
      period: "August 2022 - Feb 2024",
      description: [
        "Created taxonomies of the tax returns of ATO (Australian Taxation Office) for the financial year 2022",
        "Learned to use Validation API for rule translation for various disclosures in Income Tax Return provided by ATO(Australian Taxation Office)",
        "Reduced over 70% of risks by eliminating obstacles, ensuring a smoother project release",
        "Provided knowledge transfer sessions to new joinees for respective modules to reduce dependency"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Wolters Kluwer Pvt Ltd",
      period: "Mar 2022 - July 2022",
      description: [
        "Undertook Azure, Database, and C# training for work efficiency",
        "Implemented 80% unit-tests for the translated rules and high-priority bugs",
        "Participated in code reviews and contributed to improving development processes",
        "Adopted Scrum Agile Methodology at work (Daily Scrum Meeting, Sprint Backlog"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-gray-600 reveal">
            My professional journey has equipped me with valuable industry experience
            and a deep understanding of software development practices.
          </p>
        </div>

        <div className="relative">
          {/* Central timeline line - only visible on lg screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div key={index} className={`lg:flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <div className="lg:w-5/12">
                  <ExperienceItem
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    index={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
