import { Button } from "@/components/ui/button";
import { Home, ChefHat, Shirt } from "lucide-react";

export const EstimateSection = () => {
  const estimateOptions = [
    {
      icon: Home,
      title: "Full Home",
      description: "Get an approximate costing for your full home interiors.",
      buttonText: "CALCULATE",
    },
    {
      icon: ChefHat,
      title: "Kitchen",
      description: "Get an approximate costing for your kitchen interior.",
      buttonText: "CALCULATE",
    },
    {
      icon: Shirt,
      title: "Wardrobe",
      description: "Get an approximate costing for your wardrobe.",
      buttonText: "CALCULATE",
    },
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            Get an estimate for your home
          </h2>
          <p className="text-lg text-brand-gray">
            Calculate the approximate cost of doing up your interiors
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {estimateOptions.map((option, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <option.icon className="w-10 h-10 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                {option.title}
              </h3>
              <p className="text-brand-gray mb-6">
                {option.description}
              </p>
              <Button variant="gold" size="lg" className="w-full">
                {option.buttonText} &gt;
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};