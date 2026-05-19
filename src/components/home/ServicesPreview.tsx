import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { title: "Oral Health and Longevity", link: "/services/preventative" },
  { title: "Porcelain Veneers & Smile Design", link: "/services/veneers" },
  { title: "Aesthetic and Restorative Dentistry", link: "/services/aesthetic-restorative" },
  { title: "Implant and Surgical Care", link: "/services/implant-surgical" },
  { title: "Full Mouth Rehabilitation & Smile Makeover", link: "/services/fullmouth" },
  { title: "Invisalign®", link: "/services/invisalign" },
  { title: "Sleep Apnea & Snoring", link: "/services/sleep" },
  { title: "Facial Aesthetics & Therapeutic Botox", link: "/services/botox" },
  { title: "Sedation & Comfort-Focused Dentistry", link: "/services/sedation" },
];

const ServicesPreview = () => {
  return (
    <section className="relative z-10 py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
            Explore
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Our Services
          </h2>
        </motion.div>

        {/* Premium Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
            >
              <Link
                to={service.link}
                className="group relative block aspect-[4/5] overflow-hidden bg-charcoal"
              >
                <div className="absolute inset-0 bg-charcoal transition-all duration-700 group-hover:bg-charcoal/90" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white tracking-wide uppercase">
                    {service.title}
                  </h3>
                </div>

                <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
