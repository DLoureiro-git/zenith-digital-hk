"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// ---------------------------------------------------------------------------
// Products — glass cards with colored glow accents
// ---------------------------------------------------------------------------

export function Products() {
  return (
    <section id="products" className="relative bg-bg-secondary py-28 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-secondary/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent-secondary font-body">
              Our Platforms
            </span>
            <span className="h-px w-8 bg-accent-secondary/40" />
          </div>
          <h2 className="mb-6 font-display text-3xl font-semibold text-text-primary md:text-5xl whitespace-pre-line">
            {"Built in-house.\nDeployed in markets."}
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-text-secondary">
            Every platform we offer to clients, we built ourselves — proving the
            methodology before offering it.
          </p>
        </motion.div>

        {/* Product cards */}
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-border-medium bg-bg-card backdrop-blur-sm transition-all duration-500 hover:-translate-y-1"
              style={
                { "--card-accent": product.accentColor } as React.CSSProperties
              }
            >
              {/* Top glow accent bar */}
              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${product.accentColor}, transparent)`,
                }}
              />

              {/* Hover glow overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${product.accentColor}10 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative p-8">
                {/* Tag + Status */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-text-tertiary font-body">
                    {product.tag}
                  </span>
                  {product.status === "Live" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-accent-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                      {product.status}
                    </span>
                  )}
                </div>

                {/* Name + Tagline */}
                <h3
                  className="mt-5 mb-2 font-display text-2xl font-bold text-text-primary md:text-3xl"
                >
                  {product.name}
                </h3>
                <p className="mb-4 font-body text-sm italic text-text-secondary">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="mb-8 font-body text-sm leading-relaxed text-text-tertiary">
                  {product.description}
                </p>

                {/* Metrics — glass mini-cards */}
                <div className="mb-8 grid grid-cols-3 gap-3">
                  {product.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg bg-[rgba(59,130,246,0.04)] border border-border-subtle p-3 text-center"
                    >
                      <p
                        className="font-display text-lg font-bold"
                        style={{ color: product.accentColor }}
                      >
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[10px] text-text-tertiary font-body leading-tight">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-all duration-300 hover:gap-3"
                  style={{ color: product.accentColor }}
                >
                  Explore
                  <span>&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
