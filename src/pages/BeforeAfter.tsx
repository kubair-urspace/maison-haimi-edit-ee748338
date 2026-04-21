import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "Smile Makeover",
    category: "Cosmetic Dentistry",
    description: "Complete smile transformation using porcelain veneers and professional whitening for a natural, radiant result.",
    beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
  },
  {
    id: 2,
    title: "Porcelain Veneers",
    category: "Cosmetic Dentistry",
    description: "Custom-crafted ultra-thin veneers to correct alignment, shape, and color for a flawless, camera-ready smile.",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=80",
  },
  {
    id: 3,
    title: "Same-Day Crown",
    category: "Restorations",
    description: "Precision-milled digital crown placed in a single visit, restoring both function and aesthetics seamlessly.",
    beforeImage: "https://images.unsplash.com/photo-1468493858157-0dfb5ab23948?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1581585090561-56e01b4e01f7?w=1200&q=80",
  },
  {
    id: 4,
    title: "Dental Implant",
    category: "Implant Services",
    description: "Surgical implant placement and custom restoration to permanently replace a missing tooth with a natural-looking result.",
    beforeImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
  },
  {
    id: 5,
    title: "Invisalign® Alignment",
    category: "Clear Aligners",
    description: "Clear aligner therapy to straighten teeth discreetly, achieving a beautifully aligned smile without metal braces.",
    beforeImage: "https://images.unsplash.com/photo-1495556650867-99590cea3657?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=1200&q=80",
  },
  {
    id: 6,
    title: "Full Mouth Reconstruction",
    category: "Restorations",
    description: "Comprehensive treatment combining crowns, veneers, and implants to completely rebuild and restore oral health.",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=1200&q=80",
  },
  {
    id: 7,
    title: "Professional Whitening",
    category: "Teeth Whitening",
    description: "In-office professional whitening treatment for dramatically brighter teeth in a single comfortable visit.",
    beforeImage: "https://images.unsplash.com/photo-1445527815600-1e60b84c8c50?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
  },
];

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setSliderPos(Math.max(5, Math.min(95, (x / rect.width) * 100)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden cursor-ew-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={(e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
      }}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={(e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
      }}
      onClick={(e) => handleMove(e.clientX)}
    >
      {/* After */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      />
      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-r-[4px] border-transparent border-r-foreground" />
            <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[4px] border-transparent border-l-foreground" />
          </div>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute bottom-4 left-4 font-body text-[10px] tracking-[0.25em] uppercase text-white/80 bg-foreground/30 backdrop-blur-sm px-3 py-1">
        Before
      </div>
      <div className="absolute bottom-4 right-4 font-body text-[10px] tracking-[0.25em] uppercase text-white/80 bg-foreground/30 backdrop-blur-sm px-3 py-1">
        After
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const [activeCase, setActiveCase] = useState(0);

  const nextCase = () => setActiveCase((prev) => (prev + 1) % cases.length);
  const prevCase = () => setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide uppercase mb-6"
          >
            Before & After
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 font-body text-sm text-white/80"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Before & After</span>
          </motion.nav>
        </div>
      </section>

      {/* Intro + Placeholder */}
      <section className="relative z-10 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="font-display text-2xl md:text-3xl italic text-gold mb-2 block">
              Real
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase mb-6">
              Transformations
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              Every smile tells a story. Explore our gallery of transformations—each one
              a testament to the artistry and precision that defines our practice.
            </p>
          </motion.div>

          {/* Placeholder before & after */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-charcoal flex items-center justify-center">
              <span className="font-body text-xs tracking-[0.3em] uppercase text-cream/60">
                Before & After — image coming soon
              </span>
            </div>
          </motion.div>

          {/* Curating note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-16 text-center"
          >
            <div className="border-t border-b border-gold/30 py-10 px-6">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal italic leading-snug">
                We're curating our best results — check back soon for an
                incredible collection of before &amp; afters!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="relative z-10 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="font-display text-2xl md:text-3xl italic text-gold mb-2 block">
              Patient
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase">
              Testimonials
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah M.",
                treatment: "Smile Makeover",
                quote: "Dr. Haimi and his team gave me the confidence to smile again. The entire experience was gentle, luxurious, and the results exceeded my expectations.",
              },
              {
                name: "James R.",
                treatment: "Porcelain Veneers",
                quote: "I was nervous about getting veneers, but the process was seamless. My new smile looks completely natural—people can't believe they're veneers.",
              },
              {
                name: "Michelle T.",
                treatment: "Invisalign® Alignment",
                quote: "The discreet aligners fit perfectly into my lifestyle. In just months, my teeth were straighter than I ever thought possible. Truly life-changing.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-border bg-card p-8 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed italic flex-1 mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-display text-foreground text-sm">{testimonial.name}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mt-1">
                    {testimonial.treatment}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 md:py-32 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="font-body text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Schedule a consultation to discuss your goals and discover what's possible for your smile.
            </p>
            <Button variant="luxury-gold-filled" size="xl" asChild>
              <Link to="/concierge">Request a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BeforeAfter;
