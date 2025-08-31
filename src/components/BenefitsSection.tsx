import { Clock, Award, DollarSign } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "45 days move-in guarantee",
      subtitle: "2",
    },
    {
      icon: Award,
      title: "Flat 10-year warranty",
      subtitle: "1",
    },
    {
      icon: DollarSign,
      title: "No Hidden Cost",
      subtitle: "",
    },
  ];

  return (
    <section className=" bg-white">
      {/* <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12 lg:space-x-24">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-1">
                {benefit.title}
              </h3>
              {benefit.subtitle && (
                <sup className="text-brand-gold text-xs">
                  {benefit.subtitle}
                </sup>
              )}
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};