import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, Eyebrow, Lead, Body } from "@/components/Heading";

import { HowItWorks } from "@/components/HowItWorks";
import { IntegrationLogos } from "@/components/IntegrationLogos";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ludum Row — Automatic Session Capture for Rowers | Ludum",
  description:
    "A stroke coach in the boat and a live feed to the bank. Stroke rate, pace, split times, distance, cadence, and heart rate — captured every session, broadcast to the coach in real time.",
};

function Bullet() {
  return (
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
  );
}

function InBoatMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-dark-border bg-dark-card shadow-2xl">
      {/* Phone status bar */}
      <div className="flex items-center justify-between bg-dark px-5 pb-2 pt-3">
        <span className="text-[10px] font-medium text-grey">9:41</span>
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
          <span className="font-mono text-lg font-bold text-white">32:14</span>
        </div>

        {/* Big numbers */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-dark p-4 text-center">
            <p className="text-3xl font-bold text-white">22</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-grey">
              Stroke Rate
            </p>
          </div>
          <div className="rounded-xl bg-dark p-4 text-center">
            <p className="text-3xl font-bold text-white">2:04</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-grey">
              Split /500m
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">7.8km</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">
              Distance
            </p>
          </div>
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">156</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">
              Heart Rate
            </p>
          </div>
          <div className="rounded-lg bg-dark px-3 py-2.5 text-center">
            <p className="text-sm font-bold text-white">38</p>
            <p className="text-[9px] uppercase tracking-wider text-grey">
              Cadence
            </p>
          </div>
        </div>

        {/* GPS track */}
        <div className="mb-3 rounded-xl border border-dark-border bg-dark p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-grey">
              GPS Track
            </span>
            <span className="text-xs font-bold text-white">7.8km</span>
          </div>
          <svg className="h-10 w-full" viewBox="0 0 200 40" fill="none">
            <path
              d="M10 30 Q30 10 50 20 Q70 30 90 15 Q110 5 130 18 Q150 30 170 12 Q185 5 195 15"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* BLE indicator */}
        <div className="flex items-center justify-between rounded-lg border border-dark-border bg-dark px-3 py-2">
          <div className="flex items-center gap-2">
            <svg
              className="h-3.5 w-3.5 text-white/80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" />
            </svg>
            <span className="text-[11px] text-grey-light">
              Polar H10 connected
            </span>
          </div>
          <span className="rounded-full border border-dark-border bg-dark px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
            Live
          </span>
        </div>
      </div>
    </div>
  );
}

function AthleteExperienceMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-dark-border bg-dark-card shadow-2xl">
      {/* Android-style status bar */}
      <div className="flex items-center justify-between bg-dark px-5 pb-2 pt-3">
        <span className="text-[10px] font-medium text-grey">7:42</span>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-3 rounded-sm border border-grey-light" />
        </div>
      </div>

      <div className="px-4 pb-5">
        {/* Greeting */}
        <h3 className="mb-4 text-lg font-bold text-white">
          Good morning, Jake
        </h3>

        {/* Session card 1 */}
        <div className="mb-3 rounded-xl border border-dark-border bg-dark p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Morning Water</p>
              <p className="text-[10px] text-grey">Today 7:00am</p>
            </div>
            <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[9px] font-bold uppercase text-green-400">
              Zone 3
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <p className="text-sm font-bold text-white">14.2km</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Distance
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">2:04</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Avg Split
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">22</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Avg SR
              </p>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div>
              <p className="text-sm font-bold text-white">58:14</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Duration
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">156</p>
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
              <p className="text-sm font-bold text-white">Afternoon Water</p>
              <p className="text-[10px] text-grey">Yesterday 3:30pm</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm font-bold text-white">12.6km</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Distance
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">2:06</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Avg Split
              </p>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around rounded-xl border border-dark-border bg-dark px-2 py-2.5">
          <div className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-4 rounded bg-white/80" />
            <span className="text-[9px] font-semibold text-white">
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

export default function RowPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-24 pt-24 lg:grid-cols-2 lg:items-center">
          <div>
            <nav className="mb-8 text-sm text-grey-light">
              <span>Products</span>
              <span className="mx-2">/</span>
              <span className="text-white">Ludum Row</span>
            </nav>
            <Eyebrow>For Rowers</Eyebrow>
            <H1 accent="Ludum captures everything.">Your rowers train.</H1>
            <Lead className="mt-6">
              A stroke coach in the boat and a live feed to the bank. Stroke
              rate, pace, split times, distance, cadence, and heart rate —
              captured every session, broadcast to the coach in real time.
            </Lead>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                Request a Demo <span>&rarr;</span>
              </Link>
              <Link
                href="#in-boat"
                className="inline-flex items-center gap-2 rounded-full border border-dark-border px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-grey-dim"
              >
                See it in action
              </Link>
            </div>
          </div>

          {/* Landscape phone-in-boat mockup */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/sky-view-crew.jpg"
              alt="Rowing crew on the water"
              fill
              unoptimized
              className="object-cover brightness-[0.4]"
              priority
            />
            {/* Landscape phone overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[340px] sm:w-[420px]">
                <div className="overflow-hidden rounded-[1.2rem] border-2 border-white/20 bg-dark-card shadow-[0_0_60px_rgba(229,63,71,0.15)]">
                  {/* Status bar - landscape */}
                  <div className="flex items-center justify-between bg-dark px-4 py-1.5">
                    <span className="text-[8px] font-medium text-grey">9:41</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
                        </span>
                        <span className="text-[7px] font-bold uppercase tracking-wider text-coral">Rec</span>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-white">32:14</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      <span className="text-[7px] text-grey-light">BLE</span>
                      <div className="ml-1 h-1.5 w-2.5 rounded-sm border border-grey-light" />
                    </div>
                  </div>
                  {/* Main content - landscape layout */}
                  <div className="flex gap-2 px-3 pb-3 pt-1">
                    {/* Left: big numbers */}
                    <div className="grid flex-1 grid-cols-2 gap-1.5">
                      <div className="rounded-lg bg-dark p-2 text-center">
                        <p className="text-2xl font-bold text-white sm:text-3xl">22</p>
                        <p className="text-[6px] font-medium uppercase tracking-wider text-grey">Stroke Rate</p>
                      </div>
                      <div className="rounded-lg bg-dark p-2 text-center">
                        <p className="text-2xl font-bold text-white sm:text-3xl">2:04</p>
                        <p className="text-[6px] font-medium uppercase tracking-wider text-grey">Split /500m</p>
                      </div>
                      <div className="rounded-lg bg-dark p-2 text-center">
                        <p className="text-sm font-bold text-white">7.8km</p>
                        <p className="text-[6px] uppercase tracking-wider text-grey">Distance</p>
                      </div>
                      <div className="rounded-lg bg-dark p-2 text-center">
                        <p className="text-sm font-bold text-white">156 <span className="text-[8px] text-grey">bpm</span></p>
                        <p className="text-[6px] uppercase tracking-wider text-grey">Heart Rate</p>
                      </div>
                    </div>
                    {/* Right: acceleration chart + deceleration */}
                    <div className="flex w-[130px] shrink-0 flex-col gap-1.5 sm:w-[160px]">
                      <div className="flex-1 rounded-lg bg-dark p-2">
                        <p className="mb-1 text-[6px] font-medium uppercase tracking-wider text-grey">Acceleration</p>
                        <svg className="h-12 w-full" viewBox="0 0 140 50" fill="none">
                          {/* Zero line */}
                          <line x1="0" y1="22" x2="140" y2="22" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                          {/* Deceleration zone highlight */}
                          <rect x="25" y="0" width="40" height="50" fill="rgba(229,63,71,0.12)" rx="2" />
                          <text x="45" y="8" textAnchor="middle" fill="#E53F47" fontSize="5" fontWeight="700">30.2%</text>
                          {/* Acceleration curve - matches reference shape */}
                          <path d="M0 18 C8 17 15 18 22 20 C30 24 35 38 42 42 C48 44 52 42 58 36 C62 30 65 24 70 20 C75 17 80 16 85 15 C92 13 98 12 105 14 C112 15 118 17 125 18 C130 18 135 19 140 19" stroke="#22C55E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="rounded-lg bg-dark p-2 text-center">
                        <p className="text-lg font-bold text-yellow-400 sm:text-xl">30.2%</p>
                        <p className="text-[6px] uppercase tracking-wider text-grey">% in Deceleration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contextual labels */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                Phone mounted in boat
              </span>
              <span className="rounded-full bg-coral/20 px-3 py-1.5 text-[10px] font-semibold text-coral backdrop-blur-sm">
                Live to coach &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PS1: In-Boat Stroke Coach */}
      <section id="in-boat" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>In-Boat Stroke Coach</Eyebrow>
            <H2>A stroke coach in the boat. Every stroke counted.</H2>
            <Body className="mt-6 text-lg">
              Ludum Row runs on the athlete&apos;s phone in the boat, providing
              real-time stroke rate, pace, split times, distance, and cadence as
              they train. Connect a BLE heart rate monitor and HR data flows
              alongside. Every session is recorded automatically — the data is
              waiting for the coach before the boat is even docked.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Real-time stroke rate, pace, split times, and cadence displayed in the boat",
                "GPS track with distance and speed captured automatically",
                "BLE heart rate monitor support — any Bluetooth chest strap",
                "Sessions flow straight to the coach's Ludum Team dashboard",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
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

      {/* PS2: Live Session Feed */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-dark-border bg-white/[.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[11px] text-grey">
                  Ludum Row — Live Session Feed
                </span>
              </div>
              <Image
                src="/images/ludum-row-live-feed.png"
                alt="Live session feed showing real-time data from athletes on the water"
                width={800}
                height={500}
                unoptimized
                className="w-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Live Session Feed</Eyebrow>
            <H2>See what&apos;s happening on the water. Right now.</H2>
            <Body className="mt-6 text-lg">
              While your athletes train, Ludum Row broadcasts their live
              position, stroke rate, pace, split times, and heart rate to your
              Ludum Team dashboard. See who&apos;s hitting their targets and
              who&apos;s drifting — during the session, not after it. The same
              data feeds Ludum Live for race broadcasting.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Live stroke rate, pace, split times, and heart rate for every athlete on the water",
                "GPS position updated in real time — see where they are on the course",
                "Colour-coded HR zones — instantly see who's in the right training zone",
                "Same data feeds Ludum Live for spectator and race broadcasting",
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
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Athlete Experience</Eyebrow>
            <H2>Built for athletes. Not for admins.</H2>
            <Body className="mt-6 text-lg">
              Ludum Row is designed to get out of the way. Athletes open the
              app, see their sessions, check their metrics. No data entry forms,
              no complicated configuration. Connect a device once and everything
              flows from that point on. The simpler the athlete experience, the
              more reliable the coach&apos;s data.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "One-tap BLE pairing — connect a heart rate strap once, remembered forever",
                "Session history with distance, pace, splits, SR, and HR at a glance",
                "Morning monitoring — wellness check-in takes under 30 seconds",
                "Available on iOS and Android",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
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

      <HowItWorks
        label="Getting Started"
        heading="Athletes connected in minutes. Data flowing immediately."
        steps={[
          {
            title: "Athletes Download",
            description:
              "Ludum Row is free for athletes. Available on iOS and Android.",
          },
          {
            title: "Pair HR Monitor",
            description:
              "Connect any BLE heart rate strap. One tap, paired once, remembered forever.",
          },
          {
            title: "Get on the Water",
            description:
              "Row acts as a stroke coach — live rate, pace, splits, and HR in the boat.",
          },
          {
            title: "Coach Sees Everything",
            description:
              "Sessions broadcast live and appear in Ludum Team — automatically.",
          },
        ]}
      />

      <IntegrationLogos
        label="Ecosystem"
        heading="Row feeds the full Ludum platform."
        subtext="Data captured in Ludum Row flows directly into the coaching and broadcasting tools your programme relies on."
        logos={["Ludum Team", "Ludum Live", "BLE Heart Rate"]}
      />

      <ProofSection
        quote="Having a stroke coach in every boat changed our training. The athletes get instant feedback on rate and pace, and I can see live data from the bank. Sessions that used to be a black box are now completely transparent. I know what they did before they even dock."
        author="Will Reynolds"
        title="Head of Rowing, Royal Shrewsbury School"
        initials="WR"
        logos={[
          "Rowing Australia",
          "Cambridge University",
          "Leander Club",
          "Hampton School",
        ]}
      />

      <CTASection
        heading="See Row working with your squad."
        subtext="Book a 30-minute demo. We'll show you in-boat stroke coaching, live session broadcasting, and automatic data capture — tailored to your programme."
      />
    </>
  );
}
