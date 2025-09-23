import { BlogPost } from "@/components/BlogCard";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Modern Interior Design Trends for 2024",
    excerpt: "Discover the latest interior design trends that are shaping homes this year, from sustainable materials to bold color palettes. Learn how to incorporate these trends into your space.",
    image: "/work/15.jpg",
    category: "Trends",
    author: "Kumar Gaurav",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    featured: true,
    slug: "modern-interior-design-trends-2024"
  },
  {
    id: 2,
    title: "Maximizing Small Spaces: Smart Design Solutions",
    excerpt: "Learn how to make the most of limited space with clever storage solutions and multi-functional furniture. Transform your compact home into a spacious haven.",
    image: "/work/13.jpg",
    category: "Tips",
    author: "Kumar Gaurav",
    date: "Dec 10, 2024",
    readTime: "4 min read",
    featured: false,
    slug: "maximizing-small-spaces-smart-design"
  },
  {
    id: 3,
    title: "The Psychology of Colors in Interior Design",
    excerpt: "Understand how different colors affect mood and atmosphere in your living spaces. Create the perfect ambiance with strategic color choices.",
    image: "/work/1.jpg",
    category: "Design Psychology",
    author: "Kumar Gaurav",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    featured: false,
    slug: "psychology-colors-interior-design"
  },
  {
    id: 4,
    title: "Sustainable Interior Design: Eco-Friendly Choices",
    excerpt: "Explore environmentally conscious design options that don't compromise on style or functionality. Build a beautiful, sustainable home.",
    image: "/work/11.jpg",
    category: "Sustainability",
    author: "Kumar Gaurav",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    featured: false,
    slug: "sustainable-interior-design-eco-friendly"
  },
  {
    id: 5,
    title: "Kitchen Design: Creating the Heart of Your Home",
    excerpt: "Essential tips for designing a functional and beautiful kitchen that serves as the centerpiece of your home. From layout to lighting.",
    image: "/work/2.jpg",
    category: "Kitchen Design",
    author: "Kumar Gaurav",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    featured: false,
    slug: "kitchen-design-heart-of-home"
  },
  {
    id: 6,
    title: "Bedroom Sanctuary: Designing for Better Sleep",
    excerpt: "Create a peaceful retreat that promotes restful sleep. Learn about color schemes, lighting, and furniture placement for optimal relaxation.",
    image: "/work/3.jpg",
    category: "Bedroom Design",
    author: "Kumar Gaurav",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    featured: false,
    slug: "bedroom-sanctuary-better-sleep"
  },
  {
    id: 7,
    title: "Living Room Layouts: Maximizing Comfort and Style",
    excerpt: "Discover how to arrange your living room furniture for optimal flow and comfort. Tips for different room sizes and shapes.",
    image: "/work/4.jpg",
    category: "Living Room",
    author: "Kumar Gaurav",
    date: "Nov 8, 2024",
    readTime: "6 min read",
    featured: false,
    slug: "living-room-layouts-comfort-style"
  },
  {
    id: 8,
    title: "Lighting Design: Setting the Perfect Mood",
    excerpt: "Master the art of interior lighting with layered lighting techniques. From ambient to task lighting, create the perfect atmosphere.",
    image: "/work/5.jpg",
    category: "Lighting",
    author: "Kumar Gaurav",
    date: "Nov 1, 2024",
    readTime: "7 min read",
    featured: false,
    slug: "lighting-design-perfect-mood"
  },
  {
    id: 9,
    title: "Budget-Friendly Home Makeover Ideas",
    excerpt: "Transform your space without breaking the bank. Creative and affordable solutions for every room in your home.",
    image: "/work/6.jpg",
    category: "Budget Design",
    author: "Kumar Gaurav",
    date: "Oct 25, 2024",
    readTime: "5 min read",
    featured: false,
    slug: "budget-friendly-home-makeover"
  },
  {
    id: 10,
    title: "Wardrobe Organization: Maximizing Storage Space",
    excerpt: "Efficient storage solutions and organization tips for your wardrobe. Make the most of every inch with smart design choices.",
    image: "/work/7.jpg",
    category: "Storage",
    author: "Kumar Gaurav",
    date: "Oct 18, 2024",
    readTime: "4 min read",
    featured: false,
    slug: "wardrobe-organization-storage-space"
  },
  {
    id: 11,
    title: "Home Office Design: Productivity Meets Style",
    excerpt: "Create an inspiring workspace that boosts productivity while maintaining aesthetic appeal. Essential elements for the perfect home office.",
    image: "/work/8.jpg",
    category: "Home Office",
    author: "Kumar Gaurav",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    featured: false,
    slug: "home-office-design-productivity-style"
  },
  {
    id: 12,
    title: "Texture and Pattern: Adding Visual Interest",
    excerpt: "Learn how to mix textures and patterns to create depth and visual interest in your interior design. A guide to balanced aesthetics.",
    image: "/work/9.jpg",
    category: "Design Elements",
    author: "Kumar Gaurav",
    date: "Oct 3, 2024",
    readTime: "5 min read",
    featured: false,
    slug: "texture-pattern-visual-interest"
  }
];

export const categories = [
  "All",
  "Trends",
  "Tips",
  "Design Psychology",
  "Sustainability",
  "Kitchen Design",
  "Bedroom Design",
  "Living Room",
  "Lighting",
  "Budget Design",
  "Storage",
  "Home Office",
  "Design Elements"
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);

export const getPostsByCategory = (category: string) => {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

// Get post by ID
export const getPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (limit: number = 5) => blogPosts.slice(0, limit);

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3) => {
  return blogPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
};


