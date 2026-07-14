import { motion } from "framer-motion";

// Real patient reviews aggregated from Google, Facebook, and Birdeye
const testimonials = [
  {
    name: "Andrea Rothman",
    source: "Facebook",
    quote:
      "Best dentist ever! Dr. Haimi is a caring and highly competent professional at the height of her career. Her work on my teeth, and on my children's teeth, is outstanding. Her office staff is also amazing. I highly recommend.",
  },
  {
    name: "Tali Shokrani Damaghi",
    source: "Facebook",
    quote:
      "Dr. Haimi is very professional, caring, gentle and the office staff is amazing as well. We always have a great experience, highly recommended.",
  },
  {
    name: "Jeanne Naclerio Pugliese",
    source: "Facebook",
    quote:
      "Dr. Haimi is wonderful as is her entire staff! I trust her for everything related to my dental health, and her hygienist, Marie, will give you the best cleaning ever! Maria at the front desk of this immaculate office greets you warmly and helps with everything. Highly recommend!",
  },
  {
    name: "Joanne Horak",
    source: "Facebook",
    quote:
      "Everyone there is so nice and accommodating. Always so pleasant and professional. I have been going there for three years having major work done and I would never go anywhere else. Dr. Haimi is awesome.",
  },
  {
    name: "Josie Gennaro Horowitz",
    source: "Facebook",
    quote:
      "Dr. Haimi is very knowledgeable and very caring also. I highly recommend her. The entire staff is great.",
  },
  {
    name: "Jules A. Birnbaum",
    source: "Facebook",
    quote:
      "Dr. Haimi is the best. Being older, we naturally have more problems to be solved and she solves them all in a professional manner. We highly recommend Dr. Haimi.",
  },
  {
    name: "Priya Adhia",
    source: "Facebook",
    quote: "Amazing experience. Great dentist and staff.",
  },
  {
    name: "Carol Sevetar Fisher",
    source: "Facebook",
    quote: "She's very professional and does a great job.",
  },
  {
    name: "Ted Gerbracht",
    source: "Facebook",
    quote: "Perfection, sheer perfection!",
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
            Some of our Patient
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

        <div className="overflow-x-auto overflow-y-hidden scrollbar-thin cursor-grab active:cursor-grabbing">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {doubledTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[150px] md:w-[155px] border border-border bg-card p-3 flex flex-col mx-1"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-3 h-3 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-foreground/80 text-[10px] leading-snug italic flex-1 mb-2 line-clamp-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-display text-foreground text-xs">
                    {(() => {
                      const parts = testimonial.name.trim().split(/\s+/).filter(Boolean);
                      return parts.map((p) => `${p[0].toUpperCase()}.`).join(" ");
                    })()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
