import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  X, 
  ArrowRight, 
  Star, 
  Clock, 
  CheckCircle, 
  Phone, 
  Mail,
  Calendar,
  Award,
  Shield,
  Zap,
  Eye,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Service } from "@/data/servicesData";
import { ScrollAnimation, StaggerAnimation } from "@/components/animations";

interface ServicesModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServicesModal = ({ service, isOpen, onClose }: ServicesModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Reset image index when service changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageModalOpen(false);
  }, [service]);

  if (!service) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  return (
    <>
      {/* Main Service Modal */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0 bg-gradient-to-br from-white to-gray-50">
          {/* Header */}
          <DialogHeader className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-6 z-10">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
                  {service.title}
                </DialogTitle>
                <p className="text-gray-600 text-lg">{service.shortDescription}</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-brand-gold text-white px-4 py-2 text-sm font-semibold">
                  {service.price}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </DialogHeader>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
            <div className="p-6 space-y-8">
              {/* Hero Image Section */}
              <ScrollAnimation animation="fadeUp">
                <div className="relative">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Main Image */}
                    <div className="relative group">
                      <div 
                        className="aspect-video rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                        onClick={() => openImageModal(currentImageIndex)}
                      >
                        <img
                          src={service.images[currentImageIndex]}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Image Navigation */}
                      {service.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={prevImage}
                            className="bg-black/20 hover:bg-black/40 text-white rounded-full p-2 backdrop-blur-sm"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={nextImage}
                            className="bg-black/20 hover:bg-black/40 text-white rounded-full p-2 backdrop-blur-sm"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Service Highlights */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-brand-gold" />
                          Service Highlights
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <Clock className="w-6 h-6 text-brand-gold mx-auto mb-2" />
                            <p className="text-sm font-semibold text-brand-navy">{service.duration}</p>
                            <p className="text-xs text-gray-600">Duration</p>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <Shield className="w-6 h-6 text-brand-gold mx-auto mb-2" />
                            <p className="text-sm font-semibold text-brand-navy">Warranty</p>
                            <p className="text-xs text-gray-600">Included</p>
                          </div>
                        </div>
                      </div>

                      {/* Quick Contact */}
                      <div className="bg-gradient-to-r from-brand-gold to-yellow-500 rounded-xl p-6 text-white">
                        <h3 className="text-lg font-bold mb-4">Get Started Today!</h3>
                        <div className="space-y-3">
                          <Button 
                            variant="secondary" 
                            className="w-full bg-white text-brand-gold hover:bg-gray-100 font-semibold"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now - +91 8210827736
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="w-full text-white border-white/30 hover:bg-white/10 font-semibold"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Detailed Tabs Section */}
              <ScrollAnimation animation="fadeUp" delay={0.2}>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-gray-100 p-1 rounded-xl">
                    <TabsTrigger value="overview" className="rounded-lg font-medium">Overview</TabsTrigger>
                    <TabsTrigger value="features" className="rounded-lg font-medium">Features</TabsTrigger>
                    <TabsTrigger value="process" className="rounded-lg font-medium">Process</TabsTrigger>
                    <TabsTrigger value="gallery" className="rounded-lg font-medium">Gallery</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-brand-navy mb-4">About This Service</h3>
                          <p className="text-gray-700 leading-relaxed">{service.longDescription}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-brand-navy mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-brand-gold" />
                            Key Benefits
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {service.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-brand-navy mb-4">What's Included</h4>
                          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <div className="space-y-3">
                              {service.included.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                          <h4 className="text-lg font-semibold text-brand-navy mb-3">Special Offer</h4>
                          <p className="text-gray-700 mb-4">Get a free 3D visualization with any service booking this month!</p>
                          <Button variant="gold" className="w-full font-semibold">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Book Now & Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Features Tab */}
                  <TabsContent value="features" className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-6">Service Features</h3>
                      <StaggerAnimation staggerDelay={0.1}>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {service.features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Star className="w-6 h-6 text-brand-gold" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-brand-navy mb-2">{feature}</h4>
                                  <p className="text-sm text-gray-600">Professional implementation with quality assurance and attention to detail.</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </StaggerAnimation>
                    </div>
                  </TabsContent>

                  {/* Process Tab */}
                  <TabsContent value="process" className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-6">Our Process</h3>
                      <div className="space-y-6">
                        {service.process.map((step, index) => (
                          <div key={index} className="flex gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {step.step}
                              </div>
                              {index < service.process.length - 1 && (
                                <div className="w-0.5 h-16 bg-brand-gold/30 mx-auto mt-4"></div>
                              )}
                            </div>
                            <div className="flex-1 pb-8">
                              <h4 className="text-xl font-semibold text-brand-navy mb-2">{step.title}</h4>
                              <p className="text-gray-700 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Gallery Tab */}
                  <TabsContent value="gallery" className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-6">Project Gallery</h3>
                      <StaggerAnimation staggerDelay={0.1}>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {service.images.map((image, index) => (
                            <div 
                              key={index} 
                              className="aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                              onClick={() => openImageModal(index)}
                            >
                              <img
                                src={image}
                                alt={`${service.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Eye className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </StaggerAnimation>
                    </div>
                  </TabsContent>
                </Tabs>
              </ScrollAnimation>

              {/* CTA Section */}
              <ScrollAnimation animation="fadeUp" delay={0.4}>
                <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-lg mb-6 text-blue-100">
                    Transform your space with our professional {service.name.toLowerCase()} service
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="gold" size="lg" className="px-8 py-4 text-lg font-semibold">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-brand-navy">
                      <Mail className="w-5 h-5 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-7xl max-h-[95vh] p-0 bg-black border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 hover:bg-white/10 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </Button>

            {service.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 hover:bg-white/10 rounded-full p-3"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 hover:bg-white/10 rounded-full p-3"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            <img
              src={service.images[currentImageIndex]}
              alt={`${service.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              {currentImageIndex + 1} / {service.images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
