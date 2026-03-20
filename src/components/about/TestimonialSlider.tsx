"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/constants/testimonials";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

// ---------------------------------------------------------------------------
// TestimonialSlider (grid layout, not a carousel)
// ---------------------------------------------------------------------------

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.author}
          variants={cardVariants}
          className="glass rounded-2xl p-8 transition-all duration-500 hover:border-border-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
        >
          {/* Opening quote mark */}
          <span
            className="block font-display text-6xl leading-none text-accent-primary/20 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote */}
          <p className="mt-2 font-body text-base italic leading-relaxed text-text-primary">
            {testimonial.quote}
          </p>

          {/* Author info */}
          <div className="mt-6 border-t border-border-medium pt-4">
            <p className="font-body text-sm font-semibold text-text-primary">
              {testimonial.author}
            </p>
            <p className="font-body text-sm text-text-secondary">
              {testimonial.role}, {testimonial.company}
            </p>
            <p className="font-body text-xs text-text-tertiary">
              {testimonial.location}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
