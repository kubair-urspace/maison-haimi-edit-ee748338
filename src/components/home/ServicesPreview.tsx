import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Shield } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "The Aesthetic Gallery",
    description: "Smile makeovers, porcelain veneers, whitening, and dental bonding—artistry for your smile.",
    link: "/atelier#aesthetic",
  },
  {
    icon: Heart,
    title: "The Restoration Studio",
    description: "Dental implants, crowns, bridges, and root canal therapy—rebuilding with precision.",
    link: "/atelier#restoration",
  },
  {
    icon: Shield,
    title: "The Foundation",
    description: "Dental checkups, cleanings, oral cancer screenings—the cornerstone of lasting oral health.",
    link: "/atelier#foundation",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
            The Atelier
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Our Craft
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link
                to={service.link}
                className="block group p-8 bg-secondary hover:bg-card transition-colors duration-500 h-full"
              >
                <service.icon className="h-8 w-8 text-gold mb-6" />
                <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-6 font-body text-xs tracking-widest uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
