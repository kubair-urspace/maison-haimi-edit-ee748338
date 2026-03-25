import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicePreventative from "@/assets/service-preventative.jpg";
import serviceVeneers from "@/assets/service-veneers.jpg";
import serviceAesthetic from "@/assets/service-aesthetic.jpg";
import serviceCrowns from "@/assets/service-crowns.jpg";
import serviceRestorative from "@/assets/service-restorative.jpg";
import servicePeriodontics from "@/assets/service-periodontics.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceInvisalign from "@/assets/service-invisalign.jpg";
import serviceFullmouth from "@/assets/service-fullmouth.jpg";
import serviceSleep from "@/assets/service-sleep.jpg";
import serviceBotox from "@/assets/service-botox.jpg";
import serviceSedation from "@/assets/service-sedation.jpg";

const services = [
  {
    title: "Preventative Dentistry",
    description: "Comprehensive care to protect your smile and prevent future dental issues.",
    link: "/atelier#preventative",
    image: servicePreventative,
  },
  {
    title: "Veneers & Smile Design",
    description: "Custom-crafted porcelain veneers designed to create your ideal smile.",
    link: "/atelier#veneers",
    image: serviceVeneers,
  },
  {
    title: "Aesthetic Dentistry",
    description: "Artistry and precision for naturally beautiful, confidence-inspiring results.",
    link: "/atelier#aesthetic",
    image: serviceAesthetic,
  },
  {
    title: "Same-Day Inlays, Onlays & Crowns",
    description: "Custom restorations crafted and placed in a single visit with advanced digital technology.",
    link: "/atelier#crowns",
    image: serviceCrowns,
  },
  {
    title: "Restorative Dentistry",
    description: "Rebuilding form, function, and beauty with lasting dental restorations.",
    link: "/atelier#restorative",
    image: serviceRestorative,
  },
  {
    title: "Periodontics & Surgeries",
    description: "Specialized gum care and surgical treatments for optimal oral health.",
    link: "/atelier#periodontics",
    image: servicePeriodontics,
  },
  {
    title: "Implant Dentistry",
    description: "Surgical placement and restoration—permanent solutions that look and feel natural.",
    link: "/atelier#implants",
    image: serviceImplants,
  },
  {
    title: "Invisalign®",
    description: "18 years of experience with clear aligners—discreet, comfortable, effective.",
    link: "/atelier#invisalign",
    image: serviceInvisalign,
  },
  {
    title: "Full Mouth Rehabilitation & Smile Makeover",
    description: "Comprehensive transformations combining multiple disciplines for total smile renewal.",
    link: "/atelier#fullmouth",
    image: serviceFullmouth,
  },
  {
    title: "Sleep Apnea & Snoring",
    description: "Dental sleep medicine solutions for better rest and improved quality of life.",
    link: "/atelier#sleep",
    image: serviceSleep,
  },
  {
    title: "Facial Aesthetics & Therapeutic Botox",
    description: "Non-surgical facial rejuvenation and therapeutic treatments for TMJ and migraine relief.",
    link: "/atelier#botox",
    image: serviceBotox,
  },
  {
    title: "Sedation & Comfort-Focused Dentistry",
    description: "Relaxed, anxiety-free care tailored for patients who value comfort above all.",
    link: "/atelier#sedation",
    image: serviceSedation,
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
