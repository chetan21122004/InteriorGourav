import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Eye } from "lucide-react";

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Generate image data for 1.jpg to 30.jpg
  const images = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    src: `/work/${i + 1}.jpg`,
    alt: `Interior Design Project ${i + 1}`,
    category: i < 10 ? "residential" : i < 20 ? "commercial" : "modern",
    title: `Project ${i + 1}`,
    description: i < 10 ? "Residential Interior" : i < 20 ? "Commercial Space" : "Modern Design"
  }));

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "modern", label: "Modern" }
  ];

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  const featuredImages = images.slice(0, 8); // Show first 8 as featured
  const itemsPerSlide = 4;
  const maxSlides = Math.ceil(filteredImages.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = images.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = images.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setSelectedImage(images[prevIndex].id);
    }
  };

  const selectedImageData = selectedImage 
    ? images.find(img => img.id === selectedImage)
    : null;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [maxSlides]);

  return (
    <section className="py-6 md:py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-3 md:mb-4">
            Our <span className="text-brand-gold">Portfolio</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4 sm:px-0">
            Discover our finest interior design projects that showcase creativity, functionality, and style
          </p>
        </div>

        {/* Featured Gallery Showcase */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl font-semibold text-brand-navy mb-4 md:mb-6 text-center">Featured Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {featuredImages.map((image) => (
              <div 
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 text-white">
                    <p className="font-semibold text-xs md:text-sm">{image.title}</p>
                    <p className="text-xs opacity-90 hidden sm:block">{image.description}</p>
                  </div>
                  <div className="absolute top-2 md:top-3 right-2 md:right-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => {
                setFilter(category.id);
                setCurrentSlide(0);
              }}
              className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all duration-300 ${
                filter === category.id 
                  ? "bg-brand-gold text-white hover:bg-brand-gold/90" 
                  : "border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Slider Gallery */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-2">
                    {filteredImages
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((image) => (
                        <div 
                          key={image.id}
                          className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                          onClick={() => openLightbox(image.id)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-white text-center">
                              <Eye className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2" />
                              <p className="text-xs md:text-sm font-medium">{image.title}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Navigation */}
          {maxSlides > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-brand-navy rounded-full w-8 h-8 md:w-10 md:h-10 p-0"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-brand-navy rounded-full w-8 h-8 md:w-10 md:h-10 p-0"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </>
          )}

          {/* Slide Indicators */}
          {maxSlides > 1 && (
            <div className="flex justify-center mt-4 md:mt-6 space-x-2">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-brand-gold w-4 md:w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
          <DialogContent className="max-w-6xl max-h-[90vh] p-0 border-0 bg-black">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 hover:bg-white/10 rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 hover:bg-white/10 rounded-full"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 hover:bg-white/10 rounded-full"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image */}
              {selectedImageData && (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <img
                    src={selectedImageData.src}
                    alt={selectedImageData.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}

              {/* Image Info */}
              {selectedImageData && (
                <div className="absolute bottom-4 left-4 text-white bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-1">
                    {selectedImageData.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {selectedImageData.description}
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-12">
          <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-2 md:mb-3">
            Ready to Transform Your Space?
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 px-4 sm:px-0">
            Let's discuss your dream interior design project
          </p>
          <Button 
            variant="gold" 
            size="lg"
            className="px-6 md:px-8 py-3 font-semibold hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-sm md:text-base"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};