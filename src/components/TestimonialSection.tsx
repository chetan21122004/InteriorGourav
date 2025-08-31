import { Play } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-16 bg-livspace-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/api/placeholder/500/350" 
                alt="Customer testimonial video"
                className="w-full rounded-lg shadow-medium"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-medium hover:shadow-large transition-all">
                  <Play className="w-6 h-6 text-livspace-coral ml-1" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-livspace-dark mb-4">
                Meenakshi & Anand Shankar
              </h3>
              <blockquote className="text-lg text-livspace-text-muted leading-relaxed">
                "We're really amazed with the ideas Livspace gave from the very first day. 
                Two of our other friends have already booked with Livspace."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};