import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import smileVeneerImage from "@/assets/before-after-smile-veneer.jpeg";
import restorationImage from "@/assets/before-after-restoration.JPG";
import whiteningImage from "@/assets/before-after-smile-whitening.JPG";

const beforeAfterCases = [
  { image: smileVeneerImage, alt: "Smile makeover before and after", split: "vertical" as const },
  { image: restorationImage, alt: "Tooth restoration before and after", split: "horizontal" as const },
  { image: whiteningImage, alt: "Smile whitening before and after", split: "vertical" as const },
];

const BeforeAfter = () => {
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

          <div className="grid gap-8 lg:grid-cols-3">
            {beforeAfterCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <BeforeAfterComparison
                  image={caseItem.image}
                  alt={caseItem.alt}
                  split={caseItem.split}
                  className="border border-border"
                />
              </motion.div>
            ))}
          </div>

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
