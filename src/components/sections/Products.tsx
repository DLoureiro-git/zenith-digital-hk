"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";

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
// Component
// ---------------------------------------------------------------------------

export function Products() {
  return (
    <section id="products" className="bg-bg-tertiary py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent-primary font-body">
            Our Platforms
          </p>
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
              className="group overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary transition-all duration-300 hover:border-[var(--card-accent)]"
              style={
                { "--card-accent": product.accentColor } as React.CSSProperties
              }
            >
              {/* Accent bar */}
              <div
                className="h-[3px] w-full"
                style={{ background: product.accentColor }}
              />

              {/* Content */}
              <div className="p-8">
                {/* Tag + Status */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-text-tertiary font-body">
                    {product.tag}
                  </span>
                  {product.status === "Live" ? (
                    <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                      Live
                    </span>
                  ) : (
                    <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
                      {product.status}
                    </span>
                  )}
                </div>

                {/* Name + Tagline */}
                <h3 className="mt-4 mb-2 font-display text-2xl font-bold text-text-primary md:text-3xl">
                  {product.name}
                </h3>
                <p className="mb-4 font-body text-sm italic text-text-secondary">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="mb-6 font-body text-sm leading-relaxed text-text-tertiary">
                  {product.description}
                </p>

                {/* Metrics */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  {product.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display text-xl font-bold text-accent-primary">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs text-text-tertiary font-body">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#products"
                  className="font-body text-sm font-semibold hover:underline"
                  style={{ color: product.accentColor }}
                >
                  Explore&nbsp;&rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
