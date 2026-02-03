import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Shield, Zap } from "lucide-react";

const serviceCategories = [
  {
    id: "aesthetic",
    icon: Sparkles,
    title: "The Aesthetic Gallery",
    subtitle: "Cosmetic Excellence",
    description: "Where artistry meets dentistry. Our cosmetic services are designed to enhance your natural beauty, creating smiles that are both stunning and authentically you.",
    services: [
      {
        name: "Smile Makeovers",
        description: "A comprehensive approach to transforming your smile, combining multiple treatments tailored to your unique vision and facial aesthetics."
      },
      {
        name: "Porcelain Veneers",
        description: "Ultra-thin, custom-crafted shells that create a flawless appearance while preserving your natural tooth structure."
      },
      {
        name: "Teeth Whitening",
        description: "Professional whitening treatments that safely brighten your smile, revealing the natural radiance beneath."
      },
      {
        name: "Dental Bonding",
        description: "An artful technique to reshape and perfect individual teeth, addressing chips, gaps, and discoloration."
      }
    ]
  },
  {
    id: "restoration",
    icon: Heart,
    title: "The Restoration Studio",
    subtitle: "Rebuilding with Precision",
    description: "When teeth need repair or replacement, we approach each case with the precision of a master craftsman, restoring both function and beauty.",
    services: [
      {
        name: "Dental Implants",
        description: "Permanent tooth replacement that looks, feels, and functions like natural teeth—a lifetime solution."
      },
      {
        name: "Crowns & Bridges",
        description: "Custom restorations that seamlessly blend with your natural teeth, renewing strength and aesthetics."
      },
      {
        name: "Root Canal Therapy",
        description: "Gentle, effective treatment to save damaged teeth and eliminate pain, preserving your natural smile."
      }
    ]
  },
  {
    id: "foundation",
    icon: Shield,
    title: "The Foundation",
    subtitle: "Preventative Care",
    description: "The cornerstone of lasting oral health. Our preventative services focus on maintaining what nature gave you, catching concerns before they become problems.",
    services: [
      {
        name: "Dental Checkups",
        description: "Comprehensive examinations that go beyond the surface, ensuring your complete oral health."
      },
      {
        name: "Professional Cleanings",
        description: "Thorough, gentle cleanings that leave your mouth feeling refreshed and your smile gleaming."
      },
      {
        name: "Oral Cancer Screenings",
        description: "Early detection screenings as part of our commitment to your overall health and wellbeing."
      },
      {
        name: "Dental Sealants",
        description: "Protective coatings that shield vulnerable teeth, especially beneficial for younger patients."
      }
    ]
  },
  {
    id: "specialty",
    icon: Zap,
    title: "Specialty Care",
    subtitle: "Specialized Services",
    description: "From clear aligners to urgent care, we offer specialized services to meet your unique needs with the same level of artistry and attention.",
    services: [
      {
        name: "Invisalign",
        description: "Clear aligner therapy for a straighter smile without traditional braces—discreet, comfortable, effective."
      },
      {
        name: "Emergency Services",
        description: "When dental emergencies arise, we're here with prompt, compassionate care to address your urgent needs."
      }
    ]
  }
];

const Atelier = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
            >
              The Atelier
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            >
              Our Craft
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-muted-foreground editorial-text max-w-2xl"
            >
              Every service at Maison Haimi is performed with the precision and care of an artisan. 
              We don't just treat teeth—we craft smiles that enhance your natural beauty and confidence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-card'}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <category.icon className="h-10 w-10 text-gold mb-6" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                  {category.subtitle}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  {category.title}
                </h2>
                <p className="font-body text-muted-foreground editorial-text">
                  {category.description}
                </p>
              </motion.div>

              {/* Services List */}
              <div className="space-y-12">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    className="border-l-2 border-gold/30 pl-8 py-2"
                  >
                    <h3 className="font-display text-2xl text-foreground mb-3">
                      {service.name}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Begin Your Transformation
            </h2>
            <p className="font-body text-muted-foreground editorial-text max-w-xl mx-auto mb-10">
              Ready to explore how we can enhance your smile? Schedule a consultation 
              to discuss your goals and discover the possibilities.
            </p>
            <Button variant="luxury" size="xl" asChild>
              <Link to="/concierge">Request a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Atelier;
