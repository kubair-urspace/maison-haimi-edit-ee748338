import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Preventative Dentistry",
    description: "Comprehensive care to protect your smile and prevent future dental issues.",
    link: "/atelier#preventative",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },
  {
    title: "Veneers & Smile Design",
    description: "Custom-crafted porcelain veneers designed to create your ideal smile.",
    link: "/atelier#veneers",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80",
  },
  {
    title: "Aesthetic Dentistry",
    description: "Artistry and precision for naturally beautiful, confidence-inspiring results.",
    link: "/atelier#aesthetic",
    image: "https://images.unsplash.com/photo-1581585090272-e9376a29e81e?w=800&q=80",
  },
  {
    title: "Same-Day Inlays, Onlays & Crowns",
    description: "Custom restorations crafted and placed in a single visit with advanced digital technology.",
    link: "/atelier#crowns",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },
  {
    title: "Restorative Dentistry",
    description: "Rebuilding form, function, and beauty with lasting dental restorations.",
    link: "/atelier#restorative",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  },
  {
    title: "Periodontics & Surgeries",
    description: "Specialized gum care and surgical treatments for optimal oral health.",
    link: "/atelier#periodontics",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
  },
  {
    title: "Implant Dentistry",
    description: "Surgical placement and restoration—permanent solutions that look and feel natural.",
    link: "/atelier#implants",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
  {
    title: "Invisalign®",
    description: "18 years of experience with clear aligners—discreet, comfortable, effective.",
    link: "/atelier#invisalign",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
  },
  {
    title: "Full Mouth Rehabilitation & Smile Makeover",
    description: "Comprehensive transformations combining multiple disciplines for total smile renewal.",
    link: "/atelier#fullmouth",
    image: "https://images.unsplash.com/photo-1445527815600-ed39e2edd0ac?w=800&q=80",
  },
  {
    title: "Sleep Apnea & Snoring",
    description: "Dental sleep medicine solutions for better rest and improved quality of life.",
    link: "/atelier#sleep",
    image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&q=80",
  },
  {
    title: "Facial Aesthetics & Therapeutic Botox",
    description: "Non-surgical facial rejuvenation and therapeutic treatments for TMJ and migraine relief.",
    link: "/atelier#botox",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
  },
  {
    title: "Sedation & Comfort-Focused Dentistry",
    description: "Relaxed, anxiety-free care tailored for patients who value comfort above all.",
    link: "/atelier#sedation",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
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
