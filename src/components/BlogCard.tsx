import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  slug?: string;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export const BlogCard = ({ post, variant = "default", className = "" }: BlogCardProps) => {
  const handleReadMore = () => {
    // Navigate to blog post detail page
    console.log(`Navigate to blog post: ${post.slug || post.id}`);
  };

  if (variant === "featured") {
    return (
      <Card className={`overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group ${className}`}>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <Badge className="absolute top-6 left-6 bg-gradient-to-r from-brand-gold to-yellow-500 text-white px-4 py-2 font-semibold shadow-lg">
              ✨ Featured
            </Badge>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <Badge variant="outline" className="text-brand-gold border-brand-gold bg-brand-gold/5 px-3 py-1 font-medium">
                {post.category}
              </Badge>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 hover:text-brand-gold transition-colors cursor-pointer leading-tight">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-3 text-lg leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">{post.author}</p>
                  <p className="text-xs text-gray-500">Interior Design Expert</p>
                </div>
              </div>
              <Button 
                variant="gold" 
                className="group px-6 py-3 bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleReadMore}
              >
                Read Article
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === "compact") {
    return (
      <Card className={`overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
        <div className="flex gap-4 p-4">
          <div className="relative w-20 h-20 flex-shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex-1 min-w-0">
            <Badge variant="outline" className="text-xs text-brand-gold border-brand-gold mb-2">
              {post.category}
            </Badge>
            <h4 className="font-semibold text-brand-navy line-clamp-2 text-sm mb-2 hover:text-brand-gold transition-colors cursor-pointer">
              {post.title}
            </h4>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className={`overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-white ${className}`}>
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge 
          variant="outline" 
          className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-gold border-brand-gold font-medium px-3 py-1 shadow-md"
        >
          {post.category}
        </Badge>
      </div>
      <CardHeader className="pb-4 p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-brand-navy line-clamp-2 hover:text-brand-gold transition-colors cursor-pointer leading-tight mb-3">
          {post.title}
        </CardTitle>
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </CardHeader>
      <CardFooter className="pt-0 px-6 pb-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-brand-navy">{post.author}</p>
              <p className="text-xs text-gray-500">Expert</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-brand-gold hover:text-white hover:bg-brand-gold transition-all duration-300 px-4 py-2 rounded-full group"
            onClick={handleReadMore}
          >
            Read More 
            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
