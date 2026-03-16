import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    treatment: "Smile Makeover",
    quote: "Dr. Haimi and his team gave me the confidence to smile again. The entire experience was gentle, luxurious, and the results exceeded my expectations.",
  },
  {
    name: "James R.",
    treatment: "Dental Veneers",
    quote: "I was nervous about getting veneers, but the process was seamless. My new smile looks completely natural—people can't believe they're veneers.",
  },
  {
    name: "Michelle T.",
    treatment: "Invisalign® Treatment",
    quote: "The discreet aligners fit perfectly into my lifestyle. In just months, my teeth were straighter than I ever thought possible. Truly life-changing.",
  },
  {
    name: "David L.",
    treatment: "Dental Bonding",
    quote: "A small chip on my front tooth had bothered me for years. Dr. Haimi fixed it in one visit—you can't even tell it was ever there.",
  },
  {
    name: "Karen W.",
    treatment: "Composite Fillings",
    quote: "I needed several fillings replaced and Dr. Haimi matched them perfectly to my natural teeth. No one can tell the difference.",
  },
  {
    name: "Robert P.",
    treatment: "Same-Day Crowns",
    quote: "Getting a crown done in one visit was incredible. The technology they use is amazing, and the fit was perfect from day one.",
  },
  {
    name: "Angela D.",
    treatment: "Onlays & Inlays",
    quote: "Dr. Haimi took a conservative approach and saved as much of my natural tooth as possible. I appreciate the honesty and craftsmanship.",
  },
  {
    name: "Thomas K.",
    treatment: "Full Mouth Reconstruction",
    quote: "After years of dental issues, Dr. Haimi rebuilt my entire smile. The transformation has changed my life—I can eat, speak, and smile with confidence again.",
  },
  {
    name: "Patricia N.",
    treatment: "Surgical Implant Placement",
    quote: "The implant procedure was far less intimidating than I imagined. Dr. Haimi's precision and care made the entire process comfortable.",
  },
  {
    name: "Steven H.",
    treatment: "Implant Restoration",
    quote: "My implant crown looks and feels exactly like a real tooth. I forget it's even there. Absolutely worth the investment.",
  },
  {
    name: "Lisa C.",
    treatment: "Invisalign® for Teens",
    quote: "My daughter loved that no one at school could tell she was wearing aligners. Her smile transformation has been wonderful for her confidence.",
  },
  {
    name: "Michael B.",
    treatment: "Sleep Apnea Treatment",
    quote: "The custom oral appliance changed everything. I finally sleep through the night and wake up refreshed. My wife says I don't snore anymore either.",
  },
  {
    name: "Jennifer A.",
    treatment: "Snoring Solutions",
    quote: "I was skeptical that a dental device could help with snoring, but it worked from the very first night. My partner and I both sleep better now.",
  },
  {
    name: "Christopher G.",
    treatment: "Professional Teeth Whitening",
    quote: "One visit and my teeth were several shades brighter. The results were dramatic and immediate—I couldn't stop smiling all day.",
  },
];

// Duplicate for seamless loop
const doubledTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section className="relative z-10 py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-display text-2xl md:text-3xl italic text-gold mb-2 block">
            Patient
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase">
            Testimonials
          </h2>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {doubledTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] md:w-[360px] border border-border bg-card p-8 flex flex-col mx-3"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed italic flex-1 mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display text-foreground text-sm">{testimonial.name}</p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mt-1">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
