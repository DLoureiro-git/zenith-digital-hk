"use client";

import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from "@/lib/constants";

// ---------------------------------------------------------------------------
// MarqueeRow — with glowing separator dots
// ---------------------------------------------------------------------------

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: readonly string[];
  reverse?: boolean;
}) {
  const content = items.map((item, i) => (
    <span key={i} className="inline-flex items-center">
      <span className="font-body text-xs uppercase tracking-[0.15em] text-text-tertiary transition-colors duration-300 hover:text-text-secondary">
        {item}
      </span>
      <span className="mx-5 inline-flex h-1.5 w-1.5 rounded-full bg-accent-primary/30 shadow-[0_0_6px_rgba(59,130,246,0.4)]" aria-hidden="true" />
    </span>
  ));

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={reverse ? "animate-marquee-reverse" : "animate-marquee"}
        style={{ display: "inline-flex" }}
      >
        <div className="inline-flex">{content}</div>
        <div className="inline-flex" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Marquee — glass band with subtle glow borders
// ---------------------------------------------------------------------------

export function Marquee() {
  return (
    <section className="relative border-y border-border-medium bg-[rgba(10,17,40,0.5)] backdrop-blur-sm py-6">
      {/* Glow line top */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(6,182,212,0.1), transparent)",
        }}
      />
      <div className="flex flex-col gap-4">
        <MarqueeRow items={MARQUEE_ROW_1} />
        <MarqueeRow items={MARQUEE_ROW_2} reverse />
      </div>
      {/* Glow line bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.15), rgba(59,130,246,0.1), transparent)",
        }}
      />
    </section>
  );
}
