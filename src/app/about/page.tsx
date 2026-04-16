import Image from "next/image";
import Link from "next/link";
import { H1, H2, H3, Lead, Body, Eyebrow, Section } from "@/components/Heading";
import { CTASection } from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Ludum",
  description:
    "Improve performance, plan ahead and save time with Ludum — training management and performance analysis tool for coaches and sports scientists.",
};

const founders = [
  {
    name: "Adrian Cassidy",
    role: "CEO & Co-founder",
    bio: "Former coach at Cambridge University Boat Club, British Rowing and Chief Coach at Rowing Ireland. Coached the Irish sculler at the London 2012 Olympics. Holds a Master's degree in Executive Coaching and has co-founded two startups in Sports Data Analytics.",
  },
  {
    name: "David Townsend",
    role: "Co-founder",
    bio: "Olympic Bronze medallist and two-time World Champion rower. An experienced businessman who brings elite-level sporting insight and commercial expertise to the team.",
  },
{
    name: "Ivan Lukic",
    role: "CTO",
    bio: "",
  },
];

const stats = [
  { label: "Team members", value: "15+" },
  { label: "Sports supported", value: "10+" },
  { label: "Founded", value: "2019" },
  { label: "Countries", value: "20+" },
];

export default function AboutPage() {
  return (
    <div className="bg-black pt-[72px]">
      {/* Hero */}
      <Section className="reveal bg-black">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>About Ludum</Eyebrow>
            <H1>
              The optimal training management
              <br />
              <span className="text-coral">& performance analysis tool</span>
            </H1>
            <Lead className="mt-6">
              Ludum enables you and your team to keep winning and achieving
              better results through the power of performance data, better
              organisation and smooth communication.
            </Lead>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border border-dark-border">
            <iframe
              src="https://www.youtube.com/embed/GiGYz0ykljY"
              title="Ludum — About Us"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </Section>

      {/* Mission bullets */}
      <Section className="reveal bg-black">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Empower athletes",
              text: "Train at the right intensity levels, helping to prevent injury and illness and get the edge that sets the winners apart.",
            },
            {
              title: "Smarter coaching",
              text: "A convenient way of adapting training plans to achieve high performance and a steady athlete development pace.",
            },
            {
              title: "Everything in one place",
              text: "Keep all data, communication and training programmes centralised so you can focus on coaching and strategically developing your team.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-dark-border bg-dark-card p-6"
            >
              <H3>{item.title}</H3>
              <Body className="mt-3">{item.text}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Story */}
      <Section className="reveal bg-black">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <H2>Built by coaches, for coaches</H2>
            <div className="mt-6 space-y-4">
              <Body>
                Ludum&apos;s functionalities were shaped by the extensive
                coaching experience of Adrian Cassidy and collaborating with
                applied sports scientists globally.
              </Body>
              <Body>
                We are proud to support a variety of sports teams — from high
                school teams and university sports departments, to elite clubs
                and world champions. We work closely with our clients to
                understand their needs and aspirations, which drives our passion
                to deliver exceptional team experiences via our sports technology
                software.
              </Body>
              <Body>
                While our passion began in rowing, we now serve highly ambitious
                teams across a range of sports with data-driven technology that
                enables informed decision-making for coaches, physiologists and
                sports scientists.
              </Body>
              <Body className="text-grey">
                Rowe.rs rebranded to Ludum in September 2019.
              </Body>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/about-team.jpg"
              alt="Rowing crew on the water"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="reveal bg-black">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-dark-border bg-dark-card p-6 text-center"
            >
              <p className="text-3xl font-bold text-coral sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-grey-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founders */}
      <Section className="reveal bg-black">
        <Eyebrow>The Founding Team</Eyebrow>
        <H2>Our leadership</H2>
        <Lead className="mt-4">
          Built on elite sporting experience, coaching expertise and
          world-class engineering.
        </Lead>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-2xl border border-dark-border bg-dark-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral/15 text-lg font-bold text-coral">
                {founder.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <H3>{founder.name}</H3>
              <p className="mt-1 text-sm font-medium text-teal">
                {founder.role}
              </p>
              <Body className="mt-3">{founder.bio}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        heading="Team performance excellence"
        headingAccent="powered by data and communication"
        subtext="Join teams from high schools to world champions who trust Ludum to drive performance."
        buttonText="Request a Demo →"
        buttonHref="/demo"
        bgImage="/images/about-team.jpg"
      />
    </div>
  );
}
