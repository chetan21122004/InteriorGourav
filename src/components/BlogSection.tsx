import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/BlogCard";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { getFeaturedPosts, getRecentPosts } from "@/data/blogData";

export const BlogSection = () => {
  const allPosts = getRecentPosts(6); // Get 6 posts for the slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const itemsPerSlide = 3; // Show 3 cards per slide on desktop
  const maxSlides = Math.ceil(allPosts.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % maxSlides);
      }, 5000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, maxSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
            Latest Insights
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight">
            Design Stories &{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Expert Tips
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, timeless principles, and insider secrets from the world of interior design
          </p>
        </div>

        {/* Professional Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {allPosts
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((post, index) => (
                        <div 
                          key={post.id} 
                          className={`group relative ${index < 2 ? 'md:border-r border-gray-100' : ''} ${index < 2 ? 'border-b md:border-b-0 border-gray-100' : ''}`}
                        >
                          {/* Card Content */}
                          <div className="p-6 md:p-8 h-full flex flex-col">
                            {/* Image */}
                            <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute top-3 left-3">
                                <span className="bg-white/90 backdrop-blur-sm text-brand-gold px-3 py-1 rounded-full text-xs font-semibold border border-brand-gold/20">
                                  {post.category}
                                </span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                              
                              <h3 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors cursor-pointer leading-tight">
                                {post.title}
                              </h3>
                              
                              <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                                {post.excerpt}
                              </p>

                              {/* Author & Read More */}
                              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                      {post.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-brand-navy">{post.author}</p>
                                    <p className="text-xs text-gray-500">Design Expert</p>
                                  </div>
                                </div>
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-brand-gold hover:text-white hover:bg-brand-gold transition-all duration-300 px-4 py-2 rounded-full group/btn"
                                >
                                  Read
                                  <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Left Controls */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAutoPlay}
                className="w-12 h-12 rounded-full text-gray-500 hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-8 h-3 bg-gradient-to-r from-brand-gold to-yellow-500' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Right Controls */}
            <div className="text-sm text-gray-500">
              {currentSlide + 1} / {maxSlides}
            </div>
          </div>
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <Button 
              variant="gold" 
              size="lg"
              className="group px-10 py-4 text-lg font-semibold bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 rounded-2xl"
              onClick={() => window.location.href = '/blog'}
            >
              Explore All Articles
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <p className="text-sm text-gray-500">
              {allPosts.length}+ expert articles on interior design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
