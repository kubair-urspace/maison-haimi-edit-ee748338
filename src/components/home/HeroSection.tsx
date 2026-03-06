import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import haimiLogo from "@/assets/haimi-logo.png";
import haimiLogomark from "@/assets/haimi-logomark.png";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative">
      {/* Fixed Background Image - Parallax Effect */}
      <div 
        className="fixed inset-0 z-0 grayscale-[50%]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Warm cream overlay for softer, warmer feel */}
        <div className="absolute inset-0 bg-cream/50" />
      </div>

      {/* Hero Content - First Screen */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Full-width cream background for first screen */}
        <div className="absolute inset-0 bg-background/80 pointer-events-none" />

        {/* Content - Centered */}
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center mb-10"
          >
            <img src={haimiLogo} alt="Haimi Dental Aesthetics" className="h-48 sm:h-56 md:h-64 lg:h-72" />
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
            className="absolute bottom-12 left-1/2 -translate-x-1/2 font-body text-xs tracking-[0.2em] uppercase text-charcoal/60 text-center"
          >
            Great Neck, New York
          </motion.p>
        </div>
      </div>

      {/* Welcome Section - Scrolls over fixed background */}
      <div className="relative z-10 min-h-screen">
        {/* Full-width background image visible */}
        <div className="absolute inset-0 pointer-events-none" />
        
        {/* Arch Content Card */}
        <div className="relative flex items-center min-h-screen">
          {/* Left Arch Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 bg-background p-8 md:p-12 lg:p-16 min-h-screen flex items-center"
            style={{
              clipPath: 'ellipse(100% 100% at 0% 50%)',
            }}
          >
            <div className="max-w-lg mx-auto lg:ml-auto lg:mr-16 text-center lg:text-left">
              <span className="font-display text-2xl md:text-3xl italic text-gold mb-4 block">
                Welcome To
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide mb-8">
                HAIMI DENTAL AESTHETICS
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Haimi Dental Aesthetics is a premier boutique dental practice in the heart of Great Neck. 
                We believe less is more—our core values center on mastery over production, comprehensive 
                treatment planning to prevent surprises, and preserving natural structure whenever possible.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                From cosmetic and aesthetic dentistry to same-day crowns, veneers, full mouth 
                reconstruction, and Invisalign®—we use the most advanced diagnostic and digital 
                technology available to deliver exceptional results.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <Link to="/practice">About Us</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Branding over background */}
          <div className="hidden lg:flex w-1/2 items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <img src={haimiLogomark} alt="Haimi" className="w-28 xl:w-36 2xl:w-44 brightness-0 invert drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
              <p className="font-display text-4xl xl:text-5xl 2xl:text-6xl italic text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}>Made Me Smile</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
