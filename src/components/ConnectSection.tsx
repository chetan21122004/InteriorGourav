import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { ScrollAnimation, StaggerAnimation } from "@/components/animations";

export const ConnectSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            Connect with us
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <p className="text-lg text-brand-gray mb-12">
            Reach out on WhatsApp or give us a call for the best home design experience.
          </p>
        </ScrollAnimation>
        
        <StaggerAnimation className="flex flex-col sm:flex-row gap-4 justify-center items-center" staggerDelay={0.2}>
          <Button variant="gold" size="lg" className="flex items-center space-x-2 min-w-48">
            <Phone className="w-5 h-5" />
            <span>CALL NOW</span>
          </Button>
          <Button variant="navy" size="lg" className="flex items-center space-x-2 min-w-48">
            <MessageCircle className="w-5 h-5" />
            <span>WHATSAPP</span>
          </Button>
        </StaggerAnimation>
      </div>
    </section>
  );
};