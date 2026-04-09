"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const USER_STEPS = [3, 5, 10, 15, 20, 25, 30, 40, 60] as const;
const DEFAULT_STEP = 3; // index 3 → 15 users

type Currency = "USD" | "EUR" | "GBP";
type Billing = "monthly" | "annual";
type Tier = "bronze" | "silver" | "gold" | "plat" | "telem";

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "\u20AC",
  GBP: "\u00A3",
};

// Per-user pricing (monthly / annual-per-month / annual-total)
const PER_USER: Record<
  Currency,
  Record<Exclude<Tier, "telem">, { monthly: number; annualMo: number; annualTotal: number }>
> = {
  USD: {
    bronze: { monthly: 2.49, annualMo: 2.28, annualTotal: 27.39 },
    silver: { monthly: 3.99, annualMo: 3.66, annualTotal: 43.89 },
    gold: { monthly: 5.75, annualMo: 5.27, annualTotal: 63.25 },
    plat: { monthly: 7.25, annualMo: 6.65, annualTotal: 79.75 },
  },
  EUR: {
    bronze: { monthly: 2.29, annualMo: 2.10, annualTotal: 25.20 },
    silver: { monthly: 3.67, annualMo: 3.37, annualTotal: 40.44 },
    gold: { monthly: 5.29, annualMo: 4.85, annualTotal: 58.20 },
    plat: { monthly: 6.67, annualMo: 6.12, annualTotal: 73.44 },
  },
  GBP: {
    bronze: { monthly: 1.97, annualMo: 1.80, annualTotal: 21.60 },
    silver: { monthly: 3.15, annualMo: 2.89, annualTotal: 34.68 },
    gold: { monthly: 4.54, annualMo: 4.16, annualTotal: 49.92 },
    plat: { monthly: 5.73, annualMo: 5.25, annualTotal: 63.00 },
  },
};

// Unlimited flat-rate pricing
const UNLIMITED: Record<Currency, Record<Tier, { monthly: number; annual: number }>> = {
  USD: {
    bronze: { monthly: 149.4, annual: 1600 },
    silver: { monthly: 239.4, annual: 2600 },
    gold: { monthly: 345, annual: 3800 },
    plat: { monthly: 435, annual: 4800 },
    telem: { monthly: 180, annual: 2000 },
  },
  EUR: {
    bronze: { monthly: 137, annual: 1472 },
    silver: { monthly: 220, annual: 2392 },
    gold: { monthly: 317, annual: 3496 },
    plat: { monthly: 400, annual: 4416 },
    telem: { monthly: 166, annual: 1840 },
  },
  GBP: {
    bronze: { monthly: 118, annual: 1264 },
    silver: { monthly: 189, annual: 2054 },
    gold: { monthly: 273, annual: 3002 },
    plat: { monthly: 344, annual: 3792 },
    telem: { monthly: 142, annual: 1580 },
  },
};

const PLAN_NAMES: Record<Tier, string> = {
  bronze: "Bronze",
  silver: "Silver",
  gold: "Gold",
  plat: "Platinum",
  telem: "Telemetry",
};

const PLAN_DESCRIPTIONS: Record<Tier, string> = {
  bronze: "Get organised. Streamline planning and keep your team connected.",
  silver: "Athletes record data with wearables — see it all in one place.",
  gold: "Correlate broad data sets to squeeze every percentage from your squad.",
  plat: "Gold + Telemetry. For elite programmes with Peach Powerline systems.",
  telem: "Standalone telemetry plan for teams with existing Peach Powerline infrastructure.",
};

const PLAN_FEATURES: Record<Tier, { divider?: string; features: string[] }> = {
  bronze: {
    features: [
      "Training plan builder",
      "Attendance roster",
      "Calendar sharing",
      "Athlete availability",
      "Team & group messaging",
      "Daily health questionnaires",
      "Manual data entry + RPE",
      "Session results",
      "Gold medal % (Rowing)",
    ],
  },
  silver: {
    divider: "Everything in Bronze, plus:",
    features: [
      "Ludum app recording",
      "3rd party integrations",
      "Bluetooth heart rate",
      "Concept2 & cadence sensors",
      "Athlete performance dashboard",
      "Training load tracking",
      "Team training & health reports",
      "Performance & improvement reports",
    ],
  },
  gold: {
    divider: "Everything in Silver, plus:",
    features: [
      "Real-time in-session messaging",
      "Performance analytics",
      "Session comparison",
      "Analytics reports",
      "Minimax data importing",
      "Ludum Live",
    ],
  },
  plat: {
    divider: "Everything in Gold, plus:",
    features: [
      "Peach Innovations telemetry",
      "Personalised data collection",
      "Advanced & bespoke reporting",
      "Premium support",
    ],
  },
  telem: {
    features: [
      "Peach Innovations import",
      "Performance analytics",
      "Analytics & custom reports",
      "Premium support",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Feature comparison table data                                      */
/* ------------------------------------------------------------------ */

type FeatureRow = { name: string; tiers: [boolean, boolean, boolean, boolean] };
type FeatureCategory = { category: string; rows: FeatureRow[] };

const COMPARISON: FeatureCategory[] = [
  {
    category: "Planning",
    rows: [
      { name: "Training plan builder", tiers: [true, true, true, true] },
      { name: "Attendance roster", tiers: [true, true, true, true] },
      { name: "Calendar sharing", tiers: [true, true, true, true] },
      { name: "Athlete availability", tiers: [true, true, true, true] },
      { name: "Programme distribution", tiers: [true, true, true, true] },
    ],
  },
  {
    category: "Communication",
    rows: [
      { name: "Team messaging", tiers: [true, true, true, true] },
      { name: "Group messaging", tiers: [true, true, true, true] },
      { name: "In-session messaging", tiers: [false, false, true, true] },
      { name: "Push notifications", tiers: [true, true, true, true] },
    ],
  },
  {
    category: "Health",
    rows: [
      { name: "Daily health questionnaire", tiers: [true, true, true, true] },
      { name: "Injury & illness tracker", tiers: [true, true, true, true] },
    ],
  },
  {
    category: "Data Collection",
    rows: [
      { name: "Manual data entry", tiers: [true, true, true, true] },
      { name: "RPE", tiers: [true, true, true, true] },
      { name: "Ludum app recording", tiers: [false, true, true, true] },
      { name: "3rd party integrations", tiers: [false, true, true, true] },
      { name: "Bluetooth HR", tiers: [false, true, true, true] },
      { name: "Concept2 & cadence", tiers: [false, true, true, true] },
      { name: "Minimax importing", tiers: [false, false, true, true] },
      { name: "Peach telemetry", tiers: [false, false, false, true] },
    ],
  },
  {
    category: "Performance",
    rows: [
      { name: "Session results", tiers: [true, true, true, true] },
      { name: "Gold medal %", tiers: [true, true, true, true] },
      { name: "Athlete dashboard", tiers: [false, true, true, true] },
      { name: "Training load", tiers: [false, true, true, true] },
      { name: "Performance analytics", tiers: [false, false, true, true] },
      { name: "Session comparison", tiers: [false, false, true, true] },
      { name: "Ludum Live", tiers: [false, false, true, true] },
    ],
  },
  {
    category: "Reporting",
    rows: [
      { name: "Team training reports", tiers: [false, true, true, true] },
      { name: "Health reports", tiers: [false, true, true, true] },
      { name: "Performance reports", tiers: [false, true, true, true] },
      { name: "Analytics reports", tiers: [false, false, true, true] },
    ],
  },
  {
    category: "Advanced",
    rows: [
      { name: "Personalised data", tiers: [false, false, false, true] },
      { name: "Bespoke reporting", tiers: [false, false, false, true] },
      { name: "Premium support", tiers: [false, false, false, true] },
      { name: "API access", tiers: [false, false, false, true] },
      { name: "White-label", tiers: [false, false, false, true] },
    ],
  },
];

const TIER_ORDER: Exclude<Tier, "telem">[] = ["bronze", "silver", "gold", "plat"];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function fmt(value: number, decimals = 2): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PricingClient() {
  const [stepIndex, setStepIndex] = useState(DEFAULT_STEP);
  const [billing, setBilling] = useState<Billing>("annual");
  const [currency, setCurrency] = useState<Currency>("USD");

  const userCount = USER_STEPS[stepIndex];
  const isUnlimited = userCount === 60;
  const sym = CURRENCY_SYMBOLS[currency];

  function getPrice(tier: Tier): { display: string; sub: string } {
    if (tier === "telem") {
      const d = UNLIMITED[currency].telem;
      if (billing === "monthly") {
        return { display: `${sym}${fmt(d.monthly, 0)}`, sub: "/month" };
      }
      return {
        display: `${sym}${fmt(d.annual, 0)}`,
        sub: "/year",
      };
    }

    const t = tier as Exclude<Tier, "telem">;

    if (isUnlimited) {
      const d = UNLIMITED[currency][t];
      if (billing === "monthly") {
        return { display: `${sym}${fmt(d.monthly, 0)}`, sub: "/month" };
      }
      return {
        display: `${sym}${fmt(d.annual, 0)}`,
        sub: "/year",
      };
    }

    const d = PER_USER[currency][t];
    if (billing === "monthly") {
      const total = d.monthly * userCount;
      return {
        display: `${sym}${fmt(total)}`,
        sub: `/month for ${userCount} users`,
      };
    }
    const totalAnnual = d.annualTotal * userCount;
    const totalMo = d.annualMo * userCount;
    return {
      display: `${sym}${fmt(totalMo)}`,
      sub: `/month \u00B7 ${sym}${fmt(totalAnnual, 0)}/year`,
    };
  }

  function getPerUser(tier: Exclude<Tier, "telem">): string | null {
    if (isUnlimited) return null;
    const d = PER_USER[currency][tier];
    const rate = billing === "monthly" ? d.monthly : d.annualMo;
    return `${sym}${fmt(rate)}/user/mo`;
  }

  const cardTiers: Tier[] = ["bronze", "silver", "gold", "plat", "telem"];

  return (
    <div>
      {/* ---- Hero (black bg) ---- */}
      <section className="bg-black pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionLabel text="Ludum Team \u00B7 Pricing" />
          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The right plan for your{" "}
            <span className="text-coral">squad</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-grey-light">
            Performance data, smarter planning, and seamless communication — for
            clubs of every size.
          </p>
        </div>
      </section>

      {/* ---- Controls (black bg) ---- */}
      <section className="bg-black pb-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Slider */}
          <div className="mb-8">
            <label className="mb-3 block text-sm font-medium text-grey-light">
              How many users are on your account?
            </label>
            <div className="flex items-center gap-4">
              <span className="w-10 text-right text-2xl font-bold text-white">
                {userCount === 60 ? "60+" : userCount}
              </span>
              <input
                type="range"
                min={0}
                max={USER_STEPS.length - 1}
                value={stepIndex}
                onChange={(e) => setStepIndex(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-dark-card accent-coral"
              />
            </div>
            <p className="mt-2 text-xs text-grey">
              Per-user pricing \u00B7 includes coaches & support staff
            </p>
          </div>

          {/* Billing + Currency row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Billing toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  billing === "monthly"
                    ? "bg-white text-black"
                    : "bg-dark-card text-grey-light hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  billing === "annual"
                    ? "bg-white text-black"
                    : "bg-dark-card text-grey-light hover:text-white"
                }`}
              >
                Annual
              </button>
              {billing === "annual" && (
                <span className="rounded-full bg-coral/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral">
                  1 Month Free
                </span>
              )}
            </div>

            {/* Currency switcher */}
            <div className="flex items-center gap-2">
              {(["USD", "EUR", "GBP"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    currency === c
                      ? "bg-white text-black"
                      : "bg-dark-card text-grey-light hover:text-white"
                  }`}
                >
                  {CURRENCY_SYMBOLS[c]} {c}
                </button>
              ))}
            </div>
          </div>

          {/* Unlimited banner */}
          {isUnlimited && (
            <div className="mt-6 rounded-xl border border-coral/30 bg-coral/10 px-5 py-3 text-center text-sm text-coral">
              Switched to unlimited flat-rate pricing — no per-user cap.
            </div>
          )}
        </div>
      </section>

      {/* ---- Pricing Cards (light bg) ---- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {cardTiers.map((tier) => {
              const isFeatured = tier === "silver";
              const price = getPrice(tier);
              const perUser =
                tier !== "telem" ? getPerUser(tier as Exclude<Tier, "telem">) : null;
              const plan = PLAN_FEATURES[tier];

              return (
                <div
                  key={tier}
                  className={`relative flex flex-col rounded-2xl border p-6 transition-transform ${
                    isFeatured
                      ? "scale-[1.03] border-coral bg-black text-white shadow-2xl shadow-coral/10 z-10"
                      : "border-gray-200 bg-white text-gray-900"
                  }`}
                >
                  {/* Badge */}
                  {isFeatured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  )}

                  <h3
                    className={`text-lg font-bold ${
                      isFeatured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {PLAN_NAMES[tier]}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isFeatured ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {PLAN_DESCRIPTIONS[tier]}
                  </p>

                  {/* Price */}
                  <div className="mt-6">
                    <span
                      className={`text-3xl font-bold ${
                        isFeatured ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {price.display}
                    </span>
                    <span
                      className={`ml-1 text-sm ${
                        isFeatured ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {price.sub}
                    </span>
                  </div>
                  {perUser && (
                    <p
                      className={`mt-1 text-xs ${
                        isFeatured ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {perUser}
                    </p>
                  )}

                  {/* CTA */}
                  <Link
                    href="/demo"
                    className={`mt-6 block rounded-full py-2.5 text-center text-sm font-semibold transition-colors ${
                      isFeatured
                        ? "bg-coral text-white hover:bg-coral-dark"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Request a Demo
                  </Link>

                  {/* Divider */}
                  {plan.divider && (
                    <p
                      className={`mt-6 border-t pt-4 text-xs font-semibold uppercase tracking-wider ${
                        isFeatured
                          ? "border-gray-700 text-gray-400"
                          : "border-gray-200 text-gray-400"
                      }`}
                    >
                      {plan.divider}
                    </p>
                  )}

                  {/* Features */}
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckIcon
                          className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                            isFeatured ? "text-coral" : "text-teal"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            isFeatured ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Feature Comparison Table (white bg) ---- */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Full feature comparison
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Every feature, across every plan.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  {TIER_ORDER.map((t) => (
                    <th
                      key={t}
                      className={`px-4 py-4 text-center text-sm font-semibold ${
                        t === "silver" ? "bg-gray-50 text-coral" : "text-gray-900"
                      }`}
                    >
                      {PLAN_NAMES[t]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((cat) => (
                  <Fragment key={cat.category}>
                    <tr>
                      <td
                        colSpan={5}
                        className="bg-gray-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-400"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.rows.map((row) => (
                      <tr
                        key={row.name}
                        className="border-t border-gray-100 hover:bg-gray-50"
                      >
                        <td className="px-6 py-3 text-sm text-gray-700">
                          {row.name}
                        </td>
                        {row.tiers.map((has, i) => (
                          <td
                            key={i}
                            className={`px-4 py-3 text-center ${
                              TIER_ORDER[i] === "silver" ? "bg-gray-50/50" : ""
                            }`}
                          >
                            {has ? (
                              <CheckIcon className="mx-auto h-5 w-5 text-teal" />
                            ) : (
                              <span className="text-gray-300">\u2014</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Testimonials (black bg) ---- */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  "I have used several platforms before, but none as sophisticated as Ludum.",
                name: "Matt Ryan",
                role: "Australia Rowing Coach & Olympic Medalist",
              },
              {
                quote: "It is so easy to find what I want to look at.",
                name: "Adam Moffatt",
                role: "Head Coach, St Edward\u2019s School",
              },
            ].map((t) => (
              <blockquote
                key={t.name}
                className="reveal rounded-2xl border border-dark-border bg-dark-card p-8"
              >
                <p className="text-lg font-medium leading-relaxed text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-grey">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA Band (coral bg) ---- */}
      <section className="bg-coral py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            See Ludum in action
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-white/80">
            We&apos;ll walk you through the right plan for your squad — no
            pressure, just clarity.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-coral transition-colors hover:bg-gray-100"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
