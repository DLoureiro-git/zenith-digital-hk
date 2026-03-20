"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
}

export function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative w-full py-32 pt-40 bg-bg-primary overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Radial glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Tag with horizontal lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent-primary" />
            <span className="uppercase tracking-widest text-sm text-accent-primary font-body">
              {tag}
            </span>
            <div className="h-px w-12 bg-accent-primary" />
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
