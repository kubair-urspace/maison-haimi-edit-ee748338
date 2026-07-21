import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/home/AboutSection";
import facilityReception from "@/assets/facility-reception.jpg";
import facilityTreatment from "@/assets/facility-treatment.jpg";
import facilityTreatment2 from "@/assets/facility-treatment-2.jpg";
import facilityTreatment3 from "@/assets/facility-treatment-3.jpg";
import facilityTechnology from "@/assets/facility-technology.jpg";
import facilityTechnology2 from "@/assets/facility-technology-2.jpg";
import facilityTechnology3 from "@/assets/facility-technology-3.jpg";
import facilityTechnology4 from "@/assets/facility-technology-4.jpg";
import practiceConsultation from "@/assets/practice-gallery/practice-consultation.jpg.asset.json";
import practiceDsc0391 from "@/assets/practice-gallery/practice-dsc0391.jpg.asset.json";
import practiceDsc0401 from "@/assets/practice-gallery/practice-dsc0401.jpg.asset.json";
import practiceDsc0404 from "@/assets/practice-gallery/practice-dsc0404.jpg.asset.json";

const practiceImages = [
  { src: facilityReception, label: "Reception" },
  { src: facilityTreatment, label: "Treatment Suite" },
  { src: facilityTreatment2, label: "Patient Care" },
  { src: facilityTreatment3, label: "Comfort & Design" },
  { src: practiceConsultation.url, label: "Consultation Suite" },
  { src: practiceDsc0391.url, label: "Clinical Detail" },
  { src: practiceDsc0401.url, label: "Precision Setup" },
  { src: practiceDsc0404.url, label: "Modern Interiors" },

];


const technologies = [
  {
    title: "3D CBCT Imaging",
    subtitle: "See Beyond the Surface",
    body: "Our 3D Cone Beam CT (CBCT) scanner provides a detailed three-dimensional view of your teeth, jaw, nerves, sinuses, and surrounding bone. Unlike traditional x-rays, it allows us to diagnose problems with exceptional precision and carefully plan implants, root canals, extractions and other complex procedures while minimizing surprises.",
  },
  {
    title: "Low-Dose Digital X-Rays",
    subtitle: "Precision Imaging with Less Radiation",
    body: "Our digital radiography system allows us to customize the radiation dose for every patient. Instead of using a one-size-fits-all setting, we adjust the exposure based on your height, body size and the specific area being imaged. This provides exceptionally clear images while using only the amount of radiation necessary for an accurate diagnosis.",
  },
  {
    title: "Digital Intraoral Scanner",
    subtitle: "Comfortable, Impression-Free Accuracy",
    body: "Our digital scanner captures highly accurate 3D images of your teeth in minutes, making procedures more comfortable while improving the precision of inlays, onlays, crowns, nightguards, retainers, and other restorations where regular impression techniques are not necessary.",
  },
  {
    title: "CAD/CAM Digital Design",
    subtitle: "Designed Digitally. Crafted Precisely.",
    body: "Every smile begins with thoughtful planning. Our advanced CAD/CAM technology allows us to digitally design restorations with exceptional precision, ensuring a natural fit, ideal function, and beautiful esthetics before they are ever fabricated.",
  },
  {
    title: "In-House Milling Technology",
    subtitle: "Beautiful Restorations, Made Right Here",
    body: "Our in-office milling technology allows us to fabricate many custom ceramic restorations right in our practice. This provides outstanding precision, shortens treatment time, and often allows patients to complete treatment in a single visit.",
  },
  {
    title: "3D Printing Technology",
    subtitle: "Precision Through Digital Innovation",
    body: "Our medical-grade 3D printers produce highly accurate surgical guides, dental models, nightguards, retainers, and other custom appliances. This technology improves precision, efficiency, and predictability while helping deliver more personalized care.",
  },
  {
    title: "Intraoral Camera",
    subtitle: "See What We See",
    body: "Our high-definition intraoral camera allows you to view your teeth and gums on a chairside monitor in real time. By seeing exactly what we see, you'll better understand your diagnosis and treatment options, allowing you to make informed decisions about your oral health.",
  },
  {
    title: "Advanced Sterilization",
    subtitle: "Safety Without Compromise",
    body: "Hospital-grade sterilization protocols and modern instrumentation ensure the highest standards of safety and infection control.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Haimi Dental Aesthetics | Great Neck, NY"
        description="Meet the doctors, tour our state-of-the-art practice, and explore the advanced technology behind Haimi Dental Aesthetics in Great Neck, NY."
        path="/about"
      />
      <div className="pt-14 md:pt-16 bg-cream">
        {/* Doctors */}
        <AboutSection />

        {/* State of the Art Practice */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Our Facility
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal tracking-wide uppercase leading-tight mb-6">
                A State of the Art Practice
              </h2>
              <p className="font-body text-charcoal/75 leading-relaxed text-base md:text-lg">
                Every detail of our Great Neck office has been thoughtfully designed to combine
                cutting-edge clinical technology with the warmth and calm of a private retreat.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {practiceImages.map((img, i) => (
                <motion.div
                  key={img.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative aspect-[3/4] overflow-hidden group"
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 font-body text-xs tracking-[0.2em] uppercase text-cream">
                    {img.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Technology */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Innovation & Precision
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal tracking-wide uppercase leading-tight mb-6">
                Advanced Technology
              </h2>
              <p className="font-body text-charcoal/75 leading-relaxed text-base md:text-lg">
                We invest in the finest diagnostic and treatment technology to deliver
                exceptional outcomes with comfort, safety, and precision at every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
              {technologies.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-background border border-gold/20 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-gold/50 hover:-translate-y-1 transition-all duration-500"
                >
                  <h3 className="font-display text-2xl text-charcoal uppercase tracking-wide mb-2">
                    {t.title}
                  </h3>
                  {t.subtitle && (
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
                      {t.subtitle}
                    </p>
                  )}
                  <p className="font-body text-charcoal/75 leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[facilityTechnology, facilityTechnology2, facilityTechnology3, facilityTechnology4].map(
                (src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="aspect-square overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Technology ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal tracking-wide uppercase mb-8">
              Experience the Difference
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury-gold-filled" size="lg" asChild>
                <Link to="/meet-us">Meet the Team</Link>
              </Button>
              <Button variant="luxury" size="lg" asChild>
                <Link to="/concierge">Schedule an Appointment</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
