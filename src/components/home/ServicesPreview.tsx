import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import haimiLogo from "@/assets/haimi-logo-white.png.asset.json";

const services = [
  { title: "Oral Health and Longevity", link: "/services/preventative" },
  { title: "Porcelain Veneers & Smile Design", link: "/services/veneers" },
  { title: "Aesthetic and Restorative Dentistry", link: "/services/aesthetic-restorative" },
  { title: "Implant and Surgical Care", link: "/services/implant-surgical" },
  { title: "Full Mouth Rehabilitation & Smile Makeover", link: "/services/fullmouth" },
  { title: "Invisalign®", link: "/services/invisalign" },
  { title: "Sleep Apnea & Snoring", link: "/services/sleep" },
  { title: "Facial Aesthetics & Therapeutic Botox", link: "/services/botox" },
  { title: "Sedation & Comfort-Focused Dentistry", link: "/services/sedation" },
];

const ServicesPreview = () => {
  return (
    <section className="relative z-10 py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
            Explore
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Our Services
          </h2>
        </motion.div>

        {/* Premium Image Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                <Link
                  to={service.link}
                  className="group relative block aspect-[4/3] overflow-hidden bg-white rounded-2xl border-[3px] border-[hsl(var(--sand))] transition-colors duration-700 ease-out hover:border-gold/70"
                >
                  {/* Base surface + hover lightening */}
                  <div className="absolute inset-0 bg-white transition-colors duration-700 ease-out group-hover:bg-[hsl(var(--cream))]" />

                  {/* Soft radial glow that fades in on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, hsl(var(--gold) / 0.10), transparent 70%)",
                    }}
                  />

                  {/* Gold sweep shimmer */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-y-2 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.18)] to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[300%] transition-all duration-[1400ms] ease-out" />
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-display text-lg md:text-xl lg:text-2xl text-charcoal tracking-wide uppercase transition-transform duration-700 ease-out group-hover:-translate-y-0.5">
                      {service.title}
                    </h3>
                    <span className="mt-3 block h-px w-0 bg-gold/70 transition-all duration-700 ease-out group-hover:w-10" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Single large logo watermark spanning all 9 boxes */}
          <img
            src={haimiLogo.url}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto w-[60%] max-w-[720px] h-auto opacity-[0.10] select-none"
            style={{ filter: "invert(1)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
