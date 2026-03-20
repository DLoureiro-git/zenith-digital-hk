"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Navbar — glass morphism + blue glow
// ---------------------------------------------------------------------------

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(5,10,24,0.85)] backdrop-blur-2xl border-b border-border-medium shadow-[0_4px_30px_rgba(59,130,246,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ---- Brand ---- */}
        <a href="#" className="group select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-matched.png"
            alt="Zenith Digital HK"
            className="h-14 w-auto transition-opacity group-hover:opacity-80"
          />
        </a>

        {/* ---- Desktop links ---- */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-body font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-accent-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ---- Desktop CTA — pill shape with glow ---- */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-accent-primary/40 bg-accent-primary/10 px-6 py-2 text-sm font-body font-medium text-accent-primary transition-all duration-300 hover:bg-accent-primary hover:text-[#050a18] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
          </span>
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

      {/* ---- Mobile drawer — glass ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden border-t border-border-medium bg-[rgba(5,10,24,0.95)] backdrop-blur-2xl"
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
                  className="inline-flex items-center gap-2 rounded-full border border-accent-primary/40 bg-accent-primary/10 px-6 py-2 text-sm font-body font-medium text-accent-primary"
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
