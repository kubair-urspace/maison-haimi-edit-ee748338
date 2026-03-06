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

      {/* Intro */}
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

          {/* Featured Case Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">
                    {cases[activeCase].category}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">
                    {activeCase + 1} / {cases.length}
                  </span>
                </div>

                {/* Slider */}
                <BeforeAfterSlider
                  beforeImage={cases[activeCase].beforeImage}
                  afterImage={cases[activeCase].afterImage}
                />

                {/* Case Info */}
                <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                      {cases[activeCase].title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xl">
                      {cases[activeCase].description}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      onClick={prevCase}
                      className="w-12 h-12 border border-border hover:border-gold rounded-full flex items-center justify-center text-muted-foreground hover:text-gold transition-all duration-300"
                      aria-label="Previous case"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextCase}
                      className="w-12 h-12 border border-border hover:border-gold rounded-full flex items-center justify-center text-muted-foreground hover:text-gold transition-all duration-300"
                      aria-label="Next case"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeCase
                      ? "w-8 bg-gold"
                      : "w-1.5 bg-border hover:bg-gold/40"
                  }`}
                  aria-label={`View case ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thumbnail Grid */}
      <section className="relative z-10 py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl text-foreground tracking-wide uppercase text-center mb-12"
          >
            All Cases
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cases.map((c, i) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => {
                  setActiveCase(i);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`relative aspect-square overflow-hidden group border-2 transition-all duration-300 ${
                  i === activeCase ? "border-gold" : "border-transparent hover:border-gold/40"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${c.afterImage})` }}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-display text-lg text-white text-center px-2">
                    {c.title}
                  </span>
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-white/70 mt-1">
                    {c.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
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
