import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { BudgetSection } from "@/components/BudgetSection";
import { WhatWeOfferSection } from "@/components/WhatWeOfferSection";
import { GallerySection } from "@/components/GallerySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { DownloadSection } from "@/components/DownloadSection";
import { EstimateSection } from "@/components/EstimateSection";
import { BrandsSection } from "@/components/BrandsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/animations";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen scroll-smooth">
        <Header />
        <HeroSection />
        {/* <BenefitsSection /> */}
        {/* <WhyChooseSection /> */}
        <BudgetSection />
        <WhatWeOfferSection />
        <section id="gallery">
          <GallerySection />
        </section>
        <section id="services">
          <HowItWorksSection />
        </section>
        {/* <TestimonialSection /> */}
        {/* <DownloadSection /> */}
        {/* <EstimateSection /> */}
        {/* <BrandsSection /> */}
        <BlogSection />
        <section id="about">
          <FAQSection />
        </section>
        <section id="contact">
          <ConnectSection />
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
