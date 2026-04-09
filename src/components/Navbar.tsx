"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const products = [
  {
    name: "Team",
    href: "/products/team",
    description: "Training management for coaches and squads",
  },
  {
    name: "Telemetry",
    href: "/products/telemetry",
    description: "Real-time boat and athlete data capture",
  },
  {
    name: "Row",
    href: "/products/row",
    description: "Purpose-built tools for rowing programmes",
  },
  {
    name: "Paddle",
    href: "/products/paddle",
    description: "Performance tracking for paddle sport",
  },
  {
    name: "Live",
    href: "/products/live",
    description: "Live race tracking and broadcasting",
  },
];

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-colors duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold uppercase tracking-[3px] text-white"
        >
          LUDUM
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-grey-light transition-colors hover:text-white">
              Products
              <svg
                className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="w-72 rounded-xl border border-dark-border bg-dark p-2 shadow-2xl">
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="block rounded-lg px-4 py-3 transition-colors hover:bg-dark-card"
                    >
                      <span className="block text-sm font-semibold text-white">
                        Ludum {p.name}
                      </span>
                      <span className="block text-xs text-grey">
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
            href="/signin"
            className="text-sm font-medium text-grey-light transition-colors hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/demo"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-[72px] w-full border-t border-dark-border bg-black/95 backdrop-blur-sm lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-grey">
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

            <Link
              href="/signin"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-grey-light transition-colors hover:bg-dark-card hover:text-white"
            >
              Sign In
            </Link>

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
