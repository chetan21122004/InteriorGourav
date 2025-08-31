import { Button } from "@/components/ui/button";
import { Settings, CreditCard, Shield, CheckCircle, Star, Award } from "lucide-react";

export const WhatWeOfferSection = () => {
  const services = [
    { name: "Modular kitchens", icon: "🏠" },
    { name: "Modular wardrobes", icon: "👔" }, 
    { name: "Lighting design", icon: "💡" },
    { name: "Premium flooring", icon: "🏗️" },
    { name: "Electrical work", icon: "⚡" },
    { name: "Civil construction", icon: "🔨" },
    { name: "False ceiling", icon: "🏢" },
    { name: "Wall design & painting", icon: "🎨" },
  ];

  const priceBenefits = [
    {
      title: "Flexible Payment Plans",
      description: "EMI solutions and payment schemes from leading financial partners",
      highlight: "0% Interest Available"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs or last-minute additions to your project budget",
      highlight: "What You See Is What You Pay"
    },
  ];

  const warrantyFeatures = [
    {
      title: "10-Year Product Warranty",
      description: "Comprehensive warranty on all modular products and installations",
      badge: "Premium"
    },
    {
      title: "1-Year Service Warranty",
      description: "Complete coverage for painting, electrical, plumbing and maintenance",
      badge: "Included"
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight">
            What We{" "}
            <span className="relative">
              <span className="text-brand-gold">Offer</span>
              <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full opacity-30"></div>
            </span>
          </h2>
          
          {/* Enhanced Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-10 leading-relaxed font-light px-4 sm:px-0">
            Elevate your living spaces with our comprehensive interior design solutions. 
            <span className="font-medium text-brand-navy block sm:inline"> Premium quality craftsmanship</span>, 
            transparent pricing, and industry-leading warranties ensure your vision becomes reality.
          </p>
          
          {/* Premium CTA */}
          <div className="relative inline-block mb-6 md:mb-8">
            <Button 
              variant="gold" 
              size="lg"
              className="px-6 sm:px-8 md:px-10 py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group w-full sm:w-auto"
            >
              <span className="relative z-10">GET FREE CONSULTATION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Subtle Divider */}
          <div className="flex items-center justify-center mt-4 md:mt-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-gold rounded-full mx-3 md:mx-4 opacity-50"></div>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Our Services Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-xl flex items-center justify-center mr-3 md:mr-4">
                <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy">Our Services</h3>
                <p className="text-gray-500 text-xs md:text-sm">Complete interior solutions</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-2.5 md:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <span className="text-lg md:text-xl mr-2 md:mr-3 flex-shrink-0">{service.icon}</span>
                  <span className="text-brand-navy font-medium text-xs md:text-sm leading-tight">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Benefits Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 md:mr-4">
                <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy">Price Benefits</h3>
                <p className="text-gray-500 text-xs md:text-sm">Flexible & transparent pricing</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              {priceBenefits.map((benefit, index) => (
                <div key={index} className="border-l-4 border-brand-gold pl-3 md:pl-4">
                  <div className="flex items-start md:items-center mb-2">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 md:mt-0 flex-shrink-0" />
                    <h4 className="font-semibold text-brand-navy text-sm md:text-base">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mb-2 leading-relaxed">{benefit.description}</p>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2.5 md:px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Warranty Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 md:mr-4">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy">Warranty</h3>
                <p className="text-gray-500 text-xs md:text-sm">Industry-leading coverage</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              {warrantyFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 md:p-4 rounded-xl">
                  <div className="flex items-start md:items-center justify-between mb-2">
                    <h4 className="font-semibold text-brand-navy text-sm md:text-base pr-2">{feature.title}</h4>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${
                      feature.badge === "Premium" 
                        ? "bg-brand-gold text-white" 
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-brand-navy rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Why Choose <span className="text-brand-gold">Kumar Gaurav Interiors?</span>
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start md:items-center">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-brand-gold mr-3 fill-current flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-sm md:text-lg leading-relaxed">15+ Years of Excellence in Interior Design</span>
                </div>
                <div className="flex items-start md:items-center">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-brand-gold mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-sm md:text-lg leading-relaxed">Award-Winning Designs & Installations</span>
                </div>
                <div className="flex items-start md:items-center">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-gold mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-sm md:text-lg leading-relaxed">500+ Satisfied Customers Across India</span>
                </div>
                <div className="flex items-start md:items-center">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-brand-gold mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-sm md:text-lg leading-relaxed">Premium Quality Materials & Craftsmanship</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right mt-6 lg:mt-0">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-1 md:mb-2">4.9★</div>
                <div className="text-white/80 text-sm md:text-base">Customer Rating</div>
              </div>
              <div className="space-y-3">
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="w-full lg:w-auto px-6 md:px-8 py-3 font-semibold text-sm md:text-base"
                >
                  Schedule Free Consultation
                </Button>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Get personalized design solutions for your space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};