import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Preventative Dentistry",
    link: "/services/preventative",
    image: null,
  },
  {
    title: "Veneers & Smile Design",
    link: "/services/veneers",
    image: null,
  },
  {
    title: "Aesthetic Dentistry",
    link: "/services/aesthetic",
    image: null,
  },
  {
    title: "Same-Day Inlays, Onlays & Crowns",
    link: "/services/crowns",
    image: null,
  },
  {
    title: "Restorative Dentistry",
    link: "/services/restorative",
    image: null,
  },
  {
    title: "Periodontics & Surgeries",
    link: "/services/periodontics",
    image: null,
  },
  {
    title: "Implant Dentistry",
    link: "/services/implants",
    image: null,
  },
  {
    title: "Invisalign®",
    link: "/services/invisalign",
    image: null,
  },
  {
    title: "Full Mouth Rehabilitation & Smile Makeover",
    link: "/services/fullmouth",
    image: null,
  },
  {
    title: "Sleep Apnea & Snoring",
    link: "/services/sleep",
    image: null,
  },
  {
    title: "Facial Aesthetics & Therapeutic Botox",
    link: "/services/botox",
    image: null,
  },
  {
    title: "Sedation & Comfort-Focused Dentistry",
    link: "/services/sedation",
    image: null,
  },
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
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group relative block aspect-[4/5] overflow-hidden bg-charcoal"
              >
                {/* Background Image or Black Placeholder */}
                {service.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-charcoal transition-all duration-700 group-hover:bg-charcoal/90" />
                )}

                {/* Overlay (only when image exists) */}
                {service.image && (
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-all duration-500" />
                )}

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white tracking-wide uppercase">
                    {service.title}
                  </h3>
                </div>

                {/* Hover Border Effect */}
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
