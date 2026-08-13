import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import restorationImage from "@/assets/before-after-restoration.jpg";
import beforeAfterHeroBg from "@/assets/before-after-hero-bg.jpg.asset.json";
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
      <section className="relative min-h-[52vh] md:min-h-[58vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_22%]"
          style={{ backgroundImage: `url(${receptionHero.url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/10" />
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
