import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";

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

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionLabel text="The Platform" />
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Five products.
            <br />
            <span className="text-coral">One connected ecosystem.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-grey-light">
            Each product solves a specific problem. Together, they give you the
            most complete view of your programme available anywhere.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure which product is right for you?"
        subtext="Book a 30-minute demo and we'll help you figure out exactly which pieces of the Ludum platform fit your programme — no pressure, no hard sell."
      />
    </>
  );
}
