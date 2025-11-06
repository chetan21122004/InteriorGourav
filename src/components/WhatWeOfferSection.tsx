import { Button } from "@/components/ui/button";
import { Settings, CreditCard, Shield, CheckCircle, Star, Award, ArrowRight, Eye, Sparkles, Users, Clock, TrendingUp, Zap, Target } from "lucide-react";
import { useServices } from "@/contexts/ServicesContext";
import { getServiceByName } from "@/data/servicesData";
import { ScrollAnimation, StaggerAnimation, ParallaxScroll } from "@/components/animations";

export const WhatWeOfferSection = () => {
  const { openServiceModal } = useServices();

  const services = [
    { 
      name: "Modular Kitchen", 
      icon: "🏠",
      serviceName: "Modular Kitchen",
      description: "Custom kitchen solutions with premium materials"
    },
    { 
      name: "Wardrobes", 
      icon: "👔",
      serviceName: "Wardrobes",
      description: "Stylish and organized storage solutions"
    }, 
    { 
      name: "Interior Design", 
      icon: "🎨",
      serviceName: "Interior Design",
      description: "Complete interior design transformation"
    },
    { 
      name: "3D Visualization", 
      icon: "👁️",
      serviceName: "3D Visualization",
      description: "Photorealistic 3D renders and walkthroughs"
    },
    { 
      name: "Complete Home", 
      icon: "🏡",
      serviceName: "Complete Home",
      description: "End-to-end home interior solutions"
    },
  ];

  const handleServiceClick = (serviceName: string) => {
    const service = getServiceByName(serviceName);
    if (service) {
      openServiceModal(service);
    }
  };

  const priceBenefits = [
    
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
    <section className="relative section-padding bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxScroll offset={50}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"></div>
        </ParallaxScroll>
        <ParallaxScroll offset={-30}>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </ParallaxScroll>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
      
        {/* Premium Services Showcase */}
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 backdrop-blur-sm rounded-full text-brand-gold text-sm font-semibold mb-6 border border-brand-gold/20">
                <Sparkles className="w-4 h-4" />
                Premium Solutions
              </div>
              <h3 className="text-section text-brand-navy mb-6 tracking-tight">
                What We{" "}
                <span className="bg-gradient-to-r from-brand-gold via-yellow-500 to-brand-gold bg-clip-text text-transparent">
                  Deliver
                </span>
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your living spaces with our comprehensive interior design expertise. Click on any service to explore detailed information, pricing, and our portfolio.
              </p>
            </div>
            
            <StaggerAnimation staggerDelay={0.1}>
              <div className="grid-cards">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service.serviceName)}
                    className="card-professional hover-lift focus-ring group text-left p-6 sm:p-8"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-gold/5 to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Service Icon */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-gold/20 to-yellow-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                      <div className="w-12 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
          </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
                        {service.name}
                      </h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-brand-gold opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          <Eye className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">View Details</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </StaggerAnimation>
          </div>
        </ScrollAnimation>
        
        {/* Value Proposition Grid */}
        <ScrollAnimation animation="fadeUp" delay={0.4}>
          <div className="grid-responsive mb-20">
            {/* Transparent Pricing */}
            <div className="card-professional hover-lift bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 p-6 sm:p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">Transparent Pricing</h4>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                No hidden costs or last-minute additions to your project budget. What you see is what you pay.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium text-green-800">Fixed Price Guarantee</span>
              </div>
            </div>
            
            {/* Quality Assurance */}
            <div className="card-professional hover-lift bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6 sm:p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">Quality Warranty</h4>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                Industry-leading 10-year product warranty and 1-year service coverage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-blue-800">10-year product warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-blue-800">1-year service warranty</span>
                </div>
              </div>
            </div>
            
            {/* Professional Excellence */}
            <div className="card-professional hover-lift bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 p-6 sm:p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">Expert Craftsmanship</h4>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                Award-winning designs backed by 7+ years of professional experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
                  <span className="text-sm text-purple-800">Award-winning designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span className="text-sm text-purple-800">150+ satisfied clients</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Why Choose Us - Redesigned */}
        <ScrollAnimation animation="fadeUp" delay={0.6}>
          <div className="relative mb-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 rounded-3xl"></div>
            <div className="absolute inset-0 bg-[url('/work/1.jpg')] bg-cover bg-center opacity-10 rounded-3xl"></div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16 rounded-3xl text-white">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4 text-brand-gold" />
                    Industry Leadership
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">
                    Why Choose <span className="text-brand-gold">Kumar Gaurav Interiors?</span>
                  </h3>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Experience excellence in every detail with India's most trusted interior design professionals
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-all duration-300">
                      <Star className="w-10 h-10 text-brand-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-brand-gold mb-2">5+</div>
                    <div className="text-white/90 font-medium">Years Experience</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-all duration-300">
                      <Users className="w-10 h-10 text-brand-gold group-hover:scale-110 transition-transform duration-300" />
            </div>
                    <div className="text-3xl font-bold text-brand-gold mb-2">500+</div>
                    <div className="text-white/90 font-medium">Happy Clients</div>
          </div>
          
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-all duration-300">
                      <Award className="w-10 h-10 text-brand-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
                    <div className="text-3xl font-bold text-brand-gold mb-2">4.9★</div>
                    <div className="text-white/90 font-medium">Client Rating</div>
              </div>
                  
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-all duration-300">
                      <Clock className="w-10 h-10 text-brand-gold group-hover:scale-110 transition-transform duration-300" />
            </div>
                    <div className="text-3xl font-bold text-brand-gold mb-2">45</div>
                    <div className="text-white/90 font-medium">Days Delivery t&c apply</div>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    {[
                      { icon: Star, text: "Award-Winning Design Excellence" },
                      { icon: Shield, text: "10-Year Quality Warranty" },
                      { icon: CheckCircle, text: "Transparent Pricing Policy" },
                      { icon: Zap, text: "Premium Material Sourcing" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center group-hover:bg-brand-gold/30 transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-brand-gold group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-lg text-white/90 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
                  
                  <div className="text-center lg:text-right">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                      <div className="text-5xl font-bold text-brand-gold mb-2">₹3.57L</div>
                      <div className="text-white/90 text-lg font-medium mb-2">Starting Price</div>
                      <div className="text-white/70 text-sm">Complete home interior solutions</div>
        </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                      <Button 
                        variant="gold" 
                        size="lg" 
                        className="flex-1 px-6 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                      >
                        <Target className="w-5 h-5 mr-2" />
                        Start Project
                      </Button>
                      <Button 
                        variant="gold" 
                        size="lg" 
                        className="flex-1 px-6 py-4 text-lg font-semibold border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                      >
                        <Users className="w-5 h-5 mr-2" />
                        Schedule Call
                      </Button>
                </div>
                </div>
                </div>
              </div>
            </div>
              </div>
        </ScrollAnimation>

        {/* Process Timeline */}
        <ScrollAnimation animation="fadeUp" delay={0.8}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Our Process
            </div>
            <h3 className="text-section text-brand-navy mb-6">
              How We <span className="text-brand-gold">Work</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              From consultation to completion, we ensure a seamless, professional experience with clear milestones and quality checkpoints
            </p>
            
            <div className="grid-responsive">
              {[
                { step: "01", title: "Consultation", desc: "Free design consultation and space analysis", icon: Users },
                { step: "02", title: "Planning", desc: "3D design concepts and material selection", icon: Target },
                { step: "03", title: "Execution", desc: "Professional implementation with quality control", icon: Settings },
                { step: "04", title: "Delivery", desc: "Final handover with warranty coverage", icon: CheckCircle }
              ].map((process, index) => (
                <div key={index} className="relative group">
                  <div className="card-professional hover-lift p-6 sm:p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-gold/20 to-yellow-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="w-10 h-10 text-brand-gold" />
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-brand-gold mb-4 font-mono">{process.step}</div>
                    <h4 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">{process.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{process.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 -right-6 w-12 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full opacity-60"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};