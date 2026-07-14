import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  beforeImage?: string;
  afterImage?: string;
  transformationDetails?: {
    procedure: string;
    technique: string;
    duration: string;
    result: string;
  };
  index: number;
}

const ServiceCard = ({ name, description, beforeImage, afterImage, transformationDetails, index }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    setSliderPos(Math.max(5, Math.min(95, (x / rect.width) * 100)));
  };

  const hasImages = beforeImage && afterImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      layout
      className="group border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-[0_8px_30px_-12px_hsl(var(--gold)/0.15)] bg-background overflow-hidden"
    >
      {/* Card Header */}
      <div
        className={`p-6 ${hasImages ? "cursor-pointer" : ""}`}
        onClick={() => hasImages && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
              {name}
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

      </div>

      {/* Expandable Before/After Section (disabled View Results removed) */}
      <AnimatePresence initial={false}>
        {false && isExpanded && hasImages && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
              opacity: { duration: 0.3, delay: 0.1 },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {/* Before/After Labels */}
              <div className="flex justify-between mb-2">
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  Before
                </span>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gold">
                  After
                </span>
              </div>

              {/* Slider Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none border border-border"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={(e) => {
                  if (!isDragging) return;
                  handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
                }}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={(e) => {
                  if (!isDragging) return;
                  handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
                }}
                onClick={(e) => {
                  handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
                }}
              >
                {/* After Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${afterImage})` }}
                />

                {/* Before Image (clipped) */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${beforeImage})`,
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  }}
                />

                {/* Slider Line */}
                <motion.div
                  className="absolute top-0 bottom-0 w-px bg-white/80"
                  style={{ left: `${sliderPos}%` }}
                  animate={{ left: `${sliderPos}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Handle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
                    <div className="flex gap-0.5">
                      <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-r-[3px] border-transparent border-r-foreground" />
                      <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-l-[3px] border-transparent border-l-foreground" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* See the Transformation Button */}
              {transformationDetails && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetails(!showDetails);
                  }}
                  className="w-full mt-4 py-3 px-4 border border-gold/30 hover:border-gold/60 bg-transparent hover:bg-gold/5 transition-all duration-500 flex items-center justify-center gap-2 group/btn"
                >
                  <Sparkles className="h-3.5 w-3.5 text-gold transition-transform duration-500 group-hover/btn:scale-110" />
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gold">
                    {showDetails ? "Hide Details" : "See the Transformation"}
                  </span>
                  <motion.div
                    animate={{ rotate: showDetails ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <ChevronDown className="h-3.5 w-3.5 text-gold" />
                  </motion.div>
                </motion.button>
              )}

              {/* Transformation Details Panel */}
              <AnimatePresence initial={false}>
                {showDetails && transformationDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                      opacity: { duration: 0.4, delay: 0.1 },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 15 }}
                      animate={{ y: 0 }}
                      exit={{ y: 15 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="mt-4 border border-border bg-card p-5 space-y-4"
                    >
                      {[
                        { label: "Procedure", value: transformationDetails.procedure },
                        { label: "Technique", value: transformationDetails.technique },
                        { label: "Duration", value: transformationDetails.duration },
                        { label: "Result", value: transformationDetails.result },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                        >
                          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-1">
                            {item.label}
                          </p>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {item.value}
                          </p>
                          {i < 3 && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                              className="mt-3 h-px bg-gradient-to-r from-border via-gold/20 to-border origin-left"
                            />
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Gold accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="mt-3 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
