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
// CtaBand — deep navy with radial glow + glass CTA
// ---------------------------------------------------------------------------

export function CtaBand() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg-secondary py-28"
    >
      {/* ---- Radial blue glow ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ---- Grid overlay ---- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />

      {/* ---- Orbital ring ---- */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] animate-slow-spin opacity-30"
        viewBox="0 0 600 600"
      >
        <circle
          cx="300"
          cy="300"
          r="280"
          fill="none"
          stroke="rgba(59,130,246,0.08)"
          strokeWidth="1"
          strokeDasharray="4 12"
        />
      </svg>

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-accent-secondary/40" />
          <span className="font-body text-xs uppercase tracking-[0.2em] text-accent-secondary">
            Get in Touch
          </span>
          <span className="h-px w-8 bg-accent-secondary/40" />
        </motion.div>

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
            className="relative inline-block rounded-full bg-accent-primary px-10 py-4 font-body text-lg font-semibold text-[#050a18] transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-[1.02]"
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
            className="mt-6 inline-block font-body text-text-secondary transition hover:text-accent-primary"
          >
            {SITE.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
