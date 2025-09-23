import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Clock } from "lucide-react";
import { ScrollAnimation, StaggerAnimation, ParallaxScroll } from "@/components/animations";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background with multiple images carousel effect */}
      <div className="absolute inset-0">
        <div className="hidden md:grid md:grid-cols-3 h-full">
          <div 
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(/work/1.jpg)` }}
          />
          <div 
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(/work/15.jpg)` }}
          />
          <div 
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(/work/13.jpg)` }}
          />
        </div>
        {/* Mobile single background */}
        <div 
          className="md:hidden w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(/work/15.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
          <div className="text-white text-center lg:text-left">
            {/* Stats badges */}
            <StaggerAnimation className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-6 md:mb-8" staggerDelay={0.2}>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm text-xs md:text-sm">
                <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-yellow-400 text-yellow-400" />
                4.9 Rating
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm text-xs md:text-sm">
                <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                500+ Projects
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm text-xs md:text-sm">
                <Award className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                Award Winning
              </Badge>
            </StaggerAnimation>
            
            <ScrollAnimation animation="fadeUp" delay={0.3}>
              <h1 className="text-hero mb-6 md:mb-8">
                <span className="block md:inline">Transform Your Space with</span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Kumar Gaurav
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.5}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Award-winning interior designer creating stunning spaces that reflect your personality and lifestyle
              </p>
            </ScrollAnimation>
            
            {/* Features */}
            <StaggerAnimation className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-6 md:mb-8" staggerDelay={0.15} animation="slideUp">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                <span className="text-white/80 text-sm md:text-base">7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                <span className="text-white/80 text-sm md:text-base">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                <span className="text-white/80 text-sm md:text-base">Budget Friendly</span>
              </div>
            </StaggerAnimation>
            
            <ScrollAnimation animation="scale" delay={0.8}>
              <Button 
                variant="gold" 
                className="btn-professional bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-white shadow-luxury focus-ring w-full sm:w-auto"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Portfolio
              </Button>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation animation="fadeLeft" delay={0.4} className="card-professional shadow-luxury w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0 p-6 md:p-8 backdrop-blur-sm bg-white/95 border border-white/20">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy">
                Get Free Quote
              </h3>
              <Badge className="bg-brand-gold text-white text-xs md:text-sm">Free</Badge>
            </div>
            
            <form className="space-y-4 md:space-y-5">
                <Input 
                  placeholder="Full Name" 
                  className="border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-xl h-12 md:h-14 text-sm md:text-base focus-ring"
                />
              <div className="flex">
                <div className="flex items-center space-x-1 md:space-x-2 px-3 md:px-4 py-2 md:py-3 border border-r-0 border-gray-300 rounded-l-xl bg-gray-50">
                  <span className="text-xs md:text-sm">🇮🇳</span>
                  <span className="text-xs md:text-sm font-medium">+91</span>
                </div>
                <Input 
                  placeholder="Phone number" 
                  className="rounded-l-none border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-r-xl h-12 md:h-14 text-sm md:text-base focus-ring"
                />
              </div>
              <Input 
                placeholder="Email (Optional)" 
                type="email"
                className="border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-xl h-12 md:h-14 text-sm md:text-base focus-ring"
              />
              <div className="flex items-start md:items-center space-x-3">
                <Checkbox id="whatsapp" className="border-brand-gold mt-1 md:mt-0" />
                <label htmlFor="whatsapp" className="text-xs md:text-sm text-gray-600 cursor-pointer leading-relaxed">
                  Send me updates on WhatsApp
                </label>
              </div>
              <Button 
                variant="gold" 
                className="btn-professional bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-white shadow-elegant focus-ring w-full" 
              >
                Get Free Consultation
              </Button>
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-brand-gold hover:underline">privacy policy</a> &{" "}
                <a href="#" className="text-brand-gold hover:underline">terms of service</a>
              </p>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};