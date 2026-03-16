import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import facilityReception from "@/assets/facility-reception.jpg";
import facilityTreatment from "@/assets/facility-treatment.jpg";
import facilityLounge from "@/assets/facility-lounge.jpg";
import facilityTechnology from "@/assets/facility-technology.jpg";

const facilityImages = [
  {
    src: facilityReception,
    title: "Reception",
    subtitle: "A Warm Welcome",
    description: "Our reception area sets the tone for your visit—marble finishes, soft lighting, and a curated atmosphere designed to put you at ease from the moment you arrive.",
  },
  {
    src: facilityTreatment,
    title: "Treatment Suite",
    subtitle: "Precision & Comfort",
    description: "Each treatment suite is equipped with the latest digital imaging, ergonomic seating, and natural light—creating an environment where advanced care meets total comfort.",
  },
  {
    src: facilityLounge,
    title: "Patient Lounge",
    subtitle: "Relaxation Redefined",
    description: "Our patient lounge offers a tranquil retreat with designer furnishings, curated reading, and a calming ambiance that feels more like a private club than a dental office.",
  },
  {
    src: facilityTechnology,
    title: "Technology",
    subtitle: "State of the Art",
    description: "From 3D digital scanning to advanced CAD/CAM systems, we invest in the finest technology to ensure precise diagnostics and exceptional results for every patient.",
  },
];

const Practice = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
            >
              The Practice
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            >
              A Relationship-First<br />
              <span className="italic">Approach</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-muted-foreground editorial-text max-w-2xl"
            >
              At Haimi Dental Aesthetics, we believe exceptional dental care begins with understanding 
              you—your concerns, your goals, and your vision for your smile.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dr. Haimi Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={drHaimiPortrait}
                alt="Dr. Eliza Haimi"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
                Founder & Lead Dentist
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Dr. Eliza Haimi, DDS
              </h2>
              <div className="space-y-5 font-body text-muted-foreground editorial-text">
                <p>
                  Dr. Eliza Haimi earned her Doctor of Dental Surgery degree from the New York University 
                  College of Dentistry, where she was selected for the prestigious Aesthetic Honors Program. 
                  She became the first student from NYU to receive Honors in Aesthetic Dentistry from the 
                  American Academy of Cosmetic Dentistry.
                </p>
                <p>
                  In 2010, Dr. Haimi established her practice in Great Neck, New York with the vision of 
                  providing personalized, thoughtful dentistry in an unhurried setting, rather than high-volume 
                  care. From the beginning, she structured her practice so that clinical decisions would always 
                  be guided by what is best for each patient, rather than by the limitations often imposed by 
                  insurance plans.
                </p>
                <p>
                  She serves as an Adjunct Clinical Instructor at the New York University College of Dentistry 
                  in the Aesthetic Honors Program.
                </p>
                <p>
                  Dr. Haimi is sought out by patients from Long Island, New York City, and across the country 
                  for her conservative approach to smile makeovers, full-mouth reconstructions, veneers and her 
                  advanced training in dental sleep medicine, implant rehabilitation, and Invisalign. She is known 
                  for her meticulous planning and design of natural and functional smile transformations tailored 
                  to each individual patient.
                </p>
                <p>
                  Outside of dentistry, Dr. Haimi enjoys reading, drawing, cooking, and practicing Pilates. 
                  She resides in Great Neck with her husband and their three children.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 mt-8">
                <div>
                  <p className="font-display text-3xl text-gold">NYU</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Apa Aesthetic Honors
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold">18yr</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Invisalign Experience
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold">AACD</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Aesthetic Award
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dr. Ahladiotis Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-1"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
                Periodontist
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Dr. Effie Ahladiotis, DMD, MS
              </h2>
              <div className="space-y-5 font-body text-muted-foreground editorial-text">
                <p>
                  Dr. Effie Ahladiotis is a specialist in Periodontology with over two decades of experience 
                  providing advanced periodontal care. She earned her Doctor of Medical Dentistry degree from 
                  Tufts University in 1998 and completed her specialty training with a Master of Science in 
                  Periodontology at Columbia University in 2001.
                </p>
                <p>
                  Dr. Ahladiotis is an active member of the American Dental Association, the American Academy 
                  of Periodontology, and the Northeastern Society of Periodontists. She is passionate about 
                  helping patients achieve and maintain optimal oral health through personalized, evidence-based care.
                </p>
                <p>
                  With extensive expertise in dental implants and periodontal plastic surgery, Dr. Ahladiotis 
                  is committed to delivering the highest standard of treatment using the most advanced techniques 
                  in modern periodontology. Her approach combines clinical excellence with a patient-focused 
                  philosophy, ensuring every patient receives thoughtful, compassionate care and outstanding results.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 mt-8">
                <div>
                  <p className="font-display text-3xl text-gold">Tufts</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Doctor of Medical Dentistry
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold">Columbia</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    MS Periodontology
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold">20+yr</p>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">
                    Periodontal Experience
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-secondary flex items-center justify-center lg:order-2"
            >
              <span className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                Dr. Ahladiotis Portrait
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
            >
              Our Facility
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8"
            >
              Where Excellence Meets Comfort
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-muted-foreground editorial-text"
            >
              Every detail of our Great Neck practice has been thoughtfully designed to provide 
              an unparalleled patient experience—combining cutting-edge technology with the 
              warmth of a private retreat.
            </motion.p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilityImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-cream">
                    {item.title}
                  </h3>
                </div>
                {/* Always-visible label on mobile */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-1 block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-xl text-cream">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-5xl w-full bg-background overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                  <img
                    src={facilityImages[selectedImage].src}
                    alt={facilityImages[selectedImage].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                    {facilityImages[selectedImage].subtitle}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                    {facilityImages[selectedImage].title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                    {facilityImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="font-body text-muted-foreground editorial-text max-w-xl mx-auto mb-10">
              We invite you to experience dentistry reimagined. Schedule your consultation 
              and discover the Haimi Dental Aesthetics difference.
            </p>
            <Button variant="luxury" size="xl" asChild>
              <Link to="/concierge">Book Your Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Practice;
