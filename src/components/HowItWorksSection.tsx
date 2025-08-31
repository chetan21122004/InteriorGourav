import { Button } from "@/components/ui/button";
import { User, FileText, Zap, Settings, Truck } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: User,
      title: "Meet a designer",
      description: "",
    },
    {
      icon: FileText,
      title: "(5% payment*) Book Livspace",
      description: "",
    },
    {
      icon: Zap,
      title: "(60% payment) Execution begins",
      description: "",
    },
    {
      icon: Settings,
      title: "(100% payment) Final installations",
      description: "",
    },
    {
      icon: Truck,
      title: "Move in and enjoy!",
      description: "",
    },
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-livspace-dark mb-8">
            How it works
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-livspace-coral" />
                </div>
                <h3 className="font-semibold text-livspace-dark text-center max-w-32">
                  {step.title}
                </h3>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gray-300" 
                       style={{ transform: "translateX(10px)" }}>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button variant="gold" size="lg">
              BOOK A CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};