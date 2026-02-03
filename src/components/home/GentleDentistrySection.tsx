import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GentleDentistrySection = () => {
  return (
    <section className="relative z-10 section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent" />

            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
              Your Comfort Matters
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Your Comfort is<br />
              <span className="italic">Our Priority</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-muted-foreground editorial-text mb-8"
          >
            We understand that visiting the dentist can feel overwhelming. Our gentle 
            dentistry approach combines advanced pain management techniques with 
            personalized pacing, ensuring every visit feels calm and comfortable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {["Gentle Techniques", "Personalized Pacing", "Calming Environment"].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="px-5 py-2 border border-gold/30 text-gold font-body text-xs tracking-wider uppercase"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button variant="luxury-gold" size="lg" asChild>
              <Link to="/concierge">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GentleDentistrySection;
