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
  title: "Ludum Row — Automatic Session Capture for Rowers | Ludum",
  description:
    "A stroke coach in the boat and a live feed to the bank. Stroke rate, pace, split times, distance, cadence, and heart rate — captured every session, broadcast to the coach in real time.",
};

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
            <p className="text-3xl font-bold text-coral">22</p>
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
            <p className="text-sm font-bold text-coral">156</p>
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
              stroke="#E53F47"
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
              className="h-3.5 w-3.5 text-teal"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" />
            </svg>
            <span className="text-[11px] text-grey-light">
              Polar H10 connected
            </span>
          </div>
          <span className="rounded-full bg-teal/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal">
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
              <p className="text-sm font-bold text-coral">2:04</p>
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
              <p className="text-sm font-bold text-coral">156</p>
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
              <p className="text-sm font-bold text-coral">2:06</p>
              <p className="text-[9px] uppercase tracking-wider text-grey">
                Avg Split
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

export default function RowPage() {
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
              <span className="text-white">Ludum Row</span>
            </p>
            <SectionLabel text="For Rowers" />
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your rowers train.
              <br />
              <span className="text-coral">Ludum captures everything.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-grey-light">
              A stroke coach in the boat and a live feed to the bank. Stroke
              rate, pace, split times, distance, cadence, and heart rate —
              captured every session, broadcast to the coach in real time.
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
              alt="Aerial view of rowing crew on the water"
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
              &ldquo;My rowers train for 90 minutes and all I get back is a
              total distance and an average rate.&rdquo;
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              A stroke coach in the boat. Every stroke counted.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-grey-light">
              Ludum Row runs on the athlete&apos;s phone in the boat, providing
              real-time stroke rate, pace, split times, distance, and cadence as
              they train. Connect a BLE heart rate monitor and HR data flows
              alongside. Every session is recorded automatically — the data is
              waiting for the coach before the boat is even docked.
            </p>
            <ul className="space-y-2.5">
              {[
                "Real-time stroke rate, pace, split times, and cadence displayed in the boat",
                "GPS track with distance and speed captured automatically",
                "BLE heart rate monitor support — any Bluetooth chest strap",
                "Sessions flow straight to the coach's Ludum Team dashboard",
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
            <div className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-dark-border bg-white/[.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[11px] text-grey">
                  Ludum Row — Live Session Feed
                </span>
              </div>
              <div className="p-0">
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
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel text="Live Session Feed" />
            <p className="mb-5 text-lg font-semibold italic leading-relaxed text-coral">
              &ldquo;They&apos;re on the water for 90 minutes and I don&apos;t
              know what they&apos;re doing until they come in.&rdquo;
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              See what&apos;s happening on the water. Right now.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-grey-light">
              While your athletes train, Ludum Row broadcasts their live
              position, stroke rate, pace, split times, and heart rate to your
              Ludum Team dashboard. See who&apos;s hitting their targets and
              who&apos;s drifting — during the session, not after it. The same
              data feeds Ludum Live for race broadcasting.
            </p>
            <ul className="space-y-2.5">
              {[
                "Live stroke rate, pace, split times, and heart rate for every athlete on the water",
                "GPS position updated in real time — see where they are on the course",
                "Colour-coded HR zones — instantly see who's in the right training zone",
                "Same data feeds Ludum Live for spectator and race broadcasting",
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
              &ldquo;The last app I asked my rowers to use was so complicated
              half of them uninstalled it within a week.&rdquo;
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Built for athletes. Not for admins.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-grey-light">
              Ludum Row is designed to get out of the way. Athletes open the
              app, see their sessions, check their metrics. No data entry forms,
              no complicated configuration. Connect a device once and everything
              flows from that point on. The simpler the athlete experience, the
              more reliable the coach&apos;s data.
            </p>
            <ul className="space-y-2.5">
              {[
                "One-tap BLE pairing — connect a heart rate strap once, remembered forever",
                "Session history with distance, pace, splits, SR, and HR at a glance",
                "Morning monitoring — wellness check-in takes under 30 seconds",
                "Available on iOS and Android",
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
        image="/images/oar-handle-rower.jpg"
        heading="Your athletes train."
        headingAccent="Their data is already waiting."
        subtext="In-boat stroke coaching. Live data to the bank. Every session captured."
      />

      {/* ── How It Works ── */}
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

      {/* ── Ecosystem ── */}
      <IntegrationLogos
        label="Ecosystem"
        heading="Row feeds the full Ludum platform."
        subtext="Data captured in Ludum Row flows directly into the coaching and broadcasting tools your programme relies on."
        logos={["Ludum Team", "Ludum Live", "BLE Heart Rate"]}
      />

      {/* ── Proof ── */}
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

      {/* ── CTA ── */}
      <CTASection
        heading="See Row working with your squad."
        subtext="Book a 30-minute demo. We'll show you in-boat stroke coaching, live session broadcasting, and automatic data capture — tailored to your programme."
      />

      {/* ── Other Products ── */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-12 text-center">
            <SectionLabel text="Explore the Platform" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Row feeds the full Ludum ecosystem.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              tag="Flagship"
              title="Ludum Team"
              description="Training planning, compliance tracking, athlete management, and data analytics — your coaching command centre."
              image="/images/hero-sunset-bridge.jpg"
              href="/products/team"
            />
            <ProductCard
              tag="Unique to Ludum"
              title="Ludum Telemetry"
              description="Stroke-by-stroke power, force curves, and catch angles from Peach Powerline — integrated with your training data."
              image="/images/boathouse.jpg"
              href="/products/telemetry"
            />
            <ProductCard
              tag="For Paddlers"
              title="Ludum Paddle"
              description="Purpose-built for canoe, kayak, and dragon boat with sport-specific terminology and workflows."
              image="/images/sky-view-crew.jpg"
              href="/products/paddle"
            />
            <ProductCard
              tag="Real-Time"
              title="Ludum Live"
              description="Live race broadcasting, spectator tracking, and coach feeds — powered by data from Ludum Row."
              image="/images/winning-crew.jpg"
              href="/products/live"
            />
          </div>
        </div>
      </section>
    </>
  );
}
