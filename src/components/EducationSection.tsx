
import { Card, CardContent } from "@/components/ui/card";
import { University } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-portfolio-soft-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            My educational background has provided me with a strong foundation in computer science
            and specialized knowledge in visual computing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900 text-gray-900 dark:text-white">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-portfolio-light-blue p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <University size={48} className="text-portfolio-accent" />
                    </div>
                    <h4 className="text-lg font-medium dark:bg-gray-900 text-gray-900 dark:text-white">2020 - 2022</h4>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-6 dark:bg-gray-900 text-gray-900 dark:text-white">
                  <h3 className="text-xl font-bold mb-2">Masters in Visual Computing</h3>
                  <h4 className="text-lg font-medium text-portfolio-accent mb-4">TU Wien (Vienna University of Technology)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 dark:bg-gray-900 text-gray-900 dark:text-white">
                      <div className="min-w-2 h-2 rounded-full bg-portfolio-accent mt-2"></div>
                      <span>Focus on computer graphics, computer vision, and image processing</span>
                    </li>
                    <li className="flex items-start gap-2 dark:bg-gray-900 text-gray-900 dark:text-white">
                      <div className="min-w-2 h-2 rounded-full bg-portfolio-accent mt-2"></div>
                      <span>Advanced coursework in machine learning and data visualization</span>
                    </li>
                    <li className="flex items-start gap-2 dark:bg-gray-900 text-gray-900 dark:text-white">
                      <div className="min-w-2 h-2 rounded-full bg-portfolio-accent mt-2"></div>
                      <span>Use of Blender, libcinder for computer animation</span>
                    </li>
                    <li className="flex items-start gap-2 dark:bg-gray-900 text-gray-900 dark:text-white">
                      <div className="min-w-2 h-2 rounded-full bg-portfolio-accent mt-2"></div>
                      <span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground italic">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
