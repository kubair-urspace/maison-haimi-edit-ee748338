import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import restorationImage from "@/assets/before-after-restoration.jpg";
import whiteningImage from "@/assets/before-after-smile-whitening.jpg";
import {
  veneersCases,
  fullMouthCases,
  missingTeethCases,
  restorativeCases,
  invisalignCases,
} from "@/data/beforeAfterCases";

const beforeAfterCases = [
  { image: restorationImage, alt: "Tooth restoration before and after", split: "horizontal" as const },
  { image: whiteningImage, alt: "Smile whitening before and after", split: "vertical" as const },
];



const BeforeAfter = () => {
  return (
    <Layout>
      <SEO
        title="Before & After Gallery Haimi Dental"
        description="Real smile transformations from Haimi Dental Aesthetics: veneers, whitening, and restorative results in Great Neck, NY."
        path="/before-after"
      />
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
              Every smile tells a story. Explore our gallery of transformations each one
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

        </div>
      </section>

      {/* Veneers Before & After */}
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
              Porcelain
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase mb-6">
              Veneers
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              Hand-crafted porcelain veneers that refine shape, color, and proportion  
              creating naturally radiant smiles tailored to every face.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {veneersCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
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
        </div>
      </section>

      {/* Invisalign Before & After */}
      <section className="relative z-10 py-16 md:py-24 bg-sand/30">

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="font-display text-2xl md:text-3xl italic text-gold mb-2 block">
              Invisalign
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase mb-6">
              Clear Aligner Results
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              Discreet, comfortable, and precisely planned see how Invisalign has
              transformed our patients' smiles through gentle, progressive movement.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {invisalignCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              >
                <BeforeAfterComparison
                  image={caseItem.image}
                  alt={caseItem.alt}
                  split="vertical"
                  className="border border-border"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restorative Dentistry Before & After */}
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
              Restorative
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase mb-6">
              Restorative Dentistry
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              Minimally invasive, biomimetic restorations designed to preserve natural
              tooth structure while restoring health, function, and beauty.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {restorativeCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
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
        </div>
      </section>

      {/* Missing Teeth Before & After */}
      <section className="relative z-10 py-16 md:py-24 bg-sand/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="font-display text-2xl md:text-3xl italic text-gold mb-2 block">
              Missing Teeth
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase mb-6">
              Implants & Tooth Replacement
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              From single-tooth implants to full smile reconstructions restoring
              confidence, function, and natural beauty with precision implant dentistry.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {missingTeethCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
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
        </div>
      </section>

      {/* Full Mouth Reconstruction Before & After */}
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
              Comprehensive
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase mb-6">
              Full Mouth Reconstruction
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              Complete rehabilitation of form, function, and aesthetics meticulously
              planned restorations that rebuild the entire smile with lasting beauty.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fullMouthCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
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
                name: "Andrea Rothman",
                treatment: "via Facebook",
                quote: "Best dentist ever! Dr. Haimi is a caring and highly competent professional at the height of her career. Her work on my teeth, and on my children's teeth, is outstanding.",
              },
              {
                name: "Jeanne Naclerio Pugliese",
                treatment: "via Facebook",
                quote: "Dr. Haimi is wonderful as is her entire staff! I trust her for everything related to my dental health. Highly recommend!",
              },
              {
                name: "Joanne Horak",
                treatment: "via Facebook",
                quote: "Always so pleasant and professional. I have been going there for three years having major work done and I would never go anywhere else. Dr. Haimi is awesome.",
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
                  <p className="font-display text-foreground text-sm">{(() => { const p = testimonial.name.trim().split(/\s+/); return p.length > 1 ? `${p[0]} ${p[p.length-1][0]}.` : p[0]; })()}</p>
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
