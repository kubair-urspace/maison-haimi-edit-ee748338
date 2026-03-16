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
      {/* Spacer for fixed nav */}
      <div className="pt-14 md:pt-16" />


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
