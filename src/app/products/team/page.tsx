import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, Eyebrow, Lead, Body, Section } from "@/components/Heading";
import { HowItWorks } from "@/components/HowItWorks";
import { IntegrationLogos } from "@/components/IntegrationLogos";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ludum Team — Your Coaching Command Centre",
  description:
    "One platform for training planning, compliance tracking, athlete management, performance analytics, and squad communication. Built for how coaches actually work.",
};

const riskAthletes = [
  { name: "Mitchell, S.", ratio: 0.92, color: "bg-green-500" },
  { name: "Cooper, J.", ratio: 1.05, color: "bg-green-500" },
  { name: "Ashworth, T.", ratio: 1.15, color: "bg-yellow-500" },
  { name: "Hargreaves, B.", ratio: 0.88, color: "bg-green-500" },
  { name: "Thornton, E.", ratio: 1.45, color: "bg-red-500" },
  { name: "Chen, O.", ratio: 0.72, color: "bg-green-500" },
];

function Bullet() {
  return (
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
  );
}

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-6xl px-6 pt-24">
        <nav className="mb-8 text-sm text-grey-light">
          <span>Products</span>
          <span className="mx-2">/</span>
          <span className="text-white">Ludum Team</span>
        </nav>
      </div>

      {/* Hero */}
      <Section className="!py-0 pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Flagship Product</Eyebrow>
            <H1 accent="command centre.">Your coaching</H1>
            <Lead className="mt-6">
              One platform for training planning, compliance tracking, athlete
              management, performance analytics, and squad communication. Built
              for how coaches actually work — not how software companies think
              they should.
            </Lead>
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
      </Section>

      {/* PS1: Compliance Tracking */}
      <Section id="compliance" className="bg-dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border bg-dark-card lg:order-first">
            <Image
              src="/images/team-training-zones.png"
              alt="Compliance tracking dashboard"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
          <div>
            <Eyebrow>Compliance Tracking</Eyebrow>
            <H2>See who trained, who didn&apos;t, and who&apos;s falling behind.</H2>
            <Body className="mt-6 text-lg">
              The 93% compliance threshold is where training actually translates
              to performance. Ludum Team tracks compliance automatically — every
              session, every athlete — so you always know where your squad
              stands.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Colour-coded calendar shows completed, missed, and partial sessions at a glance",
                "Squad-wide compliance percentage updated in real time",
                "Individual athlete compliance history over any time period",
                "No manual entry — data syncs automatically from connected devices",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PS2: Session Analysis */}
      <Section className="bg-black">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Session Analysis</Eyebrow>
            <H2>Every session. Every crew. Every stroke.</H2>
            <Body className="mt-6 text-lg">
              When you open a session in Team, you don&apos;t just see headlines.
              You see the map, the crews, the speed zones, the heart rate
              distribution, and the piece-by-piece breakdown. Sort and rank
              athletes within each piece. Overlay boat speed with heart rate for
              any athlete across the entire session.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Session map showing exactly where crews trained",
                "Speed distribution and stroke rate breakdown by crew",
                "Heart rate zones across all athletes — see who trained hard and who didn't",
                "Piece-by-piece ranking with gold medal percentage",
                "Boat speed overlaid with heart rate for single scullers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border">
            <Image
              src="/images/team-session-map.png"
              alt="Session analysis map view"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* PS3: Training Load & Risk */}
      <Section className="bg-dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Risk mockup card */}
          <div className="rounded-2xl border border-dark-border bg-dark-card p-6 lg:order-first">
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
          <div>
            <Eyebrow>Training Load &amp; Risk</Eyebrow>
            <H2>Chronic-acute ratio. Red, amber, green. No guessing.</H2>
            <Body className="mt-6 text-lg">
              Team monitors the balance between chronic training load and acute
              spikes for every athlete. The dashboard shows you who&apos;s in
              the green optimal zone, who&apos;s pushing into amber, and
              who&apos;s in the red before they break down — not after.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Chronic-acute training load ratio visualised per athlete",
                "Green / amber / red zone indicators with historical trend",
                '"Athletes at Risk" widget on the main dashboard',
                "Training load distribution across the squad",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PS4: Reports & Progress */}
      <Section className="bg-black">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Reports &amp; Progress</Eyebrow>
            <H2>Track improvement with data, not intuition.</H2>
            <Body className="mt-6 text-lg">
              Team generates reports that answer the questions coaches actually
              ask. See training summaries by athlete, track ergo improvement
              over time by wattage, compare test performances side by side, and
              monitor health and wellness trends from daily morning monitoring.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Team training summary — sessions by athlete across any time period",
                "Indoor rowing report — ergo improvement tracked by wattage over time",
                "Athlete comparison — select multiple tests, see HR and watts progression",
                "Health report — morning monitoring data with colour-coded alerts",
                "Sport breakdown — see which sports each athlete has trained across",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Improvement mockup */}
          <div className="rounded-2xl border border-dark-border bg-dark-card p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                2k Ergo — Watts Over Time
              </h3>
              <span className="text-xs text-green-400">↑ 12% improvement</span>
            </div>
            <p className="mb-6 text-xs text-grey">Cooper, J. — Last 8 tests</p>
            <div className="flex items-end gap-2" style={{ height: 160 }}>
              {[245, 252, 248, 261, 258, 270, 275, 282].map((w, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <span className="text-[10px] text-grey-light">{w}W</span>
                  <div
                    className="w-full rounded-t bg-coral"
                    style={{ height: `${((w - 230) / 60) * 100}%` }}
                  />
                  <span className="text-[10px] text-grey-dim">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PS5: Athlete Profiles */}
      <Section className="bg-dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border lg:order-first">
            <Image
              src="/images/team-athlete-profile.png"
              alt="Athlete profile dashboard"
              fill
              unoptimized
              className="object-cover object-left"
            />
          </div>
          <div>
            <Eyebrow>Athlete Profiles</Eyebrow>
            <H2>Everything about one athlete. One screen.</H2>
            <Body className="mt-6 text-lg">
              Each athlete has a profile showing their training zone
              distribution, chronic-acute load history, compliance calendar,
              sport-specific summaries, and test comparison over time. When
              something looks wrong, you see it before they tell you.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Training zone distribution over any time period",
                "Chronic vs acute load comparison — green/yellow/red zones",
                "Colour-coded compliance calendar — did the session or missed it",
                "Sport-specific performance summaries (rowing, ergo, cross-training)",
                "Select multiple tests and compare heart rate + watts over time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <HowItWorks
        label="Getting Started"
        heading="Live in <1 hour. No migration headaches."
        steps={[
          {
            title: "Book a Demo",
            description:
              "30-minute call. We show you Team working for your sport and squad size.",
          },
          {
            title: "We Set You Up",
            description:
              "Ludum onboards your programme — athletes, groups, history. You don't lift a finger.",
          },
          {
            title: "Athletes Connect",
            description:
              "Athletes download the app and link their devices. Data flows immediately.",
          },
          {
            title: "You See Everything",
            description:
              "Compliance, load, wellness, performance — all in one place.",
          },
        ]}
      />

      {/* Integrations */}
      <IntegrationLogos
        label="Integrations"
        heading="Connects to what your athletes already use."
        subtext="No new hardware. Ludum syncs automatically with the devices your athletes already own."
        logos={["Garmin", "Polar", "Strava", "Suunto", "Concept2", "Peach"]}
      />

      {/* Proof */}
      <ProofSection
        quote="Before Ludum, I was running my programme across four different platforms and still didn't know if athletes were following the plan. Now I see everything in one place — compliance, training load, wellness — and I make better decisions because of it."
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

      {/* CTA */}
      <CTASection
        heading="See Team working with your programme."
        subtext="Book a 30-minute demo. We'll walk through compliance, training load, session analysis, and reporting — tailored to your sport and your squad."
      />
    </div>
  );
}
