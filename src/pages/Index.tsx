import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";

import ServicesPreview from "@/components/home/ServicesPreview";
import ResultsSection from "@/components/home/ResultsSection";
import AboutSection from "@/components/home/AboutSection";

import TestimonialsSection from "@/components/home/TestimonialsSection";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Index = () => {
  return (
    <Layout>
      <HeroSection heroImage={heroImage} />
      <PhilosophySection />
      <ServicesPreview />
      <ResultsSection />
      <AboutSection />
      
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
