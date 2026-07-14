import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Haimi Dental Aesthetics | Great Neck, NY"
        description="Learn about Haimi Dental Aesthetics, a boutique dental practice in Great Neck, NY dedicated to unhurried, personalized, and artistry-driven care."
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
          </div>
        </section>

        {/* Story */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="space-y-6 font-body text-charcoal/80 leading-relaxed text-base md:text-lg">
              <p>
                Haimi Dental Aesthetics is a private, boutique practice in Great Neck, New York,
                founded by Dr. Eliza Haimi in 2010. From the beginning, the practice was built
                around a single idea: dentistry should be personal, unhurried, and guided entirely
                by what is best for each patient.
              </p>
              <p>
                Our team combines advanced training in aesthetic and restorative dentistry,
                periodontology, dental sleep medicine, and preventive care. Every treatment plan is
                crafted individually, drawing on decades of clinical expertise and a deep respect
                for the artistry of a natural, healthy smile.
              </p>
              <p>
                Patients come to us for meticulous smile design, conservative veneers, full-mouth
                rehabilitation, and comprehensive preventive care in a calm, considered
                environment. What they stay for is the relationship: honest guidance, thoughtful
                pacing, and results that look and feel entirely their own.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Personalized Care",
                  body: "Extended appointments and treatment plans designed for one patient at a time — never rushed, never templated.",
                },
                {
                  title: "Aesthetic Excellence",
                  body: "Conservative preparations and precise smile design informed by advanced training in cosmetic dentistry.",
                },
                {
                  title: "Comprehensive Expertise",
                  body: "Restorative, surgical, periodontal, and sleep medicine care under one roof, coordinated by a single trusted team.",
                },
              ].map((v) => (
                <div key={v.title} className="text-center">
                  <h3 className="font-display text-2xl text-charcoal uppercase tracking-wide mb-4">
                    {v.title}
                  </h3>
                  <p className="font-body text-charcoal/75 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 text-center">
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
