"use client";

import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Helpers
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
      <span className="font-body text-xs uppercase tracking-[0.15em] text-text-tertiary">
        {item}
      </span>
      <span className="mx-4 text-accent-primary" aria-hidden="true">
        &#9670;
      </span>
    </span>
  ));

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={reverse ? "animate-marquee-reverse" : "animate-marquee"}
        style={{ display: "inline-flex" }}
      >
        {/* Duplicate content for seamless loop */}
        <div className="inline-flex">{content}</div>
        <div className="inline-flex" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Marquee
// ---------------------------------------------------------------------------

export function Marquee() {
  return (
    <section className="border-y border-border-subtle bg-bg-secondary py-6">
      <div className="flex flex-col gap-4">
        <MarqueeRow items={MARQUEE_ROW_1} />
        <MarqueeRow items={MARQUEE_ROW_2} reverse />
      </div>
    </section>
  );
}
