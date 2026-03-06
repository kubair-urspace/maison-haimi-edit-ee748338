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
        beforeImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      },
      {
        name: "Composite Fillings",
        description: "Tooth-colored fillings that restore function while maintaining the natural appearance of your smile.",
        beforeImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1559757148-5c688a2b1088?w=800&q=80",
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
        beforeImage: "https://images.unsplash.com/photo-1468493858157-0dfb5ab23948?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1581585090561-56e01b4e01f7?w=800&q=80",
      },
      {
        name: "Onlays & Inlays",
        description: "Conservative restorations that preserve natural tooth structure while restoring strength and aesthetics.",
        beforeImage: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=800&q=80",
      },
      {
        name: "Full Mouth Reconstruction",
        description: "Comprehensive treatment planning to rebuild and restore complete oral function and aesthetics.",
        beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
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
        beforeImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      },
      {
        name: "Implant Restoration",
        description: "Custom-crafted crowns and prosthetics that attach to your implants, completing your smile with natural-looking results.",
        beforeImage: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      },
      {
        name: "Am I a Candidate?",
        description: "Comprehensive evaluation to determine if dental implants are the right solution for your unique situation.",
        beforeImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&q=80",
      },
      {
        name: "Options for Replacing Missing Teeth",
        description: "Explore all available options for tooth replacement, including implants, bridges, and dentures.",
        beforeImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1626735698273-1571605f07b8?w=800&q=80",
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
        beforeImage: "https://images.unsplash.com/photo-1495556650867-99590cea3657?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=800&q=80",
      },
      {
        name: "Invisalign® for Teens",
        description: "A teen-friendly orthodontic solution that fits seamlessly into an active lifestyle.",
        beforeImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      },
      {
        name: "Invisalign® vs Traditional Braces",
        description: "Compare the benefits and considerations of clear aligners versus metal braces.",
        beforeImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
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
        beforeImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1515894203077-3c3d8a0bb228?w=800&q=80",
      },
      {
        name: "Snoring Solutions",
        description: "Effective dental solutions to reduce or eliminate snoring for better sleep quality.",
        beforeImage: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      },
      {
        name: "Sleep Assessment",
        description: "Comprehensive evaluation of your sleep health and personalized treatment recommendations.",
        beforeImage: "https://images.unsplash.com/photo-1455732063391-5f1c8261b2f0?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
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
        beforeImage: "https://images.unsplash.com/photo-1445527815600-1e60b84c8c50?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      },
      {
        name: "Custom Whitening Plans",
        description: "Personalized whitening protocols designed for your specific needs and sensitivity levels.",
        beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
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
