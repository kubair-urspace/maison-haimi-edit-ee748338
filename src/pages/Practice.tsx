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
              At Maison Haimi, we believe exceptional dental care begins with understanding 
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
                Dr. Eliza Haimi
              </h2>
              <p className="font-body text-muted-foreground editorial-text mb-6">
                With over 25 years of experience in family and cosmetic dentistry, 
                Dr. Eliza Haimi has dedicated her career to the art of the conservative smile. 
                Her philosophy centers on preserving natural tooth structure while achieving 
                beautiful, lasting results.
              </p>
              <p className="font-body text-muted-foreground editorial-text mb-8">
                Known for her gentle approach and attention to detail, Dr. Haimi creates 
                a calm, welcoming environment where patients feel truly cared for. Her 
                5-star reputation is built on trust, expertise, and genuine relationships 
                with the families she serves.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="font-display text-3xl text-gold">25+</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold">5.0</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Star Rating
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
              7 Bond Street
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
              and discover the Maison Haimi difference.
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
