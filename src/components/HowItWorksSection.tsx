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
      title: "(5% payment*) Book ",
      description: "",
    },
    {
      icon: Zap,
      title: "(80% payment) Execution begins",
      description: "",
    },
    {
      icon: Settings,
      title: "Multiple installations",
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
          <h2 className="text-4xl font-bold text- -dark mb-8">
            How it works
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text- -coral" />
                </div>
                <h3 className="font-semibold text- -dark text-center max-w-32">
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
            <Button 
              variant="gold" 
              size="lg"
              className="btn-professional bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-white shadow-elegant focus-ring"
              onClick={() => window.open("https://wa.me/918210827736?text=Hi%20Kumar%20Gaurav,%20I'd%20like%20to%20book%20a%20consultation%20for%20interior%20design%20services", "_blank")}
            >
              BOOK A CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};