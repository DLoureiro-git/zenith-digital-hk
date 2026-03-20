"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { WHY_ZENITH_POINTS, STATS } from "@/lib/constants";
import type { Stat } from "@/lib/constants";
import Image from "next/image";

// ---------------------------------------------------------------------------
// useCountUp — animates from 0 to target when element enters viewport
// ---------------------------------------------------------------------------

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animate]);

  return { count, ref };
}

// ---------------------------------------------------------------------------
// Stat blocks — glass mini-cards with glow
// ---------------------------------------------------------------------------

function StatBlock({ stat }: { stat: Stat }) {
  if (stat.isNumeric) {
    const numericTarget = parseInt(stat.value, 10);
    return <NumericStat target={numericTarget} suffix={stat.suffix} label={stat.label} />;
  }

  return (
    <div className="rounded-xl border border-border-medium bg-bg-card backdrop-blur-sm p-5 text-center transition-all duration-300 hover:border-border-strong hover:shadow-[0_0_20px_rgba(59,130,246,0.06)]">
      <p className="font-display text-3xl font-bold text-accent-primary text-glow md:text-4xl">
        {stat.value}
      </p>
      <p className="mt-2 font-body text-xs text-text-secondary">{stat.label}</p>
    </div>
  );
}

function NumericStat({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const { count, ref } = useCountUp(target);

  return (
    <div className="rounded-xl border border-border-medium bg-bg-card backdrop-blur-sm p-5 text-center transition-all duration-300 hover:border-border-strong hover:shadow-[0_0_20px_rgba(59,130,246,0.06)]">
      <p className="font-display text-3xl font-bold text-accent-primary text-glow md:text-4xl">
        <span ref={ref}>{count}</span>
        {suffix && <span>{suffix}</span>}
      </p>
      <p className="mt-2 font-body text-xs text-text-secondary">{label}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Animation
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// ---------------------------------------------------------------------------
// WhyZenith — split layout with glass stat cards
// ---------------------------------------------------------------------------

export function WhyZenith() {
  return (
    <section id="about" className="relative bg-bg-primary py-28 overflow-hidden">
      {/* Grid overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row">
        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-3/5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent-primary font-body">
              Why Zenith Digital
            </span>
          </div>
          <h2 className="mb-6 font-display text-3xl font-semibold text-text-primary md:text-5xl whitespace-pre-line">
            {"Hong Kong is where\nEast meets intelligence."}
          </h2>
          <div className="mb-8 space-y-4 font-body text-base leading-relaxed text-text-secondary">
            <p>
              Positioned at the intersection of global finance, Asian
              manufacturing, and Western technology transfer — Hong Kong is the
              world&apos;s most consequential hub for AI adoption at enterprise
              scale.
            </p>
            <p>
              Zenith Digital HK was built to serve this exact moment. We bring
              frontier AI methodology, real deployed platforms, and deep regional
              understanding to organisations navigating this shift.
            </p>
          </div>

          {/* Manifesto points */}
          <ul className="space-y-4">
            {WHY_ZENITH_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]" aria-hidden="true" />
                <span className="font-body text-base text-text-primary">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT SIDE — Stat cards */}
        <motion.div
          className="lg:w-2/5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
        >
          {/* HK Skyline image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border-medium mb-6">
            <Image
              src="/images/about/hk-skyline.jpg"
              alt="Hong Kong skyline at night"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a18]/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="font-body text-xs text-text-secondary">Hong Kong · Our Home Base</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <StatBlock key={stat.label} stat={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
