import { motion } from "framer-motion";

const ResultsSection = () => {
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
        </motion.div>

        {/* Single Before & After Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-charcoal flex items-center justify-center">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-cream/60">
              Before & After — image coming soon
            </span>
          </div>

          <p className="mt-6 text-center font-body text-sm md:text-base text-charcoal/70 italic leading-relaxed">
            More amazing before &amp; afters coming soon — stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
