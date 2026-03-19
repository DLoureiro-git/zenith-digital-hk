"use client";

import { motion } from "framer-motion";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
  }),
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-primary flex items-center justify-center overflow-hidden">
      {/* ---- Background dot pattern ---- */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern
            id="hero-dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" className="fill-text-tertiary" style={{ opacity: 0.04 }} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* ---- Radial gradient overlay ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, var(--bg-primary) 100%)",
        }}
      />

      {/* ---- Large rotating circle outline ---- */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-[800px] w-[800px] animate-slow-spin"
        viewBox="0 0 800 800"
      >
        <circle
          cx="400"
          cy="400"
          r="380"
          fill="none"
          className="stroke-accent-primary"
          strokeWidth="1"
          style={{ opacity: 0.06 }}
        />
      </svg>

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 font-body text-xs uppercase tracking-[0.2em] text-accent-primary"
        >
          Hong Kong &middot; Asia-Pacific AI Intelligence
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-7xl xl:text-8xl"
        >
          Intelligence that
          <br />
          transforms.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mx-auto mt-6 max-w-[640px] font-body text-lg text-text-secondary md:text-xl"
        >
          Zenith Digital HK architects AI-driven systems for enterprises ready
          to lead&nbsp;&mdash; not follow&nbsp;&mdash; the shift redefining
          global commerce.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-accent-primary px-8 py-3 font-body font-semibold text-black transition hover:brightness-110"
          >
            Start a Conversation
          </a>
          <a
            href="#products"
            className="font-body text-text-secondary transition hover:text-text-primary"
          >
            Explore Our Products&nbsp;&darr;
          </a>
        </motion.div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-text-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
