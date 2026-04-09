import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { PhotoBreak } from "@/components/PhotoBreak";
import { HowItWorks } from "@/components/HowItWorks";
import { IntegrationLogos } from "@/components/IntegrationLogos";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Ludum Paddle — In-Boat Stroke Coach for Canoe & Kayak | Ludum",
  description:
    "A stroke coach in the canoe and a live feed to the bank. Cadence, speed, pace, distance, and heart rate — captured every session, broadcast to the coach in real time.",
};

function InBoatMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-dark-border bg-dark-card shadow-2xl">
      {/* Phone status bar */}
      <div className="flex items-center justify-between bg-dark px-5 pb-2 pt-3">
        <span className="text-[10px] font-medium text-grey">6:48</span>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-3 rounded-sm border border-grey-light" />
          <div className="h-2.5 w-1 rounded-sm bg-grey-light" />
        </div>
      </div>

      <div className="px-4 pb-5">
        {/* Recording indicator */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-coral">
              Recording
            </span>
          </div>
          <span className="font-mono text-lg font-bold text-white">41:08</span>
        </div>

        {/* Big numbers */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-dark p-4 text-center">
            <p className="text-3xl font-bold text-white">68</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-grey">
              Cadence
            </p>
          </div>
          <div className="rounded-xl bg-dark p-4 text-center">
            <p className="text-3xl font-bold text-coral">4:22</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-grey">
              Pace /km
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">9.4km</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">
              Distance
            </p>
          </div>
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">3.82 m/s</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">
              Speed
            </p>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-coral">162</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">HR</p>
          </div>
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">2:11</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">
              Split /500m
            </p>
          </div>
        </div>

        {/* GPS track */}
        <div className="rounded-xl border border-dark-border bg-dark p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-grey">
              Lake Karapiro
            </span>
            <span className="text-xs font-bold text-white">9.4km</span>
          </div>
          <svg className="h-10 w-full" viewBox="0 0 200 40" fill="none">
            <path
              d="M10 20 Q40 8 70 22 Q100 35 130 18 Q160 5 190 20"
              stroke="#E53F47"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LiveFeedMockup() {
  const paddlers = [
    { name: "Nakamura K.", pace: "4:14", cad: 74, hr: 170, zone: "Z4", color: "bg-orange-500" },
    { name: "Torres M.", pace: "4:18", cad: 72, hr: 162, zone: "Z3", color: "bg-green-500" },
    { name: "Jensen L.", pace: "4:22", cad: 70, hr: 155, zone: "Z2", color: "bg-blue-500" },
    { name: "Nguyen T.", pace: "4:16", cad: 73, hr: 168, zone: "Z3", color: "bg-green-500" },
    { name: "Williams A.", pace: "4:26", cad: 68, hr: 148, zone: "Z2", color: "bg-blue-500" },
    { name: "Park S.", pace: "4:20", cad: 71, hr: 165, zone: "Z3", color: "bg-green-500" },
    { name: "Schmidt F.", pace: "4:28", cad: 66, hr: 142, zone: "Z2", color: "bg-blue-500" },
    { name: "Da Silva R.", pace: "4:15", cad: 74, hr: 172, zone: "Z4", color: "bg-orange-500" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-dark-border bg-white/[.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-grey">
          Live Feed — Morning Paddle Session
        </span>
      </div>
      <div className="p-4">
        {/* Header row */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-coral">
              Live
            </span>
          </div>
          <span className="text-[10px] text-grey">8 paddlers on water</span>
        </div>

        {/* Column headers */}
        <div className="mb-2 grid grid-cols-[1fr_50px_40px_40px_40px] gap-2 px-2">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-grey">
            Athlete
          </span>
          <span className="text-right text-[9px] font-semibold uppercase tracking-wider text-grey">
            Pace
          </span>
          <span className="text-right text-[9px] font-semibold uppercase tracking-wider text-grey">
            Cad
          </span>
          <span className="text-right text-[9px] font-semibold uppercase tracking-wider text-grey">
            HR
          </span>
          <span className="text-right text-[9px] font-semibold uppercase tracking-wider text-grey">
            Zone
          </span>
        </div>

        {/* Paddler rows */}
        <div className="space-y-1">
          {paddlers.map((p) => (
            <div
              key={p.name}
              className="grid grid-cols-[1fr_50px_40px_40px_40px] items-center gap-2 rounded-lg bg-dark px-2 py-2"
            >
              <span className="truncate text-xs font-medium text-white">
                {p.name}
              </span>
              <span className="text-right text-xs font-bold text-white">
                {p.pace}
              </span>
              <span className="text-right text-xs text-grey-light">
                {p.cad}
              </span>
              <span className="text-right text-xs font-bold text-coral">
                {p.hr}
              </span>
              <div className="flex justify-end">
                <span
                  className={`rounded-full ${p.color}/20 px-1.5 py-0.5 text-[9px] font-bold ${p.color.replace("bg-", "text-")}`}
                >
                  {p.zone}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AthleteExperienceMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-dark-border bg-dark-card shadow-2xl">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-dark px-5 pb-2 pt-3">
        <span className="text-[10px] font-medium text-grey">6:45</span>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-3 rounded-sm border border-grey-light" />
        </div>
      </div>

      <div className="px-4 pb-5">
        {/* Greeting */}
        <h3 className="mb-4 text-lg font-bold text-white">
          Good morning, Mia
        </h3>

        {/* Session card 1 */}
        <div className="mb-3 rounded-xl border border-dark-border bg-dark p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Morning Paddle</p>
              <p className="text-[10px] text-grey">Today 6:30am</p>
            </div>
            <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[9px] font-bold uppercase text-green-400">
              Zone 3
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <p className="text-sm font-bold text-white">12.8km</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Distance
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-coral">4:18</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Avg Pace/km
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">72</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Avg Cadence
              </p>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div>
              <p className="text-sm font-bold text-white">55:12</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Duration
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-coral">162</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Avg HR
              </p>
            </div>
            <div />
          </div>
        </div>

        {/* Session card 2 (faded) */}
        <div className="mb-4 rounded-xl border border-dark-border bg-dark p-4 opacity-40">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Afternoon Paddle</p>
              <p className="text-[10px] text-grey">Yesterday 4:00pm</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm font-bold text-white">10.2km</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Distance
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-coral">4:24</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Avg Pace/km
              </p>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around rounded-xl border border-dark-border bg-dark px-2 py-2.5">
          <div className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-4 rounded bg-coral" />
            <span className="text-[9px] font-semibold text-coral">
              Sessions
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-4 rounded bg-grey-dim" />
            <span className="text-[9px] text-grey">Wellness</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-4 rounded bg-grey-dim" />
            <span className="text-[9px] text-grey">HR Monitor</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-4 rounded bg-grey-dim" />
            <span className="text-[9px] text-grey">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaddlePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center px-6 pb-16 pt-28 lg:px-16">
            <p className="mb-5 text-sm text-grey">
              <Link href="/products" className="transition-colors hover:text-white">
                Products
              </Link>
              <span className="mx-2 opacity-50">&rsaquo;</span>
              <span className="text-white">Ludum Paddle</span>
            </p>
            <SectionLabel text="For Paddlers" />
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Built for paddle sport.
              <br />
              <span className="text-coral">
                Use your phone to record your session.
              </span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-grey-light">
              A stroke coach in the canoe and a live feed to the bank. Cadence,
              speed, pace, distance, and heart rate — captured every session,
              broadcast to the coach in real time. Canoe and kayak, with the
              terminology your paddlers expect.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                Request a Demo <span>&rarr;</span>
              </Link>
              <Link
                href="#in-boat"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                See it in action
              </Link>
            </div>
            <div className="mt-14 flex gap-10 border-t border-white/[.06] pt-7">
              <div>
                <p className="text-2xl font-bold text-coral">Live</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-grey">
                  Stroke Coaching
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Auto</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-grey">
                  Session Capture
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-coral">BLE</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-grey">
                  Heart Rate
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/sky-view-crew.jpg"
              alt="Aerial view of athletes on the water"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          </div>
        </div>
      </section>

      {/* ── PS1: In-Boat Stroke Coach ── */}
      <section id="in-boat" className="relative py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[.04] to-transparent" />
        <div className="reveal mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <SectionLabel text="In-Boat Stroke Coach" />
            <p className="mb-5 text-lg font-semibold italic leading-relaxed text-coral">
              &ldquo;My paddlers come off the water and tell me it felt fast. I
              need numbers as well as feelings.&rdquo;
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              A stroke coach in the canoe. Every paddle stroke counted.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-grey-light">
              Ludum Paddle runs on the athlete&apos;s phone in the boat,
              providing real-time cadence, pace, speed, distance, and split
              times as they train. Connect a BLE heart rate monitor and HR data
              flows alongside. Every session is recorded automatically — the
              data is waiting for you before they&apos;ve even beached.
            </p>
            <ul className="space-y-2.5">
              {[
                "Real-time cadence/pace/speed/split times",
                "GPS track",
                "BLE HR support",
                "Sessions sync to Team dashboard",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto max-w-xs">
            <InBoatMockup />
          </div>
        </div>
      </section>

      {/* ── PS2: Live Session Feed ── */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[.04] to-transparent" />
        <div className="reveal mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <LiveFeedMockup />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel text="Live Session Feed" />
            <p className="mb-5 text-lg font-semibold italic leading-relaxed text-coral">
              &ldquo;I&apos;m standing on the bank watching 12 canoes and I
              have no idea who&apos;s working and who&apos;s cruising.&rdquo;
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              See every paddler. Every stroke. Right now.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-grey-light">
              While your athletes train, Ludum Paddle broadcasts their live
              position, cadence, pace, and heart rate to your Ludum Team
              dashboard. See who&apos;s hitting their targets and who&apos;s
              drifting — during the session, not after it. The same data feeds
              Ludum Live for race broadcasting.
            </p>
            <ul className="space-y-2.5">
              {[
                "Live cadence/pace/HR",
                "GPS position",
                "Colour-coded HR zones",
                "Feeds Ludum Live",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PS3: Athlete Experience ── */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[.04] to-transparent" />
        <div className="reveal mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <SectionLabel text="Athlete Experience" />
            <p className="mb-5 text-lg font-semibold italic leading-relaxed text-coral">
              &ldquo;I tried giving my paddlers another app and they
              couldn&apos;t figure out how to start a session.&rdquo;
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Built for paddlers. Not for admins.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-grey-light">
              Ludum Paddle is designed to get out of the way. Paddlers open the
              app, see their sessions, check their metrics. No data entry forms,
              no complicated configuration. Connect a heart rate strap once and
              everything flows from that point on. The simpler the athlete
              experience, the more reliable the coach&apos;s data.
            </p>
            <ul className="space-y-2.5">
              {[
                "One-tap BLE pairing",
                "Session history",
                "Morning monitoring (<30 seconds)",
                "iOS and Android",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto max-w-xs">
            <AthleteExperienceMockup />
          </div>
        </div>
      </section>

      {/* ── Photo Break ── */}
      <PhotoBreak
        image="/images/hero-solo-sunset.jpg"
        heading="Your paddlers train."
        headingAccent="Their data is already waiting."
        subtext="In-boat stroke coaching. Live data to the bank. Every session captured."
      />

      {/* ── How It Works ── */}
      <HowItWorks
        label="Getting Started"
        heading="Paddlers connected in minutes. Data flowing immediately."
        steps={[
          {
            title: "Paddlers Download",
            description:
              "Ludum Paddle is free for athletes. Available on iOS and Android.",
          },
          {
            title: "Pair HR Monitor",
            description:
              "Connect any BLE heart rate strap. One tap, paired once, remembered forever.",
          },
          {
            title: "Get on the Water",
            description:
              "Paddle acts as a stroke coach — live cadence, pace, splits, and HR in the boat.",
          },
          {
            title: "Coach Sees Everything",
            description:
              "Sessions broadcast live and appear in Ludum Team — automatically.",
          },
        ]}
      />

      {/* ── Ecosystem ── */}
      <IntegrationLogos
        label="Ecosystem"
        heading="Paddle feeds the full Ludum platform."
        subtext="Data captured in Ludum Paddle flows directly into the coaching and broadcasting tools your programme relies on."
        logos={["Ludum Team", "Ludum Live", "BLE Live Broadcast"]}
      />

      {/* ── Proof ── */}
      <ProofSection
        quote="Most coaching platforms are built for rowing and then squeeze paddle sport in as an afterthought. Ludum Paddle actually speaks our language — cadence, not stroke rate; canoe and kayak, not shell and scull. My paddlers picked it up immediately and the live feed from the bank has transformed how I coach sessions."
        author="Matt Ryan"
        title="Olympic Medallist & Performance Coach"
        initials="MR"
        logos={[
          "Rowing Australia",
          "Cambridge University",
          "Leander Club",
          "Hampton School",
        ]}
      />

      {/* ── CTA ── */}
      <CTASection
        heading="See Paddle working with your squad."
        subtext="Book a 30-minute demo. We'll show you in-boat stroke coaching, live session broadcasting, and automatic data capture — tailored to canoe and kayak."
      />

      {/* ── Other Products ── */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-12 text-center">
            <SectionLabel text="Explore the Platform" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Paddle works even better with the rest of Ludum.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              tag="Flagship"
              title="Ludum Team"
              description="Your coaching command centre. Training, compliance, analytics, and communication in one place."
              image="/images/hero-sunset-bridge.jpg"
              href="/products/team"
            />
            <ProductCard
              tag="Unique to Ludum"
              title="Ludum Telemetry"
              description="Stroke-by-stroke telemetry data from Peach Powerline, integrated with your training calendar."
              image="/images/boathouse.jpg"
              href="/products/telemetry"
            />
            <ProductCard
              tag="For Rowers"
              title="Ludum Row"
              description="The in-boat stroke coach for rowing and sculling — same platform, built for the rowing world."
              image="/images/hero-solo-sunset.jpg"
              href="/products/row"
            />
            <ProductCard
              tag="Real-Time"
              title="Ludum Live"
              description="Live race broadcasting, spectator tracking, and coach feeds — powered by data from Ludum Paddle."
              image="/images/winning-crew.jpg"
              href="/products/live"
            />
          </div>
        </div>
      </section>
    </>
  );
}
