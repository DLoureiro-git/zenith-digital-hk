import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  dark = false
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 overflow-hidden ${
        dark ? "bg-bg-secondary" : "bg-bg-primary"
      } ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}
