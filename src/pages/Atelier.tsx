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
        transformationDetails: {
          procedure: "Full smile makeover combining porcelain veneers, professional whitening, and gum contouring for a harmonious result.",
          technique: "Digital Smile Design (DSD) planning with wax-up previews, followed by minimally invasive preparation and custom layered ceramics.",
          duration: "3–5 visits over 4–6 weeks",
          result: "A naturally radiant smile that complements facial features, with improved symmetry, shade, and proportion.",
        },
      },
      {
        name: "Dental Veneers",
        description: "Ultra-thin, custom-crafted shells that create a flawless appearance while preserving your natural tooth structure.",
        beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
        transformationDetails: {
          procedure: "Custom porcelain veneers bonded to the front surface of teeth to correct color, shape, and alignment.",
          technique: "Ultra-thin prep or no-prep veneers crafted from premium feldspathic porcelain for lifelike translucency.",
          duration: "2 visits over 2–3 weeks",
          result: "A flawless, camera-ready smile that looks completely natural—indistinguishable from real teeth.",
        },
      },
      {
        name: "Dental Bonding",
        description: "An artful technique to reshape and perfect individual teeth, addressing chips, gaps, and discoloration.",
        beforeImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        transformationDetails: {
          procedure: "Composite resin applied and sculpted directly onto the tooth to repair chips, close gaps, or reshape contours.",
          technique: "Freehand artistry using layered composite matched to the patient's exact tooth shade and texture.",
          duration: "Single visit, 30–60 minutes per tooth",
          result: "Seamless repair that blends invisibly with the surrounding teeth for an instantly improved smile.",
        },
      },
      {
        name: "Composite Fillings",
        description: "Tooth-colored fillings that restore function while maintaining the natural appearance of your smile.",
        beforeImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1559757148-5c688a2b1088?w=800&q=80",
        transformationDetails: {
          procedure: "Removal of decay and replacement with tooth-colored composite resin that bonds directly to the tooth.",
          technique: "Incremental layering technique with precise shade matching and polishing for an invisible restoration.",
          duration: "Single visit, 20–45 minutes per filling",
          result: "A strong, natural-looking restoration that preserves tooth structure and is virtually undetectable.",
        },
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
        transformationDetails: {
          procedure: "Digital impression, CAD/CAM design, and in-office milling of a precision ceramic crown—all in one appointment.",
          technique: "CEREC technology with 3D scanning, computer-aided design, and chairside milling from a single block of ceramic.",
          duration: "Single visit, approximately 2 hours",
          result: "A perfectly fitted, natural-looking crown with no temporary and no return visit required.",
        },
      },
      {
        name: "Onlays & Inlays",
        description: "Conservative restorations that preserve natural tooth structure while restoring strength and aesthetics.",
        beforeImage: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=800&q=80",
        transformationDetails: {
          procedure: "Custom ceramic restorations that replace only the damaged portion of the tooth, preserving healthy structure.",
          technique: "Precision-milled porcelain or composite bonded with advanced adhesive protocols for maximum longevity.",
          duration: "1–2 visits over 1–2 weeks",
          result: "A conservative, long-lasting restoration that strengthens the tooth while maintaining a completely natural appearance.",
        },
      },
      {
        name: "Full Mouth Reconstruction",
        description: "Comprehensive treatment planning to rebuild and restore complete oral function and aesthetics.",
        beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
        transformationDetails: {
          procedure: "Multi-phase treatment combining crowns, veneers, implants, and/or orthodontics to fully restore oral health and aesthetics.",
          technique: "Comprehensive diagnostic workup with wax-ups, guided surgery, and phased treatment for predictable outcomes.",
          duration: "Multiple phases over 6–12 months",
          result: "Complete restoration of function, comfort, and beauty—a new foundation for lifelong oral health.",
        },
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
        transformationDetails: {
          procedure: "Titanium implant surgically placed into the jawbone to serve as a permanent root for a replacement tooth.",
          technique: "3D CBCT-guided surgery with digitally planned implant positioning for optimal angulation and depth.",
          duration: "Single surgical visit, 3–6 months healing before restoration",
          result: "A stable, permanent foundation that looks, feels, and functions like a natural tooth root.",
        },
      },
      {
        name: "Implant Restoration",
        description: "Custom-crafted crowns and prosthetics that attach to your implants, completing your smile with natural-looking results.",
        beforeImage: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
        transformationDetails: {
          procedure: "Custom abutment and ceramic crown fabricated and placed on a fully healed implant to complete the restoration.",
          technique: "Digital impressions with CAD/CAM-designed restorations for a precise, comfortable fit.",
          duration: "2 visits over 2–3 weeks",
          result: "A beautiful, fully functional tooth replacement that is indistinguishable from natural teeth.",
        },
      },
      {
        name: "Am I a Candidate?",
        description: "Comprehensive evaluation to determine if dental implants are the right solution for your unique situation.",
        beforeImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&q=80",
        transformationDetails: {
          procedure: "Full diagnostic evaluation including 3D imaging, bone density assessment, and medical history review.",
          technique: "CBCT scans combined with clinical examination to assess bone volume, gum health, and overall candidacy.",
          duration: "Single consultation, approximately 1 hour",
          result: "A clear, personalized treatment plan outlining your options and expected outcomes.",
        },
      },
      {
        name: "Options for Replacing Missing Teeth",
        description: "Explore all available options for tooth replacement, including implants, bridges, and dentures.",
        beforeImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1626735698273-1571605f07b8?w=800&q=80",
        transformationDetails: {
          procedure: "Comparative consultation exploring implants, bridges, and removable prosthetics tailored to your needs.",
          technique: "Side-by-side analysis of longevity, aesthetics, cost, and maintenance for each replacement option.",
          duration: "Single consultation visit",
          result: "Confidence in choosing the best tooth replacement solution for your lifestyle and goals.",
        },
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
        transformationDetails: {
          procedure: "Sequential clear aligners that gradually shift teeth into ideal alignment without metal brackets or wires.",
          technique: "ClinCheck® 3D treatment planning with custom-fabricated aligners changed every 1–2 weeks.",
          duration: "6–18 months depending on complexity",
          result: "A beautifully aligned smile achieved discreetly, with minimal impact on daily life.",
        },
      },
      {
        name: "Invisalign® for Teens",
        description: "A teen-friendly orthodontic solution that fits seamlessly into an active lifestyle.",
        beforeImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
        transformationDetails: {
          procedure: "Teen-specific Invisalign with compliance indicators and eruption tabs for developing smiles.",
          technique: "Age-appropriate treatment planning with built-in features to accommodate growing jaws and emerging teeth.",
          duration: "12–18 months on average",
          result: "Straighter teeth and improved confidence without the social stigma of traditional metal braces.",
        },
      },
      {
        name: "Invisalign® vs Traditional Braces",
        description: "Compare the benefits and considerations of clear aligners versus metal braces.",
        beforeImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
        transformationDetails: {
          procedure: "Educational consultation comparing Invisalign and traditional braces for your specific orthodontic needs.",
          technique: "Digital simulation showing projected outcomes with both treatment approaches for informed decision-making.",
          duration: "Single consultation visit",
          result: "Complete clarity on which orthodontic approach will deliver the best results for your unique case.",
        },
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
        transformationDetails: {
          procedure: "Custom-fitted mandibular advancement device (MAD) that repositions the jaw to maintain an open airway during sleep.",
          technique: "Digital impressions for precise appliance fabrication, with titration adjustments for optimal positioning.",
          duration: "2–3 visits for fitting and adjustment",
          result: "Significant reduction in apnea events, improved oxygen levels, and restful sleep without a CPAP machine.",
        },
      },
      {
        name: "Snoring Solutions",
        description: "Effective dental solutions to reduce or eliminate snoring for better sleep quality.",
        beforeImage: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
        transformationDetails: {
          procedure: "Custom oral appliance designed to gently advance the lower jaw and prevent airway collapse during sleep.",
          technique: "Precision-molded device with micro-adjustable settings for comfort and effectiveness.",
          duration: "2 visits for fitting and follow-up",
          result: "Dramatically reduced or eliminated snoring, leading to better sleep for both the patient and their partner.",
        },
      },
      {
        name: "Sleep Assessment",
        description: "Comprehensive evaluation of your sleep health and personalized treatment recommendations.",
        beforeImage: "https://images.unsplash.com/photo-1455732063391-5f1c8261b2f0?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
        transformationDetails: {
          procedure: "Thorough evaluation of sleep patterns, airway anatomy, and risk factors for sleep-disordered breathing.",
          technique: "Clinical examination combined with validated screening questionnaires and optional home sleep testing.",
          duration: "Single assessment visit, approximately 45 minutes",
          result: "A clear diagnosis and personalized treatment roadmap for better sleep and improved overall health.",
        },
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
        transformationDetails: {
          procedure: "Professional-grade hydrogen peroxide whitening applied under controlled conditions for safe, dramatic brightening.",
          technique: "Light-activated whitening gel applied in multiple short sessions during a single visit for even results.",
          duration: "Single visit, approximately 90 minutes",
          result: "Teeth brightened up to 8 shades in one session, with a noticeably whiter, more youthful smile.",
        },
      },
      {
        name: "Custom Whitening Plans",
        description: "Personalized whitening protocols designed for your specific needs and sensitivity levels.",
        beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        transformationDetails: {
          procedure: "Tailored whitening plan combining in-office treatment with custom take-home trays for sustained results.",
          technique: "Custom-molded trays with professional-grade gel calibrated to your sensitivity level and whitening goals.",
          duration: "Initial visit plus 1–2 weeks of at-home use",
          result: "Gradual, comfortable whitening that reaches your ideal shade with minimal sensitivity.",
        },
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
