import type { Metadata } from "next";
import { Eyebrow, H1, H2, Lead } from "@/components/Heading";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products — Ludum",
  description:
    "Five products. One connected ecosystem. Ludum Team, Telemetry, Row, Paddle, and Live.",
};

const products = [
  {
    tag: "Flagship",
    title: "Ludum Team",
    description:
      "Your coaching command centre. Training planning, compliance tracking, athlete management, data analytics, and communication — all in one place.",
    image: "/images/hero-sunset-bridge.jpg",
    href: "/products/team",
  },
  {
    tag: "Unique to Ludum",
    title: "Ludum Telemetry",
    description:
      "Live stroke-by-stroke data from inside the boat. Force curves, stroke rate, boat speed, and balance in real time — the only platform integrating telemetry with training.",
    image: "/images/boathouse.jpg",
    href: "/products/telemetry",
  },
  {
    tag: "For Rowers",
    title: "Ludum Row",
    description:
      "The athlete app for rowing. Automatic session recording from Concept2, on-water devices, and wearables. Your rowers train. Ludum captures everything.",
    image: "/images/hero-solo-sunset.jpg",
    href: "/products/row",
  },
  {
    tag: "For Paddlers",
    title: "Ludum Paddle",
    description:
      "Purpose-built for canoe, kayak, and dragon boat. Same powerful data capture and compliance tools, adapted for paddle sport terminology and workflows.",
    image: "/images/sky-view-crew.jpg",
    href: "/products/paddle",
  },
  {
    tag: "Real-Time",
    title: "Ludum Live",
    description:
      "See what's happening right now. Live session feeds, real-time athlete data, and instant visibility into training as it happens — from the launch, the bank, or the gym.",
    image: "/images/winning-crew.jpg",
    href: "/products/live",
  },
];

/* ------------------------------------------------------------------ */
/*  Comparison matrix                                                  */
/* ------------------------------------------------------------------ */

const MATRIX_COLS = ["Team", "Telemetry", "Row", "Paddle", "Live"] as const;

const MATRIX_ROWS: { label: string; values: [string, string, string, string, string] }[] = [
  {
    label: "For",
    values: ["Coach", "Analyst", "Athlete", "Athlete", "Coach / Spectator"],
  },
  {
    label: "Primary focus",
    values: [
      "Compliance",
      "Force curves",
      "Session capture",
      "Session capture",
      "Broadcasting",
    ],
  },
  {
    label: "Delivery",
    values: ["Web", "Web", "iOS / Android", "iOS / Android", "Web"],
  },
  {
    label: "Data source",
    values: [
      "Connected devices",
      "Peach Powerline",
      "Phone GPS + BLE",
      "Phone GPS + BLE",
      "Live feeds",
    ],
  },
  {
    label: "Standalone?",
    values: [
      "Yes",
      "Yes",
      "Works with Team",
      "Works with Team",
      "Needs Row / Paddle",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-black">
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Eyebrow>The Platform</Eyebrow>
          <div className="flex justify-center">
            <H1 accent="One platform.">Five products.</H1>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey-light sm:text-xl">
            Each product solves a specific problem. Together, they give you the
            most complete view of your programme available anywhere.
          </p>
        </div>
      </section>

      {/* ---- Comparison matrix ---- */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <H2>At a glance</H2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-grey-light">
              What each product does, side by side.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-dark-border bg-dark-card">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-grey">
                    &nbsp;
                  </th>
                  {MATRIX_COLS.map((col) => (
                    <th
                      key={col}
                      className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-white"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX_ROWS.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-dark-border last:border-b-0"
                  >
                    <td className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-grey">
                      {row.label}
                    </td>
                    {row.values.map((val, i) => (
                      <td
                        key={i}
                        className="px-5 py-4 text-sm text-grey-light"
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Product cards ---- */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
