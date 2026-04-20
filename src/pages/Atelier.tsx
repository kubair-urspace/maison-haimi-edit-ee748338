import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/services/ServiceCard";
import servicesHero from "@/assets/services-hero.jpg";

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints?: string[];
  detailedPoints?: string[];
  detailedPointsIntro?: string;
  additionalContent?: {
    heading: string;
    paragraphs: string[];
    keyPoints?: string[];
  };
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
    title: "Preventative Dentistry",
    subtitle: "Foundation of Care",
    description: "Preventive dentistry and long-term health go hand in hand in our practice. Every visit is designed to look beyond the present, supporting your oral health for years to come.",
    keyPoints: [
      "Preventive care + long-term health, together",
      "Visits designed to look beyond the present",
      "Supporting oral health for years to come",
    ],
    detailedPoints: [
      "Our signature gentle yet extremely thorough dental cleaning",
      "Comprehensive evaluations, including oral health and cancer screening",
      "Detailed teeth and gum analysis",
      "Careful consideration of TMJ function and bruxism",
      "Sleep and airway assessment",
      "Orthodontic evaluation",
      "When appropriate, adjunctive treatments such as fluoride therapy are available to further strengthen and protect the teeth",
      "When indicated, therapies such as full mouth debridement, deep cleanings, scaling and root planing become part of our preventative approach to address and stabilize periodontal health",
      "Our experienced hygienists focus on maintaining health in patients who are already stable, while thoughtfully guiding others toward that same level of balance and stability",
      "At every check up and cleaning visit we provide our patients with the suitable toothbrush, toothpaste, floss etc, to encourage continuation of healthy oral hygiene",
    ],
    additionalContent: {
      heading: "Advanced Digital & 3D Imaging",
      paragraphs: [
        "At our practice, imaging is used thoughtfully, only when it adds value to your diagnosis and care. We utilize low-dose digital X-rays that can be precisely adjusted based on each patient's size, age, and the specific area being evaluated. This allows us to limit radiation exposure to the smallest amount necessary while still capturing clear, diagnostic-quality images.",
        "For more complex evaluations, we incorporate advanced 3D imaging (CBCT). This technology allows us to visualize teeth, bone, and surrounding anatomy with exceptional precision. It is especially valuable in surgical planning—helping us evaluate bone levels, identify important anatomical structures, and guide procedures such as extractions and implant placement with greater accuracy and safety.",
        "Our goal is always the same: to gather the information we need while keeping exposure as low as reasonably possible—and to use that information to plan care that is precise, conservative, and long-lasting.",
      ],
      keyPoints: [
        "Imaging used only when it adds value",
        "Low-dose digital X-rays, precisely adjusted",
        "3D CBCT for surgical planning precision",
        "Exposure kept as low as reasonably possible",
      ],
    },
    services: [],
  },
  {
    id: "veneers",
    title: "Veneers & Smile Design",
    subtitle: "Artful Transformation",
    description: "Dr. Haimi's approach to veneers and smile design is rooted in one core principle: preserve as much natural tooth structure as possible. Patients seek her out for her conservative, minimally invasive philosophy, whether enhancing a single tooth or creating a complete smile transformation.",
    keyPoints: [
      "Preserve as much natural tooth structure as possible",
      "Conservative, minimally invasive philosophy",
      "From a single tooth to a complete transformation",
    ],
    detailedPoints: [
      "As a clinical instructor in the prestigious Aesthetic Honors Program at NYU College of Dentistry, Dr. Haimi teaches the same principles she practices daily: thoughtful planning, precision, and minimally invasive treatments. Every case is meticulously designed in advance before any treatment begins.",
      "Dr. Haimi has a very close relationship with the Ceramist and is always collaborating closely with master ceramists, often visiting the lab herself, and when appropriate, alongside the patient, to ensure that every detail meets both her standards and the patient's vision before anything is finalized.",
      "Only the highest quality materials are selected, and every veneer is crafted with intention, artistry, and longevity in mind.",
      "If you've been considering improving your smile but are concerned about unnecessary tooth reduction, a consultation with Dr. Haimi may offer a different, more conservative approach.",
    ],
    detailedPointsIntro: "Why patients choose Dr. Haimi for smile design:",
    services: [
      {
        name: "Porcelain Veneers",
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
        name: "Digital Smile Design",
        description: "Preview your new smile before treatment begins with cutting-edge digital planning technology.",
        beforeImage: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1581585090272-e9376a29e81e?w=800&q=80",
        transformationDetails: {
          procedure: "Digital photography and software analysis to design your ideal smile proportions and aesthetics.",
          technique: "DSD protocol with facial analysis, digital mockups, and wax-up previews for patient approval.",
          duration: "1–2 planning visits before treatment",
          result: "Complete visualization of your future smile, ensuring your expectations are met before any work begins.",
        },
      },
    ],
  },
  {
    id: "aesthetic",
    title: "Aesthetic Dentistry",
    subtitle: "Aesthetic Excellence",
    description: "\"Aesthetic dentistry\" is simply the closest term—but in our practice, it's not a category, it's a standard. With Dr. Haimi's background in art and sculpting, every treatment is approached with an aesthetic eye—from a tooth-colored filling on a back molar to a single veneer or a full smile design. That said, aesthetics are never placed above function. Longevity, structural integrity, and overall oral health are always the foundation—because when those are done correctly, beauty naturally follows.",
    keyPoints: [
      "Not a category, a standard",
      "Background in art and sculpting informs every treatment",
      "Function and longevity always come first",
      "Beauty naturally follows when done correctly",
    ],
    detailedPoints: [
      "KöR Whitening",
      "At-home whitening with same-day custom trays",
      "Removal of white spot lesions (calcification)",
      "Tetracycline stain treatment",
      "Invisalign®",
      "Complimentary cosmetic contouring after every Invisalign case",
    ],
    detailedPointsIntro: "In addition to restorative aesthetic treatments, we also offer:",
    services: [
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
        name: "Gum Contouring",
        description: "Reshaping the gumline to reveal more tooth structure and create a balanced, harmonious smile.",
        beforeImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1559757148-5c688a2b1088?w=800&q=80",
        transformationDetails: {
          procedure: "Precise removal or reshaping of excess gum tissue to improve smile proportions.",
          technique: "Laser-assisted soft tissue recontouring for minimal discomfort and rapid healing.",
          duration: "Single visit, 30–60 minutes",
          result: "A more balanced, symmetrical smile with ideal tooth-to-gum proportions.",
        },
      },
    ],
  },
  {
    id: "crowns",
    title: "Same-Day Inlays, Onlays & Crowns",
    subtitle: "Advanced Technology",
    description: "Inlays, onlays, and crowns are all crafted from the same high-quality materials—the difference lies in how much of the natural tooth needs to be reshaped to support them. Dr. Haimi's philosophy has always centered on preserving as much natural tooth structure as possible. With over 20 years of experience, she avoids full crowns whenever a more conservative option can achieve the same—or better—long-term result.",
    keyPoints: [
      "Same high-quality materials for inlays, onlays & crowns",
      "Preserve as much natural tooth structure as possible",
      "20+ years of experience favoring conservative options",
      "Full crowns avoided whenever possible",
    ],
    detailedPoints: [
      "Through meticulous planning and advanced techniques, Dr. Haimi has helped thousands of patients avoid crowns by restoring teeth with inlays and onlays instead. These conservative restorations allow us to remove only what is damaged—decay and compromised fillings—while preserving the healthy portions of the tooth.",
      "Inlays and onlays are precisely designed to fit the exact contours of your tooth and are bonded in place, reinforcing the remaining structure while delivering beautiful, natural aesthetics. In many cases, this approach can even help prevent the need for future root canal treatment.",
      "For added convenience, our office offers same-day fabrication using advanced in-house technology. Your restoration is designed, created, and placed in a single visit—eliminating the need for temporaries or multiple appointments.",
      "There is something uniquely precise about having your restoration designed and crafted by the same doctor who prepared your tooth—ensuring a level of fit, detail, and care that is simply unmatched.",
    ],
    detailedPointsIntro: "What sets our approach apart:",
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
    ],
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    subtitle: "Rebuilding Smiles",
    description: "Rebuilding form, function, and beauty with lasting dental restorations that look and feel like your natural teeth.",
    keyPoints: [
      "Rebuilding form, function, and beauty",
      "Lasting restorations that feel natural",
      "Look and feel like your own teeth",
    ],
    detailedPoints: [
      "Direct Restorations: Composite (tooth-colored) fillings, dental bondings, core buildup (after root canal treatment)",
      "Indirect Restorations: Inlays, onlays, crowns (full coverage)",
      "Tooth Replacements: Dental implants, implant-supported bridges & dentures, fixed bridges, cantilever bridges, Maryland bridges",
      "Removable Prosthetics: Partial dentures, complete dentures",
      "Endodontic-Related Restorations: Post and core, build-ups after root canal",
      "Occlusal / Functional Restorations: Full mouth rehabilitation, bite reconstruction, occlusal equilibration (adjustments)",
      "Repair & Maintenance: Replacement of old restorations, repair of fractured teeth, repair of existing crowns, bridges, veneers",
    ],
    detailedPointsIntro: "Our restorative services include:",
    services: [
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
      },
      {
        name: "Dental Bridges",
        description: "Fixed prosthetics that bridge the gap left by missing teeth, restoring your smile and bite.",
        beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
        transformationDetails: {
          procedure: "Custom porcelain bridge anchored to adjacent teeth to replace one or more missing teeth.",
          technique: "Precision-crafted ceramics designed to match your natural teeth in color, shape, and translucency.",
          duration: "2 visits over 2–3 weeks",
          result: "A seamless, permanent restoration that fills the gap and restores full chewing function.",
        },
      },
      {
        name: "Root Canal Therapy",
        description: "Gentle, modern root canal treatment to save infected teeth and relieve pain.",
        beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
        transformationDetails: {
          procedure: "Removal of infected pulp tissue, thorough cleaning of root canals, and sealing to prevent reinfection.",
          technique: "Rotary endodontic instruments with electronic apex locators for precise, efficient treatment.",
          duration: "1–2 visits, 60–90 minutes each",
          result: "A saved natural tooth, free from infection and pain, preserved for years of continued function.",
        },
      },
    ],
  },
  {
    id: "periodontics",
    title: "Periodontics, Dental & Implant Surgeries",
    subtitle: "Gum Health Specialists",
    description: "A few years ago, Dr. Haimi made a deliberate decision to bring surgical care in-house—allowing for a level of collaboration, precision, and continuity that cannot be achieved when treatment is performed across multiple locations. Having previously worked closely alongside Dr. Ahladiotis (Dr. Effie), Dr. Haimi welcomed the opportunity to integrate her into the practice. In our new location, Dr. Effie practices in a dedicated, state-of-the-art surgical suite designed specifically for advanced periodontal and implant procedures. Every surgical case is approached collaboratively. Dr. Haimi and Dr. Effie plan and execute treatment together—ensuring that both the health and the aesthetics of the final result are thoughtfully considered from the very beginning.",
    keyPoints: [
      "Surgical care brought in-house for continuity",
      "Dedicated, state-of-the-art surgical suite",
      "Dr. Haimi and Dr. Effie collaborate on every case",
      "Health and aesthetics planned from the start",
    ],
    detailedPoints: [
      "Gum contouring and aesthetic gum lifts (for gummy smiles)",
      "Crown lengthening (functional and aesthetic)",
      "Soft tissue grafting (gum grafts)",
      "Bone grafting and ridge augmentation",
      "Guided tissue regeneration",
      "Extractions",
      "Dental implant placements",
      "Peri-implant disease treatment",
      "Treatment of periodontal (gum) disease",
      "Frenectomy",
      "Biopsy and management of oral lesions",
    ],
    detailedPointsIntro: "Our periodontal and surgical services include:",
    additionalContent: {
      heading: "Periodontics & Implant Surgery",
      paragraphs: [
        "We use only the highest quality materials available for all surgical procedures—including implants, bone grafting, and gum grafting. We do not compromise when it comes to the materials that support healing, stability, and long-term success.",
        "All extractions and implant placements are carefully planned using advanced 3D imaging (CBCT). This allows us to evaluate bone, anatomy, and surrounding structures in detail before treatment, improving accuracy and helping us approach each case with greater safety and predictability.",
        "Our focus is on doing things the right way from the start—using the best materials and thorough planning to support optimal outcomes.",
      ],
      keyPoints: [
        "Only the highest quality surgical materials",
        "No compromise on healing and stability",
        "Every case planned with 3D CBCT imaging",
        "Done the right way from the start",
      ],
    },
    services: [],
  },
  {
    id: "implants",
    title: "Implant Dentistry",
    subtitle: "Permanent Solutions",
    description: "From surgical placement to final restoration, we approach each implant case with the precision of a master craftsman, restoring both function and beauty.",
    keyPoints: [
      "From surgical placement to final restoration",
      "Precision of a master craftsman",
      "Restoring both function and beauty",
    ],
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
        name: "All-on-4 / All-on-6 Implants",
        description: "Full-arch restoration supported by just 4–6 strategically placed implants for a complete new smile.",
        beforeImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1626735698273-1571605f07b8?w=800&q=80",
        transformationDetails: {
          procedure: "Strategic placement of 4–6 implants to support a full-arch prosthesis replacing all teeth.",
          technique: "Angled posterior implants maximize bone contact, often eliminating the need for bone grafting.",
          duration: "Surgical placement with same-day temporary prosthesis, final restoration in 3–6 months",
          result: "A complete, fixed set of teeth that restores full function and a confident, natural-looking smile.",
        },
      },
    ],
  },
  {
    id: "invisalign",
    title: "Invisalign®",
    subtitle: "Over 15 Years of Experience",
    description: "Invisalign treatment is a modern, precise way to align teeth using a series of custom clear aligners, designed to gradually move teeth into their ideal position. In our practice, Invisalign is not approached as a quick cosmetic fix, but as part of a comprehensive treatment plan focused on function, health, and longevity. Proper alignment allows for a more balanced bite, reduces uneven wear, and helps preserve the natural tooth structure over time.",
    keyPoints: [
      "Custom clear aligners for precise tooth movement",
      "Not a quick fix—part of a comprehensive plan",
      "Focused on function, health, and longevity",
      "Balanced bite, reduced wear, preserved structure",
    ],
    detailedPoints: [
      "Dr. Haimi has been providing Invisalign treatment for over 15 years, bringing a depth of experience that allows for thoughtful, highly individualized care.",
      "Every case is carefully planned by Dr. Haimi. While advanced digital technology is used as a tool, Dr. Haimi never relies on software alone to determine treatment. Each case is personally measured, designed, and refined based on a deep understanding of occlusion, facial aesthetics, and long-term stability.",
      "From the initial digital setup (ClinCheck) to the placement of every attachment, Dr. Haimi personally oversees and executes each step, ensuring that tooth movement is intentional, precise, and fully customized to the individual patient.",
      "While Invisalign plays an essential role in improving function, it also creates the foundation for natural aesthetics. As part of our approach, we include complimentary cosmetic contouring after every Invisalign treatment, refining the final shape and edges of the teeth so the result is not only healthy, but beautifully balanced and harmonious.",
    ],
    detailedPointsIntro: "What makes our Invisalign approach unique:",
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
    ],
  },
  {
    id: "fullmouth",
    title: "Full Mouth Rehabilitation & Smile Makeover",
    subtitle: "Complete Transformation",
    description: "A smile makeover or full mouth reconstruction is one of the most comprehensive and transformative treatments in dentistry. In our practice, it is never approached as simply \"changing the way teeth look,\" but as a carefully planned process that restores function, health, and natural aesthetics in harmony. No two cases are the same. Each treatment is planned in advance in collaboration with the lab and the patient, aligning clinical needs with the patient's goals, preferences, and vision for their smile. A core principle in our approach is preservation of natural tooth structure—ensuring strength, longevity, and a natural result that does not appear overdone.",
    keyPoints: [
      "More than changing how teeth look",
      "Restores function, health, and aesthetics in harmony",
      "Planned in collaboration with lab and patient",
      "Preserves natural tooth structure for a natural result",
    ],
    detailedPoints: [
      "Comfortable, stable occlusion",
      "TMJ health and joint function",
      "Muscular balance and function",
      "Airway and sleep considerations",
      "Facial aesthetics and overall harmony",
      "Tooth wear and structural integrity",
      "Bone support and height",
      "Gum levels and symmetry",
      "Lip structure and smile line",
      "Missing teeth and replacement options",
    ],
    detailedPointsIntro: "Every case begins with a deep understanding of the individual patient, considering:",
    services: [
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
      },
      {
        name: "Smile Makeover",
        description: "A comprehensive approach to transforming your smile, combining multiple treatments tailored to your unique vision.",
        beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
        transformationDetails: {
          procedure: "Full smile makeover combining porcelain veneers, professional whitening, and gum contouring for a harmonious result.",
          technique: "Digital Smile Design (DSD) planning with wax-up previews, followed by minimally invasive preparation and custom layered ceramics.",
          duration: "3–5 visits over 4–6 weeks",
          result: "A naturally radiant smile that complements facial features, with improved symmetry, shade, and proportion.",
        },
      },
    ],
  },
  {
    id: "sleep",
    title: "Sleep Apnea & Snoring",
    subtitle: "Rest Better",
    description: "Dr. Haimi is a Diplomate of the American Board of Dental Sleep Medicine, the highest level of training in dental sleep medicine, allowing for comprehensive evaluation and management of airway-related sleep disorders. She is also one of a very small number of cosmetic dentists who integrates sleep medicine into everyday dental care, recognizing that airway, function, and aesthetics are closely connected. Snoring and sleep apnea are part of sleep-disordered breathing—conditions that affect not only sleep quality, but overall health, daily function, and long-term well-being.",
    keyPoints: [
      "Diplomate, American Board of Dental Sleep Medicine",
      "Highest level of training in dental sleep medicine",
      "One of few cosmetic dentists integrating sleep medicine",
      "Airway, function & aesthetics are connected",
    ],
    detailedPoints: [
      "When breathing is disrupted during sleep, oxygen levels drop and the body is repeatedly aroused from deep sleep—often without the patient realizing it. This can lead to chronic fatigue, brain fog, memory issues, mood changes, anxiety, and non-restorative sleep.",
      "Patients with sleep apnea are 2–3 times more likely to be involved in motor vehicle accidents, with hundreds of thousands of crashes each year in the U.S. linked to sleep-disordered breathing.",
      "Untreated sleep apnea has been associated with high blood pressure, heart disease, stroke, diabetes, anxiety, depression, memory loss, cognitive decline, and increased risk of Alzheimer's disease.",
      "Trained dentists are often the first to recognize signs: clenching and grinding (bruxism), worn or fractured teeth, TMJ discomfort, and bite instability.",
      "Sleep apnea affects men, women, and children. Many patients are not overweight. Women are frequently underdiagnosed, often presenting with insomnia, fatigue, and anxiety rather than loud snoring.",
      "CPAP therapy is the gold standard, but not all patients tolerate it. Custom oral appliance therapy is an effective alternative for many patients.",
    ],
    detailedPointsIntro: "Why sleep health matters:",
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
      },
    ],
  },
  {
    id: "botox",
    title: "Facial Aesthetics & Therapeutic Botox",
    subtitle: "Beyond the Smile",
    description: "What many patients don't realize is that dentists receive extensive medical training in full-body anatomy—including far beyond the head and neck—before going on to focus even more deeply on the muscles, nerves, and function of the face and jaw.",
    keyPoints: [
      "Extensive medical training in full-body anatomy",
      "Deep focus on muscles, nerves & function of face and jaw",
    ],
    additionalContent: {
      heading: "Botox",
      paragraphs: [
        "At our practice, Botox is used thoughtfully to help with concerns like clenching, jaw tension, and muscle discomfort. This approach is further guided by Dr. Haimi's background as a Diplomate of the American Board of Dental Sleep Medicine, along with her training in occlusion and full-mouth rehabilitation—where understanding muscle function and balance is essential. Incorporating Botox into care was a natural extension of this philosophy.",
        "Because of our understanding of how these muscles function together, treatments are precise, conservative, and always focused on comfort and balance.",
        "And while the primary goal is therapeutic, an understanding of facial aesthetics naturally guides every treatment—ensuring results feel as good as they look, without ever appearing overdone.",
        "Our goal is simple—to help you feel better, more relaxed, and completely at ease with your care.",
      ],
      keyPoints: [
        "Used for clenching, jaw tension & muscle discomfort",
        "Guided by training in occlusion & sleep medicine",
        "Precise, conservative, never overdone",
        "Therapeutic first—aesthetic results follow",
      ],
    },
    services: [],
  },
  {
    id: "sedation",
    title: "Sedation & Comfort-Focused Dentistry",
    subtitle: "Anxiety-Free Care",
    description: "Our office was intentionally designed to feel more like a home than a clinical setting. The reception area resembles a comfortable living room, where patients are welcomed with calming teas and light refreshments to help ease into their visit.",
    keyPoints: [
      "Designed to feel like a home, not a clinic",
      "Reception feels like a comfortable living room",
      "Welcomed with calming teas and light refreshments",
    ],
    additionalContent: {
      heading: "Sedation & Comfort-Focused Dentistry",
      paragraphs: [
        "Each treatment room is equipped with thoughtful amenities—comfortable chairs, TVs, and music—creating a more relaxed, distraction-friendly environment throughout your care.",
        "Dr. Haimi has spent years building not only clinical expertise, but also a strong foundation in patient communication—taking the time to talk through treatments, answer questions, and ensure patients feel informed and at ease before anything begins.",
        "Dr. Haimi's calm, reassuring demeanor is rooted in both experience and intention. Her Bachelors in psychology, combined with years of treating anxious patients, has shaped an approach centered on understanding, patience, and trust.",
        "For those who would like additional support, we also offer nitrous oxide (laughing gas), a safe and effective option to help you relax during treatment.",
        "Over time, our goal is not just to make visits comfortable—but to change the way you feel about dentistry altogether. Many of our patients who once felt anxious now come in feeling calm and at ease, having replaced old fears with a new, more positive experience.",
      ],
      keyPoints: [
        "Comfortable chairs, TVs & music in every room",
        "Communication that leaves patients informed & at ease",
        "Background in psychology shapes a calm approach",
        "Nitrous oxide (laughing gas) available for extra support",
        "Changing how you feel about dentistry, over time",
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
            className="flex items-start gap-3 font-body text-sm text-charcoal/70 leading-relaxed"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            {point}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const Atelier = () => {
  return (
    <Layout>
      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-[70vh] flex items-end">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${servicesHero})`,
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

              {/* Two-column: description on left, key points on right */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-7">
                  <p className="font-body text-charcoal/70 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                {category.keyPoints && category.keyPoints.length > 0 && (
                  <div className="lg:col-span-5 lg:border-l lg:border-gold/20 lg:pl-8">
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
                      Key Points
                    </p>
                    <ul className="space-y-3">
                      {category.keyPoints.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="flex items-start gap-3 font-body text-sm text-charcoal/80 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
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
                    <div className="lg:col-span-7 space-y-4">
                      {category.additionalContent.paragraphs.map((paragraph, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="font-body text-sm text-charcoal/70 leading-relaxed"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                    {category.additionalContent.keyPoints && category.additionalContent.keyPoints.length > 0 && (
                      <div className="lg:col-span-5 lg:border-l lg:border-gold/20 lg:pl-8">
                        <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
                          Key Points
                        </p>
                        <ul className="space-y-3">
                          {category.additionalContent.keyPoints.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: i * 0.05 }}
                              className="flex items-start gap-3 font-body text-sm text-charcoal/80 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Services Grid */}
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
