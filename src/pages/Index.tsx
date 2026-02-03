import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ResultsSection from "@/components/home/ResultsSection";
import AboutSection from "@/components/home/AboutSection";
import GentleDentistrySection from "@/components/home/GentleDentistrySection";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Index = () => {
  return (
    <Layout>
      <HeroSection heroImage={heroImage} />
      <PhilosophySection />
      <ServicesPreview />
      <ResultsSection />
      <AboutSection />
      <GentleDentistrySection />
    </Layout>
  );
};

export default Index;
