import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/BlogCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, categories, getPostsByCategory, getFeaturedPosts } from "@/data/blogData";
import { Search, Filter, Sparkles, TrendingUp } from "lucide-react";

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Filter posts based on category and search term
  const filteredPosts = getPostsByCategory(selectedCategory).filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to first page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90"></div>
        <div className="absolute inset-0 bg-[url('/work/15.jpg')] bg-cover bg-center opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-gold/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              Interior Design Insights
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
              <span className="text-white">Design</span>{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Stories
              </span>
              <br className="hidden sm:block" />
              <span className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">& Expert Insights</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore the latest trends, timeless principles, and insider secrets from the world of interior design
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-brand-gold" />
                <Input
                  type="text"
                  placeholder="Search for design trends, tips, inspiration..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-12 pr-6 py-4 w-full text-lg rounded-2xl border-0 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 shadow-xl focus:bg-white focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-gold/20 to-yellow-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white/80">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{blogPosts.length}+</div>
                <div className="text-sm md:text-base">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{categories.length - 1}</div>
                <div className="text-sm md:text-base">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                <div className="text-sm md:text-base">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && searchTerm === "" && selectedCategory === "All" && (
            <section className="mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-8 md:mb-12">
                <TrendingUp className="w-6 h-6 text-brand-gold" />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
                  Featured Stories
                </h2>
              </div>
              <div className="space-y-8 md:space-y-12">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="group">
                    <BlogCard post={post} variant="featured" className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Category Filter */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <Filter className="w-6 h-6 text-brand-gold" />
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Explore by Category</h3>
              </div>
              <div className="text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </div>
            </div>
            
            {/* Enhanced Category Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap gap-3 md:gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "gold" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className={`relative overflow-hidden rounded-2xl px-6 py-3 font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "shadow-lg scale-105 bg-gradient-to-r from-brand-gold to-yellow-500 text-white border-0"
                      : "border-2 border-gray-200 text-gray-700 hover:border-brand-gold hover:text-brand-gold hover:scale-105 hover:shadow-md"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 animate-pulse"></div>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Search Results Summary */}
          {(searchTerm || selectedCategory !== "All") && (
            <div className="mb-8 md:mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-brand-navy mb-1">
                    {searchTerm ? (
                      <>Search Results for "<span className="text-brand-gold">{searchTerm}</span>"</>
                    ) : (
                      <>Showing <span className="text-brand-gold">{selectedCategory}</span> Articles</>
                    )}
                  </p>
                  <p className="text-gray-600">
                    Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                    {selectedCategory !== "All" && searchTerm && (
                      <> in {selectedCategory} category</>
                    )}
                  </p>
                </div>
                {(searchTerm || selectedCategory !== "All") && (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setCurrentPage(1);
                    }}
                    className="text-gray-500 hover:text-brand-gold"
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          {currentPosts.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
                {currentPosts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <BlogCard 
                      post={post} 
                      className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white"
                    />
                  </div>
                ))}
              </div>

              {/* Enhanced Pagination */}
              {totalPages > 1 && (
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-6 py-3 rounded-xl font-medium border-2 hover:border-brand-gold hover:text-brand-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      ← Previous
                    </Button>
                    
                    <div className="flex gap-2 md:gap-3">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <Button
                            key={pageNum}
                            variant={currentPage === pageNum ? "gold" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 ${
                              currentPage === pageNum 
                                ? "bg-gradient-to-r from-brand-gold to-yellow-500 text-white shadow-lg scale-110" 
                                : "border-2 hover:border-brand-gold hover:text-brand-gold hover:scale-105"
                            }`}
                          >
                            {pageNum}
                          </Button>
                        );
                      })}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-6 py-3 rounded-xl font-medium border-2 hover:border-brand-gold hover:text-brand-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      Next →
                    </Button>
                  </div>
                  
                  <div className="text-center mt-4 text-sm text-gray-500">
                    Showing page {currentPage} of {totalPages} ({filteredPosts.length} total articles)
                  </div>
                </div>
              )}
          </>
          ) : (
            /* Enhanced No Results */
            <div className="text-center py-16 md:py-24">
              <div className="max-w-lg mx-auto">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner">
                    <Search className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400/30 rounded-full animate-pulse delay-300"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                  No articles found
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We couldn't find any articles matching your search criteria. 
                  Try different keywords or explore our categories.
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h4 className="font-semibold text-brand-navy mb-3">Search suggestions:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Modern Design", "Color Psychology", "Small Spaces", "Kitchen Ideas"].map((suggestion) => (
                      <Button
                        key={suggestion}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSearchChange(suggestion)}
                        className="text-brand-gold hover:bg-brand-gold/10 border border-brand-gold/20 rounded-full"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setCurrentPage(1);
                    }}
                    className="px-6 py-3 rounded-xl border-2 hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                  >
                    Clear All Filters
                  </Button>
                  <Button 
                    variant="gold" 
                    onClick={() => window.location.href = "/#contact"}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold transition-all duration-300"
                  >
                    Get Design Consultation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
