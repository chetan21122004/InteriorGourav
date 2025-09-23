import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggerAnimation } from "@/components/animations";

export const BudgetSection = () => {
  const budgetOptions = [
    {
      price: "Modular Kitchen Starting at 1.75L*",
      image: "/work/2.jpg",
      alt: " Modular Kitchen",
    },
    {
      price: " 2bhk Starting at 6.75L*",
      image: "/work/1.jpg",
      alt: "2bhk",
    },
    {
      price: "3bhk Starting at 8.75L*",
      image: "/work/11.jpg",
      alt: "3bhk  8.75L",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollAnimation animation="fadeUp">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Homes for every budget
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <p className="text-lg text-brand-gray">
              Our interior designers work with you keeping in mind your requirements and budget
            </p>
          </ScrollAnimation>
        </div>
        
        <StaggerAnimation className="grid md:grid-cols-3 gap-8 mb-12" staggerDelay={0.2}>
          {budgetOptions.map((option, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-medium">
              <img 
                src={option.image} 
                alt={option.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {option.price}
                </span>
              </div>
            </div>
          ))}
        </StaggerAnimation>
        
        <ScrollAnimation animation="scale" delay={0.8}>
          <div className="text-center">
            <Button variant="gold" size="lg">
              GET FREE QUOTE
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};