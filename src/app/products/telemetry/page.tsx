import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, Eyebrow, Lead, Body, Section } from "@/components/Heading";
import { HowItWorks } from "@/components/HowItWorks";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ludum Telemetry — Stroke-by-Stroke Data From Inside the Boat",
  description:
    "Stroke-by-stroke power, force curves, catch angles, boat acceleration, and speed — for every crew, every session. The only platform that integrates Peach Powerline telemetry with your training data.",
};

const calendarData = [
  0, 0, 1, 0, 1, 0, 0,
  0, 1, 0, 1, 0, 0, 0,
  1, 0, 0, 1, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 0,
  0, 0, 1, 0, 0, 0, 0,
];

function Bullet() {
  return (
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
  );
}

export default function TelemetryPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-6xl px-6 pt-24">
        <nav className="mb-8 text-sm text-grey-light">
          <span>Products</span>
          <span className="mx-2">/</span>
          <span className="text-white">Ludum Telemetry</span>
        </nav>
      </div>

      {/* Hero */}
      <Section className="!py-0 pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Unique to Ludum</Eyebrow>
            <H1 accent="the boat.">See inside</H1>
            <Lead className="mt-6">
              Stroke-by-stroke power, force curves, catch angles, boat
              acceleration, and speed — for every crew, every session. The only
              platform that integrates Peach Powerline telemetry with your
              training data.
            </Lead>
            <p className="mt-4 text-sm text-grey-light">
              <span className="mr-2 rounded-full border border-dark-border bg-dark-card px-3 py-1 text-xs font-semibold text-white">
                Standalone Licence
              </span>
              Telemetry is a separate product — no Ludum Team subscription required.
            </p>
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
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/winning-crew.jpg"
              alt="Rowing crew in action"
              fill
              unoptimized
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* PS1: Crew Power Comparison */}
      <Section id="crew-power" className="bg-dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Crew Power Comparison</Eyebrow>
            <H2>Every crew. Every stroke. Compared.</H2>
            <Body className="mt-6 text-lg">
              Upload from Powerline, and Ludum automatically groups crews into
              sessions by time. Open any session and see the average power for
              every crew overlaid stroke-by-stroke. Instantly see who held
              power, who faded, and where the pieces diverged.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Power comparison across all crews in a session — stroke by stroke",
                "Sessions auto-grouped by time — plug in, upload, done",
                "Click any crew to see individual athlete power, catch slip, effective length",
                "Switch between power, speed, stroke rate, and acceleration views",
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
              src="/images/powerline-all-results.png"
              alt="Crew power comparison view"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* PS2: Head-to-Head Analysis */}
      <Section className="bg-black">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border lg:order-first">
            <Image
              src="/images/powerline-force-curves.png"
              alt="Head-to-head force curve comparison"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Head-to-Head Analysis</Eyebrow>
            <H2>Pick two crews. Compare everything.</H2>
            <Body className="mt-6 text-lg">
              The analysis tab lets you select any two crews and any effort
              within a session. Ludum shows you speed, acceleration, power,
              stroke rate distribution, and time in deceleration — side by
              side. Overlay individual curves. Compare catch angles stroke by
              stroke. See if a crew got shorter over the piece or held their
              length.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Select efforts by dragging on the timeline — or import selections from Powerline",
                "Side-by-side speed, acceleration, and power curves",
                "Stroke rate and power distribution comparison",
                "Catch angle vs finish angle timeline — see technique drift over a piece",
                "Generate a PDF comparison report to share with the crew",
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

      {/* PS3: Stroke Rate Analysis */}
      <Section className="bg-dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Stroke Rate Analysis</Eyebrow>
            <H2>Auto-detected stroke rate bands. Race pace isolated instantly.</H2>
            <Body className="mt-6 text-lg">
              Ludum automatically detects the most common stroke rate band in
              each session and shows you the data for that effort. Paddling at
              18? You see the steady state. Efforts at 32–34? You see the race
              piece. No manual selection required — but you can override and
              pick any band.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Automatic detection of the most common stroke rate range",
                "Speed, distance, average power, and acceleration for the selected band",
                "Per-athlete power with target line — see who's hitting their numbers",
                "Effective length and catch/finish angles per athlete with targets",
                "Time spent in deceleration — quantified as a percentage",
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
              src="/images/powerline-sr-bands.png"
              alt="Stroke rate band analysis"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* PS4: Session Management — Calendar Mockup */}
      <Section className="bg-black">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border lg:order-first">
            <Image
              src="/images/telemetry-session.png"
              alt="Telemetry session overview"
              fill
              unoptimized
              className="object-cover object-top"
            />
          </div>

          <div>
            <Eyebrow>Session Management</Eyebrow>
            <H2>Every session in your calendar. Always findable.</H2>
            <Body className="mt-6 text-lg">
              When you upload from Powerline, Ludum automatically places the
              session in your training calendar and groups crews that trained
              at the same time. Filter by telemetry tag and you instantly see
              every session that has telemetry data. No more hunting through
              logger files — the data lives where your programme lives.
            </Body>
            <ul className="mt-6 space-y-3">
              {[
                "Telemetry sessions live in your training calendar alongside all other data",
                "Crews auto-grouped by upload time — one session, all crews",
                'Filter calendar by "Telemetry" tag to find any past session instantly',
                "Dashboard widget showing today's telemetry sessions with stroke rate distribution",
                "Much more user-friendly search and navigation than Powerline alone",
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
        label="How It Works"
        heading="Plug in. Upload. See everything."
        steps={[
          {
            title: "Record with Peach",
            description:
              "Train as normal with your Powerline loggers. No changes to your setup.",
          },
          {
            title: "Upload to Ludum",
            description:
              "Plug in your logger and upload. Ludum auto-groups crews by session time.",
          },
          {
            title: "Compare & Analyse",
            description:
              "Overlay crews, filter by stroke rate, compare head-to-head — instantly.",
          },
          {
            title: "Share with Athletes",
            description:
              "Generate PDF reports for debrief. Data stays in your calendar forever.",
          },
        ]}
      />

      {/* Proof */}
      <ProofSection
        quote="The telemetry integration is a game-changer. We went from guessing about technique to seeing stroke-by-stroke data in real time. My coaches can make adjustments during the session, not after it. Nothing else on the market does this."
        author="Matt Ryan"
        title="Olympic Medallist & Performance Coach"
        initials="MR"
      />

      {/* CTA */}
      <CTASection
        heading="See your Powerline data like never before."
        subtext="Book a demo and we'll show you Ludum Telemetry with real session data — crew overlays, stroke rate analysis, and head-to-head comparison."
      />
    </div>
  );
}
