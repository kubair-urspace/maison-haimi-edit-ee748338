import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import smileVeneerImage from "@/assets/before-after-smile-veneer.jpeg";
import restorationImage from "@/assets/before-after-restoration.jpg";
import whiteningImage from "@/assets/before-after-smile-whitening.jpg";
import inv1 from "@/assets/invisalign/inv1.jpg.asset.json";
import inv2 from "@/assets/invisalign/inv2.jpg.asset.json";
import inv3 from "@/assets/invisalign/inv3.jpg.asset.json";
import inv4 from "@/assets/invisalign/inv4.jpg.asset.json";
import inv5 from "@/assets/invisalign/inv5.jpg.asset.json";
import inv6 from "@/assets/invisalign/inv6.jpg.asset.json";
import inv7 from "@/assets/invisalign/inv7.jpg.asset.json";
import inv8 from "@/assets/invisalign/inv8.jpg.asset.json";
import inv9 from "@/assets/invisalign/inv9.jpg.asset.json";
import inv10 from "@/assets/invisalign/inv10.jpg.asset.json";
import invA from "@/assets/invisalign-gallery/IMG_6805.jpg.asset.json";
import invB from "@/assets/invisalign-gallery/IMG_6802.jpg.asset.json";
import invC from "@/assets/invisalign-gallery/IMG_6801.jpg.asset.json";
import invD from "@/assets/invisalign-gallery/IMG_6800.jpg.asset.json";
import invE from "@/assets/invisalign-gallery/IMG_6798.jpg.asset.json";
import invF from "@/assets/invisalign-gallery/IMG_5172.jpg.asset.json";
import invG from "@/assets/invisalign-gallery/IMG_4802.jpg.asset.json";
import invH from "@/assets/invisalign-gallery/IMG_4764.jpg.asset.json";
import invI from "@/assets/invisalign-gallery/IMG_4763.jpg.asset.json";
import invJ from "@/assets/invisalign-gallery/IMG_9455.jpg.asset.json";
import invK from "@/assets/invisalign/invisalign-11.jpg.asset.json";
import invL from "@/assets/invisalign/invisalign-12.jpg.asset.json";
import invM from "@/assets/invisalign/invisalign-13.jpg.asset.json";
import invN from "@/assets/invisalign/invisalign-14.jpg.asset.json";
import invO from "@/assets/invisalign/invisalign-15.jpg.asset.json";
import invP from "@/assets/invisalign/invisalign-16.jpg.asset.json";
import invQ from "@/assets/invisalign/invisalign-17.jpg.asset.json";
import invR from "@/assets/invisalign/invisalign-18.jpg.asset.json";
import invS from "@/assets/invisalign/invisalign-19.jpg.asset.json";
import invT from "@/assets/invisalign/invisalign-20.jpg.asset.json";
import rest1 from "@/assets/restorative/rest1.jpg.asset.json";
import rest2 from "@/assets/restorative/rest2.jpg.asset.json";
import rest3 from "@/assets/restorative/rest3.jpg.asset.json";
import rest4 from "@/assets/restorative/rest4.jpg.asset.json";
import rest5 from "@/assets/restorative/rest5.jpg.asset.json";
import rest6 from "@/assets/restorative/rest6.jpg.asset.json";
import rest7 from "@/assets/restorative/rest7.jpg.asset.json";
import rest8 from "@/assets/restorative/rest8.jpg.asset.json";
import rest9 from "@/assets/restorative/rest9.jpg.asset.json";
import rest10 from "@/assets/restorative/rest10.jpg.asset.json";
import rest11 from "@/assets/restorative/rest11.jpg.asset.json";
import rest12 from "@/assets/restorative/rest12.jpg.asset.json";
import rest13 from "@/assets/restorative/rest13.jpg.asset.json";
import rest14 from "@/assets/restorative/rest14.jpg.asset.json";
import rest15 from "@/assets/restorative/rest15.jpg.asset.json";
import mt1 from "@/assets/missing-teeth/mt1.jpg.asset.json";
import mt2 from "@/assets/missing-teeth/mt2.jpg.asset.json";
import mt3 from "@/assets/missing-teeth/mt3.jpg.asset.json";
import mt4 from "@/assets/missing-teeth/mt4.jpg.asset.json";
import mt5 from "@/assets/missing-teeth/mt5.jpg.asset.json";
import mt6 from "@/assets/missing-teeth/mt6.jpg.asset.json";
import mt7 from "@/assets/missing-teeth/mt7.jpg.asset.json";
import mt8 from "@/assets/missing-teeth/mt8.jpg.asset.json";
import mt9 from "@/assets/missing-teeth/mt9.jpg.asset.json";
import mt10 from "@/assets/missing-teeth/mt10.jpg.asset.json";
import mt11 from "@/assets/missing-teeth/mt11.jpg.asset.json";
import mt12 from "@/assets/missing-teeth/mt12.jpg.asset.json";
import mt13 from "@/assets/missing-teeth/mt13.jpg.asset.json";
import mt14 from "@/assets/missing-teeth/mt14.jpg.asset.json";
import mt15 from "@/assets/missing-teeth/mt15.jpg.asset.json";
import mt16 from "@/assets/missing-teeth/mt16.jpg.asset.json";
import mt17 from "@/assets/missing-teeth/mt17.jpg.asset.json";
import mt18 from "@/assets/missing-teeth/mt18.jpg.asset.json";
import mt19 from "@/assets/missing-teeth/mt19.jpg.asset.json";
import mt20 from "@/assets/missing-teeth/mt20.jpg.asset.json";
import mt21 from "@/assets/missing-teeth/mt21.jpg.asset.json";
import mt22 from "@/assets/missing-teeth/mt22.jpg.asset.json";
import mt23 from "@/assets/missing-teeth/mt23.jpg.asset.json";
import mt24 from "@/assets/missing-teeth/mt24.jpg.asset.json";
import fmr1 from "@/assets/full-mouth/fmr1.jpg.asset.json";
import fmr2 from "@/assets/full-mouth/fmr2.jpg.asset.json";
import fmr3 from "@/assets/full-mouth/fmr3.jpg.asset.json";
import fmr4 from "@/assets/full-mouth/fmr4.jpg.asset.json";
import fmr5 from "@/assets/full-mouth/fmr5.jpg.asset.json";
import fmr6 from "@/assets/full-mouth/fmr6.jpg.asset.json";
import fmr7 from "@/assets/full-mouth/fmr7.jpg.asset.json";
import fmr8 from "@/assets/full-mouth/fmr8.jpg.asset.json";
import fmr9 from "@/assets/full-mouth/fmr9.jpg.asset.json";
import fmr10 from "@/assets/full-mouth/fmr10.jpg.asset.json";
import fmr11 from "@/assets/full-mouth/fmr11.jpg.asset.json";
import fmr12 from "@/assets/full-mouth/fmr12.jpg.asset.json";
import fmr13 from "@/assets/full-mouth/fmr13.jpg.asset.json";
import fmr14 from "@/assets/full-mouth/fmr14.jpg.asset.json";
import fmr15 from "@/assets/full-mouth/fmr15.jpg.asset.json";
import fmr16 from "@/assets/full-mouth/fmr16.jpg.asset.json";
import fmr17 from "@/assets/full-mouth/fmr17.jpg.asset.json";
import fmr18 from "@/assets/full-mouth/fmr18.jpg.asset.json";
import fmr19 from "@/assets/full-mouth/fmr19.jpg.asset.json";
import fmr20 from "@/assets/full-mouth/fmr20.jpg.asset.json";
import fmr21 from "@/assets/full-mouth/fmr21.jpg.asset.json";
import fmr22 from "@/assets/full-mouth/fmr22.jpg.asset.json";
import fmr23 from "@/assets/full-mouth/fmr23.jpg.asset.json";
import fmr24 from "@/assets/full-mouth/fmr24.jpg.asset.json";
import fmr25 from "@/assets/full-mouth/fmr25.jpg.asset.json";
import fmr26 from "@/assets/full-mouth/fmr26.jpg.asset.json";
import fmr27 from "@/assets/full-mouth/fmr27.jpg.asset.json";

const fullMouthCases = [
  { image: fmr1.url, alt: "Full mouth reconstruction with implant-supported restoration before and after", split: "vertical" as const },
  { image: fmr2.url, alt: "Complete smile rehabilitation with full arch restoration before and after", split: "vertical" as const },
  { image: fmr3.url, alt: "Full mouth rehabilitation and bite restoration before and after", split: "vertical" as const },
  { image: fmr4.url, alt: "Comprehensive full mouth reconstruction before and after", split: "vertical" as const },
  { image: fmr5.url, alt: "Full mouth aesthetic and functional reconstruction before and after", split: "vertical" as const },
  { image: fmr6.url, alt: "Full arch restoration and smile rehabilitation before and after", split: "vertical" as const },
  { image: fmr7.url, alt: "Full mouth restoration with crowns and veneers before and after", split: "vertical" as const },
  { image: fmr8.url, alt: "Full mouth aesthetic reconstruction before and after", split: "vertical" as const },
  { image: fmr9.url, alt: "Worn dentition full mouth rehabilitation before and after", split: "vertical" as const },
  { image: fmr10.url, alt: "Complete smile transformation with full mouth reconstruction before and after", split: "vertical" as const },
  { image: fmr11.url, alt: "Worn and chipped teeth restored with full mouth veneers and crowns before and after", split: "vertical" as const },
  { image: fmr12.url, alt: "Full mouth rehabilitation with upper and lower arch restoration before and after", split: "vertical" as const },
  { image: fmr13.url, alt: "Full facial smile transformation with comprehensive dental reconstruction before and after", split: "horizontal" as const },
  { image: fmr14.url, alt: "Severely broken and missing teeth restored with full mouth reconstruction before and after", split: "vertical" as const },
  { image: fmr15.url, alt: "Failing dentition rebuilt with full arch implant restoration before and after", split: "vertical" as const },
  { image: fmr16.url, alt: "Complete smile makeover with full mouth porcelain restoration before and after", split: "vertical" as const },
  { image: fmr17.url, alt: "Decayed and damaged teeth restored with full arch reconstruction before and after", split: "vertical" as const },
  { image: fmr18.url, alt: "Aged dentition rejuvenated with full mouth rehabilitation before and after", split: "vertical" as const },
  { image: fmr19.url, alt: "Missing and decayed teeth restored with full arch fixed bridge before and after", split: "vertical" as const },
  { image: fmr20.url, alt: "Severely damaged full mouth reconstruction with implant-supported rehabilitation before and after", split: "vertical" as const },
  { image: fmr21.url, alt: "Upper anterior implant and restorative reconstruction before and after", split: "vertical" as const },
  { image: fmr22.url, alt: "Worn and discolored smile restored with full mouth rehabilitation before and after", split: "vertical" as const },
  { image: fmr23.url, alt: "Advanced full mouth rehabilitation for failing dentition before and after", split: "vertical" as const },
  { image: fmr24.url, alt: "Broken and worn teeth rebuilt with full mouth reconstruction before and after", split: "vertical" as const },
  { image: fmr25.url, alt: "Complex bite and smile rehabilitation before and after", split: "vertical" as const },
  { image: fmr26.url, alt: "Comprehensive restorative smile rebuild before and after", split: "vertical" as const },
  { image: fmr27.url, alt: "Facial full mouth transformation shown side by side before and after", split: "horizontal" as const },
];

const missingTeethCases = [
  { image: mt1.url, alt: "Missing front tooth replacement before and after", split: "vertical" as const },
  { image: mt2.url, alt: "Multiple missing teeth full restoration before and after", split: "vertical" as const },
  { image: mt3.url, alt: "Front tooth implant smile restoration before and after", split: "horizontal" as const },
  { image: mt4.url, alt: "Missing lateral incisor smile restoration before and after", split: "horizontal" as const },
  { image: mt5.url, alt: "Missing posterior tooth replacement before and after", split: "vertical" as const },
  { image: mt6.url, alt: "Bridge restoration for missing teeth before and after", split: "vertical" as const },
  { image: mt7.url, alt: "Multiple missing teeth implant rehabilitation before and after", split: "vertical" as const },
  { image: mt8.url, alt: "Single tooth implant restoration progression", split: "vertical" as const },
  { image: mt9.url, alt: "Full smile reconstruction for missing teeth before and after", split: "vertical" as const },
  { image: mt10.url, alt: "Central incisor implant crown before and after", split: "vertical" as const },
  { image: mt11.url, alt: "Lateral incisor implant restoration progression", split: "vertical" as const },
  { image: mt12.url, alt: "Full arch implant-supported bridge before and after", split: "vertical" as const },
  { image: mt13.url, alt: "Anterior teeth full restoration with implants before and after", split: "vertical" as const },
  { image: mt14.url, alt: "Missing lateral incisor implant restoration progression", split: "vertical" as const },
  { image: mt15.url, alt: "Missing upper lateral incisors implant restoration before and after", split: "vertical" as const },
  { image: mt16.url, alt: "Missing canine implant smile restoration before and after", split: "vertical" as const },
  { image: mt17.url, alt: "Central incisor implant and crown restoration before and after", split: "vertical" as const },
  { image: mt18.url, alt: "Full upper arch implant restoration before and after", split: "vertical" as const },
  { image: mt19.url, alt: "Posterior implant restoration before and after", split: "vertical" as const },
  { image: mt20.url, alt: "Central incisor gap closure with implant before and after", split: "vertical" as const },
  { image: mt21.url, alt: "Missing lower front tooth full implant restoration before and after", split: "vertical" as const },
  { image: mt22.url, alt: "Missing upper lateral incisor implant restoration before and after", split: "vertical" as const },
  { image: mt23.url, alt: "Central incisor gap implant and crown restoration before and after", split: "vertical" as const },
  { image: mt24.url, alt: "Missing lateral incisors dual implant restoration before and after", split: "vertical" as const },
];

const restorativeCases = [
  { image: rest1.url, alt: "Gum recontouring and aesthetic restoration before and after", split: "vertical" as const },
  { image: rest2.url, alt: "Anterior veneer restoration before and after", split: "vertical" as const },
  { image: rest3.url, alt: "Lower arch restoration and alignment before and after", split: "vertical" as const },
  { image: rest4.url, alt: "Amalgam removal and tooth-colored restoration before and after", split: "vertical" as const },
  { image: rest5.url, alt: "Full smile restoration before and after", split: "vertical" as const },
  { image: rest6.url, alt: "Discolored tooth restoration and aesthetic correction before and after", split: "vertical" as const },
  { image: rest7.url, alt: "Deep decay treatment and full crown restoration before and after", split: "vertical" as const },
  { image: rest8.url, alt: "Chipped front tooth seamless composite restoration before and after", split: "vertical" as const },
  { image: rest9.url, alt: "Dark tooth aesthetic restoration and color matching before and after", split: "vertical" as const },
  { image: rest10.url, alt: "Amalgam filling replacement with tooth-colored restoration before and after", split: "vertical" as const },
  { image: rest11.url, alt: "Edge bonding and smile refinement before and after", split: "vertical" as const },
  { image: rest12.url, alt: "Full smile aesthetic restoration before and after", split: "horizontal" as const },
  { image: rest13.url, alt: "Worn dentition restoration and bite rehabilitation before and after", split: "vertical" as const },
  { image: rest14.url, alt: "Anterior teeth aesthetic restoration and reshaping before and after", split: "vertical" as const },
  { image: rest15.url, alt: "Diastema closure with composite restoration before and after", split: "vertical" as const },
];

const beforeAfterCases = [
  { image: smileVeneerImage, alt: "Smile makeover before and after", split: "vertical" as const },
  { image: restorationImage, alt: "Tooth restoration before and after", split: "horizontal" as const },
  { image: whiteningImage, alt: "Smile whitening before and after", split: "vertical" as const },
];

const invisalignCases = [
  { image: inv1.url, alt: "Invisalign occlusal alignment before and after" },
  { image: inv2.url, alt: "Invisalign anterior alignment before and after" },
  { image: inv3.url, alt: "Invisalign overbite correction before and after" },
  { image: inv4.url, alt: "Invisalign smile alignment before and after" },
  { image: inv5.url, alt: "Invisalign upper arch before and after" },
  { image: inv6.url, alt: "Invisalign lateral bite before and after" },
  { image: inv7.url, alt: "Invisalign side profile before and after" },
  { image: inv8.url, alt: "Invisalign midline alignment before and after" },
  { image: inv9.url, alt: "Invisalign crowding correction before and after" },
  { image: inv10.url, alt: "Invisalign spacing correction before and after" },
  { image: invA.url, alt: "Invisalign full mouth restoration before and after" },
  { image: invB.url, alt: "Invisalign anterior crowding before and after" },
  { image: invC.url, alt: "Invisalign edge alignment before and after" },
  { image: invD.url, alt: "Invisalign upper arch occlusal before and after" },
  { image: invE.url, alt: "Invisalign lower arch occlusal before and after" },
  { image: invF.url, alt: "Invisalign bite correction before and after" },
  { image: invG.url, alt: "Invisalign midline and spacing before and after" },
  { image: invH.url, alt: "Invisalign smile transformation before and after" },
  { image: invI.url, alt: "Invisalign anterior reshaping before and after" },
  { image: invJ.url, alt: "Invisalign lower occlusal before and after" },
  { image: invK.url, alt: "Invisalign smile alignment before and after" },
  { image: invL.url, alt: "Invisalign anterior restoration before and after" },
  { image: invM.url, alt: "Invisalign full arch correction before and after" },
  { image: invN.url, alt: "Invisalign bite realignment before and after" },
  { image: invO.url, alt: "Invisalign upper anterior alignment before and after" },
  { image: invP.url, alt: "Invisalign palatal arch correction before and after" },
  { image: invQ.url, alt: "Invisalign comprehensive smile transformation before and after" },
  { image: invR.url, alt: "Invisalign lower anterior alignment before and after" },
  { image: invS.url, alt: "Invisalign upper and lower alignment before and after" },
  { image: invT.url, alt: "Invisalign aesthetic smile enhancement before and after" },
];


const BeforeAfter = () => {
  return (
    <Layout>
      <SEO
        title="Before & After Gallery — Haimi Dental"
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

            {/* Placeholder slots — photos coming soon */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`placeholder-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (beforeAfterCases.length + i) * 0.05 }}
                className="aspect-[4/3] border border-dashed border-gold/40 bg-sand/40 flex flex-col items-center justify-center text-center p-6"
              >
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                  Coming Soon
                </span>
                <p className="font-display text-xl md:text-2xl italic text-charcoal/80 leading-snug">
                  Before &amp; After
                </p>
                <p className="font-body text-xs text-charcoal/70 mt-2">
                  Photography in progress
                </p>
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
              Discreet, comfortable, and precisely planned — see how Invisalign has
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
              From single-tooth implants to full smile reconstructions — restoring
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
              Complete rehabilitation of form, function, and aesthetics — meticulously
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
