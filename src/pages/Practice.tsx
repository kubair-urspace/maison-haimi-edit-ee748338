import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Practice = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
            >
              The Practice
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            >
              A Relationship-First<br />
              <span className="italic">Approach</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-muted-foreground editorial-text max-w-2xl"
            >
              At Haimi Dental Aesthetics, we believe exceptional dental care begins with understanding 
              you—your concerns, your goals, and your vision for your smile.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dr. Haimi Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-secondary flex items-center justify-center"
            >
              <span className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                Dr. Haimi Portrait
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
                Meet Dr. Haimi
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Dr. Eliza Haimi, DDS
              </h2>
              <p className="font-body text-muted-foreground editorial-text mb-4 italic font-medium">
                "I don't practice dentistry for production. I practice it for mastery."
              </p>
              <p className="font-body text-muted-foreground editorial-text mb-6">
                Dr. Haimi's philosophy is built on a less-is-more approach: we treatment-plan 
                comprehensively to prevent surprises, preserve natural structure whenever possible, 
                and use the most advanced diagnostic and digital technology available.
              </p>
              <p className="font-body text-muted-foreground editorial-text mb-6">
                A graduate of NYU College of Dentistry's Apa Aesthetic Honors Program and recipient 
                of the AACD Award in Aesthetic Dentistry, Dr. Haimi currently serves as an Adjunct 
                Clinical Instructor in the Apa Aesthetic Honors Program at NYU, mentoring the next 
                generation of aesthetic dentists.
              </p>
              <p className="font-body text-muted-foreground editorial-text mb-6">
                With 18 years of Invisalign experience and qualifications in Dental Sleep Medicine, 
                she brings a uniquely comprehensive perspective to every patient's care. Dr. Haimi 
                is a proud member of the AACD, Spear Education, and the AADSM.
              </p>
              <p className="font-body text-muted-foreground editorial-text mb-8">
                Dr. Haimi resides with her husband and three children in Great Neck.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="font-display text-3xl text-gold">NYU</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Apa Aesthetic Honors
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold">18yr</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Invisalign Experience
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold">AACD</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Aesthetic Award
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Studio Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
            >
              The Studio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8"
            >
              233 East Shore Road
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-muted-foreground editorial-text"
            >
              Our Great Neck practice is designed to feel more like a sanctuary than a 
              clinical space. From the moment you arrive, you're welcomed into an environment 
              of calm sophistication—where every detail has been curated for your comfort.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="aspect-[4/3] bg-secondary flex items-center justify-center"
              >
                <span className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                  Studio Image {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="font-body text-muted-foreground editorial-text max-w-xl mx-auto mb-10">
              We invite you to experience dentistry reimagined. Schedule your consultation 
              and discover the Haimi Dental Aesthetics difference.
            </p>
            <Button variant="luxury" size="xl" asChild>
              <Link to="/concierge">Book Your Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Practice;
