import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, smile makeovers, and aesthetic transformations—artistry for your smile.",
    link: "/atelier#cosmetic",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },
  {
    title: "Same-Day Crowns",
    description: "Custom restorations crafted and placed in a single visit with advanced digital technology.",
    link: "/atelier#crowns",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
  },
  {
    title: "Dental Implants",
    description: "Surgical placement and restoration—permanent solutions that look and feel natural.",
    link: "/atelier#implants",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    title: "Invisalign®",
    description: "18 years of experience with clear aligners—discreet, comfortable, effective.",
    link: "/atelier#invisalign",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    title: "Sleep Medicine",
    description: "Dental sleep medicine solutions for better rest and improved quality of life.",
    link: "/atelier#sleep",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
  },
  {
    title: "Teeth Whitening",
    description: "Professional in-office whitening for a brighter, more radiant smile.",
    link: "/atelier#whitening",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
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
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            What We Offer
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
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white tracking-wide uppercase mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-white/80 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    {service.description}
                  </p>
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
