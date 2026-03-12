import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import drHaimiPortrait from "@/assets/dr-haimi-portrait.png";

const AboutSection = () => {
  return (
    <section className="relative z-10 py-20 md:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Meet the Doctors
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-wide uppercase leading-tight">
            Your Care Team
          </h2>
        </motion.div>

        {/* Dr. Haimi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={drHaimiPortrait}
                alt="Dr. Eliza Haimi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide uppercase leading-tight mb-8">
              Eliza Haimi
              <br />
              <span className="text-gold">DDS</span>
            </h3>

            <div className="space-y-5 font-body text-charcoal/80 leading-relaxed text-base md:text-lg">
              <p>
                Dr. Eliza Haimi earned her Doctor of Dental Surgery degree from the New York University 
                College of Dentistry, where she was selected for the prestigious Aesthetic Honors Program. 
                She became the first student from NYU to receive Honors in Aesthetic Dentistry from the 
                American Academy of Cosmetic Dentistry.
              </p>
              <p>
                In 2010, Dr. Haimi established her practice in Great Neck, New York with the vision of 
                providing personalized, thoughtful dentistry in an unhurried setting. She structured her 
                practice so that clinical decisions would always be guided by what is best for each patient.
              </p>
              <p>
                She is sought out by patients from Long Island, New York City, and across the country for 
                her conservative approach to smile makeovers, full-mouth reconstructions, veneers and her 
                advanced training in dental sleep medicine, implant rehabilitation, and Invisalign.
              </p>
              <p className="font-medium text-charcoal">
                Outside of dentistry, Dr. Haimi enjoys reading, drawing, cooking, and practicing Pilates. 
                She resides in Great Neck with her husband and their three children.
              </p>
            </div>

            <div className="mt-10">
              <Button variant="luxury-gold-filled" size="lg" asChild>
                <Link to="/practice">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Dr. Ahladiotis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-2"
          >
            <div className="aspect-[3/4] overflow-hidden bg-secondary flex items-center justify-center">
              <span className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                Dr. Ahladiotis Portrait
              </span>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-1 lg:pr-8"
          >
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide uppercase leading-tight mb-8">
              Effie Ahladiotis
              <br />
              <span className="text-gold">DMD, MS</span>
            </h3>

            <div className="space-y-5 font-body text-charcoal/80 leading-relaxed text-base md:text-lg">
              <p>
                Dr. Effie Ahladiotis is a specialist in Periodontology with over two decades of experience 
                providing advanced periodontal care. She earned her Doctor of Medical Dentistry degree from 
                Tufts University in 1998 and completed her specialty training with a Master of Science in 
                Periodontology at Columbia University in 2001.
              </p>
              <p>
                Dr. Ahladiotis is an active member of the American Dental Association, the American Academy 
                of Periodontology, and the Northeastern Society of Periodontists. She is passionate about 
                helping patients achieve and maintain optimal oral health through personalized, evidence-based care.
              </p>
              <p>
                With extensive expertise in dental implants and periodontal plastic surgery, Dr. Ahladiotis 
                is committed to delivering the highest standard of treatment using the most advanced techniques 
                in modern periodontology. Her approach combines clinical excellence with a patient-focused 
                philosophy, ensuring every patient receives thoughtful, compassionate care and outstanding results.
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
