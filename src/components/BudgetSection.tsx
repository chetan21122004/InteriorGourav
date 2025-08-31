import { Button } from "@/components/ui/button";

export const BudgetSection = () => {
  const budgetOptions = [
    {
      price: "Starting at 3.57L*",
      image: "/work/2.jpg",
      alt: "Budget Home Interior",
    },
    {
      price: "Starting at 4.23L*",
      image: "/work/1.jpg",
      alt: "Premium Home Interior",
    },
    {
      price: "Starting at 4.81L*",
      image: "/work/11.jpg",
      alt: "Luxury Home Interior",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            Homes for every budget
          </h2>
          <p className="text-lg text-brand-gray">
            Our interior designers work with you keeping in mind your requirements and budget
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
        </div>
        
        <div className="text-center">
          <Button variant="gold" size="lg">
            GET FREE QUOTE
          </Button>
        </div>
      </div>
    </section>
  );
};