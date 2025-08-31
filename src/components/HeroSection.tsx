import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white text-center lg:text-left">
            {/* Stats badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-6 md:mb-8">
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
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="block md:inline">Transform Your Space with</span>{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Kumar Gaurav
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Award-winning interior designer creating stunning spaces that reflect your personality and lifestyle
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                <span className="text-white/80 text-sm md:text-base">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                <span className="text-white/80 text-sm md:text-base">Premium Quality</span>
              </div>
            </div>
            
            <Button 
              variant="gold" 
              size="lg"
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Portfolio
            </Button>
          </div>
          
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-md mx-auto lg:ml-auto lg:mr-0 border border-white/20 mt-8 lg:mt-0">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy">
                Get Free Quote
              </h3>
              <Badge className="bg-brand-gold text-white text-xs md:text-sm">Free</Badge>
            </div>
            
            <form className="space-y-4 md:space-y-5">
              <Input 
                placeholder="Full Name" 
                className="border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-xl h-10 md:h-12 text-sm md:text-base"
              />
              <div className="flex">
                <div className="flex items-center space-x-1 md:space-x-2 px-3 md:px-4 py-2 md:py-3 border border-r-0 border-gray-300 rounded-l-xl bg-gray-50">
                  <span className="text-xs md:text-sm">🇮🇳</span>
                  <span className="text-xs md:text-sm font-medium">+91</span>
                </div>
                <Input 
                  placeholder="Phone number" 
                  className="rounded-l-none border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-r-xl h-10 md:h-12 text-sm md:text-base"
                />
              </div>
              <Input 
                placeholder="Email (Optional)" 
                type="email"
                className="border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-xl h-10 md:h-12 text-sm md:text-base"
              />
              <div className="flex items-start md:items-center space-x-3">
                <Checkbox id="whatsapp" className="border-brand-gold mt-1 md:mt-0" />
                <label htmlFor="whatsapp" className="text-xs md:text-sm text-gray-600 cursor-pointer leading-relaxed">
                  Send me updates on WhatsApp
                </label>
              </div>
              <Button 
                variant="gold" 
                className="w-full h-10 md:h-12 text-sm md:text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-300" 
                size="lg"
              >
                Get Free Consultation
              </Button>
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-brand-gold hover:underline">privacy policy</a> &{" "}
                <a href="#" className="text-brand-gold hover:underline">terms of service</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};