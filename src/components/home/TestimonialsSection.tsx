import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    treatment: "Smile Makeover",
    quote: "Dr. Haimi and his team gave me the confidence to smile again. The entire experience was gentle, luxurious, and the results exceeded my expectations.",
  },
  {
    name: "James R.",
    treatment: "Porcelain Veneers",
    quote: "I was nervous about getting veneers, but the process was seamless. My new smile looks completely natural—people can't believe they're veneers.",
  },
  {
    name: "Michelle T.",
    treatment: "Invisalign® Alignment",
    quote: "The discreet aligners fit perfectly into my lifestyle. In just months, my teeth were straighter than I ever thought possible. Truly life-changing.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative z-10 py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-display text-2xl md:text-3xl italic text-gold mb-2 block">
            Patient
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide uppercase">
            Testimonials
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border bg-card p-8 flex flex-col"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
