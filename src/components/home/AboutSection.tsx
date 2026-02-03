import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
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
              Dr. Eliza
              <br />
              Haimi
            </h2>
            
            <div className="space-y-6 font-body text-charcoal/80 leading-relaxed text-base md:text-lg">
              <p>
                Dr. Eliza Haimi is a leading general and cosmetic dentist in Great Neck, NY. She is 
                highly recognized by her colleagues and patients for providing excellent dental care and 
                beautiful cosmetic results.
              </p>
              <p>
                Dr. Haimi earned her doctor of dental surgery degree from New York University School of 
                Dentistry and has dedicated her career to the art of conservative dentistry—preserving 
                what nature gave you while enhancing your natural beauty.
              </p>
              <p>
                Her tremendous level of skill and compassionate quality of care have made her the dentist 
                of choice for many individuals throughout Great Neck and Long Island.
              </p>
            </div>

            <div className="mt-10">
              <Button variant="luxury-gold-filled" size="lg" asChild>
                <Link to="/practice">Meet Dr. Haimi</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
