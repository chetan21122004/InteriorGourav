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
          <Button 
            variant="gold" 
            size="lg" 
            className="btn-professional bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-white shadow-elegant focus-ring flex items-center space-x-2 min-w-48"
            onClick={() => window.open("tel:+918210827736", "_self")}
          >
            <Phone className="w-5 h-5" />
            <span>CALL NOW</span>
          </Button>
          <Button 
            variant="navy" 
            size="lg" 
            className="btn-professional bg-gradient-to-r from-brand-navy to-blue-900 hover:from-blue-900 hover:to-brand-navy text-white shadow-elegant focus-ring flex items-center space-x-2 min-w-48"
            onClick={() => window.open("https://wa.me/918210827736?text=Hi%20Kumar%20Gaurav,%20I'm%20interested%20in%20your%20interior%20design%20services", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            <span>WHATSAPP</span>
          </Button>
        </StaggerAnimation>
      </div>
    </section>
  );
};