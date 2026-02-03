import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
          >
            Our Philosophy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8"
          >
            A Relationship-First Approach
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-muted-foreground editorial-text mb-10"
          >
            At Maison Haimi, we believe in the art of conservative dentistry—preserving 
            what nature gave you while enhancing your natural beauty. Dr. Eliza Haimi 
            takes the time to understand your unique needs, creating personalized treatment 
            plans that honor both your health and your aesthetic vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="luxury" size="lg" asChild>
              <Link to="/practice">Discover The Practice</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
