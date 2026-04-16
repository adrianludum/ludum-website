"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Eyebrow, H1, H2, Lead } from "@/components/Heading";

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

// Per-user pricing — sourced verbatim from v2 HTML
const PER_USER: Record<
  Currency,
  Record<
    Exclude<Tier, "telem">,
    { monthly: number; annualMo: number; annualTotal: number }
  >
> = {
  USD: {
    bronze: { monthly: 2.49, annualMo: 2.28, annualTotal: 27.39 },
    silver: { monthly: 3.99, annualMo: 3.66, annualTotal: 43.89 },
    gold: { monthly: 5.75, annualMo: 5.27, annualTotal: 63.25 },
    plat: { monthly: 7.25, annualMo: 6.65, annualTotal: 79.75 },
  },
  EUR: {
    bronze: { monthly: 2.15, annualMo: 1.97, annualTotal: 23.65 },
    silver: { monthly: 3.45, annualMo: 3.16, annualTotal: 37.95 },
    gold: { monthly: 4.89, annualMo: 4.48, annualTotal: 53.79 },
    plat: { monthly: 6.26, annualMo: 5.74, annualTotal: 68.86 },
  },
  GBP: {
    bronze: { monthly: 1.95, annualMo: 1.79, annualTotal: 21.45 },
    silver: { monthly: 3.09, annualMo: 2.83, annualTotal: 33.99 },
    gold: { monthly: 4.45, annualMo: 4.08, annualTotal: 48.95 },
    plat: { monthly: 5.67, annualMo: 5.20, annualTotal: 62.37 },
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
    bronze: { monthly: 129, annual: 1550 },
    silver: { monthly: 207, annual: 2300 },
    gold: { monthly: 293.4, annual: 3200 },
    plat: { monthly: 375.6, annual: 4200 },
    telem: { monthly: 160, annual: 1750 },
  },
  GBP: {
    bronze: { monthly: 117, annual: 1400 },
    silver: { monthly: 185.4, annual: 2050 },
    gold: { monthly: 267, annual: 2900 },
    plat: { monthly: 340.2, annual: 3800 },
    telem: { monthly: 140, annual: 1550 },
  },
};

const PLAN_NAMES: Record<Tier, string> = {
  bronze: "Bronze",
  silver: "Silver",
  gold: "Gold",
  plat: "Platinum",
  telem: "Telemetry",
};

const TIER_COLORS: Record<Tier, string> = {
  bronze: "#B8732A",
  silver: "#C0C0C0",
  gold: "#B8962A",
  plat: "#0097A1",
  telem: "#E53F47",
};

const PLAN_DESCRIPTIONS: Record<Tier, string> = {
  bronze: "Get organised. Streamline planning and keep your team connected.",
  silver: "Athletes record data with wearables — see it all in one place.",
  gold: "Correlate broad data sets to squeeze every percentage from your squad.",
  plat: "Gold + Telemetry. For elite programmes with Peach powerline systems.",
  telem:
    "Standalone telemetry plan for teams with existing Peach powerline infrastructure.",
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
/*  Feature comparison table data — verbatim from v2 HTML              */
/* ------------------------------------------------------------------ */

type TierFlag = boolean;
// [bronze, silver, gold, plat, telem]
type FeatureRow = { name: string; tiers: [TierFlag, TierFlag, TierFlag, TierFlag, TierFlag] };
type FeatureCategory = { category: string; rows: FeatureRow[] };

const COMPARISON: FeatureCategory[] = [
  {
    category: "Planning",
    rows: [
      { name: "Write Training Plans", tiers: [true, true, true, true, false] },
      { name: "Track athlete attendance", tiers: [true, true, true, true, false] },
      { name: "Calendar sharing", tiers: [true, true, true, true, false] },
      { name: "Training group attendance limits", tiers: [true, true, true, true, false] },
      { name: "Manage athlete availability", tiers: [true, true, true, true, false] },
    ],
  },
  {
    category: "Communication",
    rows: [
      { name: "Team & group messaging", tiers: [true, true, true, true, false] },
      { name: "In-session messaging", tiers: [true, true, true, true, false] },
      { name: "Video & image sharing", tiers: [true, true, true, true, false] },
      { name: "Real-time in-session messaging", tiers: [false, false, true, true, false] },
    ],
  },
  {
    category: "Health",
    rows: [
      { name: "Daily health questionnaires", tiers: [true, true, true, true, false] },
      { name: "Temperature tracking", tiers: [true, true, true, true, false] },
    ],
  },
  {
    category: "Data Collection",
    rows: [
      { name: "Manual data entry & RPE", tiers: [true, true, true, true, false] },
      { name: "Ludum app recording (speed & distance)", tiers: [false, true, true, true, false] },
      { name: "3rd party integrations (Garmin, Polar, Strava\u2026)", tiers: [false, true, true, true, false] },
      { name: "Bluetooth heart rate", tiers: [false, true, true, true, false] },
      { name: "Concept2 device connection", tiers: [false, true, true, true, false] },
      { name: "Cadence sensor connection", tiers: [false, true, true, true, false] },
      { name: "Automatic Concept2 PM5 programming", tiers: [false, true, true, true, false] },
      { name: "Peach Innovations telemetry import", tiers: [false, false, false, true, true] },
    ],
  },
  {
    category: "Performance Tracking",
    rows: [
      { name: "Session results", tiers: [true, true, true, true, false] },
      { name: "Gold medal % calculation (Rowing)", tiers: [true, true, true, true, false] },
      { name: "Athlete performance dashboard", tiers: [false, true, true, true, false] },
      { name: "Training load tracking", tiers: [false, true, true, true, false] },
      { name: "Performance & improvement tracking", tiers: [false, true, true, true, false] },
      { name: "Performance analytics", tiers: [false, false, true, true, true] },
      { name: "Session comparison", tiers: [false, false, true, true, true] },
    ],
  },
  {
    category: "Reporting",
    rows: [
      { name: "Team training & health reports", tiers: [false, true, true, true, false] },
      { name: "Performance & improvement reports", tiers: [false, true, true, true, false] },
      { name: "Analytics reports", tiers: [false, false, true, true, true] },
      { name: "Advanced & bespoke reporting", tiers: [false, false, false, true, true] },
    ],
  },
  {
    category: "Advanced",
    rows: [
      { name: "Minimax data importing", tiers: [false, false, true, true, false] },
      { name: "Ludum Live", tiers: [false, false, true, true, false] },
      { name: "Personalised data collection flows", tiers: [false, false, false, true, false] },
      { name: "Unlimited athletes", tiers: [true, true, true, true, true] },
      { name: "Premium support", tiers: [false, false, false, true, true] },
    ],
  },
];

const TABLE_TIERS: Tier[] = ["bronze", "silver", "gold", "plat", "telem"];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function fmt(value: number, decimals = 2): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function fmtN(n: number): string {
  return n % 1 === 0 ? n.toLocaleString("en-US") : fmt(n, 2);
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
  const isAnnual = billing === "annual";

  type PriceBlock = { main: string; perUser: string; note: string };

  function getPriceBlock(tier: Tier): PriceBlock {
    // Telemetry is always flat-rate
    if (tier === "telem") {
      const d = UNLIMITED[currency].telem;
      const display = isAnnual ? d.annual : d.monthly;
      return {
        main: `${sym}${fmtN(display)}${isAnnual ? "/yr" : "/mo"}`,
        perUser: "Flat rate \u00B7 unlimited users",
        note: isAnnual
          ? "Billed annually"
          : "Billed monthly \u00B7 switch to annual and save",
      };
    }

    const t = tier as Exclude<Tier, "telem">;

    if (isUnlimited) {
      const d = UNLIMITED[currency][t];
      const display = isAnnual ? d.annual : d.monthly;
      return {
        main: `${sym}${fmtN(display)}${isAnnual ? "/yr" : "/mo"}`,
        perUser: "Flat rate \u00B7 unlimited users",
        note: isAnnual
          ? "Billed annually"
          : "Billed monthly \u00B7 switch to annual and save",
      };
    }

    const d = PER_USER[currency][t];
    const rate = isAnnual ? d.annualMo : d.monthly;
    const totalMo = Math.round(rate * userCount);
    const totalYr = Math.round(d.annualTotal * userCount);

    return {
      main: `${sym}${totalMo}/mo`,
      perUser: `${sym}${fmtN(rate)} per user`,
      note: isAnnual
        ? `Billed annually \u00B7 ${sym}${totalYr.toLocaleString("en-US")}/yr`
        : `Billed monthly \u00B7 switch to annual \u2014 1 month free`,
    };
  }

  // Split main price string into number + sub so we can style them differently.
  function splitPrice(main: string): { sym: string; number: string; sub: string } {
    // format: `${sym}${number}${sub}` where sub starts with "/"
    const slashIdx = main.indexOf("/");
    const sub = slashIdx >= 0 ? main.slice(slashIdx) : "";
    const head = slashIdx >= 0 ? main.slice(0, slashIdx) : main;
    const symChar = head.charAt(0);
    const number = head.slice(1);
    return { sym: symChar, number, sub };
  }

  const cardTiers: Tier[] = ["bronze", "silver", "gold", "plat", "telem"];

  return (
    <div className="bg-black">
      {/* ---- Hero ---- */}
      <section className="bg-black pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Eyebrow>Ludum Team · Pricing</Eyebrow>
          <div className="flex justify-center">
            <H1 accent="your squad">The right plan for</H1>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-grey-light sm:text-xl">
            Performance data, smarter planning, and seamless communication — for
            clubs of every size.
          </p>
        </div>
      </section>

      {/* ---- Controls (black bg) ---- */}
      <section className="bg-black pb-16">
        <div className="mx-auto max-w-2xl px-6">
          {/* Slider label */}
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-white/35">
            How many users are on your account?
          </p>

          {/* Big centered count */}
          <div className="mb-5 text-center">
            <div
              className={`text-5xl font-bold leading-none transition-colors sm:text-6xl ${
                isUnlimited ? "text-coral" : "text-white"
              }`}
            >
              {isUnlimited ? "60+ users" : `${userCount} users`}
            </div>
            <p className="mt-2 text-xs text-white/30">
              {isUnlimited
                ? "Unlimited flat-rate pricing"
                : "Per-user pricing \u00B7 includes coaches & support staff"}
            </p>
          </div>

          {/* Slider */}
          <input
            type="range"
            min={0}
            max={USER_STEPS.length - 1}
            value={stepIndex}
            onChange={(e) => setStepIndex(Number(e.target.value))}
            className="pricing-slider h-1 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-coral"
          />
          {/* Slider ticks */}
          <div className="mt-2 flex justify-between px-[10px] text-[10px] text-white/25">
            {USER_STEPS.map((u) => (
              <span key={u} className="w-0 text-center">{u === 60 ? "60+" : u}</span>
            ))}
          </div>

          {/* Billing toggle (pill) */}
          <div className="mt-8 flex items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`text-sm font-medium transition-colors ${
                billing === "monthly" ? "text-white" : "text-white/30 hover:text-white/60"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling(isAnnual ? "monthly" : "annual")}
              aria-label="Toggle billing period"
              className={`relative h-7 w-[50px] rounded-full transition-colors ${
                isAnnual ? "bg-coral" : "bg-white/10"
              }`}
            >
              <span
                className={`absolute top-[3px] left-[3px] h-[22px] w-[22px] rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-[22px]" : "translate-x-0"
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`text-sm font-medium transition-colors ${
                isAnnual ? "text-white" : "text-white/30 hover:text-white/60"
              }`}
            >
              Annual
            </button>
            <span className="rounded-sm bg-coral/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-coral">
              1 Month Free
            </span>
          </div>

          {/* Currency switcher */}
          <div className="mt-5 flex items-center justify-center gap-1.5">
            <label className="mr-1 text-[11px] font-semibold uppercase tracking-wider text-white/25">
              Currency:
            </label>
            {(["USD", "EUR", "GBP"] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`rounded-sm border px-3.5 py-1.5 text-xs font-bold tracking-wider transition-colors ${
                  currency === c
                    ? "border-white/45 bg-white/10 text-white"
                    : "border-white/15 text-white/40 hover:border-white/30 hover:text-white/70"
                }`}
              >
                {CURRENCY_SYMBOLS[c]} {c}
              </button>
            ))}
          </div>

          {/* Unlimited banner */}
          {isUnlimited && (
            <div className="mt-6 flex items-center justify-center gap-2.5 rounded-md border border-coral/20 bg-coral/10 px-5 py-3 text-center text-sm text-white/55">
              <span aria-hidden className="text-coral">
                &#9889;
              </span>
              <span>
                Switched to{" "}
                <strong className="text-coral">unlimited flat-rate pricing</strong>{" "}
                — no per-user cap.
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ---- Pricing Cards (dark) ---- */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {cardTiers.map((tier) => {
              const isFeatured = tier === "silver";
              const price = getPriceBlock(tier);
              const { sym: psym, number: pnumber, sub: psub } = splitPrice(price.main);
              const plan = PLAN_FEATURES[tier];
              const tierColor = TIER_COLORS[tier];

              return (
                <div
                  key={tier}
                  className="relative flex flex-col rounded-2xl border border-dark-border bg-dark-card p-6 text-white"
                  style={
                    isFeatured
                      ? {
                          borderColor: tierColor,
                          boxShadow: `0 0 0 1px ${tierColor}22, 0 20px 60px -20px ${tierColor}33`,
                        }
                      : { borderTop: `2px solid ${tierColor}` }
                  }
                >
                  {/* Most Popular badge — top-right */}
                  {isFeatured && (
                    <span
                      className="absolute right-3 top-3 rounded-sm px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-black"
                      style={{ background: tierColor }}
                    >
                      Most Popular
                    </span>
                  )}

                  {/* Tier label with dot */}
                  <div
                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: tierColor }}
                  >
                    <span
                      className="inline-block h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ background: tierColor }}
                    />
                    {PLAN_NAMES[tier]}
                  </div>

                  <p className="mt-2 min-h-[72px] text-[12.5px] leading-relaxed text-grey-light">
                    {PLAN_DESCRIPTIONS[tier]}
                  </p>

                  {/* Price block */}
                  <div className="mt-2 mb-5 min-h-[100px]">
                    <div className="flex items-start text-[38px] font-bold leading-none text-white">
                      <span className="mr-[1px] mt-[6px] align-top text-lg font-medium">
                        {psym}
                      </span>
                      <span>{pnumber}</span>
                      <span className="mb-[3px] self-end text-[13px] font-medium text-grey">
                        {psub}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] font-medium text-grey-light">
                      {price.perUser}
                    </p>
                    <p className="mt-1 min-h-[16px] text-[11px] leading-snug text-grey">
                      {price.note}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/demo"
                    className="block rounded-sm border border-white/20 bg-transparent px-2 py-3 text-center text-[13px] font-semibold tracking-wide text-white transition-colors hover:border-white/60 hover:bg-white/5"
                  >
                    Request a Demo
                  </Link>

                  {/* Divider */}
                  <p
                    className={`mt-5 min-h-[32px] border-t border-dark-border pt-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-grey ${
                      plan.divider ? "" : "invisible"
                    }`}
                  >
                    {plan.divider || "\u200B"}
                  </p>

                  {/* Features */}
                  <ul className="mt-2 flex flex-1 flex-col gap-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span
                          className="mt-[1px] flex h-[15px] w-[15px] flex-shrink-0 items-center justify-center rounded-full text-white"
                          style={{ background: tierColor }}
                        >
                          <CheckIcon className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-[12px] leading-snug text-grey-light">
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

      {/* ---- Feature Comparison Table (dark) ---- */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <H2>Full feature comparison</H2>
            <p className="mx-auto mt-4 text-lg text-grey-light">
              Every feature, across every plan.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-dark-border bg-dark-card">
            <table className="w-full min-w-[760px] text-left text-[13px]">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="px-4 py-4 text-left text-[10px] font-bold uppercase tracking-[0.2em] text-grey">
                    Feature
                  </th>
                  {TABLE_TIERS.map((t) => (
                    <th
                      key={t}
                      className="px-4 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: TIER_COLORS[t] }}
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
                        colSpan={6}
                        className="border-t border-dark-border bg-black/40 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-grey"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.rows.map((row) => (
                      <tr
                        key={row.name}
                        className="border-b border-dark-border last:border-b-0 hover:bg-white/[0.02]"
                      >
                        <td className="px-4 py-3 text-grey-light">{row.name}</td>
                        {row.tiers.map((has, i) => (
                          <td key={i} className="px-4 py-3 text-center">
                            {has ? (
                              <CheckIcon className="mx-auto h-4 w-4 text-white" />
                            ) : (
                              <span className="text-base text-grey-dim">
                                {"\u2013"}
                              </span>
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
