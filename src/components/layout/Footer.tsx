import Image from "next/image";
import {
  FOOTER_SERVICES,
  FOOTER_PRODUCTS,
  FOOTER_COMPANY,
  SITE,
} from "@/lib/constants";
import type { FooterLink } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Reusable column
// ---------------------------------------------------------------------------

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="font-body text-[11px] uppercase tracking-widest text-text-primary mb-5">
        {heading}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm font-body text-text-secondary hover:text-accent-primary transition-colors duration-300 inline-flex items-center gap-2"
            >
              {link.label}
              {link.badge && (
                <span className="text-[9px] uppercase tracking-wider border border-border-medium text-text-tertiary rounded-full px-2 py-0.5 leading-none">
                  {link.badge}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Social icons (inline SVG, 18 x 18)
// ---------------------------------------------------------------------------

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.768-6.768M15.232 10.232L20 4" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Footer — deep navy with subtle glow separators
// ---------------------------------------------------------------------------

export function Footer() {
  return (
    <footer className="relative bg-bg-primary border-t border-border-medium">
      {/* Top glow line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.15), rgba(6,182,212,0.1), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* ---- Grid ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <a href="#" className="group select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-matched.png"
                alt="Zenith Digital HK"
                className="h-16 w-auto transition-opacity group-hover:opacity-80"
              />
            </a>

            <p className="mt-3 text-sm font-body text-text-tertiary">
              {SITE.tagline}
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-tertiary hover:text-accent-primary transition-colors duration-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-text-tertiary hover:text-accent-primary transition-colors duration-300"
              >
                <XIcon />
              </a>
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-tertiary hover:text-accent-primary transition-colors duration-300"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <FooterColumn heading="Services" links={FOOTER_SERVICES} />

          {/* Col 3 — Products */}
          <FooterColumn heading="Products" links={FOOTER_PRODUCTS} />

          {/* Col 4 — Company */}
          <FooterColumn heading="Company" links={FOOTER_COMPANY} />
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="mt-16 pt-6 border-t border-border-subtle">
          <p className="text-xs font-body text-text-tertiary text-center">
            {SITE.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
