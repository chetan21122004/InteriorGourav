import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/BlogCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getPostById, getPostBySlug, getRelatedPosts, blogPosts } from "@/data/blogData";
import { 
  Home, 
  ChevronRight, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowLeft,
  Eye,
  ThumbsUp,
  MessageCircle
} from "lucide-react";
import { PageTransition, ScrollAnimation, StaggerAnimation } from "@/components/animations";
import type { BlogPost } from "@/components/BlogCard";

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (!id) return;
    
    // Try to find post by slug first, then by ID
    let foundPost = getPostBySlug(id);
    if (!foundPost) {
      foundPost = getPostById(parseInt(id));
    }
    
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost, 3));
    }
  }, [id]);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('.article-content');
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const progress = Math.min(
        Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
        1
      );
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = (platform: string) => {
    if (!post) return;
    
    const url = window.location.href;
    const title = post.title;
    const text = post.excerpt;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: () => navigator.clipboard.writeText(url)
    };

    if (platform === 'copy') {
      shareUrls.copy();
      // You could add a toast notification here
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls] as string, '_blank');
    }
  };

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-white">
          <Header />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-brand-navy mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button variant="gold" onClick={() => navigate('/blog')}>
              Back to Blog
            </Button>
          </div>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  const fullContent = `
    <p>In the world of interior design, <strong>color psychology</strong> plays a crucial role in creating spaces that not only look beautiful but also make us feel good. Understanding how different colors affect our mood, productivity, and overall well-being can transform the way we approach home decoration.</p>

    <h2>The Science Behind Color Psychology</h2>
    <p>Colors have the power to influence our emotions and behavior in subtle yet profound ways. This phenomenon, known as color psychology, has been studied extensively by researchers and has practical applications in interior design.</p>

    <blockquote>
      "Colors, like features, follow the changes of the emotions." - Pablo Picasso
    </blockquote>

    <h3>Warm Colors: Energy and Comfort</h3>
    <p><strong>Red, orange, and yellow</strong> are considered warm colors that can:</p>
    <ul>
      <li>Increase energy levels and stimulate conversation</li>
      <li>Create a cozy, inviting atmosphere</li>
      <li>Enhance appetite (perfect for dining rooms)</li>
      <li>Add warmth to north-facing rooms</li>
    </ul>

    <h3>Cool Colors: Calm and Serenity</h3>
    <p><strong>Blue, green, and purple</strong> are cool colors that typically:</p>
    <ul>
      <li>Promote relaxation and tranquility</li>
      <li>Lower blood pressure and heart rate</li>
      <li>Enhance focus and concentration</li>
      <li>Make small spaces appear larger</li>
    </ul>

    <h2>Room-by-Room Color Guide</h2>

    <h3>Living Room</h3>
    <p>The living room is where families gather and guests are entertained. Consider these color options:</p>
    <ul>
      <li><strong>Neutral base</strong> with colorful accents for versatility</li>
      <li><strong>Warm earth tones</strong> for a cozy, welcoming feel</li>
      <li><strong>Soft blues or greens</strong> for a calming atmosphere</li>
    </ul>

    <h3>Bedroom</h3>
    <p>Your bedroom should be a sanctuary for rest and relaxation:</p>
    <ul>
      <li><strong>Soft blues and lavenders</strong> promote better sleep</li>
      <li><strong>Warm grays and beiges</strong> create a sophisticated retreat</li>
      <li><strong>Avoid bright reds</strong> which can be too stimulating</li>
    </ul>

    <h3>Kitchen</h3>
    <p>The heart of the home deserves colors that energize and inspire:</p>
    <ul>
      <li><strong>Warm yellows</strong> create a cheerful cooking environment</li>
      <li><strong>Crisp whites</strong> make the space feel clean and spacious</li>
      <li><strong>Natural greens</strong> bring in a fresh, organic feel</li>
    </ul>

    <h2>Professional Tips for Using Color</h2>
    
    <h3>The 60-30-10 Rule</h3>
    <p>This classic design principle suggests using:</p>
    <ul>
      <li><strong>60%</strong> dominant neutral color</li>
      <li><strong>30%</strong> secondary color</li>
      <li><strong>10%</strong> accent color for pops of interest</li>
    </ul>

    <h3>Consider Natural Light</h3>
    <p>The amount and quality of natural light in your space will significantly affect how colors appear. Always test paint colors in different lighting conditions throughout the day.</p>

    <h2>Common Color Mistakes to Avoid</h2>
    <ul>
      <li>Choosing colors based on trends rather than personal preference</li>
      <li>Not considering the size and orientation of the room</li>
      <li>Using too many bold colors without enough neutrals to balance</li>
      <li>Forgetting about the ceiling - it's the fifth wall!</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Color psychology in interior design is both an art and a science. By understanding how different colors affect our emotions and behavior, we can create spaces that not only look beautiful but also support our lifestyle and well-being. Remember, the best color scheme is one that reflects your personality and makes you feel at home.</p>

    <p>Ready to transform your space with the power of color? Consider consulting with a professional interior designer who can help you create a color scheme that perfectly balances aesthetics with psychology.</p>
  `;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Reading Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-gold to-yellow-500 z-50 transition-all duration-300"
          style={{ width: `${readingProgress * 100}%` }}
        />
        
        {/* Breadcrumb Navigation */}
        <ScrollAnimation animation="fadeUp">
          <nav className="bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center space-x-2 text-sm">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center text-gray-500 hover:text-brand-gold transition-colors duration-200 font-medium mr-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </button>
                <a 
                  href="/" 
                  className="flex items-center text-gray-500 hover:text-brand-gold transition-colors duration-200 font-medium"
                >
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </a>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <a 
                  href="/blog"
                  className="text-gray-500 hover:text-brand-gold transition-colors duration-200 font-medium"
                >
                  Blog
                </a>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-brand-gold font-semibold">
                  {post.category}
                </span>
              </div>
            </div>
          </nav>
        </ScrollAnimation>

        {/* Hero Section */}
        <ScrollAnimation animation="fadeUp">
          <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    1.2k views
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-brand-navy text-lg">{post.author}</p>
                      <p className="text-sm text-gray-500">Interior Design Expert</p>
                    </div>
                  </div>
                </div>
                
                {/* Share Buttons */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('facebook')}
                    className="rounded-full"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="rounded-full"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Tweet
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    className="rounded-full"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`rounded-full ${isBookmarked ? 'text-brand-gold border-brand-gold' : ''}`}
                  >
                    <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? 'Saved' : 'Save'}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Featured Image */}
        <ScrollAnimation animation="scale">
          <section className="mb-12 md:mb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative max-w-6xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Article Content */}
        <ScrollAnimation animation="fadeUp">
          <article className="mb-16 md:mb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="article-content prose prose-lg md:prose-xl prose-brand max-w-none"
                  dangerouslySetInnerHTML={{ __html: fullContent }}
                  style={{
                    '--tw-prose-body': '#374151',
                    '--tw-prose-headings': '#1f2937',
                    '--tw-prose-lead': '#4b5563',
                    '--tw-prose-links': '#d97706',
                    '--tw-prose-bold': '#1f2937',
                    '--tw-prose-counters': '#6b7280',
                    '--tw-prose-bullets': '#d1d5db',
                    '--tw-prose-hr': '#e5e7eb',
                    '--tw-prose-quotes': '#1f2937',
                    '--tw-prose-quote-borders': '#d97706',
                    '--tw-prose-captions': '#6b7280',
                    '--tw-prose-code': '#1f2937',
                    '--tw-prose-pre-code': '#e5e7eb',
                    '--tw-prose-pre-bg': '#1f2937',
                    '--tw-prose-th-borders': '#d1d5db',
                    '--tw-prose-td-borders': '#e5e7eb',
                  } as React.CSSProperties}
                />
              </div>
            </div>
          </article>
        </ScrollAnimation>

        {/* Engagement Section */}
        <ScrollAnimation animation="fadeUp">
          <section className="mb-16 md:mb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">
                    Did you find this article helpful?
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Button variant="outline" className="rounded-full">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Helpful (24)
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comment
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  <p className="text-gray-600">
                    Join thousands of homeowners who trust our design expertise
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <ScrollAnimation animation="fadeUp">
            <section className="mb-16 md:mb-20 bg-gray-50 py-16 md:py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                    Related Articles
                  </h2>
                  <p className="text-lg text-gray-600">
                    Continue your interior design journey with these handpicked articles
                  </p>
                </div>
                
                <StaggerAnimation staggerDelay={0.2}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost) => (
                      <BlogCard 
                        key={relatedPost.id} 
                        post={relatedPost} 
                        className="shadow-lg hover:shadow-xl transition-all duration-300"
                      />
                    ))}
                  </div>
                </StaggerAnimation>
                
                <div className="text-center mt-12">
                  <Button 
                    variant="gold" 
                    size="lg"
                    onClick={() => navigate('/blog')}
                    className="px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View All Articles
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>
          </ScrollAnimation>
        )}

        <Footer />
      </div>
    </PageTransition>
  );
};
