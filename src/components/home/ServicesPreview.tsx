import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Routine Dental Care",
    description: "Cleanings, exams, root canals, and preventative care—the foundation of lasting oral health.",
    link: "/atelier#routine",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Smile makeovers, veneers, crowns, and dental bonding—artistry for your smile.",
    link: "/atelier#cosmetic",
  },
  {
    icon: Heart,
    title: "Implants & Dentures",
    description: "Permanent implants and custom dentures—restoring function and beauty.",
    link: "/atelier#implants",
  },
  {
    icon: Zap,
    title: "Invisalign® & Emergencies",
    description: "Clear aligners for straighter teeth and same-day emergency care when you need it most.",
    link: "/atelier#invisalign",
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
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            What We Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
