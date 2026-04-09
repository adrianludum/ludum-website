import Link from "next/link";

const productLinks = [
  { label: "Ludum Team", href: "/products/team" },
  { label: "Ludum Telemetry", href: "/products/telemetry" },
  { label: "Ludum Row", href: "/products/row" },
  { label: "Ludum Paddle", href: "/products/paddle" },
  { label: "Ludum Live", href: "/products/live" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "User Stories", href: "/stories" },
  { label: "Video Tutorials", href: "/tutorials" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Request a Demo", href: "/demo" },
  { label: "Sign In", href: "/signin" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-grey transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold uppercase tracking-[3px] text-white"
            >
              LUDUM
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-grey">
              Sports performance platform for coaches and teams in rowing and
              paddle sport.
            </p>
          </div>

          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-grey-dim">
            &copy; 2026 Ludum. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-grey-dim">
            <Link href="/privacy" className="transition-colors hover:text-grey">
              Privacy Policy
            </Link>
            <span>&middot;</span>
            <Link href="/terms" className="transition-colors hover:text-grey">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
