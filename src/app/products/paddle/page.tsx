import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, Eyebrow, Lead, Body } from "@/components/Heading";
import { HowItWorks } from "@/components/HowItWorks";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ludum Paddle — In-Boat Stroke Coach for Canoe & Kayak | Ludum",
  description:
    "Built for canoe and kayak. Cadence, pace, distance, and heart rate — captured from the phone in the boat, broadcast to the coach in real time.",
};

function Bullet() {
  return (
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
  );
}

function InBoatMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-dark-border bg-dark-card shadow-2xl">
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

        {/* Big numbers — cadence and pace are the paddle story */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-dark p-4 text-center">
            <p className="text-3xl font-bold text-white">68</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-grey">
              Cadence
            </p>
          </div>
          <div className="rounded-xl bg-dark p-4 text-center">
            <p className="text-3xl font-bold text-white">4:22</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-grey">
              Pace /km
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">9.4km</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">
              Distance
            </p>
          </div>
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">162</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">HR</p>
          </div>
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">3.8</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">m/s</p>
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
              stroke="#ffffff"
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

export default function PaddlePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-24 pt-24 lg:grid-cols-2 lg:items-center">
          <div>
            <nav className="mb-8 text-sm text-grey-light">
              <span>Products</span>
              <span className="mx-2">/</span>
              <span className="text-white">Ludum Paddle</span>
            </nav>
            <Eyebrow>For Canoe &amp; Kayak</Eyebrow>
            <H1 accent="Ludum Paddle.">Paddle sport, first class.</H1>
            <Lead className="mt-6">
              Cadence, not stroke rate. Canoe and kayak, not shell and scull.
              A phone in the boat captures every session — cadence, pace,
              distance, and heart rate — and streams it to the coach on the
              bank in real time.
            </Lead>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                Request a Demo &rarr;
              </Link>
              <Link
                href="#in-boat"
                className="inline-flex items-center gap-2 rounded-full border border-dark-border px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-grey-dim"
              >
                See it in action
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <InBoatMockup />
          </div>
        </div>
      </section>

      {/* PS1: In-Boat Stroke Coach */}
      <section id="in-boat" className="bg-dark py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>In-Boat Stroke Coach</Eyebrow>
            <H2>Cadence and pace. In the boat. Every session.</H2>
            <Body className="mt-6 text-lg">
              Paddle runs on the phone the athlete already carries. Real-time
              cadence, pace per km, speed, and distance — with split times for
              race pieces. Connect a BLE heart rate strap and HR flows
              alongside. Every session is recorded automatically and waiting
              for the coach before the boat touches the bank.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Paddle-native metrics: cadence, pace /km, speed, distance",
                "GPS track captured automatically — no stopwatch, no paperwork",
                "BLE heart rate monitor support — any Bluetooth chest strap",
                "Canoe and kayak terminology — not rowing with the nouns swapped",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-dark-border bg-dark-card p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey-light">
              Paddle vs Row
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-grey">Rowing speaks</p>
                <ul className="mt-2 space-y-1.5 text-sm text-grey-light">
                  <li>Stroke Rate</li>
                  <li>Split /500m</li>
                  <li>Shell, Scull</li>
                  <li>Crew, Seat</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white">Paddle speaks</p>
                <ul className="mt-2 space-y-1.5 text-sm text-white">
                  <li>Cadence</li>
                  <li>Pace /km</li>
                  <li>Canoe, Kayak</li>
                  <li>Paddler, Boat</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PS2: Live Feed to Coach */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-dark-border bg-dark-card p-6">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-coral">Live</span>
                </div>
                <span className="text-[10px] text-grey">8 paddlers on water</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: "Nakamura, K.", pace: "4:14", cad: 74, hr: 170, zone: "Z4", zoneColor: "bg-orange-500/20 text-orange-400" },
                  { name: "Torres, M.", pace: "4:18", cad: 72, hr: 162, zone: "Z3", zoneColor: "bg-emerald-500/20 text-emerald-400" },
                  { name: "Jensen, L.", pace: "4:22", cad: 70, hr: 155, zone: "Z2", zoneColor: "bg-blue-500/20 text-blue-400" },
                  { name: "Nguyen, T.", pace: "4:16", cad: 73, hr: 168, zone: "Z3", zoneColor: "bg-emerald-500/20 text-emerald-400" },
                  { name: "Williams, A.", pace: "4:26", cad: 68, hr: 148, zone: "Z2", zoneColor: "bg-blue-500/20 text-blue-400" },
                  { name: "Da Silva, R.", pace: "4:15", cad: 74, hr: 172, zone: "Z4", zoneColor: "bg-orange-500/20 text-orange-400" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="grid grid-cols-[1fr_50px_40px_40px_40px] items-center gap-2 rounded-lg bg-dark px-3 py-2"
                  >
                    <span className="truncate text-xs font-medium text-white">{p.name}</span>
                    <span className="text-right text-xs font-bold text-white">{p.pace}</span>
                    <span className="text-right text-xs text-grey-light">{p.cad}</span>
                    <span className="text-right text-xs font-bold text-white">{p.hr}</span>
                    <span className={`rounded-full px-1.5 py-0.5 text-center text-[9px] font-bold ${p.zoneColor}`}>{p.zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Live Session Feed</Eyebrow>
            <H2>Twelve boats. One screen. One decision.</H2>
            <Body className="mt-6 text-lg">
              Standing on the bank watching a dozen canoes and kayaks, it&apos;s
              hard to know who&apos;s working and who&apos;s cruising. Paddle
              broadcasts live pace, cadence, and heart rate for every paddler to
              your Ludum Team dashboard — with colour-coded zones so you can see
              at a glance who needs a word.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Live pace, cadence, and heart rate for every paddler on the water",
                "Colour-coded training zones — spot who's drifting in seconds",
                "GPS position — know where each boat is on the course",
                "Feeds Ludum Live for regatta broadcasting and spectator tracking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PS3: Athlete Experience */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow>Athlete Experience</Eyebrow>
          <H2>Built for paddlers. Not for admins.</H2>
          <Body className="mx-auto mt-6 text-lg">
            Paddlers open the app, tap start, and paddle. No data entry, no
            configuration forms, no tutorials to sit through. Pair a heart rate
            strap once and it&apos;s remembered forever. The simpler the
            athlete experience, the more reliable the coach&apos;s data.
          </Body>
        </div>
      </section>

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

      <ProofSection
        quote="Most coaching platforms are built for rowing and then squeeze paddle sport in as an afterthought. Ludum Paddle actually speaks our language — cadence, not stroke rate; canoe and kayak, not shell and scull. My paddlers picked it up immediately and the live feed from the bank has transformed how I coach sessions."
        author="Matt Ryan"
        title="Olympic Medallist & Performance Coach"
        initials="MR"
      />

      <CTASection
        heading="See Paddle working with your squad."
        subtext="Book a 30-minute demo. We'll show you in-boat stroke coaching and live session broadcasting — built for canoe and kayak."
      />
    </>
  );
}
