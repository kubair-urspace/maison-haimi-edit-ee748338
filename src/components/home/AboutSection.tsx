import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import drHaimiPortrait from "@/assets/dr-haimi-portrait.png";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-cream overflow-hidden">
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
              <p>
                Eliza Haimi grew up to follow in the footsteps of her father, a neurologist who worked 
                tirelessly to help people in need. Lessons of humility and unconditional care were learned 
                at an early age. Throughout Eliza's studies, the love of science and her passion for 
                sculpting and drawing led her to the field of dentistry.
              </p>
              <p>
                She received her Bachelors degree in Chemistry and Psychology from Clark University in 
                Massachusetts. Not only did Eliza volunteer in different dental practices throughout high 
                school, but she also managed a dental practice while in college. Her enjoyment of dentistry 
                motivated her to attend dental school at the prestigious New York University.
              </p>
              <p>
                Due to her clear vocation, Eliza was asked to join the Aesthetic Honors program at NYU and 
                she subsequently graduated with honors in this field. Dr. Eliza Haimi has been the recipient 
                of the Excellence in Cosmetic Dentistry Award from the American Academy of Cosmetic Dentistry.
              </p>
              <p>
                While raising her children, Dr. Haimi worked as an associate in different dental practices. 
                She used this as an opportunity to learn as much as she could about the profession. However, 
                during these years, it became apparent to her that what she truly desired was her own practice. 
                With the belief that dentistry could be practiced much more conservatively and that patient 
                interactions should be more personalized, Dr. Haimi established her Cosmetic and General 
                Dentistry practice in 2011.
              </p>
              <p>
                In an effort to practice conservative dentistry, Dr. Haimi has incorporated Invisalign into 
                her treatment planning in order to align teeth without unnecessary cutting of the enamel. 
                Dr. Haimi has been a certified Invisalign provider since 2007 and Invisalign's Preferred 
                Provider since 2011. In a constant effort to stay up-to-date and improve her techniques, 
                Dr. Haimi's absolute love for her work has led her to gain hundreds of hours of continuing 
                education yearly.
              </p>
              <p className="font-medium text-charcoal">
                Dr. Haimi currently resides with her husband and three children in Great Neck.
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
