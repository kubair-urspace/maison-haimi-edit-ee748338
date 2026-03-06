import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/services/ServiceCard";

const serviceCategories = [
  {
    id: "cosmetic",
    title: "Cosmetic & Aesthetic Dentistry",
    subtitle: "Aesthetic Excellence",
    description: "Where artistry meets mastery. Our aesthetic services are designed to enhance your natural beauty, creating smiles that are both stunning and authentically you.",
    services: [
      {
        name: "Smile Makeover",
        description: "A comprehensive approach to transforming your smile, combining multiple treatments tailored to your unique vision and facial aesthetics.",
        beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      },
      {
        name: "Dental Veneers",
        description: "Ultra-thin, custom-crafted shells that create a flawless appearance while preserving your natural tooth structure.",
        beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
      },
      {
        name: "Dental Bonding",
        description: "An artful technique to reshape and perfect individual teeth, addressing chips, gaps, and discoloration.",
      },
      {
        name: "Composite Fillings",
        description: "Tooth-colored fillings that restore function while maintaining the natural appearance of your smile.",
      }
    ]
  },
  {
    id: "crowns",
    title: "Same-Day Crowns & Restorations",
    subtitle: "Advanced Technology",
    description: "Using the most advanced digital technology available, we craft precision restorations in a single visit—no temporaries, no second appointments.",
    services: [
      {
        name: "Same-Day Crowns",
        description: "Custom digital crowns designed, milled, and placed in one visit using advanced CAD/CAM technology.",
        beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      },
      {
        name: "Onlays & Inlays",
        description: "Conservative restorations that preserve natural tooth structure while restoring strength and aesthetics.",
      },
      {
        name: "Full Mouth Reconstruction",
        description: "Comprehensive treatment planning to rebuild and restore complete oral function and aesthetics.",
        beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
      }
    ]
  },
  {
    id: "implants",
    title: "Dental Implant Services",
    subtitle: "Permanent Solutions",
    description: "From surgical placement to final restoration, we approach each implant case with the precision of a master craftsman, restoring both function and beauty.",
    services: [
      {
        name: "Surgical Implant Placement",
        description: "Precise surgical placement of dental implants using advanced diagnostic imaging and guided surgery techniques.",
        beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      },
      {
        name: "Implant Restoration",
        description: "Custom-crafted crowns and prosthetics that attach to your implants, completing your smile with natural-looking results.",
      },
      {
        name: "Am I a Candidate?",
        description: "Comprehensive evaluation to determine if dental implants are the right solution for your unique situation.",
      },
      {
        name: "Options for Replacing Missing Teeth",
        description: "Explore all available options for tooth replacement, including implants, bridges, and dentures.",
      }
    ]
  },
  {
    id: "invisalign",
    title: "Invisalign® Clear Aligners",
    subtitle: "18 Years of Experience",
    description: "With 18 years of Invisalign experience, Dr. Haimi offers expert clear aligner therapy—the modern alternative to traditional braces.",
    services: [
      {
        name: "Invisalign® Treatment",
        description: "Clear aligner therapy for a straighter smile without traditional braces—discreet, comfortable, effective.",
        beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
      },
      {
        name: "Invisalign® for Teens",
        description: "A teen-friendly orthodontic solution that fits seamlessly into an active lifestyle.",
      },
      {
        name: "Invisalign® vs Traditional Braces",
        description: "Compare the benefits and considerations of clear aligners versus metal braces.",
      }
    ]
  },
  {
    id: "sleep",
    title: "Dental Sleep Medicine",
    subtitle: "Rest Better",
    description: "As a qualified dentist in sleep medicine, Dr. Haimi offers solutions for sleep-disordered breathing, helping you achieve better rest and improved quality of life.",
    services: [
      {
        name: "Sleep Apnea Treatment",
        description: "Custom oral appliance therapy as an alternative to CPAP for mild to moderate obstructive sleep apnea.",
      },
      {
        name: "Snoring Solutions",
        description: "Effective dental solutions to reduce or eliminate snoring for better sleep quality.",
      },
      {
        name: "Sleep Assessment",
        description: "Comprehensive evaluation of your sleep health and personalized treatment recommendations.",
      }
    ]
  },
  {
    id: "whitening",
    title: "In-Office Teeth Whitening",
    subtitle: "Brilliant Smiles",
    description: "Professional in-office whitening treatments that safely brighten your smile, revealing the natural radiance beneath.",
    services: [
      {
        name: "Professional Teeth Whitening",
        description: "In-office whitening treatments that deliver dramatic results in a single visit.",
        beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      },
      {
        name: "Custom Whitening Plans",
        description: "Personalized whitening protocols designed for your specific needs and sensitivity levels.",
      }
    ]
  }
];

const Atelier = () => {
  return (
    <Layout>
      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-[70vh] flex items-end">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide uppercase mb-6"
          >
            Our Dental Services
          </motion.h1>
          
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 font-body text-sm text-white/80"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </motion.nav>
        </div>
      </section>

      {/* Section Header */}
      <section className="relative z-10 py-12 bg-background border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl text-gold/70 tracking-wide uppercase"
            >
              Cutting-Edge Procedures
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`relative z-10 py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-cream'}`}
        >
          <div className="container mx-auto px-4">
            {/* Category Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
                {category.subtitle}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide uppercase">
                {category.title}
              </h2>
              <p className="font-body text-charcoal/70 mt-4 max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  description={service.description}
                  beforeImage={service.beforeImage}
                  afterImage={service.afterImage}
                  index={serviceIndex}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative z-10 py-20 md:py-32 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-6">
              Begin Your Transformation
            </h2>
            <p className="font-body text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Ready to explore how we can enhance your smile? Schedule a consultation 
              to discuss your goals and discover the possibilities.
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

export default Atelier;
