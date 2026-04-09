import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Ludum Team — Your Coaching Command Centre",
  description:
    "One platform for training planning, compliance tracking, athlete management, performance analytics, and squad communication. Built for how coaches actually work.",
};

const otherProducts = [
  {
    title: "Ludum Telemetry",
    tag: "Unique to Ludum",
    href: "/products/telemetry",
    image: "/images/boathouse.jpg",
    description:
      "Live stroke-by-stroke data from inside the boat. The only platform integrating telemetry with training.",
  },
  {
    title: "Ludum Row",
    tag: "For Rowers",
    href: "/products/row",
    image: "/images/hero-solo-sunset.jpg",
    description:
      "Automatic session recording from Concept2, on-water devices, and wearables.",
  },
  {
    title: "Ludum Paddle",
    tag: "For Paddlers",
    href: "/products/paddle",
    image: "/images/sky-view-crew.jpg",
    description:
      "Purpose-built for canoe, kayak, and dragon boat with sport-specific workflows.",
  },
  {
    title: "Ludum Live",
    tag: "Real-Time",
    href: "/products/live",
    image: "/images/winning-crew.jpg",
    description:
      "Live session feeds and real-time athlete data from anywhere.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Book a Demo",
    description:
      "30-minute call. We show you Team working for your sport and squad size.",
  },
  {
    step: "02",
    title: "We Set You Up",
    description:
      "Ludum onboards your programme — athletes, groups, history. You don't lift a finger.",
  },
  {
    step: "03",
    title: "Athletes Connect",
    description:
      "Athletes download the app and link their devices. Data flows immediately.",
  },
  {
    step: "04",
    title: "You See Everything",
    description:
      "Compliance, load, wellness, performance — all in one place.",
  },
];

const integrations = ["Garmin", "Polar", "Strava", "Suunto", "Concept2"];

const logoNames = [
  "Rowing Australia",
  "Cambridge University",
  "University of Kansas",
  "Hampton School",
];

const riskAthletes = [
  { name: "Mitchell, S.", ratio: 0.92, color: "bg-green-500" },
  { name: "Cooper, J.", ratio: 1.05, color: "bg-green-500" },
  { name: "Ashworth, T.", ratio: 1.15, color: "bg-yellow-500" },
  { name: "Hargreaves, B.", ratio: 0.88, color: "bg-green-500" },
  { name: "Thornton, E.", ratio: 1.45, color: "bg-red-500" },
  { name: "Chen, O.", ratio: 0.72, color: "bg-green-500" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-24">
        <nav className="reveal flex items-center gap-2 text-sm text-grey">
          <Link href="/products" className="transition-colors hover:text-white">
            Products
          </Link>
          <span>/</span>
          <span className="text-white">Ludum Team</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8">
        <div className="reveal grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
              Flagship Product
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your coaching
              <br />
              <span className="text-coral">command centre.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grey-light">
              One platform for training planning, compliance tracking, athlete
              management, performance analytics, and squad communication. Built
              for how coaches actually work — not how software companies think
              they should.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
              >
                Request a Demo &rarr;
              </Link>
              <Link
                href="#compliance"
                className="rounded-full border border-dark-border px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-grey-dim"
              >
                See it in action
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold"><span className="text-coral">93.2%</span></p>
                <p className="text-sm text-grey">Compliance</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-sm text-grey">Personal Bests</p>
              </div>
              <div>
                <p className="text-2xl font-bold"><span className="text-coral">1hr</span></p>
                <p className="text-sm text-grey">Setup Time</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-sunset-bridge.jpg"
              alt="Rowing crew at sunset"
              fill
              unoptimized
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PS1: Compliance Tracking */}
      <section id="compliance" className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Compliance Tracking
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;I write the programme. Now I know how well they did the
                sessions.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                See who trained, who didn&apos;t, and who&apos;s falling behind.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                The 93% compliance threshold is where training actually
                translates to performance. Ludum Team tracks compliance
                automatically — every session, every athlete — so you always
                know where your squad stands.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Colour-coded calendar shows completed, missed, and partial sessions at a glance",
                  "Squad-wide compliance percentage updated in real time",
                  "Individual athlete compliance history over any time period",
                  "No manual entry — data syncs automatically from connected devices",
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
                src="/images/team-training-zones.png"
                alt="Compliance tracking dashboard"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PS2: Session Analysis */}
      <section className="bg-black py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border lg:order-first">
              <Image
                src="/images/team-session-map.png"
                alt="Session analysis map view"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Session Analysis
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;I log the final time and average rate. But I know
                I&apos;m missing the detail.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Every session. Every crew. Every stroke.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                When you open a session in Team, you don&apos;t just see
                headlines. You see the map, the crews, the speed zones, the
                heart rate distribution, and the piece-by-piece breakdown. Sort
                and rank athletes within each piece. Overlay boat speed with
                heart rate for any athlete across the entire session.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Session map showing exactly where crews trained",
                  "Speed distribution and stroke rate breakdown by crew",
                  "Heart rate zones across all athletes — see who trained hard and who didn't",
                  "Piece-by-piece ranking with gold medal percentage",
                  "Boat speed overlaid with heart rate for single scullers",
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

      {/* PS3: Training Load & Risk */}
      <section className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Training Load &amp; Risk
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;Someone&apos;s going to get injured and I won&apos;t see
                it coming.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Chronic-acute ratio. Red, amber, green. No guessing.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                Team monitors the balance between chronic training load and acute
                spikes for every athlete. The dashboard shows you who&apos;s in
                the green optimal zone, who&apos;s pushing into amber, and
                who&apos;s in the red before they break down — not after.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Chronic-acute training load ratio visualised per athlete",
                  "Green / amber / red zone indicators with historical trend",
                  '"Athletes at Risk" widget on the main dashboard',
                  "Training load distribution across the squad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Risk mockup card */}
            <div className="rounded-2xl border border-dark-border bg-dark-card p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Athletes at Risk — Chronic:Acute Ratio
                </h3>
              </div>
              <div className="space-y-4">
                {riskAthletes.map((athlete) => (
                  <div key={athlete.name} className="flex items-center gap-4">
                    <span className="w-28 shrink-0 text-sm font-medium text-grey-light">
                      {athlete.name}
                    </span>
                    <div className="relative h-6 flex-1 overflow-hidden rounded-full bg-dark">
                      <div
                        className={`absolute inset-y-0 left-0 rounded-full ${athlete.color}`}
                        style={{ width: `${Math.min((athlete.ratio / 2) * 100, 100)}%` }}
                      />
                    </div>
                    <span
                      className={`w-12 shrink-0 text-right text-sm font-bold ${
                        athlete.ratio >= 1.4
                          ? "text-red-400"
                          : athlete.ratio >= 1.1
                            ? "text-yellow-400"
                            : "text-green-400"
                      }`}
                    >
                      {athlete.ratio.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PS4: Reports & Progress */}
      <section className="bg-black py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border lg:order-first">
              <Image
                src="/images/team-improvement.png"
                alt="Reports and improvement tracking"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Reports &amp; Progress
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;Are my athletes actually getting faster? I think so, but
                I can&apos;t prove it.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Track improvement with data, not intuition.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                Team generates reports that answer the questions coaches actually
                ask. See training summaries by athlete, track ergo improvement
                over time by wattage, compare test performances side by side, and
                monitor health and wellness trends from daily morning monitoring.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Team training summary — sessions by athlete across any time period",
                  "Indoor rowing report — ergo improvement tracked by wattage over time",
                  "Athlete comparison — select multiple tests, see HR and watts progression",
                  "Health report — morning monitoring data with colour-coded alerts",
                  "Sport breakdown — see which sports each athlete has trained across",
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

      {/* PS5: Athlete Profiles */}
      <section className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
                Athlete Profiles
              </span>
              <p className="mb-4 text-lg italic text-grey-light">
                &ldquo;I know my athletes individually. But I can&apos;t see the
                full picture for any of them in one place.&rdquo;
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Everything about one athlete. One screen.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-grey-light">
                Each athlete has a profile showing their training zone
                distribution, chronic-acute load history, compliance calendar,
                sport-specific summaries, and test comparison over time. When
                something looks wrong, you see it before they tell you.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Training zone distribution over any time period",
                  "Chronic vs acute load comparison — green/yellow/red zones",
                  "Colour-coded compliance calendar — did the session or missed it",
                  "Sport-specific performance summaries (rowing, ergo, cross-training)",
                  "Select multiple tests and compare heart rate + watts over time",
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
                src="/images/team-athlete-profile.png"
                alt="Athlete profile dashboard"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-black py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal text-center">
            <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
              Getting Started
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Live in &lt;1 hour. No migration headaches.
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

      {/* Integrations */}
      <section className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal text-center">
            <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
              Integrations
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Connects to what your athletes already use.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-grey-light">
              No new hardware. Ludum syncs automatically with the devices your
              athletes already own.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {integrations.map((name) => (
              <div
                key={name}
                className="reveal flex h-20 w-40 items-center justify-center rounded-xl border border-dark-border bg-dark-card"
              >
                <span className="text-sm font-semibold tracking-wider text-grey-light">
                  {name}
                </span>
              </div>
            ))}
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
              &ldquo;Before Ludum, I was running my programme across four
              different platforms and still didn&apos;t know if athletes were
              following the plan. Now I see everything in one place — compliance,
              training load, wellness — and I make better decisions because of
              it.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                WR
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Will Reynolds</p>
                <p className="text-sm text-grey">
                  Head of Rowing, Royal Shrewsbury School
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {logoNames.map((name) => (
              <div
                key={name}
                className="reveal flex h-12 items-center rounded-lg px-6"
              >
                <span className="text-sm font-medium tracking-wider text-grey-dim">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              See Team working with your programme.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-grey-light">
              Book a 30-minute demo. We&apos;ll walk through compliance,
              training load, session analysis, and reporting — tailored to your
              sport and your squad.
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
            <span className="mb-4 inline-block rounded-full bg-dark-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral">
              Explore the Platform
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Team works even better with the rest of Ludum.
            </h2>
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
