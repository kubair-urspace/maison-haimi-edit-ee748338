import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/home/AboutSection";
import facilityReception from "@/assets/facility-reception.jpg";
import facilityTreatment from "@/assets/facility-treatment.jpg";
import facilityTreatment2 from "@/assets/facility-treatment-2.jpg";
import facilityTreatment3 from "@/assets/facility-treatment-3.jpg";
import facilityTechnology from "@/assets/facility-technology.jpg";
import facilityTechnology2 from "@/assets/facility-technology-2.jpg";
import facilityTechnology3 from "@/assets/facility-technology-3.jpg";
import facilityTechnology4 from "@/assets/facility-technology-4.jpg";

const practiceImages = [
  { src: facilityReception, label: "Reception" },
  { src: facilityTreatment, label: "Treatment Suite" },
  { src: facilityTreatment2, label: "Patient Care" },
  { src: facilityTreatment3, label: "Comfort & Design" },
];

const technologies = [
  {
    title: "3D Digital Scanning",
    body: "High-resolution intraoral scanners replace traditional impressions, delivering precise, comfortable digital models for every treatment plan.",
  },
  {
    title: "CBCT 3D Imaging",
    body: "Cone-beam computed tomography provides detailed three-dimensional views of teeth, bone, and nerves for safer, more predictable diagnostics.",
  },
  {
    title: "CAD/CAM Restorations",
    body: "Advanced computer-aided design and milling systems allow us to craft custom restorations with exceptional accuracy and aesthetic detail.",
  },
  {
    title: "Digital Smile Design",
    body: "Sophisticated smile simulation software allows us to plan and preview aesthetic outcomes together with each patient before treatment begins.",
  },
  {
    title: "Advanced Sterilization",
    body: "Hospital-grade sterilization protocols and modern instrumentation ensure the highest standards of safety and infection control.",
  },
  {
    title: "Comfort Technology",
    body: "Sedation options, noise-canceling headphones, and calming design details create a serene, spa-like experience for every visit.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Haimi Dental Aesthetics | Great Neck, NY"
        description="Meet the doctors, tour our state-of-the-art practice, and explore the advanced technology behind Haimi Dental Aesthetics in Great Neck, NY."
        path="/about"
      />
      <div className="pt-14 md:pt-16 bg-cream">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block"
            >
              About Our Practice
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-wide uppercase leading-tight"
            >
              Boutique Dentistry,
              <br />
              <span className="text-gold">Thoughtfully Delivered</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 font-body text-charcoal/75 leading-relaxed text-base md:text-lg"
            >
              A private, boutique practice in Great Neck, New York, founded on the belief that
              dentistry should be personal, unhurried, and guided entirely by what is best for
              each patient.
            </motion.p>
          </div>
        </section>

        {/* Doctors */}
        <AboutSection />

        {/* State of the Art Practice */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Our Facility
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal tracking-wide uppercase leading-tight mb-6">
                A State of the Art Practice
              </h2>
              <p className="font-body text-charcoal/75 leading-relaxed text-base md:text-lg">
                Every detail of our Great Neck office has been thoughtfully designed to combine
                cutting-edge clinical technology with the warmth and calm of a private retreat.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {practiceImages.map((img, i) => (
                <motion.div
                  key={img.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative aspect-[3/4] overflow-hidden group"
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 font-body text-xs tracking-[0.2em] uppercase text-cream">
                    {img.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="luxury" size="lg" asChild>
                <Link to="/practice">Explore the Full Practice</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Innovation & Precision
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal tracking-wide uppercase leading-tight mb-6">
                Advanced Technology
              </h2>
              <p className="font-body text-charcoal/75 leading-relaxed text-base md:text-lg">
                We invest in the finest diagnostic and treatment technology to deliver
                exceptional outcomes with comfort, safety, and precision at every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
              {technologies.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-background border border-gold/20 p-8 hover:border-gold/50 transition-colors duration-500"
                >
                  <h3 className="font-display text-2xl text-charcoal uppercase tracking-wide mb-4">
                    {t.title}
                  </h3>
                  <p className="font-body text-charcoal/75 leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[facilityTechnology, facilityTechnology2, facilityTechnology3, facilityTechnology4].map(
                (src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="aspect-square overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Technology ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal tracking-wide uppercase mb-8">
              Experience the Difference
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury-gold-filled" size="lg" asChild>
                <Link to="/meet-us">Meet the Team</Link>
              </Button>
              <Button variant="luxury" size="lg" asChild>
                <Link to="/concierge">Schedule an Appointment</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
