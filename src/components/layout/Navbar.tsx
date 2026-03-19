"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add bottom border after 50 px
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/60 transition-colors ${
        scrolled ? "border-b border-border-subtle" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ---- Brand ---- */}
        <a href="#" className="flex items-baseline gap-1.5 select-none">
          <span className="font-display italic text-lg text-text-primary">
            ZENITH
          </span>
          <span className="font-body text-accent-primary uppercase tracking-[0.2em] text-xs">
            DIGITAL HK
          </span>
        </a>

        {/* ---- Desktop links ---- */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body font-medium text-text-secondary hover:text-text-primary transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ---- Desktop CTA ---- */}
        <a
          href="#contact"
          className="hidden md:inline-flex border border-accent-primary text-accent-primary px-5 py-2 text-sm font-body font-medium hover:bg-accent-primary hover:text-black transition"
        >
          Book a Call
        </a>

        {/* ---- Mobile hamburger ---- */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col justify-center gap-1.5 w-7 h-7"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`block h-px w-full bg-text-primary transition-transform origin-center ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-text-primary transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-text-primary transition-transform origin-center ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* ---- Mobile drawer ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden border-t border-border-subtle bg-black/80 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-body font-medium text-text-secondary hover:text-text-primary transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex border border-accent-primary text-accent-primary px-5 py-2 text-sm font-body font-medium hover:bg-accent-primary hover:text-black transition"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
