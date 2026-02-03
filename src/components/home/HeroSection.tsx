import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative">
      {/* Fixed Background Image - Parallax Effect */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Hero Content - First Screen */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Split Layout Overlay */}
        <div className="absolute inset-0 flex pointer-events-none">
          {/* Cream Left Side */}
          <div className="w-full lg:w-1/2 bg-background" />
          {/* Transparent Right Side */}
          <div className="hidden lg:block w-1/2" />
        </div>

        {/* Content */}
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
                HAIMI DENTAL
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Haimi Dental Studio is a premier dental practice located in the heart of Great Neck. 
                We are a practice whose core values are centered around treating our patients with 
                integrity and compassion. We pride ourselves on treating every patient as a member 
                of our family and providing an experience that will surpass expectations.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                From general dental treatments to cosmetic dental procedures, like veneers, 
                Invisalign® clear aligners, and full-mouth rehabilitation. Our scientifically proven, 
                evidence-based dentistry utilizes the most advanced technology available.
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
              className="text-center text-white"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}
            >
              <h3 className="font-display text-7xl xl:text-8xl 2xl:text-9xl tracking-[0.2em] mb-6 font-medium">HAIMI</h3>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-24 h-28 xl:w-28 xl:h-32 border-2 border-white/90 rounded-[50%] flex items-center justify-center">
                  <span className="font-display text-2xl xl:text-3xl text-white font-medium">EH</span>
                </div>
              </div>
              <p className="font-display text-4xl xl:text-5xl 2xl:text-6xl italic">Made Me Smile</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
