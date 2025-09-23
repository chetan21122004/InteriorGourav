import { Button } from "@/components/ui/button";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { ScrollAnimation } from "@/components/animations";
import { useServices } from "@/contexts/ServicesContext";
import { getServiceByName } from "@/data/servicesData";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { openServiceModal } = useServices();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleServiceClick = (serviceName: string) => {
    const service = getServiceByName(serviceName);
    if (service) {
      openServiceModal(service);
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navigationItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { 
      name: 'Services', 
      href: '#services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Interior Design', href: '#services', onClick: () => handleServiceClick('Interior Design') },
        { name: 'Modular Kitchen', href: '#services', onClick: () => handleServiceClick('Modular Kitchen') },
        { name: 'Wardrobes', href: '#services', onClick: () => handleServiceClick('Wardrobes') },
        { name: '3D Visualization', href: '#services', onClick: () => handleServiceClick('3D Visualization') },
        { name: 'Complete Home', href: '#services', onClick: () => handleServiceClick('Complete Home') }
      ]
    },
    { name: 'Portfolio', href: '#gallery', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'About', href: '#about', hasDropdown: false },
    { name: 'Contact', href: '#contact', hasDropdown: false }
  ];

  return (
    <>
      <header className="w-full shadow-xl sticky top-0 z-50 border-b border-white/20 transition-all duration-300 bg-brand-navy py-3 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <ScrollAnimation animation="fadeRight" className="flex items-center">
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/work/logo2.png" 
                alt="Gaurav Interior Logo" 
                className={`w-auto object-contain transition-all duration-300 h-8 sm:h-10 md:h-12`}
              />
             
            </a>
          </ScrollAnimation>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigationItems.map((item, index) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href}
                  className="nav-link flex items-center space-x-1 text-white hover:text-brand-gold transition-all duration-300 font-semibold py-3 px-4 rounded-lg hover:bg-white/15 text-sm lg:text-base border border-transparent hover:border-brand-gold/50 shadow-sm hover:shadow-lg"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-brand-navy">Our Services</h3>
                    </div>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        onClick={dropdownItem.onClick}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-brand-gold hover:bg-gray-50 transition-colors duration-200 border-l-2 border-transparent hover:border-brand-gold"
                      >
                        <div className="font-medium">{dropdownItem.name}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Phone number - hidden on small screens */}
            <ScrollAnimation animation="fadeLeft" delay={0.3}>
              <div className="hidden lg:flex items-center space-x-2 text-white bg-white/5 rounded-full px-3 lg:px-4 py-2 backdrop-blur-sm">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-brand-gold" />
                <a href="tel:+918210827736" className="font-medium hover:text-brand-gold transition-colors text-sm lg:text-base">
                  +91 8210827736
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scale" delay={0.4}>
              <Button 
                variant="gold" 
                size="sm"
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="hidden sm:inline">GET FREE QUOTE</span>
                <span className="sm:hidden">QUOTE</span>
              </Button>
            </ScrollAnimation>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-brand-gold transition-colors p-2 rounded-lg hover:bg-white/10"
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

        {/* Enhanced Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-navy/98 backdrop-blur-sm border-t border-white/10 animate-fade-in-up">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <a 
                      href={item.href}
                      className="nav-link flex items-center justify-between text-white hover:text-brand-gold transition-all duration-300 font-semibold py-4 px-4 rounded-lg hover:bg-white/15 border-l-4 border-transparent hover:border-brand-gold shadow-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="flex items-center space-x-3">
                        <span className="text-lg">{item.name}</span>
                      </span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </a>
                    
                    {/* Mobile Dropdown Items */}
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdownItems?.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={subItem.onClick}
                            className="block w-full text-left text-white/80 hover:text-brand-gold transition-colors duration-200 py-2 px-4 text-sm rounded-md hover:bg-white/5"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                  <a 
                    href="tel:+918210827736"
                    className="flex items-center space-x-3 text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/10"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <div>
                      <div className="font-medium">+91 8210827736</div>
                      <div className="text-sm text-white/70">Call for consultation</div>
                    </div>
                  </a>
                  
                  <Button 
                    variant="gold" 
                    className="w-full py-3 font-semibold hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    GET FREE QUOTE
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};