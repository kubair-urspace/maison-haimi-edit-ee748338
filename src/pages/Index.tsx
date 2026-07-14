import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";

import ServicesPreview from "@/components/home/ServicesPreview";

import AboutSection from "@/components/home/AboutSection";

import TestimonialsSection from "@/components/home/TestimonialsSection";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Eliza Haimi DDS Great Neck Cosmetic Dentist"
        description="Boutique cosmetic and family dentistry in Great Neck, NY. Conservative smile design, Invisalign, veneers, and implants with Dr. Eliza Haimi."
        path="/"
      />
      <HeroSection heroImage={heroImage} />
      
      <ServicesPreview />
      
      <AboutSection />
      
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
