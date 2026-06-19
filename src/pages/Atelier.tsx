import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import ServiceCard from "@/components/services/ServiceCard";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import { galleriesByCategoryId } from "@/data/beforeAfterCases";
import servicesHero from "@/assets/services-hero.jpg";
import preventativeHero from "@/assets/preventative-dentistry.jpg";


interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string | string[];
  heroImage?: string;
  keyPoints?: string[];
  detailedPoints?: string[];
  detailedPointsIntro?: string;
  additionalContent?: {
    heading: string;
    paragraphs: string[];
    keyPoints?: string[];
  };
  contentSections?: {
    heading: string;
    paragraphs: string[];
    listItems?: string[];
  }[];
  services: {
    name: string;
    description: string;
    beforeImage?: string;
    afterImage?: string;
    transformationDetails?: {
      procedure: string;
      technique: string;
      duration: string;
      result: string;
    };
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "preventative",
    title: "Oral Health & Longevity",
    subtitle: "Foundation of Care",
    description: [
      "Your oral health is deeply connected to your overall health, comfort, confidence, and quality of life. At Haimi Dental Aesthetics, we believe preventive and comprehensive dental care should do more than simply \"check for cavities.\" Every visit is an opportunity to protect your long-term health, preserve your natural teeth, and identify issues before they become more complex.",
      "Our approach combines modern technology, detailed diagnostics, and personalized care in a calm, boutique environment where patients are never rushed and every detail matters.",
    ],
    heroImage: preventativeHero,
    contentSections: [
      {
        heading: "The connection between oral health and overall health",
        paragraphs: [
          "The mouth is not separate from the rest of the body. Chronic inflammation, untreated gum disease, oral infections, poor sleep, and destructive bite forces can all impact overall wellness and quality of life.",
          "Research has shown associations between periodontal disease and systemic conditions such as cardiovascular disease, diabetes, respiratory disease, pregnancy complications, and certain neurodegenerative conditions. Chronic inflammation and oral bacteria may contribute to inflammatory burden throughout the body, which is one reason preventive dental care is so important.",
          "Because of this, our examinations go beyond simply checking teeth for cavities. We routinely evaluate:",
        ],
        listItems: [
          "Gum and periodontal health",
          "Signs of inflammation or infection",
          "Clenching, grinding, and bite instability",
          "Sleep-disordered breathing and airway concerns",
          "TMJ health and muscle strain",
          "Wear patterns and structural breakdown",
          "Oral cancer and soft tissue abnormalities",
        ],
      },
      {
        heading: "Our philosophy",
        paragraphs: [
          "Healthy dentistry is often the most conservative dentistry. Whenever possible, we focus on preserving healthy tooth structure, maintaining stability, and preventing future breakdown rather than waiting until problems become more extensive.",
          "We believe aesthetics, function, structure, and biology should always work together to support long-lasting oral health.",
        ],
      },
      {
        heading: "Comprehensive preventive care includes",
        paragraphs: [],
        listItems: [
          "Professional cleanings and periodontal maintenance",
          "Comprehensive dental examinations",
          "Oral cancer screenings",
          "Low-radiation digital X-rays when indicated",
          "3D imaging when indicated",
          "Evaluation of bite function and tooth wear",
          "TMJ and clenching/grinding assessment",
          "Sleep-disordered breathing and airway screening",
          "Fluoride treatments and enamel protection",
          "Early detection of cracked, weakened, or failing teeth",
          "Personalized preventive recommendations based on your needs and risk factors",
          "Complimentary at-home care kits provided",
        ],
      },
      {
        heading: "Prevention with a long-term mindset",
        paragraphs: [
          "Our goal is not simply to treat problems as they arise, but to help patients maintain strong, functional, healthy smiles for decades to come. By identifying issues early and approaching care conservatively, we can often minimize future dental treatment and preserve more of your natural teeth over time.",
        ],
      },
      {
        heading: "A more personalized experience",
        paragraphs: [
          "We understand that dental visits can feel stressful for many patients. Our office was designed to feel welcoming, calm, and comfortable — with a patient experience centered around clear communication, individualized care, and attention to detail.",
          "Whether you are maintaining a healthy smile or rebuilding your oral health after years of wear or neglect, we are committed to helping you achieve long-lasting health, function, and aesthetics through thoughtful, comprehensive care.",
        ],
      },
    ],
    services: [],
  },
  {
    id: "veneers",
    title: "Porcelain Veneers & Smile Design",
    subtitle: "Artful Transformation",
    description:
      "Dr. Haimi's approach to veneers and smile design is rooted in one core principle: preserve as much natural tooth structure as possible. Patients seek her conservative, minimally invasive philosophy — whether enhancing a single tooth or creating a full smile transformation.",
    keyPoints: [
      "Preserve natural tooth structure",
      "Conservative & minimally invasive",
      "From a single tooth to a full smile",
    ],
    detailedPoints: [
      "Clinical instructor in NYU's Aesthetic Honors Program",
      "Close collaboration with master ceramists",
      "Only the highest quality materials",
      "A conservative alternative for patients worried about unnecessary tooth reduction",
    ],
    detailedPointsIntro: "Why patients choose Dr. Haimi for smile design:",
    services: [],
  },
  {
    id: "aesthetic-restorative",
    title: "Aesthetic & Restorative Dentistry",
    subtitle: "",
    description: [
      "Beautiful dentistry should do more than improve appearance. It should strengthen, preserve, and support the long-term health of your smile.",
      "At Haimi Dental Aesthetics, our approach to restorative dentistry is rooted in a minimally invasive philosophy that prioritizes both aesthetics and longevity. Every restoration is carefully designed to blend naturally with your smile while preserving as much healthy tooth structure as possible.",
      "Whether treating worn teeth, replacing failing dental work, repairing damage, or enhancing the overall appearance of your smile, we believe dentistry should look natural, feel comfortable, and function beautifully.",
    ],
    contentSections: [
      {
        heading: "Conservative dentistry with an aesthetic standard",
        paragraphs: [
          "Aesthetics is not treated as a final step, it is the standard every step is held to.",
          "Whenever possible, we choose conservative solutions that preserve healthy enamel and strengthen teeth without unnecessarily aggressive treatment. In many cases, teeth that traditionally may have been treated with full crowns can instead be restored more conservatively with bonded porcelain restorations such as inlays or onlays.",
        ],
      },
      {
        heading: "Services may include",
        paragraphs: [],
        listItems: [
          "Tooth-colored composite restorations or bonding",
          "Replacing old or failing amalgam (silver/black) fillings",
          "Same-day CAD/CAM restorations, such as porcelain inlays, onlays and crowns",
          "Repair of chipped, worn, or fractured teeth",
          "Whitening",
          "Treatment of white spots on enamel",
          "Tetracycline stain treatment",
          "Cosmetic contouring and enamel reshaping",
        ],
      },
      {
        heading: "Designed with precision and intention",
        paragraphs: [
          "Every smile is unique. Treatment is carefully customized based on facial aesthetics, tooth proportions, bite function, gum architecture, and long-term structural health.",
          "Using advanced digital technology, high-quality materials, and detailed treatment planning, we are able to deliver restorations that are highly aesthetic while also supporting durability and function.",
        ],
      },
      {
        heading: "A biomimetic philosophy",
        paragraphs: [
          "We believe the healthiest dentistry often mimics nature as closely as possible. By preserving healthy tooth structure and restoring teeth in a way that respects their original form and biomechanics, we can often improve both aesthetics and longevity while minimizing unnecessary treatment.",
        ],
      },
    ],
    services: [
      {
        name: "Dental Bonding",
        description: "Reshape and perfect individual teeth — fixing chips, gaps, and discoloration.",
      },
      {
        name: "Professional Teeth Whitening",
        description: "In-office whitening that delivers dramatic results in a single visit.",
      },
      {
        name: "Same-Day Crowns",
        description: "Custom digital crowns designed, milled, and placed in one visit.",
      },
      {
        name: "Onlays & Inlays",
        description: "Conservative restorations that preserve natural tooth structure.",
      },
      {
        name: "Composite Fillings",
        description: "Tooth-colored fillings that restore function and stay invisible.",
      },
      {
        name: "Dental Bridges",
        description: "Fixed prosthetics that bridge the gap left by missing teeth.",
      },
    ],
  },
  {
    id: "implant-surgical",
    title: "Implant and Surgical Care",
    subtitle: "Surgical Specialists",
    description:
      "A few years ago, Dr. Haimi brought surgical care in-house — allowing for the collaboration, precision, and continuity that's not possible across multiple locations. Dr. Ahladiotis (Dr. Effie) now practices in a dedicated, state-of-the-art surgical suite. Every surgical case is planned and executed together, so both the health and the aesthetics of the final result are considered from the very beginning.",
    keyPoints: [
      "Surgical care brought in-house",
      "Dedicated state-of-the-art surgical suite",
      "Dr. Haimi & Dr. Effie plan every case together",
      "Health and aesthetics from day one",
    ],
    detailedPoints: [
      "Gum contouring & aesthetic gum lifts",
      "Soft tissue & bone grafting",
      "Dental implant placement",
      "Implant restorations (single, bridge, All-on-4/6)",
      "Periodontal (gum) disease treatment",
      "Biopsy & oral lesion management",
    ],
    detailedPointsIntro: "Our implant & surgical services include:",
    additionalContent: {
      heading: "Materials & Planning",
      paragraphs: [
        "We use only the highest quality materials for every surgical procedure — implants, bone grafting, and gum grafting. We don't compromise on what supports healing and long-term success.",
        "All extractions and implants are planned with advanced 3D CBCT imaging, letting us evaluate bone and anatomy in detail before treatment for greater accuracy and safety.",
      ],
      keyPoints: [
        "Only the highest quality materials",
        "No compromise on healing or stability",
        "Every case planned with 3D CBCT",
        "Done the right way from the start",
      ],
    },
    services: [
      {
        name: "Surgical Implant Placement",
        description: "Precise implant placement guided by advanced 3D imaging.",
      },
      {
        name: "Implant Restoration",
        description: "Custom crowns and prosthetics that complete your implant naturally.",
      },
      {
        name: "All-on-4 / All-on-6 Implants",
        description: "Full-arch restoration on just 4–6 strategically placed implants.",
      },
    ],
  },
  {
    id: "fullmouth",
    title: "Full Mouth Rehabilitation & Smile Makeover",
    subtitle: "",
    description:
      "A full mouth reconstruction is one of the most transformative treatments in dentistry. In our practice, it's never just \"changing the way teeth look\" — it's a carefully planned process that restores function, health, and natural aesthetics together. Every case is unique, planned in collaboration with the lab and patient. A core principle: preservation of natural tooth structure — for strength, longevity, and a result that never looks overdone.",
    keyPoints: [
      "More than how teeth look",
      "Function, health & aesthetics in harmony",
      "Planned with lab and patient",
      "Preserves natural tooth structure",
    ],
    detailedPoints: [
      "Comfortable, stable occlusion",
      "TMJ health & joint function",
      "Airway & sleep considerations",
      "Facial aesthetics & harmony",
      "Bone support & gum symmetry",
      "Missing teeth & replacement options",
    ],
    detailedPointsIntro: "Every case considers:",
    services: [
      {
        name: "Full Mouth Reconstruction",
        description: "Comprehensive planning to rebuild full oral function and aesthetics.",
      },
      {
        name: "Smile Makeover",
        description: "A complete smile transformation, tailored to your unique vision.",
      },
    ],
  },
  {
    id: "invisalign",
    title: "Invisalign®",
    subtitle: "",
    description:
      "Invisalign uses a series of custom clear aligners to gradually move teeth into ideal position. In our practice, it's never just a quick cosmetic fix — it's part of a comprehensive plan focused on function, health, and longevity. Proper alignment supports a balanced bite, reduces uneven wear, and helps preserve natural tooth structure over time.",
    keyPoints: [
      "Custom clear aligners",
      "Not a quick fix — a comprehensive plan",
      "Function, health & longevity",
      "Balanced bite, preserved structure",
    ],
    detailedPoints: [
      "Over 15 years of Invisalign experience",
      "Every case personally planned by Dr. Haimi — software is a tool, never the decision-maker",
      "Dr. Haimi personally oversees every step, from ClinCheck to attachment placement",
      "Complimentary cosmetic contouring after every Invisalign case",
    ],
    detailedPointsIntro: "What makes our approach unique:",
    services: [
      {
        name: "Invisalign® Treatment",
        description: "Clear aligner therapy for a straighter smile — discreet and effective.",
      },
      {
        name: "Invisalign® for Teens",
        description: "A teen-friendly orthodontic solution that fits an active lifestyle.",
      },
    ],
  },
  {
    id: "sleep",
    title: "Sleep Apnea & Snoring",
    subtitle: "Rest Better",
    description:
      "Dr. Haimi is a Diplomate of the American Board of Dental Sleep Medicine — the highest level of training in dental sleep medicine. She is one of a very small number of cosmetic dentists who integrates sleep medicine into everyday dental care, recognizing that airway, function, and aesthetics are closely connected.",
    keyPoints: [
      "Diplomate, American Board of Dental Sleep Medicine",
      "Highest level of dental sleep training",
      "Few cosmetic dentists integrate sleep medicine",
      "Airway, function & aesthetics connected",
    ],
    detailedPoints: [
      "Disrupted breathing drops oxygen and prevents deep sleep",
      "Untreated sleep apnea is linked to heart disease, stroke, and cognitive decline",
      "Dentists often spot the first signs: clenching, worn teeth, TMJ issues",
      "CPAP is the gold standard, but oral appliances are an effective alternative",
    ],
    detailedPointsIntro: "Why sleep health matters:",
    services: [
      {
        name: "Sleep Apnea Treatment",
        description: "Custom oral appliance therapy as a CPAP alternative for mild to moderate apnea.",
      },
      {
        name: "Snoring Solutions",
        description: "Effective dental solutions to reduce or eliminate snoring.",
      },
      {
        name: "Sleep Assessment",
        description: "Comprehensive evaluation of your sleep health.",
      },
    ],
  },
  {
    id: "botox",
    title: "Facial Aesthetics & Therapeutic Botox",
    subtitle: "Beyond the Smile",
    description:
      "Dentists receive extensive training in full-body anatomy — and even deeper training in the muscles, nerves, and function of the face and jaw. That foundation, combined with Dr. Haimi's expertise in sleep medicine and occlusion, makes therapeutic Botox a natural extension of our care.",
    keyPoints: [
      "Extensive anatomy training",
      "Deep focus on face & jaw function",
    ],
    additionalContent: {
      heading: "Therapeutic Botox",
      paragraphs: [
        "Botox is used thoughtfully to help with clenching, jaw tension, and muscle discomfort. This approach is guided by Dr. Haimi's training as a Diplomate of the American Board of Dental Sleep Medicine and her work in occlusion and full-mouth rehabilitation.",
        "Treatments are precise, conservative, and always focused on comfort and balance. While the goal is therapeutic, an understanding of facial aesthetics naturally guides every treatment — never overdone.",
      ],
      keyPoints: [
        "For clenching, jaw tension & discomfort",
        "Guided by occlusion & sleep training",
        "Precise, conservative, never overdone",
        "Therapeutic first — aesthetic follows",
      ],
    },
    services: [],
  },
  {
    id: "sedation",
    title: "Sedation & Comfort-Focused Dentistry",
    subtitle: "Anxiety-Free Care",
    description:
      "Our office was intentionally designed to feel more like a home than a clinic. The reception area resembles a comfortable living room, where patients are welcomed with calming teas and light refreshments.",
    keyPoints: [
      "Designed to feel like home",
      "Reception like a living room",
      "Calming teas & refreshments",
    ],
    additionalContent: {
      heading: "Sedation & Comfort",
      paragraphs: [
        "Each treatment room has comfortable chairs, TVs, and music for a relaxed, distraction-friendly experience.",
        "Dr. Haimi takes the time to talk through every treatment so patients feel informed and at ease. Her background in psychology shapes a calm, patient approach built on trust.",
        "Nitrous oxide (laughing gas) is available for those who'd like extra support. Over time, our goal is to change how you feel about dentistry — many of our once-anxious patients now come in calm and at ease.",
      ],
      keyPoints: [
        "Comfortable chairs, TVs & music",
        "Calm, patient communication",
        "Psychology background informs care",
        "Nitrous oxide available",
      ],
    },
    services: [],
  },
];

const DetailedPointsSection = ({ points, intro }: { points: string[]; intro?: string }) => {
  return (
    <div className="mt-6 max-w-2xl">
      <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
        {intro || "At every check up visit our patients benefit from:"}
      </p>
      <ul className="space-y-3">
        {points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-start gap-3 font-body text-sm md:text-base text-foreground/85 leading-relaxed"
          >
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            {point}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const Atelier = () => {
  const { serviceId } = useParams();
  const isSingleService = Boolean(serviceId);
  const matchedCategory = serviceId
    ? serviceCategories.find((c) => c.id === serviceId)
    : undefined;
  const categoriesToRender =
    isSingleService && matchedCategory ? [matchedCategory] : serviceCategories;

  const heroTitle = matchedCategory ? matchedCategory.title : "Our Dental Services";
  const heroBackground = matchedCategory?.heroImage || servicesHero;

  return (
    <Layout>
      <SEO
        title={matchedCategory ? `${matchedCategory.title} — Haimi Dental` : "Dental Services — Haimi Dental Aesthetics"}
        description={(() => {
          const desc = matchedCategory?.description;
          const text = Array.isArray(desc) ? desc[0] : desc;
          return text?.slice(0, 155) || "Explore cosmetic, restorative, and preventive dental services at Haimi Dental Aesthetics in Great Neck, NY.";
        })()}
        path={matchedCategory ? `/services/${matchedCategory.id}` : "/services"}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide uppercase mb-6"
          >
            {heroTitle}
          </motion.h1>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 font-body text-sm text-white/80"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            {matchedCategory ? (
              <>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white">{matchedCategory.title}</span>
              </>
            ) : (
              <span className="text-white">Services</span>
            )}
          </motion.nav>
        </div>
      </section>

      {!isSingleService && (
        <section className="relative z-10 py-12 bg-background border-b border-gold/20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl text-gold/70 tracking-wide uppercase"
            >
              Cutting-Edge Procedures
            </motion.h2>
          </div>
        </section>
      )}

      {/* Service Categories */}
      {categoriesToRender.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`relative z-10 py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-cream'}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              {category.subtitle && (
                <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
                  {category.subtitle}
                </span>
              )}
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide uppercase">
                {category.title}
              </h2>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-12 space-y-4">
                  {Array.isArray(category.description) ? (
                    category.description.map((paragraph, i) => (
                      <p key={i} className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>

              {category.detailedPoints && (
                <DetailedPointsSection points={category.detailedPoints} intro={category.detailedPointsIntro} />
              )}
              {category.additionalContent && (
                <div className="mt-12 pt-12 border-t border-gold/20">
                  <h3 className="font-display text-xl md:text-2xl text-charcoal tracking-wide uppercase mb-6">
                    {category.additionalContent.heading}
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-12 space-y-4">
                      {category.additionalContent.paragraphs.map((paragraph, i) => (
                        <p
                          key={i}
                          className="font-body text-base text-foreground/85 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {category.contentSections?.map((section, i) => (
                <div key={i} className="mt-12 pt-12 border-t border-gold/20">
                  <h3 className="font-display text-xl md:text-2xl text-charcoal tracking-wide uppercase mb-6">
                    {section.heading}
                  </h3>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, j) => (
                      <p key={j} className="font-body text-base text-foreground/85 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.listItems && section.listItems.length > 0 && (
                      <ul className="space-y-3 mt-4">
                        {section.listItems.map((item, k) => (
                          <motion.li
                            key={k}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: k * 0.05 }}
                            className="flex items-start gap-3 font-body text-sm md:text-base text-foreground/85 leading-relaxed"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {category.services.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard
                    key={service.name}
                    name={service.name}
                    description={service.description}
                    beforeImage={service.beforeImage}
                    afterImage={service.afterImage}
                    transformationDetails={service.transformationDetails}
                    index={serviceIndex}
                  />
                ))}
              </div>
            )}

            {(() => {
              const gallery = galleriesByCategoryId[category.id];
              if (!gallery) return null;
              const previewCases = gallery.cases.slice(0, 4);
              return (
                <div className="mt-16 pt-12 border-t border-gold/20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                  >
                    <span className="font-display text-xl md:text-2xl italic text-gold mb-2 block">
                      {gallery.eyebrow}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-wide uppercase">
                      {gallery.heading}
                    </h3>
                  </motion.div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {previewCases.map((caseItem, i) => (
                      <motion.div
                        key={caseItem.alt + i}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                      >
                        <BeforeAfterComparison
                          image={caseItem.image}
                          alt={caseItem.alt}
                          split={caseItem.split}
                          className="border border-border"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-10 text-center">
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/before-after">See All Before &amp; Afters</Link>
                    </Button>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      ))}


      {isSingleService && matchedCategory && (
        <section className="relative z-10 py-16 md:py-20 bg-cream border-t border-gold/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Explore More
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-wide uppercase mb-6">
                Discover Our Full Range of Services
              </h2>
              <p className="font-body text-base text-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
                Browse every treatment we offer — from preventative care to full smile transformations.
              </p>
              <Button variant="luxury-gold-filled" size="xl" asChild>
                <Link to="/services">Additional Services</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      )}

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
            <p className="font-body text-base text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
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
