import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/services/ServiceCard";

const serviceCategories = [
  {
    id: "preventative",
    title: "Preventative Dentistry",
    subtitle: "Foundation of Care",
    description: "Preventive dentistry and long-term health go hand in hand in our practice. Every visit is designed to look beyond the present, supporting your oral health for years to come.",
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
    services: [
      {
        name: "Comprehensive Exams & Cleanings",
        description: "Thorough evaluations and professional cleanings to maintain optimal oral health and catch issues early.",
        beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
        transformationDetails: {
          procedure: "Full oral examination with digital X-rays, oral cancer screening, and professional prophylaxis cleaning.",
          technique: "Advanced diagnostic imaging combined with meticulous hand and ultrasonic scaling.",
          duration: "Single visit, approximately 60–90 minutes",
          result: "A clean, healthy mouth with early detection of any developing concerns.",
        },
      },
      {
        name: "Digital X-Rays & Diagnostics",
        description: "State-of-the-art digital imaging for precise diagnosis with significantly reduced radiation exposure.",
        beforeImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
        transformationDetails: {
          procedure: "Digital radiography and intraoral camera imaging for comprehensive diagnostic evaluation.",
          technique: "Low-radiation digital sensors providing instant, high-resolution images for accurate analysis.",
          duration: "15–20 minutes as part of your exam",
          result: "Crystal-clear diagnostic images that allow for precise treatment planning and early intervention.",
        },
      },
      {
        name: "Oral Cancer Screening",
        description: "Early detection screenings that could save your life—quick, painless, and essential.",
        beforeImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        transformationDetails: {
          procedure: "Visual and tactile examination of oral tissues, including advanced screening technology.",
          technique: "Systematic evaluation of all oral soft tissues with adjunctive screening aids for enhanced detection.",
          duration: "5–10 minutes as part of your regular exam",
          result: "Peace of mind through early detection, dramatically improving treatment outcomes if needed.",
        },
      },
    ],
  },
  {
    id: "veneers",
    title: "Veneers & Smile Design",
    subtitle: "Artful Transformation",
    description: "Dr. Haimi's approach to veneers and smile design is rooted in one core principle: preserve as much natural tooth structure as possible. Patients seek her out for her conservative, minimally invasive philosophy, whether enhancing a single tooth or creating a complete smile transformation.",
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
    title: "Periodontics & Surgeries",
    subtitle: "Gum Health Specialists",
    description: "Specialized periodontal care from Dr. Ahladiotis, with over two decades of experience in advanced gum treatments and surgical procedures.",
    services: [
      {
        name: "Deep Cleaning (Scaling & Root Planing)",
        description: "Thorough below-the-gumline cleaning to treat gum disease and restore periodontal health.",
        beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
        transformationDetails: {
          procedure: "Non-surgical deep cleaning to remove plaque and tartar from below the gumline and smooth root surfaces.",
          technique: "Ultrasonic and hand instrumentation with local anesthesia for patient comfort.",
          duration: "1–2 visits, 60–90 minutes per quadrant",
          result: "Reduced pocket depths, eliminated infection, and a foundation for gum tissue to heal and reattach.",
        },
      },
      {
        name: "Gum Grafting",
        description: "Soft tissue grafting to restore receding gums and protect exposed tooth roots.",
        beforeImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&q=80",
        transformationDetails: {
          procedure: "Connective tissue or free gingival graft to cover exposed roots and rebuild gum volume.",
          technique: "Microsurgical technique with donor tissue from the palate or AlloDerm for minimal discomfort.",
          duration: "Single surgical visit, 1–2 hours",
          result: "Restored gumline coverage, reduced sensitivity, and improved aesthetics around affected teeth.",
        },
      },
      {
        name: "Periodontal Surgery",
        description: "Advanced surgical treatments for complex periodontal conditions requiring expert intervention.",
        beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
        transformationDetails: {
          procedure: "Surgical intervention to access and clean deep periodontal pockets and regenerate lost bone.",
          technique: "Flap surgery with bone grafting and guided tissue regeneration for predictable outcomes.",
          duration: "Single surgical visit, 1–3 hours depending on extent",
          result: "Arrested periodontal disease, regenerated bone support, and a stable foundation for long-term oral health.",
        },
      },
    ],
  },
  {
    id: "implants",
    title: "Implant Dentistry",
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
    ],
  },
  {
    id: "fullmouth",
    title: "Full Mouth Rehabilitation & Smile Makeover",
    subtitle: "Complete Transformation",
    description: "Comprehensive transformations combining multiple disciplines—cosmetic, restorative, and surgical—for total smile renewal.",
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
      },
    ],
  },
  {
    id: "botox",
    title: "Facial Aesthetics & Therapeutic Botox",
    subtitle: "Beyond the Smile",
    description: "Non-surgical facial rejuvenation and therapeutic treatments for TMJ disorders, migraines, and facial pain—enhancing both beauty and comfort.",
    services: [
      {
        name: "Therapeutic Botox for TMJ & Migraines",
        description: "Targeted Botox injections to relieve chronic jaw pain, tension headaches, and TMJ disorders.",
        beforeImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
        transformationDetails: {
          procedure: "Precise Botox injections into the masseter and temporalis muscles to reduce clenching and relieve pain.",
          technique: "Anatomically guided injection technique targeting overactive muscles causing pain and dysfunction.",
          duration: "Single visit, 15–30 minutes",
          result: "Significant reduction in jaw pain, headaches, and teeth grinding within 1–2 weeks.",
        },
      },
      {
        name: "Cosmetic Facial Rejuvenation",
        description: "Subtle, natural-looking facial enhancements that complement your smile transformation.",
        beforeImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
        transformationDetails: {
          procedure: "Strategic Botox and dermal filler placement to smooth fine lines and restore youthful facial volume.",
          technique: "Conservative, dentist-guided approach leveraging deep knowledge of facial anatomy for natural results.",
          duration: "Single visit, 30–45 minutes",
          result: "A refreshed, natural appearance that beautifully complements your dental work.",
        },
      },
    ],
  },
  {
    id: "sedation",
    title: "Sedation & Comfort-Focused Dentistry",
    subtitle: "Anxiety-Free Care",
    description: "We understand dental anxiety. Our comfort-focused approach ensures every patient feels safe, relaxed, and cared for throughout their visit.",
    services: [
      {
        name: "Oral Sedation",
        description: "Gentle oral sedation for patients who experience moderate anxiety, allowing you to relax completely during treatment.",
        beforeImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&q=80",
        transformationDetails: {
          procedure: "Prescription oral sedative taken before your appointment to induce a calm, deeply relaxed state.",
          technique: "Carefully dosed medication tailored to your weight, anxiety level, and medical history.",
          duration: "Effects last 2–4 hours; a companion is required for transportation",
          result: "A stress-free dental experience with little to no memory of the procedure.",
        },
      },
      {
        name: "Nitrous Oxide (Laughing Gas)",
        description: "Mild, fast-acting sedation that eases anxiety while keeping you fully conscious and responsive.",
        beforeImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
        transformationDetails: {
          procedure: "Inhaled nitrous oxide delivered through a comfortable nose mask during your dental procedure.",
          technique: "Adjustable flow rate allows precise control of sedation level throughout treatment.",
          duration: "Effects wear off within minutes of removing the mask",
          result: "Immediate relaxation during treatment with a quick recovery—you can drive yourself home afterward.",
        },
      },
      {
        name: "Comfort Amenities",
        description: "Premium comfort amenities including noise-canceling headphones, weighted blankets, and aromatherapy.",
        beforeImage: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1515894203077-3c3d8a0bb228?w=800&q=80",
        transformationDetails: {
          procedure: "A curated suite of comfort amenities designed to transform your dental visit into a spa-like experience.",
          technique: "Noise-canceling headphones, weighted blankets, aromatherapy, and a calming environment.",
          duration: "Available throughout every visit at no additional charge",
          result: "A completely reimagined dental experience that patients actually look forward to.",
        },
      },
    ],
  },
];

const DetailedPointsSection = ({ points, intro }: { points: string[]; intro?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-gold">
          {intro || "At every check up visit our patients benefit from:"}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-4 py-1.5 border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 group"
        >
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">
            {isOpen ? "See Less" : "See More"}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-3.5 w-3.5 text-gold" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
              opacity: { duration: 0.3, delay: 0.1 },
            }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 mt-4">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 font-body text-sm text-charcoal/70 leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
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
              {category.detailedPoints && (
                <DetailedPointsSection points={category.detailedPoints} intro={category.detailedPointsIntro} />
              )}
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
                  transformationDetails={service.transformationDetails}
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
