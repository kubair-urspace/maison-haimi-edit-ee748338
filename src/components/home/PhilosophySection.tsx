import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PhilosophySection = () => {
  return (
    <section className="relative z-10 section-padding bg-secondary">
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
            "I don't practice dentistry for production. I practice it for mastery." 
            Dr. Eliza Haimi, DDS brings 18 years of experience, an AACD Award in Aesthetic 
            Dentistry, and a deep commitment to preserving natural structure. As an Adjunct 
            Clinical Instructor at NYU's Apa Aesthetic Honors Program, she creates lifelong 
            relationships with patients and their families.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="luxury" size="lg" asChild>
              <Link to="/about">Discover Our Practice</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
