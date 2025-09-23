import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/BlogCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, categories, getPostsByCategory, getFeaturedPosts } from "@/data/blogData";
import { Search, Filter, Sparkles, TrendingUp, Home, ChevronRight } from "lucide-react";
import { PageTransition, ScrollAnimation, StaggerAnimation } from "@/components/animations";

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
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 py-16 md:py-20 lg:py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/work/15.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/60"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-brand-gold/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-float"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation animation="fadeDown">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  Design Insights & Inspiration
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeUp" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                  <span className="text-white">Interior Design</span>{" "}
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Blog
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeUp" delay={0.4}>
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Discover expert tips, latest trends, and inspiring ideas to transform your space
                </p>
              </ScrollAnimation>
              
              {/* Enhanced Search Bar */}
              <ScrollAnimation animation="scale" delay={0.6}>
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-brand-gold" />
                    <Input
                      type="text"
                      placeholder="Search for design trends, tips, inspiration..."
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      className="pl-12 pr-6 py-4 w-full text-lg rounded-2xl border-0 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 shadow-2xl focus:bg-white focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </ScrollAnimation>
              
              {/* Stats */}
              <ScrollAnimation animation="fadeUp" delay={0.8}>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white/80">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">{blogPosts.length}+</div>
                    <div className="text-sm md:text-base">Expert Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">{categories.length - 1}</div>
                    <div className="text-sm md:text-base">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                    <div className="text-sm md:text-base">Years Experience</div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <ScrollAnimation animation="fadeUp">
          <nav className="bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center space-x-2 text-sm">
                <a 
                  href="/" 
                  className="flex items-center text-gray-500 hover:text-brand-gold transition-colors duration-200 font-medium"
                >
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </a>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-brand-gold font-semibold">Blog</span>
                {(searchTerm || selectedCategory !== "All") && (
                  <>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 font-medium">
                      {searchTerm ? `Search: "${searchTerm}"` : selectedCategory}
                    </span>
                  </>
                )}
              </div>
            </div>
          </nav>
        </ScrollAnimation>

        {/* Main Content */}
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          
            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && searchTerm === "" && selectedCategory === "All" && (
              <ScrollAnimation animation="fadeUp">
                <section className="mb-16 md:mb-20">
                  <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold text-sm font-semibold mb-4">
                      <TrendingUp className="w-4 h-4" />
                      Editor's Choice
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                      Featured <span className="text-brand-gold">Stories</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Handpicked articles showcasing the latest trends and expert insights in interior design
                    </p>
                  </div>
                  
                  <StaggerAnimation staggerDelay={0.2}>
                    <div className="grid gap-12 md:gap-16">
                      {featuredPosts.map((post, index) => (
                        <div key={post.id} className="group">
                          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                            <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute top-6 left-6">
                                <span className="bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                  Featured
                                </span>
                              </div>
                            </div>
                            
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span className="bg-gray-100 text-brand-gold px-3 py-1 rounded-full font-medium">
                                  {post.category}
                                </span>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                              
                              <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4 leading-tight hover:text-brand-gold transition-colors cursor-pointer">
                                {post.title}
                              </h3>
                              
                              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg">
                                      {post.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="font-semibold text-brand-navy">{post.author}</p>
                                    <p className="text-sm text-gray-500">Interior Design Expert</p>
                                  </div>
                                </div>
                                
                                <Button 
                                  variant="gold" 
                                  className="group px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                  onClick={() => window.location.href = `/blog/${post.slug || post.id}`}
                                >
                                  Read Full Article
                                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </StaggerAnimation>
                </section>
              </ScrollAnimation>
            )}

            {/* Category Filter Section */}
            <ScrollAnimation animation="fadeUp">
              <section className="mb-16 md:mb-20 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                <div className="text-center mb-8 md:mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium mb-4">
                    <Filter className="w-4 h-4" />
                    Browse Articles
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                    Explore by <span className="text-brand-gold">Category</span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Find articles that match your interests and design style
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold text-sm font-semibold">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                  </div>
                </div>
                
                {/* Enhanced Category Buttons */}
                <StaggerAnimation staggerDelay={0.1}>
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "gold" : "outline"}
                        size="sm"
                        onClick={() => handleCategoryChange(category)}
                        className={`relative overflow-hidden rounded-full px-6 py-3 font-semibold transition-all duration-300 border-2 ${
                          selectedCategory === category
                            ? "shadow-xl scale-110 bg-gradient-to-r from-brand-gold to-yellow-500 text-white border-brand-gold transform"
                            : "border-gray-200 text-gray-700 hover:border-brand-gold hover:text-brand-gold hover:scale-105 hover:shadow-lg bg-white"
                        }`}
                      >
                        <span className="relative z-10">{category}</span>
                        {selectedCategory === category && (
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 animate-pulse"></div>
                        )}
                      </Button>
                    ))}
                  </div>
                </StaggerAnimation>
              </section>
            </ScrollAnimation>

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
                <ScrollAnimation animation="fadeUp">
                  <section className="mb-16 md:mb-20">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {searchTerm || selectedCategory !== "All" 
                          ? `Found ${currentPosts.length} articles matching your criteria`
                          : "Discover our latest interior design insights and inspiration"
                        }
                      </p>
                    </div>
                    
                    <StaggerAnimation staggerDelay={0.1}>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {currentPosts.map((post, index) => (
                          <article 
                            key={post.id} 
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                          >
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-sm text-brand-gold px-3 py-1 rounded-full text-xs font-semibold border border-brand-gold/20">
                                  {post.category}
                                </span>
                              </div>
                            </div>
                            
                            <div className="p-6">
                              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                              
                              <h4 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2 hover:text-brand-gold transition-colors cursor-pointer leading-tight">
                                {post.title}
                              </h4>
                              
                              <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                      {post.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-brand-navy">{post.author}</p>
                                    <p className="text-xs text-gray-500">Expert</p>
                                  </div>
                                </div>
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-brand-gold hover:text-white hover:bg-brand-gold transition-all duration-300 px-4 py-2 rounded-full group/btn"
                                  onClick={() => window.location.href = `/blog/${post.slug || post.id}`}
                                >
                                  Read More
                                  <ChevronRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </StaggerAnimation>
                  </section>
                </ScrollAnimation>

                {/* Enhanced Pagination */}
                {totalPages > 1 && (
                  <ScrollAnimation animation="fadeUp">
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
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
                  </ScrollAnimation>
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
    </PageTransition>
  );
};
