import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    id: "routine",
    title: "Routine Dental Care",
    subtitle: "Preventative Excellence",
    description: "The foundation of lasting oral health. Our preventative services focus on maintaining what nature gave you, catching concerns before they become problems.",
    services: [
      {
        name: "Dental Cleaning & Examinations",
        description: "Comprehensive examinations and thorough cleanings that go beyond the surface, ensuring your complete oral health."
      },
      {
        name: "Dental Anxiety Support",
        description: "We understand that visiting the dentist can feel overwhelming. Our gentle approach ensures every visit feels calm and comfortable."
      },
      {
        name: "Root Canal Treatment",
        description: "Gentle, effective treatment to save damaged teeth and eliminate pain, preserving your natural smile."
      },
      {
        name: "Tooth Extraction",
        description: "When necessary, we perform extractions with precision and care, ensuring your comfort throughout the process."
      }
    ]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dental Services",
    subtitle: "Aesthetic Excellence",
    description: "Where artistry meets dentistry. Our cosmetic services are designed to enhance your natural beauty, creating smiles that are both stunning and authentically you.",
    services: [
      {
        name: "Smile Makeover",
        description: "A comprehensive approach to transforming your smile, combining multiple treatments tailored to your unique vision and facial aesthetics."
      },
      {
        name: "Dental Veneers",
        description: "Ultra-thin, custom-crafted shells that create a flawless appearance while preserving your natural tooth structure."
      },
      {
        name: "Dental Crowns",
        description: "Custom restorations that seamlessly blend with your natural teeth, renewing strength and aesthetics."
      },
      {
        name: "Dental Bonding",
        description: "An artful technique to reshape and perfect individual teeth, addressing chips, gaps, and discoloration."
      },
      {
        name: "Composite Fillings",
        description: "Tooth-colored fillings that restore function while maintaining the natural appearance of your smile."
      }
    ]
  },
  {
    id: "implants",
    title: "Dental Implant Services",
    subtitle: "Permanent Solutions",
    description: "When teeth need replacement, we approach each case with the precision of a master craftsman, restoring both function and beauty with permanent solutions.",
    services: [
      {
        name: "Dental Implants Overview",
        description: "Permanent tooth replacement that looks, feels, and functions like natural teeth—a lifetime solution."
      },
      {
        name: "Am I a Candidate?",
        description: "Comprehensive evaluation to determine if dental implants are the right solution for your unique situation."
      },
      {
        name: "The Dental Implant Procedure",
        description: "A detailed walkthrough of what to expect during your implant journey, from consultation to final restoration."
      },
      {
        name: "Options for Replacing Missing Teeth",
        description: "Explore all available options for tooth replacement, including implants, bridges, and dentures."
      },
      {
        name: "Post-Op Care for Dental Implants",
        description: "Guidance for optimal healing and long-term success of your dental implants."
      }
    ]
  },
  {
    id: "dentures",
    title: "Denture Services",
    subtitle: "Restoring Smiles",
    description: "Custom-crafted dentures that restore your smile's beauty and function, designed with precision for comfort and natural appearance.",
    services: [
      {
        name: "Dentures & Partial Dentures",
        description: "Full and partial denture options crafted to fit comfortably and look completely natural."
      },
      {
        name: "What to Expect When Getting Dentures",
        description: "A comprehensive guide to the denture process, from initial consultation to final fitting."
      },
      {
        name: "Adjusting to New Dentures",
        description: "Tips and support for adapting to your new dentures with confidence and ease."
      },
      {
        name: "Denture Care",
        description: "Expert guidance on maintaining your dentures for lasting beauty and function."
      },
      {
        name: "Denture Repairs",
        description: "Quick and reliable repair services to keep your dentures in optimal condition."
      }
    ]
  },
  {
    id: "invisalign",
    title: "Invisalign® Clear Aligners",
    subtitle: "Almost Invisible Braces",
    description: "Straighten your teeth discreetly with Invisalign® clear aligners—the modern alternative to traditional braces.",
    services: [
      {
        name: "Invisalign® Braces",
        description: "Clear aligner therapy for a straighter smile without traditional braces—discreet, comfortable, effective."
      },
      {
        name: "Invisalign® for Teens",
        description: "A teen-friendly orthodontic solution that fits seamlessly into an active lifestyle."
      },
      {
        name: "Does Invisalign® Really Work?",
        description: "Learn about the proven results and success rates of Invisalign® treatment."
      },
      {
        name: "Invisalign® vs Traditional Braces",
        description: "Compare the benefits and considerations of clear aligners versus metal braces."
      },
      {
        name: "Alternative to Braces for Teens",
        description: "Modern orthodontic options that don't require the look of traditional metal braces."
      }
    ]
  },
  {
    id: "whitening",
    title: "Teeth Whitening Services",
    subtitle: "Brilliant Smiles",
    description: "Professional whitening treatments that safely brighten your smile, revealing the natural radiance beneath.",
    services: [
      {
        name: "Professional Teeth Whitening",
        description: "In-office whitening treatments that deliver dramatic results in a single visit."
      },
      {
        name: "Teeth Whitening at Dentist",
        description: "Safe, supervised whitening that achieves results beyond what over-the-counter products can offer."
      },
      {
        name: "Improve Your Smile for Senior Pictures",
        description: "Special whitening packages to ensure your smile looks its best for important milestones."
      }
    ]
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    subtitle: "When You Need Us Most",
    description: "When dental emergencies arise, we're here with prompt, compassionate care to address your urgent needs.",
    services: [
      {
        name: "Emergency Dentist",
        description: "Same-day emergency appointments available for urgent dental issues."
      },
      {
        name: "What Should I Do If I Chip My Tooth?",
        description: "Immediate guidance and treatment options for chipped or broken teeth."
      },
      {
        name: "Emergency Dentist vs. Emergency Room",
        description: "Understanding when to seek dental emergency care versus hospital emergency care."
      },
      {
        name: "Sports Mouth Guards",
        description: "Custom-fitted mouth guards to protect your smile during athletic activities."
      },
      {
        name: "Emergency Tooth Extraction",
        description: "Prompt extraction services when teeth cannot be saved, performed with care and precision."
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
            backgroundImage: `url(https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1600&q=80)`,
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
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  className="group p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:bg-gold/5"
                >
                  <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
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
