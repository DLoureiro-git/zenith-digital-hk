"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
  }),
};

// ---------------------------------------------------------------------------
// CtaBand
// ---------------------------------------------------------------------------

export function CtaBand() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg-secondary py-24"
    >
      {/* ---- Gold gradient overlay ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(200,169,110,0.08) 0%, rgba(200,169,110,0.04) 40%, transparent 100%)",
        }}
      />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0}
          className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-accent-primary"
        >
          Get in Touch
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.1}
          className="mb-6 font-display text-3xl font-semibold text-text-primary md:text-5xl"
        >
          Ready to lead the AI shift in Asia?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.2}
          className="mb-10 font-body text-lg text-text-secondary"
        >
          Book a strategy call. No commitments&nbsp;&mdash; just a focused
          conversation about where AI can move your business.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.3}
        >
          <a
            href={`mailto:${SITE.email}`}
            className="inline-block bg-accent-primary px-10 py-4 font-body text-lg font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Book a Strategy Call&nbsp;&rarr;
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.4}
        >
          <a
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-block font-body text-text-secondary transition hover:underline"
          >
            {SITE.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
