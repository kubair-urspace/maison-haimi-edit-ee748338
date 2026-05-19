import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AboutSection from "@/components/home/AboutSection";

const MeetUs = () => {
  return (
    <Layout>
      <SEO
        title="Meet Dr. Eliza Haimi & Team — Haimi Dental"
        description="Meet Dr. Eliza Haimi, Dr. Nicholas Ahladiotis, and the team behind Haimi Dental Aesthetics in Great Neck, NY."
        path="/meet-us"
      />
      <div className="pt-14 md:pt-16">
        <AboutSection />
      </div>
    </Layout>
  );
};

export default MeetUs;
