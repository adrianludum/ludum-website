import Link from "next/link";

const productLinks = [
  { label: "Ludum Team", href: "/products/team" },
  { label: "Ludum Telemetry", href: "/products/telemetry" },
  { label: "Ludum Row", href: "/products/row" },
  { label: "Ludum Paddle", href: "/products/paddle" },
  { label: "Ludum Live", href: "/products/live" },
];

const companyLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Request a Demo", href: "/demo" },
];

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold uppercase tracking-[3px] text-white"
            >
              LUDUM
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-grey-light">
              Sports performance platform for coaches and teams in rowing and paddle sport.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-light transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-light transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-dark-border pt-8">
          <p className="text-xs text-grey-light">
            © 2026 Ludum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
