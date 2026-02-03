import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background - Split Layout */}
      <div className="absolute inset-0 flex">
        {/* Cream Left Side */}
        <div className="w-full lg:w-1/2 bg-background" />
        
        {/* Image Right Side with Arch */}
        <div className="hidden lg:block w-1/2 relative">
          {/* Arch overlay */}
          <div className="absolute inset-0 z-10">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute left-0 top-0 h-full w-32"
            >
              <path
                d="M100,0 L100,100 L0,100 L0,0 Q50,50 0,100"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
          
          {/* Background Image */}
          <img
            src={heroImage}
            alt="Eliza Haimi DDS - Elegant dental studio interior"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">
        {/* Main Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-charcoal tracking-[0.15em] text-center mb-8"
          style={{ fontWeight: 500 }}
        >
          HAIMI
        </motion.h1>

        {/* Center Badge with Taglines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-6 md:gap-10 mb-10"
        >
          {/* Left Text */}
          <div className="text-right">
            <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-charcoal/70">
              Dental
            </p>
            <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-charcoal/70">
              Studio
            </p>
          </div>

          {/* Center Monogram */}
          <div className="w-20 h-24 md:w-24 md:h-28 border-2 border-gold rounded-[50%] flex items-center justify-center bg-background/50">
            <span className="font-display text-2xl md:text-3xl text-gold tracking-wide" style={{ fontWeight: 500 }}>
              EH
            </span>
          </div>

          {/* Right Text */}
          <div className="text-left">
            <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-charcoal/70">
              Estd
            </p>
            <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-charcoal/70">
              1999
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            variant="luxury-gold-filled" 
            size="lg" 
            className="tracking-[0.2em] uppercase text-xs px-10 py-6"
            asChild
          >
            <Link to="/concierge">Book Now</Link>
          </Button>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground text-center"
        >
          Great Neck, New York
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
