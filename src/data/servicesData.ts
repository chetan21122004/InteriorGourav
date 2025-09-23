export interface Service {
  id: string;
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  images: string[];
  price: string;
  duration: string;
  included: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const servicesData: Service[] = [
  {
    id: "interior-design",
    name: "Interior Design",
    title: "Complete Interior Design Solutions",
    shortDescription: "Transform your space with our comprehensive interior design services",
    longDescription: "Our interior design service encompasses everything from conceptualization to execution. We create spaces that reflect your personality while maximizing functionality and aesthetic appeal. Our team works closely with you to understand your lifestyle, preferences, and requirements to deliver a space that feels uniquely yours.",
    features: [
      "3D Visualization & Rendering",
      "Space Planning & Layout Design",
      "Color Scheme & Material Selection",
      "Furniture & Decor Coordination",
      "Lighting Design & Implementation",
      "Project Management & Execution"
    ],
    benefits: [
      "Personalized design solutions",
      "Increased property value",
      "Optimized space utilization",
      "Professional project management",
      "Quality assurance",
      "Timely completion"
    ],
    images: ["/work/1.jpg", "/work/15.jpg", "/work/13.jpg", "/work/11.jpg"],
    price: "Starting from ₹3.57L",
    duration: "4-6 weeks",
    included: [
      "Initial consultation & site visit",
      "3D design concepts",
      "Material selection assistance",
      "Project supervision",
      "Quality check & handover"
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "We start with understanding your needs, lifestyle, and design preferences"
      },
      {
        step: 2,
        title: "Design Development",
        description: "Our team creates detailed 3D designs and material selections"
      },
      {
        step: 3,
        title: "Execution",
        description: "Professional implementation with quality materials and skilled craftsmen"
      },
      {
        step: 4,
        title: "Handover",
        description: "Final quality check and project handover with maintenance guidelines"
      }
    ]
  },
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    title: "Modern Modular Kitchen Solutions",
    shortDescription: "Design and install beautiful, functional modular kitchens",
    longDescription: "Our modular kitchen solutions combine functionality with style. We design kitchens that are not just beautiful but also highly efficient, with smart storage solutions, premium materials, and modern appliances integration. Each kitchen is tailored to your cooking habits and space requirements.",
    features: [
      "Custom Cabinet Design",
      "Premium Hardware & Fittings",
      "Smart Storage Solutions",
      "Appliance Integration",
      "Countertop Selection",
      "Professional Installation"
    ],
    benefits: [
      "Maximized storage space",
      "Easy maintenance",
      "Durable materials",
      "Modern functionality",
      "Customized to your needs",
      "Warranty coverage"
    ],
    images: ["/work/2.jpg", "/work/4.jpg", "/work/8.jpg", "/work/12.jpg"],
    price: "Starting from ₹1.75L",
    duration: "2-3 weeks",
    included: [
      "Kitchen design & planning",
      "Premium modular components",
      "Professional installation",
      "Appliance coordination",
      "1-year warranty"
    ],
    process: [
      {
        step: 1,
        title: "Space Assessment",
        description: "Detailed measurement and analysis of your kitchen space"
      },
      {
        step: 2,
        title: "Design Creation",
        description: "Custom modular kitchen design with 3D visualization"
      },
      {
        step: 3,
        title: "Manufacturing",
        description: "Precision manufacturing of modular components"
      },
      {
        step: 4,
        title: "Installation",
        description: "Professional installation and appliance integration"
      }
    ]
  },
  {
    id: "wardrobes",
    name: "Wardrobes",
    title: "Custom Wardrobe Solutions",
    shortDescription: "Stylish and organized custom wardrobes for your bedroom",
    longDescription: "Our custom wardrobe solutions provide the perfect blend of style and organization. From walk-in closets to space-saving wardrobes, we design storage solutions that accommodate all your clothing and accessories while complementing your bedroom decor.",
    features: [
      "Custom Size & Configuration",
      "Smart Storage Compartments",
      "Premium Finishes",
      "Soft-Close Mechanisms",
      "LED Lighting Integration",
      "Mirror & Accessories"
    ],
    benefits: [
      "Optimized storage capacity",
      "Organized clothing arrangement",
      "Space-efficient design",
      "Premium materials",
      "Custom fit for any space",
      "Long-lasting durability"
    ],
    images: ["/work/5.jpg", "/work/7.jpg", "/work/9.jpg", "/work/16.jpg"],
    price: "Starting from ₹85K",
    duration: "1-2 weeks",
    included: [
      "Custom design & measurement",
      "Premium wardrobe materials",
      "Professional installation",
      "Internal organization systems",
      "6-month warranty"
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Understanding your storage needs and space requirements"
      },
      {
        step: 2,
        title: "Design",
        description: "Creating custom wardrobe design with internal layouts"
      },
      {
        step: 3,
        title: "Production",
        description: "Manufacturing with precision and quality materials"
      },
      {
        step: 4,
        title: "Installation",
        description: "Professional fitting and organization setup"
      }
    ]
  },
  {
    id: "3d-visualization",
    name: "3D Visualization",
    title: "Realistic 3D Design Visualization",
    shortDescription: "See your space before it's built with photorealistic 3D renders",
    longDescription: "Our 3D visualization service allows you to experience your space before construction begins. Using advanced rendering technology, we create photorealistic images and virtual tours that help you make informed decisions about your design choices.",
    features: [
      "Photorealistic Rendering",
      "Virtual Reality Tours",
      "Multiple Angle Views",
      "Material & Color Variations",
      "Lighting Simulation",
      "Interactive Walkthroughs"
    ],
    benefits: [
      "Clear vision before execution",
      "Better decision making",
      "Reduced design changes",
      "Cost-effective planning",
      "Client satisfaction",
      "Marketing advantage"
    ],
    images: ["/work/3.jpg", "/work/6.jpg", "/work/10.jpg", "/work/14.jpg"],
    price: "Starting from ₹25K",
    duration: "3-5 days",
    included: [
      "3D model creation",
      "Photorealistic renders",
      "Multiple viewpoints",
      "Material variations",
      "High-resolution images"
    ],
    process: [
      {
        step: 1,
        title: "Brief & Planning",
        description: "Understanding design requirements and space dimensions"
      },
      {
        step: 2,
        title: "3D Modeling",
        description: "Creating accurate 3D models of your space"
      },
      {
        step: 3,
        title: "Rendering",
        description: "Applying materials, lighting, and creating photorealistic renders"
      },
      {
        step: 4,
        title: "Delivery",
        description: "Final rendered images and virtual tour delivery"
      }
    ]
  },
  {
    id: "complete-home",
    name: "Complete Home",
    title: "End-to-End Home Interior Solutions",
    shortDescription: "Complete home transformation from concept to completion",
    longDescription: "Our complete home interior service covers every aspect of your home transformation. From living rooms to bedrooms, kitchens to bathrooms, we provide a comprehensive solution that ensures design consistency and quality throughout your entire home.",
    features: [
      "Whole Home Design",
      "Room-by-Room Planning",
      "Coordinated Color Schemes",
      "Furniture & Decor Selection",
      "Lighting & Electrical Work",
      "Complete Project Management"
    ],
    benefits: [
      "Unified design theme",
      "Comprehensive service",
      "Single point of contact",
      "Cost-effective package",
      "Quality assurance",
      "Timely completion"
    ],
    images: ["/work/17.jpg", "/work/18.jpg", "/work/19.jpg", "/work/20.jpg"],
    price: "2BHK from ₹6.75L | 3BHK from ₹8.75L",
    duration: "6-8 weeks",
    included: [
      "Complete home design",
      "All rooms interior work",
      "Furniture & accessories",
      "Electrical & lighting",
      "Project supervision",
      "2-year warranty"
    ],
    process: [
      {
        step: 1,
        title: "Home Assessment",
        description: "Complete evaluation of your home and requirements"
      },
      {
        step: 2,
        title: "Master Planning",
        description: "Creating comprehensive design plan for all rooms"
      },
      {
        step: 3,
        title: "Phase Execution",
        description: "Room-by-room execution with quality control"
      },
      {
        step: 4,
        title: "Final Handover",
        description: "Complete home handover with documentation"
      }
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return servicesData.find(service => service.id === id);
};

export const getServiceByName = (name: string): Service | undefined => {
  return servicesData.find(service => service.name.toLowerCase() === name.toLowerCase());
};
