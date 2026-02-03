import { motion } from "framer-motion";
import { useState, useRef } from "react";

const ResultsSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative z-10 py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-2xl md:text-3xl italic text-gold mb-2 block">
            Real
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-wide uppercase">
            Results
          </h2>
          <p className="font-body text-charcoal/70 mt-6 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            Many Great Neck patients have achieved healthier, glowing smiles through cosmetic and 
            restorative oral procedures. Take a look through our gallery to envision the outcomes 
            we could create for you.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/10] overflow-hidden cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80)`,
              }}
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80)`,
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            />

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-charcoal" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-charcoal" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 font-body text-xs tracking-widest uppercase text-white/80">
              Before
            </div>
            <div className="absolute bottom-4 right-4 font-body text-xs tracking-widest uppercase text-white/80">
              After
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-100"
              style={{ width: `${sliderPosition}%` }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
