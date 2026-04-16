"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  { name: "Team", href: "/products/team", description: "Training management for coaches and squads" },
  { name: "Telemetry", href: "/products/telemetry", description: "Real-time boat and athlete data capture" },
  { name: "Row", href: "/products/row", description: "Purpose-built tools for rowing programmes" },
  { name: "Paddle", href: "/products/paddle", description: "Performance tracking for paddle sport" },
  { name: "Live", href: "/products/live", description: "Live race tracking and broadcasting" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!productsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProductsOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [productsOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-colors duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="relative block h-8 w-[140px]">
          <Image
            src="/images/ludum-logo.png"
            alt="Ludum"
            fill
            unoptimized
            className="object-contain"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-grey-light transition-colors hover:text-white"
            >
              Products
              <svg
                className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="w-72 rounded-xl border border-dark-border bg-dark p-2 shadow-2xl">
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="block rounded-lg px-4 py-3 transition-colors hover:bg-dark-card"
                    >
                      <span className="block text-sm font-semibold text-white">
                        Ludum {p.name}
                      </span>
                      <span className="block text-xs text-grey-light">
                        {p.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-grey-light transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/demo"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-[72px] w-full border-t border-dark-border bg-black/95 backdrop-blur-sm lg:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-grey-light">
              Products
            </p>
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-grey-light transition-colors hover:bg-dark-card hover:text-white"
              >
                Ludum {p.name}
              </Link>
            ))}

            <div className="my-2 border-t border-dark-border" />

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-grey-light transition-colors hover:bg-dark-card hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-full bg-coral py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
