import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import drHaimiPortrait from "@/assets/dr-haimi-portrait.png";

const AboutSection = () => {
  return (
    <section className="relative z-10 py-20 md:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={drHaimiPortrait}
                alt="Dr. Eliza Haimi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-wide uppercase leading-tight mb-8">
              Eliza Haimi
              <br />
              <span className="text-gold">DDS</span>
            </h2>
            
            <div className="space-y-6 font-body text-charcoal/80 leading-relaxed text-base md:text-lg">
              <p className="italic text-charcoal font-medium text-lg md:text-xl">
                "I don't practice dentistry for production. I practice it for mastery."
              </p>
              <p>
                Dr. Eliza Haimi's philosophy is rooted in a less-is-more approach: comprehensive treatment 
                planning to prevent surprises, preserving natural structure whenever possible, and using the 
                most advanced diagnostic and digital technology available.
              </p>
              <p>
                A graduate of NYU College of Dentistry's prestigious Apa Aesthetic Honors Program, Dr. Haimi 
                has been recognized with the AACD Award in Aesthetic Dentistry. She currently serves as an 
                Adjunct Clinical Instructor in the Apa Aesthetic Honors Program at NYU, mentoring the next 
                generation of aesthetic dentists.
              </p>
              <p>
                With 18 years of Invisalign experience and additional qualifications in Dental Sleep Medicine, 
                Dr. Haimi brings a uniquely comprehensive perspective to every patient's care. She is a proud 
                member of the AACD, Spear Education, and the AADSM.
              </p>
              <p className="font-medium text-charcoal">
                Dr. Haimi resides with her husband and three children in Great Neck.
              </p>
            </div>

            <div className="mt-10">
              <Button variant="luxury-gold-filled" size="lg" asChild>
                <Link to="/practice">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
