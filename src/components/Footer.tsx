import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Modular Kitchens",
    "Wardrobes & Closets", 
    "Living Room Design",
    "Bedroom Interiors",
    "Office Interiors",
    "Complete Home Design"
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Get Quote", href: "#quote" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <Button
          onClick={() => window.open("https://wa.me/918210827736?text=Hi%20Kumar%20Gaurav,%20I'm%20interested%20in%20your%20interior%20design%20services", "_blank")}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 md:w-20 md:h-20 shadow-lg hover:shadow-xl transition-all duration-200"
          size="icon"
        >
          {/* WhatsApp SVG Icon */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 md:w-10 md:h-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
          </svg>
          <span className="sr-only">Chat on WhatsApp</span>
        </Button>
        
        {/* Simple Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-brand-navy to-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/work/logo2.png" 
                  alt="Kumar Gaurav Interiors" 
                  className="h-10 md:h-12 w-auto object-contain mb-4"
                />
                <h3 className="text-xl md:text-2xl font-bold text-brand-gold mb-2">
                  Kumar Gaurav Interiors
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Transform your spaces with award-winning interior design solutions. 
                  7+ years of excellence in creating beautiful, functional environments.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-brand-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-brand-gold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-brand-gold transition-colors duration-300 text-sm md:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-brand-gold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 text-sm md:text-base">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-brand-gold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">+91 8210827736</p>
                    <p className="text-xs text-gray-400">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">kgdicky01@gmail.com</p>
                    <p className="text-xs text-gray-400">Quick response guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">Serving Across India</p>
                    <p className="text-xs text-gray-400">Premium interior solutions</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Button 
                  variant="gold" 
                  className="w-full md:w-auto px-6 py-3 font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-300">
                  © {currentYear} Kumar Gaurav Interiors. All Rights Reserved.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Professional Interior Design Services | Premium Quality | Award Winning
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-xs text-gray-400">
                <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-brand-gold transition-colors">Sitemap</a>
              </div>
            </div>
        </div>
      </div>
    </footer>
    </>
  );
};