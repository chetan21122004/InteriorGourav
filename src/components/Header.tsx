import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-brand-navy/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="/work/logo2.png" 
              alt="Gaurav Interior Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </div>

    

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Phone number - hidden on small screens */}
            <div className="hidden xl:flex items-center space-x-2 text-white">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span className="font-medium">+91 8210827736</span>
            </div>
            
            <Button 
              variant="gold" 
              size="sm"
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold hover:scale-105 transition-transform duration-300"
            >
              <span className="hidden sm:inline">GET FREE QUOTE</span>
              <span className="sm:hidden">QUOTE</span>
            </Button>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:text-brand-gold transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-brand-navy/98 backdrop-blur-sm border-t border-white/10">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#gallery" 
                  className="text-white hover:text-brand-gold transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a 
                  href="#services" 
                  className="text-white hover:text-brand-gold transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  className="text-white hover:text-brand-gold transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="text-white hover:text-brand-gold transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                
                {/* Mobile phone number */}
                <div className="flex items-center space-x-2 text-white py-2 border-t border-white/10 mt-4 pt-4">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span className="font-medium">+91 8210827736</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};