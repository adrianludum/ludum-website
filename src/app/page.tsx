import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { PhotoBreak } from "@/components/PhotoBreak";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { IntegrationLogos } from "@/components/IntegrationLogos";

/* ------------------------------------------------------------------ */
/*  SVG icon helpers for pain-point & solution cards                   */
/* ------------------------------------------------------------------ */

function IconFragmented() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z" />
    </svg>
  );
}

function IconCompliance() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconWearable() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconOverload() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
    </svg>
  );
}

function IconManual() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
    </svg>
  );
}

function IconNoTeam() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-2.092M3.259 16.628A9.094 9.094 0 007 18.72m11-2.092a9.094 9.094 0 00-3.741-2.092M7 18.72a9.094 9.094 0 013.741-2.092m0 0A9.004 9.004 0 0112 15.75a9.004 9.004 0 011.259.878m-2.518 0a9.094 9.094 0 00-3.741 2.092M15 9.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

function IconTraining() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375" />
    </svg>
  );
}

function IconProgramme() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function IconAutoCapture() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconInjury() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IconPerformance() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function IconDevice() {
  return (
    <svg className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.686-2.869a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757" />
    </svg>
  );
}

function Star() {
  return (
    <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const painPoints = [
  { icon: <IconFragmented />, title: "Fragmented tools, fragmented picture", desc: "You\u2019re running your programme across spreadsheets, WhatsApp, email, Strava, and training peaks. Nothing talks to anything else. You spend more time collecting data than using it." },
  { icon: <IconCompliance />, title: "You can\u2019t see if athletes follow the plan", desc: (<>You write the programme. But did they do it? Research shows <span className="text-coral">93% compliance</span> is the threshold where training actually translates to performance. Right now, you&rsquo;re guessing.</>) },
  { icon: <IconWearable />, title: "Wearable data stuck on athletes\u2019 wrists", desc: "Your athletes wear Garmin, Polar, Suunto \u2014 capturing rich training data every session. But it lives on their phone, not your dashboard. The coach is the last to know." },
  { icon: <IconOverload />, title: "Data overload, zero insight", desc: "When you do get data, it\u2019s a wall of numbers with no synthesis. You need answers \u2014 who\u2019s overtraining, who\u2019s underperforming, who\u2019s at risk \u2014 not more spreadsheets." },
  { icon: <IconManual />, title: "Manual recording captures the headline, not the story", desc: "You log the final time and average rate. But automatic capture gives you every stroke \u2014 pacing, consistency, power distribution. The detail that separates good from great." },
  { icon: <IconNoTeam />, title: "No team-wide view", desc: "Every tool shows you athlete-by-athlete. But you\u2019re coaching a squad. You need to see the whole programme \u2014 training loads, wellness trends, session attendance \u2014 at a glance." },
];

const solutions = [
  { icon: <IconTraining />, title: "Training Compliance", desc: "See who followed the programme and who didn\u2019t \u2014 automatically, across every session, every athlete." },
  { icon: <IconProgramme />, title: "Programme Planning", desc: "Build, schedule, and distribute training programmes to your entire squad. One source of truth for what athletes should be doing." },
  { icon: <IconAutoCapture />, title: "Automatic Data Capture", desc: "Every stroke, every split, every heart rate zone \u2014 captured automatically from connected devices. No manual entry required." },
  { icon: <IconInjury />, title: "Injury & Illness Tracking", desc: "Log, monitor, and manage athlete availability. Spot patterns before small issues become season-ending problems." },
  { icon: <IconPerformance />, title: "Performance Tracking", desc: "Track improvement over time with real data \u2014 not subjective assessment. Benchmark athletes against each other and against themselves." },
  { icon: <IconDevice />, title: "Device Agnostic", desc: "Garmin, Polar, Suunto, Concept2 \u2014 Ludum connects them all. Your athletes keep their devices. You get their data." },
];

const products = [
  { tag: "Flagship", title: "Ludum Team", description: "Your coaching command centre. Training planning, compliance tracking, athlete management, data analytics, and communication \u2014 all in one place.", image: "/images/hero-sunset-bridge.jpg", href: "/products/team" },
  { tag: "Unique to Ludum", title: "Ludum Telemetry", description: "Live stroke-by-stroke data from inside the boat. Force curves, stroke rate, boat speed, and balance in real time \u2014 the only platform integrating telemetry with training.", image: "/images/boathouse.jpg", href: "/products/telemetry" },
  { tag: "For Rowers", title: "Ludum Row", description: "The athlete app for rowing. Automatic session recording from Concept2, on-water devices, and wearables. Your rowers train. Ludum captures everything.", image: "/images/hero-solo-sunset.jpg", href: "/products/row" },
  { tag: "For Paddlers", title: "Ludum Paddle", description: "Purpose-built for canoe, kayak, and dragon boat. Same powerful data capture and compliance tools, adapted for paddle sport terminology and workflows.", image: "/images/sky-view-crew.jpg", href: "/products/paddle" },
  { tag: "Real-Time", title: "Ludum Live", description: "See what\u2019s happening right now. Live session feeds, real-time athlete data, and instant visibility into training as it happens \u2014 from the launch, the bank, or the gym.", image: "/images/winning-crew.jpg", href: "/products/live" },
];

const testimonials = [
  { quote: "Before Ludum, I was running my programme across four different platforms and still didn\u2019t know if athletes were following the plan. Now I see everything in one place \u2014 compliance, training load, wellness \u2014 and I make better decisions because of it.", author: "Will Reynolds", role: "Head of Rowing, Royal Shrewsbury School", initials: "WR" },
  { quote: "The telemetry integration is a game-changer. We went from guessing about technique to seeing stroke-by-stroke data in real time. My coaches can make adjustments during the session, not after it. Nothing else on the market does this.", author: "Matt Ryan", role: "Olympic Medallist & Performance Coach", initials: "MR" },
  { quote: "I was the coach who didn\u2019t want another app. I\u2019d tried tools before and they always created more work. Ludum is different \u2014 it reduced my admin time and gave me visibility I didn\u2019t know was possible. I can\u2019t imagine going back.", author: "James Henderson", role: "Director of Rowing, University Programme", initials: "JH" },
];

const offRamps = [
  { label: "Blog", title: "Why Coaches Resist Technology \u2014 and How to Get Past It", desc: "The research behind adoption fear, and what separates tools that stick from tools that fail.", href: "/blog/coaches-resist-technology", image: "/images/boathouse.jpg" },
  { label: "User Story", title: "How Cambridge Achieved 93% Compliance in One Season", desc: "From fragmented tools to a single platform \u2014 and the performance results that followed.", href: "/stories/cambridge-compliance", image: "/images/winning-crew.jpg" },
  { label: "Video", title: "Ludum Team in 3 Minutes", desc: "See the platform in action \u2014 training planning, compliance tracking, and data analytics walkthrough.", href: "/tutorials/team-walkthrough", image: "/images/hero-sunset-bridge.jpg" },
];

const complianceData = [82, 85, 78, 88, 90, 87, 91, 89, 93, 91, 94, 93];

// 36-bar force-curve profile (rise, peak, fall) — static to avoid hydration mismatch
const strokeProfile = [
  18, 24, 32, 42, 54, 66, 76, 84, 90, 94,
  97, 99, 100, 99, 96, 92, 87, 81, 74, 67,
  60, 53, 47, 41, 36, 31, 27, 23, 20, 17,
  15, 13, 11, 9, 8, 7,
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. Hero                                                      */}
      {/* ============================================================ */}
      <section className="relative min-h-screen overflow-hidden bg-black pt-[72px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:py-28">
          {/* Text — left ~55% */}
          <div className="flex-1 lg:max-w-[55%]">
            <SectionLabel text="Sports Performance Platform" />
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              See more.
              <br />
              <span className="text-coral">Coach better.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-grey-light sm:text-lg">
              The performance platform built for coaches and teams in rowing and
              paddle sport. One system for training, data, compliance, and
              telemetry — so you can focus on what matters: making athletes
              faster.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                Request a Demo &rarr;
              </Link>
              <Link
                href="#dashboard"
                className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                Watch it in action
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-12">
              <p className="text-xs font-medium uppercase tracking-widest text-grey-dim">
                Trusted by programmes worldwide
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-6">
                {["Rowing Australia", "Cambridge University", "Leander Club", "Hampton School"].map(
                  (name) => (
                    <span
                      key={name}
                      className="rounded-full border border-dark-border bg-dark-card px-4 py-1.5 text-xs font-medium text-grey-light"
                    >
                      {name}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Image — right ~45% */}
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:max-w-[45%]">
            <Image
              src="/images/hero-solo-sunset.jpg"
              alt="Rower at sunset"
              fill
              unoptimized
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. Dashboard Mockup                                          */}
      {/* ============================================================ */}
      <section id="dashboard" className="reveal bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* macOS window */}
          <div className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
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
                {[
                  { name: "Dashboard", active: true },
                  { name: "Athletes", active: false },
                  { name: "Programme", active: false },
                  { name: "Sessions", active: false },
                  { name: "Compliance", active: false },
                  { name: "Telemetry", active: false },
                  { name: "Reports", active: false },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`mb-1 rounded-lg px-3 py-2 text-sm ${
                      item.active
                        ? "bg-coral/10 font-semibold text-coral"
                        : "text-grey hover:text-grey-light"
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                {/* Header */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-white">
                    Squad Overview — Week 12
                  </h3>
                  <span className="flex items-center gap-1.5 rounded-full bg-green-900/30 px-3 py-1 text-xs font-semibold text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    LIVE
                  </span>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {[
                    { label: "Athletes", value: "47", sub: "+3 this month" },
                    { label: "Compliance", value: "93%", sub: "\u2191 4% vs last week" },
                    { label: "Sessions This Week", value: "128", sub: "On track" },
                    { label: "Avg Training Load", value: "742", sub: "Within target range" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-dark-border bg-dark p-4"
                    >
                      <p className="text-xs text-grey">{stat.label}</p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-grey-dim">{stat.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="mt-6">
                  <p className="mb-4 text-sm font-medium text-grey-light">
                    Weekly Compliance — Last 12 Weeks
                  </p>
                  <div className="flex items-end gap-2">
                    {complianceData.map((val, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t bg-coral/80"
                          style={{ height: `${(val / 100) * 160}px` }}
                        />
                        <span className="text-[10px] text-grey-dim">W{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. Photo Break 1                                             */}
      {/* ============================================================ */}
      <PhotoBreak
        image="/images/boathouse.jpg"
        heading="Every session tells a story."
        headingAccent="Are you listening?"
        subtext="Automatic capture gives you every split, every rate, every metre — not just the headline."
      />

      {/* ============================================================ */}
      {/* 4. Pain Points                                               */}
      {/* ============================================================ */}
      <section className="reveal bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <SectionLabel text="Sound Familiar?" />
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              You&rsquo;re coaching in the dark.
              <br className="hidden sm:block" /> Your athletes deserve better.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-grey-light sm:text-lg">
              Every week, coaches lose critical data, miss warning signs, and
              make decisions based on gut feel instead of evidence. These are the
              problems Ludum was built to solve.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-dark-border bg-dark-card p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  {p.icon}
                  <span className="text-sm font-bold text-grey-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-grey">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. Solution — One Platform                                   */}
      {/* ============================================================ */}
      <section className="reveal bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <SectionLabel text="One Platform, Everything Connected" />
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Replace the patchwork.
              <br className="hidden sm:block" /> See your entire programme.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-grey-light sm:text-lg">
              Ludum connects training, data, compliance, and telemetry in a
              single platform — purpose-built for the way coaches actually work.
            </p>
          </div>

          {/* Full-width image */}
          <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/winning-crew.jpg"
              alt="Winning crew celebrating"
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Solution cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-dark-border bg-dark-card p-6"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-grey">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. Photo Break 2                                             */}
      {/* ============================================================ */}
      <PhotoBreak
        image="/images/hero-sunset-bridge.jpg"
        heading="Built for"
        headingAccent="competitive sport."
        subtext="Not a fitness tracker. Not a social network. A performance platform for coaches who want to win."
      />

      {/* ============================================================ */}
      {/* 7. Products — The Platform                                   */}
      {/* ============================================================ */}
      <section className="reveal bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <SectionLabel text="The Platform" />
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Five products. One connected ecosystem.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-grey-light sm:text-lg">
              Each product solves a specific problem. Together, they give you the
              most complete view of your programme available anywhere.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard
                key={p.title}
                tag={p.tag}
                title={p.title}
                description={p.description}
                image={p.image}
                href={p.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. Coach Empowerment                                         */}
      {/* ============================================================ */}
      <section className="reveal bg-dark py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <div>
              <SectionLabel text="Built for Coaches" />
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                You stay in control.
                <br />
                You just see more now.
              </h2>
              <p className="mt-4 text-base text-grey-light sm:text-lg">
                Ludum doesn&rsquo;t replace your coaching expertise — it
                amplifies it. You still make the decisions. You still run the
                programme. But now you have the data, visibility, and insight
                that was previously invisible.
              </p>

              {/* Quote */}
              <blockquote className="mt-8 border-l-2 border-coral pl-6">
                <p className="text-base italic leading-relaxed text-grey-light">
                  &ldquo;Ludum changed the way I see my programme. I was
                  sceptical about adding another tool — but this isn&rsquo;t
                  another tool. It&rsquo;s the tool that replaced ten
                  others.&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-white">
                  — Matt Ryan, Olympic Medallist &amp; Head Coach
                </footer>
              </blockquote>
            </div>

            {/* Right — image + floating card */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/winning-crew.jpg"
                  alt="Winning crew"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              {/* Floating data card */}
              <div className="absolute -bottom-6 -left-4 rounded-xl border border-dark-border bg-dark-card/95 p-5 shadow-2xl backdrop-blur-sm sm:-left-8">
                <div className="mb-3 flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">
                    Athlete Stroke Profile
                  </h4>
                  <span className="flex items-center gap-1 rounded-full bg-green-900/30 px-2 py-0.5 text-[10px] font-semibold text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    LIVE
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Stroke Rate", value: "34" },
                    { label: "Peak Force", value: "412N" },
                    { label: "Consistency", value: "96%" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between gap-6"
                    >
                      <span className="text-xs text-grey">{m.label}</span>
                      <span className="text-sm font-bold text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Stroke force profile */}
                <div className="mt-4 border-t border-dark-border pt-3">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-grey-dim">
                    Force Curve
                  </p>
                  <div className="flex h-12 items-end gap-[2px]">
                    {strokeProfile.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-coral"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. Integrations                                              */}
      {/* ============================================================ */}
      <IntegrationLogos
        label="Works With What You Have"
        heading="Your athletes keep their devices. You get their data."
        logos={["Garmin", "Polar", "Strava", "Suunto", "Concept2", "Peach"]}
      />

      {/* ============================================================ */}
      {/* 10. Mid CTA                                                  */}
      {/* ============================================================ */}
      <CTASection
        heading="Ready to see what you've been missing?"
        subtext="Book a 30-minute demo and we'll show you how Ludum works with your programme, your athletes, and your devices."
        buttonText={"Request a Demo \u2192"}
        buttonHref="/demo"
        bgImage="/images/hero-solo-sunset.jpg"
      />

      {/* ============================================================ */}
      {/* 11. Testimonials                                             */}
      {/* ============================================================ */}
      <section className="reveal bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <SectionLabel text="What Coaches Say" />
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Don&rsquo;t take our word for it
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.initials}
                className="rounded-2xl border border-dark-border bg-dark-card p-6"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-grey-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-grey">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. Trusted By                                               */}
      {/* ============================================================ */}
      <section className="reveal bg-dark py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-widest text-grey">
            Trusted by programmes at every level
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {["Rowing Australia", "Cambridge University", "Leander Club", "Hampton School", "Royal Shrewsbury School"].map(
              (name) => (
                <span
                  key={name}
                  className="text-sm font-medium text-grey-dim transition-colors hover:text-grey-light"
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. Final CTA                                                */}
      {/* ============================================================ */}
      <CTASection
        heading="Stop coaching blind."
        headingAccent="Start seeing everything."
        subtext="Join the programmes using Ludum to train smarter, track compliance, and make data-driven decisions — without changing your coaching philosophy."
        buttonText="Request a Demo &rarr;"
        buttonHref="/demo"
      />

      {/* ============================================================ */}
      {/* 14. Off-Ramps                                                */}
      {/* ============================================================ */}
      <section className="reveal bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {offRamps.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-2xl border border-dark-border bg-dark-card transition-colors hover:border-grey-dim"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-3 inline-block rounded-full bg-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral">
                    {item.label}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-white group-hover:text-coral">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-grey">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
