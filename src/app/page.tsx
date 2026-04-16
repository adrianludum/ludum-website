import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { H1, H2, H3, Lead, Body, Eyebrow, Section } from "@/components/Heading";

/* ------------------------------------------------------------------ */
/*  Icons — solution cards only. White at 80% opacity.                */
/* ------------------------------------------------------------------ */

const iconClass = "h-8 w-8 text-white opacity-80";

function IconTraining() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375" />
    </svg>
  );
}

function IconProgramme() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function IconAutoCapture() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconInjury() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IconPerformance() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function IconDevice() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.686-2.869a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const painPoints = [
  {
    title: "Fragmented tools, fragmented picture",
    desc: "You’re running your programme across spreadsheets, WhatsApp, Strava, and training peaks. Nothing talks to anything else. You spend more time collecting data than using it.",
  },
  {
    title: "You can’t see if athletes follow the plan",
    desc: "You write the programme. But did they do it? Research shows 93% compliance is the threshold where training actually translates to performance. Right now, you’re guessing.",
  },
  {
    title: "Wearable data stuck on athletes’ wrists",
    desc: "Your athletes wear Garmin, Polar, Suunto — capturing rich data every session. But it lives on their phone, not your dashboard. The coach is the last to know.",
  },
];

const solutions = [
  { icon: <IconProgramme />, title: "Programme Planning", desc: "Build, schedule, and distribute training programmes to your entire squad. One source of truth for what athletes should be doing." },
  { icon: <IconTraining />, title: "Training Compliance", desc: "See who followed the programme and who didn’t — automatically, across every session, every athlete." },
  { icon: <IconAutoCapture />, title: "Automatic Data Capture", desc: "Every stroke, every split, every heart rate zone — captured automatically from connected devices. No manual entry required." },
  { icon: <IconInjury />, title: "Injury & Illness Tracking", desc: "Log, monitor, and manage athlete availability. Spot patterns before small issues become season-ending problems." },
  { icon: <IconPerformance />, title: "Performance Tracking", desc: "Track improvement over time with real data — not subjective assessment. Benchmark athletes against each other and against themselves." },
  { icon: <IconDevice />, title: "Device Agnostic", desc: "Garmin, Polar, Suunto, Concept2 — Ludum connects them all. Your athletes keep their devices. You get their data." },
];

const products = [
  { tag: "Flagship", title: "Ludum Team", description: "Your coaching command centre. Training planning, compliance tracking, athlete management, data analytics, and communication — all in one place.", image: "/images/hero-sunset-bridge.jpg", href: "/products/team" },
  { tag: "Unique to Ludum", title: "Ludum Telemetry", description: "Live stroke-by-stroke data from inside the boat. Force curves, stroke rate, boat speed, and balance in real time — the only platform integrating telemetry with training.", image: "/images/powerline-force-curves.png", href: "/products/telemetry" },
  { tag: "For Rowers", title: "Ludum Row", description: "The athlete app for rowing. Automatic session recording from Concept2, on-water devices, and wearables. Your rowers train. Ludum captures everything.", image: "/images/sky-view-crew.jpg", href: "/products/row" },
  { tag: "For Paddlers", title: "Ludum Paddle", description: "Purpose-built for canoe, kayak, and dragon boat. Same powerful data capture and compliance tools, adapted for paddle sport terminology and workflows.", image: "/images/boathouse.jpg", href: "/products/paddle" },
  { tag: "Real-Time", title: "Ludum Live", description: "See what’s happening right now. Live session feeds, real-time athlete data, and instant visibility into training as it happens — from the launch, the bank, or the gym.", image: "/images/winning-crew.jpg", href: "/products/live" },
];

const complianceData = [82, 85, 78, 88, 90, 87, 91, 89, 93, 91, 94, 93];

const integrations = ["Garmin", "Polar", "Strava", "Suunto", "Concept2", "Peach"];

const sidebarItems = [
  { name: "Dashboard", active: true },
  { name: "Athletes", active: false },
  { name: "Programme", active: false },
  { name: "Sessions", active: false },
  { name: "Compliance", active: false },
  { name: "Telemetry", active: false },
  { name: "Reports", active: false },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-black pt-[72px]">
        <div className="relative w-full min-h-[85vh]">
          <Image
            src="/images/oar-handle-rower.jpg"
            alt="Rower gripping oar"
            fill
            unoptimized
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-6 py-20 min-h-[85vh] lg:py-28">
            <div className="max-w-2xl">
              <H1 accent="Start seeing everything.">Stop coaching blind.</H1>
              <div className="mt-6">
                <Lead>
                  The performance platform built for coaches and teams in rowing and paddle sport. One system for training, data, compliance, and telemetry — so you can focus on making athletes faster.
                </Lead>
              </div>
              <div className="mt-8">
                <Link
                  href="/demo/"
                  className="inline-block rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
                >
                  Request a Demo &rarr;
                </Link>
              </div>
              <p className="mt-12 text-sm text-grey-light">
                Trusted by Rowing Australia · Princeton · Leander · Hampton
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dashboard Mockup */}
      <Section className="reveal bg-black">
        <Eyebrow>Your coaching command centre</Eyebrow>
        <div className="mt-6 overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-dark-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="ml-4 text-xs text-grey">Ludum Team</span>
          </div>

          <div className="flex min-h-[480px]">
            {/* Sidebar */}
            <div className="hidden w-52 shrink-0 border-r border-dark-border bg-dark p-4 sm:block">
              {sidebarItems.map((item) => (
                <div
                  key={item.name}
                  className={`mb-1 rounded-lg px-3 py-2 text-sm ${
                    item.active
                      ? "bg-white/5 font-semibold text-white"
                      : "text-grey hover:text-grey-light"
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            {/* Main content — v1 dashboard */}
            <div className="flex-1 p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-white">
                  Squad Overview — Week 12
                </h3>
                <span className="rounded-full bg-coral/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-coral">
                  Live
                </span>
              </div>

              {/* Stat cards */}
              <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                <div className="rounded-lg border border-dark-border bg-white/[0.03] p-4">
                  <p className="text-[0.7rem] uppercase tracking-wider text-grey">Athletes</p>
                  <p className="mt-1 text-2xl font-bold text-white">47</p>
                  <p className="mt-1 text-[0.7rem] text-green-400">+3 this month</p>
                </div>
                <div className="rounded-lg border border-dark-border bg-white/[0.03] p-4">
                  <p className="text-[0.7rem] uppercase tracking-wider text-grey">Compliance</p>
                  <p className="mt-1 text-2xl font-bold text-coral">93%</p>
                  <p className="mt-1 text-[0.7rem] text-green-400">↑ 4% vs last week</p>
                </div>
                <div className="rounded-lg border border-dark-border bg-white/[0.03] p-4">
                  <p className="text-[0.7rem] uppercase tracking-wider text-grey">Sessions This Week</p>
                  <p className="mt-1 text-2xl font-bold text-white">128</p>
                  <p className="mt-1 text-[0.7rem] text-green-400">On track</p>
                </div>
                <div className="rounded-lg border border-dark-border bg-white/[0.03] p-4">
                  <p className="text-[0.7rem] uppercase tracking-wider text-grey">Avg Training Load</p>
                  <p className="mt-1 text-2xl font-bold text-white">742</p>
                  <p className="mt-1 text-[0.7rem] text-green-400">Within target range</p>
                </div>
              </div>

              {/* Chart */}
              <div className="rounded-lg border border-dark-border bg-white/[0.02] p-5">
                <p className="mb-4 text-[0.7rem] uppercase tracking-wider text-grey">
                  Weekly Compliance — Last 12 Weeks
                </p>
                <div className="flex items-end gap-1.5" style={{ height: 100 }}>
                  {complianceData.map((val, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t bg-coral"
                        style={{ height: `${val}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Pain */}
      <Section className="reveal bg-black">
        <div className="max-w-3xl">
          <Eyebrow>Sound Familiar?</Eyebrow>
          <H2>You’re coaching in the dark.</H2>
          <div className="mt-6">
            <Lead>
              Every week, coaches lose critical data, miss warning signs, and make decisions based on gut feel instead of evidence.
            </Lead>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-dark-border border-l-4 border-l-coral bg-dark-card p-6"
            >
              <H3>{p.title}</H3>
              <p className="mt-3 text-sm leading-relaxed text-grey-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Solution */}
      <Section className="reveal bg-black">
        <div className="max-w-3xl">
          <Eyebrow>One Platform, Everything Connected</Eyebrow>
          <H2>Replace the patchwork. See your entire programme.</H2>
          <div className="mt-6">
            <Lead>
              Ludum connects training, data, compliance, and telemetry in a single platform — purpose-built for the way coaches actually work.
            </Lead>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-dark-border bg-dark-card p-6"
            >
              <div className="mb-4">{s.icon}</div>
              <H3>{s.title}</H3>
              <p className="mt-3 text-sm leading-relaxed text-grey-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Products grid */}
      <Section className="reveal bg-black">
        <div className="max-w-3xl">
          <Eyebrow>The Platform</Eyebrow>
          <H2>Five products. One connected ecosystem.</H2>
          <div className="mt-6">
            <Lead>
              Each product solves a specific problem. Together, they give you the most complete view of your programme available anywhere.
            </Lead>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* 6. Proof — single testimonial */}
      <Section className="reveal bg-black">
        <div className="max-w-3xl">
          <Eyebrow>What Coaches Say</Eyebrow>
          <H2>Don’t take our word for it</H2>
        </div>

        <figure className="mt-12 max-w-3xl">
          <blockquote className="text-2xl leading-relaxed text-white sm:text-3xl">
            “Before Ludum, I was running my programme across four different platforms and still didn’t know if athletes were following the plan. Now I see everything in one place — compliance, training load, wellness — and I make better decisions because of it.”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-card text-sm font-semibold text-white">
              WR
            </div>
            <div>
              <p className="font-semibold text-white">Will Reynolds</p>
              <p className="text-sm text-grey-light">Head of Rowing, Royal Shrewsbury School</p>
            </div>
          </figcaption>
        </figure>
      </Section>

      {/* 7. Integrations */}
      <Section className="reveal bg-black">
        <div className="max-w-3xl">
          <Eyebrow>Works With What You Have</Eyebrow>
          <H2>Your athletes keep their devices. You get their data.</H2>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-base font-medium text-grey-light sm:text-lg">
          {integrations.map((name, i) => (
            <span key={name} className="flex items-center gap-x-10">
              {name}
              {i < integrations.length - 1 && (
                <span className="hidden text-grey-dim sm:inline">·</span>
              )}
            </span>
          ))}
        </div>
      </Section>

      {/* 8. Final CTA */}
      <Section className="reveal bg-black">
        <div className="max-w-3xl">
          <H2>Ready to see what you’ve been missing?</H2>
          <div className="mt-6">
            <Body>
              Book a 30-minute demo and we’ll show you how Ludum works with your programme, your athletes, and your devices.
            </Body>
          </div>
          <div className="mt-8">
            <Link
              href="/demo/"
              className="inline-block rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
            >
              Request a Demo &rarr;
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
