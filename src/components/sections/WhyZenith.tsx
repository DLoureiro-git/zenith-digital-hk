"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { WHY_ZENITH_POINTS, STATS } from "@/lib/constants";
import type { Stat } from "@/lib/constants";

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
      // ease-out cubic
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
// Single stat block
// ---------------------------------------------------------------------------

function StatBlock({ stat }: { stat: Stat }) {
  if (stat.isNumeric) {
    const numericTarget = parseInt(stat.value, 10);
    return <NumericStat target={numericTarget} suffix={stat.suffix} label={stat.label} />;
  }

  return (
    <div>
      <p className="font-display text-4xl font-bold text-accent-primary md:text-5xl">
        {stat.value}
      </p>
      <p className="mt-2 font-body text-sm text-text-secondary">{stat.label}</p>
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
    <div>
      <p className="font-display text-4xl font-bold text-accent-primary md:text-5xl">
        <span ref={ref}>{count}</span>
        {suffix && <span>{suffix}</span>}
      </p>
      <p className="mt-2 font-body text-sm text-text-secondary">{label}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Animation variants
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
// Component
// ---------------------------------------------------------------------------

export function WhyZenith() {
  return (
    <section id="about" className="bg-bg-primary py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row">
        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-3/5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent-primary font-body">
            Why Zenith Digital
          </p>
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
                <span className="mt-0.5 text-accent-primary" aria-hidden="true">
                  &#9670;
                </span>
                <span className="font-body text-base text-text-primary">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="lg:w-2/5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-8">
            {STATS.map((stat) => (
              <StatBlock key={stat.label} stat={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
