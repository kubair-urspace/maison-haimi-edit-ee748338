import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Shield, Zap } from "lucide-react";

const serviceCategories = [
  {
    id: "routine",
    icon: Shield,
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
    icon: Sparkles,
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
    icon: Heart,
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
    icon: Heart,
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
    icon: Zap,
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
    icon: Sparkles,
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
    icon: Zap,
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
              Every service at Eliza Haimi DDS is performed with the precision and care of an artisan. 
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
