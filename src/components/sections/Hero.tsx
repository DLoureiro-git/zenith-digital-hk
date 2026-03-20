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
// Hero — cosmic atmosphere with constellation grid + orbital rings
// ---------------------------------------------------------------------------

export function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-primary flex items-center justify-center overflow-hidden">
      {/* ---- Animated grid overlay ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-overlay animate-grid-scroll opacity-60"
      />

      {/* ---- Constellation dot pattern ---- */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern
            id="hero-constellation"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="rgba(59,130,246,0.15)" />
          </pattern>
          <radialGradient id="hero-fade" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="var(--bg-primary)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-constellation)" />
        <rect width="100%" height="100%" fill="url(#hero-fade)" />
      </svg>

      {/* ---- Radial blue glow (center) ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 45%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ---- Radial cyan glow (offset) ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 70% 60%, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ---- Orbital ring 1 ---- */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] animate-slow-spin"
        viewBox="0 0 700 700"
      >
        <circle
          cx="350"
          cy="350"
          r="340"
          fill="none"
          stroke="rgba(59,130,246,0.06)"
          strokeWidth="1"
          strokeDasharray="8 16"
        />
      </svg>

      {/* ---- Orbital ring 2 (counter-rotate) ---- */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px]"
        viewBox="0 0 500 500"
        style={{ animation: "slow-spin 90s linear infinite reverse" }}
      >
        <circle
          cx="250"
          cy="250"
          r="240"
          fill="none"
          stroke="rgba(6,182,212,0.04)"
          strokeWidth="1"
          strokeDasharray="4 20"
        />
      </svg>

      {/* ---- Light streak (diagonal) ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[20%] w-px h-[200%] opacity-20"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.4), rgba(6,182,212,0.1), transparent)",
          transform: "rotate(-25deg)",
          transformOrigin: "top center",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-[30%] w-px h-[200%] opacity-10"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(6,182,212,0.3), transparent)",
          transform: "rotate(-25deg)",
          transformOrigin: "top center",
        }}
      />

      {/* ---- Noise texture ---- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise" />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-accent-primary/40" />
          <span className="font-body text-[11px] uppercase tracking-[0.25em] text-accent-primary">
            Hong Kong &middot; Asia-Pacific AI Intelligence
          </span>
          <span className="h-px w-8 bg-accent-primary/40" />
        </motion.div>

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
          <span className="text-glow">transforms.</span>
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
          {/* Primary CTA — pill with glow */}
          <a
            href="#contact"
            className="relative rounded-full bg-accent-primary px-8 py-3 font-body font-semibold text-[#050a18] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.02]"
          >
            Start a Conversation
          </a>
          {/* Secondary CTA */}
          <a
            href="#products"
            className="rounded-full border border-border-strong px-8 py-3 font-body text-text-secondary transition-all duration-300 hover:text-text-primary hover:border-accent-primary/40 hover:bg-accent-primary/5"
          >
            Explore Our Products&nbsp;&darr;
          </a>
        </motion.div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-accent-primary/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
