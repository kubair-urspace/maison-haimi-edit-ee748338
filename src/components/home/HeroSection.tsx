import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden"
      >
        <img
          src={heroImage}
          alt="Maison Haimi - Luxury dental practice interior"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
      </motion.div>

      {/* Content Side */}
      <div className="lg:w-1/2 flex items-center justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-0">
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
              Great Neck, New York
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6"
          >
            The Art of the<br />
            <span className="italic">Conservative Smile</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
          >
            Bespoke family and cosmetic dentistry in the heart of Great Neck. 
            Guided by Dr. Eliza Haimi, DDS, where every smile is treated as a work of art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button variant="luxury" size="xl" asChild>
              <Link to="/concierge">Begin Your Journey</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="flex items-center gap-8">
              <div>
                <p className="font-display text-3xl text-gold">5.0</p>
                <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                  Star Rating
                </p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl text-gold">25+</p>
                <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
