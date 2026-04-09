import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Ludum Telemetry — Stroke-by-Stroke Data From Inside the Boat",
  description:
    "Stroke-by-stroke power, force curves, catch angles, boat acceleration, and speed — for every crew, every session. The only platform that integrates Peach Powerline telemetry with your training data.",
};

const otherProducts = [
  {
    title: "Ludum Team",
    tag: "Flagship",
    href: "/products/team",
    image: "/images/hero-sunset-bridge.jpg",
    description:
      "Training management for coaches and squads. Compliance, training load, session analysis, and reporting in one platform.",
  },
  {
    title: "Ludum Row",
    tag: "For Rowers",
    href: "/products/row",
    image: "/images/hero-solo-sunset.jpg",
    description:
      "The athlete app for rowing. Automatic session recording from Concept2, on-water devices, and wearables.",
  },
  {
    title: "Ludum Paddle",
    tag: "For Paddlers",
    href: "/products/paddle",
    image: "/images/sky-view-crew.jpg",
    description:
      "Purpose-built for canoe, kayak, and dragon boat. Same powerful data capture adapted for paddle sport.",
  },
  {
    title: "Ludum Live",
    tag: "Real-Time",
    href: "/products/live",
    image: "/images/winning-crew.jpg",
    description:
      "Live race broadcasting, spectator tracking, and coach feeds — powered by data from your athletes.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Record with Peach",
    description:
      "Train as normal with your Powerline loggers. No changes to your setup.",
  },
  {
    step: "02",
    title: "Upload to Ludum",
    description:
      "Plug in your logger and upload. Ludum auto-groups crews by session time.",
  },
  {
    step: "03",
    title: "Compare & Analyse",
    description:
      "Overlay crews, filter by stroke rate, compare head-to-head — instantly.",
  },
  {
    step: "04",
    title: "Share with Athletes",
    description:
      "Generate PDF reports for debrief. Data stays in your calendar forever.",
  },
];

const calendarDays = (() => {
  const days: { day: number; hasTelemetry: boolean }[] = [];
  const telemetryDays = [2, 5, 8, 11, 14, 17, 19, 22, 25, 28];
  for (let i = 1; i <= 31; i++) {
    days.push({ day: i, hasTelemetry: telemetryDays.includes(i) });
  }
  return days;
})();

export default function TelemetryPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-24">
        <nav className="reveal flex items-center gap-2 text-sm text-grey">
          <Link href="/products" className="transition-colors hover:text-white">
            Products
          </Link>
          <span>/</span>
          <span className="text-white">Ludum Telemetry</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8">
        <div className="reveal grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
              Unique to Ludum
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              See inside
              <br />
              <span className="text-coral">the boat.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grey-light">
              Stroke-by-stroke power, force curves, catch angles, boat
              acceleration, and speed — for every crew, every session. The only
              platform that integrates Peach Powerline telemetry with your
              training data.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="rounded-full bg-dark-card px-3 py-1 text-xs font-semibold text-coral ring-1 ring-dark-border">
                Standalone Licence
              </span>
              <span className="text-sm text-grey">
                Telemetry is a separate product — no Ludum Team subscription
                required.
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                Request a Demo &rarr;
              </Link>
              <Link
                href="#crew-power"
                className="rounded-full border border-dark-border px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-grey-dim"
              >
                See it in action
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold text-white">Analysis</p>
                <p className="text-sm text-grey">Multiple Pieces</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Comparison</p>
                <p className="text-sm text-grey">2 Crews</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Share</p>
                <p className="text-sm text-grey">With Athletes</p>
              </div>
            </div>
          </div>

          {/* Data flow diagram */}
          <div className="rounded-2xl border border-dark-border bg-dark-card p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-full rounded-xl bg-dark px-6 py-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-grey">
                  Hardware
                </p>
                <p className="mt-1 text-lg font-bold text-white">
                  PEACH POWERLINE
                </p>
              </div>

              <div className="flex h-8 w-px border-l border-dashed border-grey-dim" />
              <span className="rounded-full bg-dark px-4 py-1.5 text-xs font-medium text-grey-light">
                USB Upload
              </span>
              <div className="flex h-8 w-px border-l border-dashed border-grey-dim" />

              <div className="w-full rounded-xl bg-coral/10 px-6 py-4 text-center ring-1 ring-coral/30">
                <p className="text-xs font-semibold uppercase tracking-wider text-coral">
                  Platform
                </p>
                <p className="mt-1 text-lg font-bold text-white">
                  LUDUM TELEMETRY
                </p>
              </div>

              <div className="flex h-8 w-px border-l border-dashed border-grey-dim" />

              <div className="grid w-full grid-cols-3 gap-3">
                {["Power Overlay", "Stroke Analysis", "Share & Compare"].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-lg bg-dark px-3 py-3 text-center"
                    >
                      <p className="text-xs font-semibold text-grey-light">
                        {label}
                      </p>
                    </div>
                  ),
                )}
              </div>

              <div className="flex h-8 w-px border-l border-dashed border-grey-dim" />

              <div className="w-full rounded-xl bg-dark px-6 py-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-grey">
                  Integration
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  LUDUM TEAM TRAINING CALENDAR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PS1: Crew Power Comparison */}
      <section id="crew-power" className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Crew Power Comparison
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;I know which crew won the piece. I don&apos;t know
                why.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Every crew. Every stroke. Compared.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                Upload from Powerline, and Ludum automatically groups crews into
                sessions by time. Open any session and see the average power for
                every crew overlaid stroke-by-stroke. Instantly see who held
                power, who faded, and where the pieces diverged.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Power comparison stroke by stroke",
                  "Sessions auto-grouped by time",
                  "Click any crew for individual athlete data",
                  "Switch between power/speed/SR/acceleration views",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border">
              <Image
                src="/images/powerline-all-results.png"
                alt="Crew power comparison view"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PS2: Stroke Rate Analysis */}
      <section className="bg-black py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border lg:order-first">
              <Image
                src="/images/powerline-sr-bands.png"
                alt="Stroke rate band analysis"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Stroke Rate Analysis
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;I want to compare what they did at race pace — not the
                entire paddle.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Auto-detected stroke rate bands. Race pace isolated instantly.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                Ludum automatically detects the most common stroke rate band in
                each session and shows you the data for that effort. Paddling at
                18? You see the steady state. Efforts at 32-34? You see the race
                piece. No manual selection required — but you can override and
                pick any band.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Auto detection of common SR range",
                  "Speed/distance/power/acceleration for selected band",
                  "Per-athlete power with target line",
                  "Effective length and catch/finish angles with targets",
                  "Time in deceleration as percentage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PS3: Head-to-Head Analysis */}
      <section className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Head-to-Head Analysis
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;We raced two eights side by side. I want to see exactly
                where the difference was.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Pick two crews. Compare everything.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                The analysis tab lets you select any two crews and any effort
                within a session. Ludum shows you speed, acceleration, power,
                stroke rate distribution, and time in deceleration — side by
                side. Overlay individual curves. Compare catch angles stroke by
                stroke. See if a crew got shorter over the piece or held their
                length.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Select efforts by dragging timeline",
                  "Side-by-side speed/acceleration/power curves",
                  "SR and power distribution comparison",
                  "Catch vs finish angle timeline",
                  "PDF comparison report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border">
              <Image
                src="/images/powerline-force-curves.png"
                alt="Head-to-head force curve comparison"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PS4: Session Management — Calendar Mockup */}
      <section className="bg-black py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            {/* Calendar mockup */}
            <div className="rounded-2xl border border-dark-border bg-dark-card p-6 lg:order-first">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">
                  March 2026
                </h3>
                <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral ring-1 ring-coral/30">
                  TELEMETRY FILTER ON
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={`${d}-${i}`} className="py-1 text-xs font-medium text-grey-dim">
                    {d}
                  </div>
                ))}
                {/* March 2026 starts on Sunday — offset 6 empty cells */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {calendarDays.map(({ day, hasTelemetry }) => (
                  <div
                    key={day}
                    className={`relative rounded-lg py-2 text-xs font-medium ${
                      hasTelemetry
                        ? "bg-coral/10 text-white ring-1 ring-coral/30"
                        : "text-grey"
                    }`}
                  >
                    {day}
                    {hasTelemetry && (
                      <span className="absolute -top-0.5 right-1 text-[8px] font-bold text-coral">
                        T
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-dark-border pt-4 text-xs text-grey">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-coral" />
                  Telemetry session
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-grey-dim" />
                  Regular session
                </span>
              </div>
            </div>

            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Session Management
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;Finding old telemetry sessions in Powerline is painful. I
                waste time just looking for the data.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Every session in your calendar. Always findable.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                When you upload from Powerline, Ludum automatically places the
                session in your training calendar and groups crews that trained
                at the same time. Filter by telemetry tag and you instantly see
                every session that has telemetry data. No more hunting through
                logger files — the data lives where your programme lives.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Sessions in training calendar",
                  "Crews auto-grouped by upload time",
                  'Filter by "Telemetry" tag',
                  "Dashboard widget",
                  "More user-friendly than Powerline alone",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Break */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/oar-handle-rower.jpg"
          alt="Close-up of rowing"
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The data Powerline captures.
            <br />
            <span className="text-coral">The insight Ludum unlocks.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-grey-light">
            Plug in. Upload. Compare crews instantly. No more wrestling with
            files.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-black py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Plug in. Upload. See everything.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="reveal rounded-2xl border border-dark-border bg-dark-card p-6">
                <span className="mb-4 inline-block text-3xl font-bold text-coral">
                  {item.step}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Compatibility */}
      <section className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Built for Peach Powerline.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-grey-light">
              Ludum Telemetry connects directly to your existing Peach
              Innovations hardware. No new equipment needed.
            </p>
          </div>
          <div className="reveal mx-auto mt-12 max-w-md rounded-2xl border border-dark-border bg-dark-card p-8 text-center">
            <span className="mb-2 inline-block text-2xl font-bold uppercase tracking-[4px] text-coral">
              PEACH
            </span>
            <h3 className="text-lg font-semibold text-white">
              Peach Innovations Powerline
            </h3>
            <p className="mt-2 text-sm text-grey">
              Force measurement, acceleration, stroke analysis
            </p>
          </div>
        </div>
      </section>

      {/* Proof / Testimonial */}
      <section className="bg-black py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal mx-auto max-w-3xl text-center">
            <svg className="mx-auto mb-6 h-10 w-10 text-coral" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            <blockquote className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
              &ldquo;The telemetry integration is a game-changer. We went from
              guessing about technique to seeing stroke-by-stroke data in real
              time. My coaches can make adjustments during the session, not after
              it. Nothing else on the market does this.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-white">Matt Ryan</p>
              <p className="text-sm text-grey">
                Olympic Medallist &amp; Performance Coach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              See your Powerline data like never before.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-grey-light">
              Book a demo and we&apos;ll show you Ludum Telemetry with real
              session data — crew overlays, stroke rate analysis, and
              head-to-head comparison.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                Request a Demo &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="bg-black py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Other Products
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-grey-light">
              Ludum is a suite of tools for coaches, athletes, and spectators.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
