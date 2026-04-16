import type { Metadata } from "next";
import { Eyebrow, H1, Lead, H3 } from "@/components/Heading";
import { CalendlyEmbed } from "./CalendlyEmbed";

export const metadata: Metadata = {
  title: "Request a Demo — Ludum",
  description:
    "Book a 30-minute call with the Ludum team. See the platform tailored to your sport, squad size, and coaching challenges.",
};

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function DemoPage() {
  return (
    <div className="bg-black">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left — copy */}
            <div className="lg:pr-4">
              <Eyebrow>Request a Demo</Eyebrow>
              <H1 accent="your programme.">See Ludum working with</H1>
              <div className="mt-6">
                <Lead>
                  Book a 30-minute call with our team. We&apos;ll walk through
                  the platform tailored to your sport, your squad size, and the
                  problems you&apos;re trying to solve.
                </Lead>
              </div>

              <div className="mt-10">
                <H3>What to expect</H3>
              </div>
              <ul className="mt-5 space-y-4">
                {[
                  "A conversation about your coaching challenges — not a sales pitch",
                  "A live walkthrough of the features that matter to you",
                  "Honest answers about what Ludum can and can\u2019t do for your setup",
                  "If it\u2019s a fit, we\u2019ll set up a free trial and onboard your squad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-base leading-relaxed text-grey-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-4xl font-bold text-white">30<span className="ml-1 text-lg font-medium text-grey">min</span></p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-grey-light">Video call</p>
                </div>
                <div className="border-l border-white/10 pl-8">
                  <p className="text-4xl font-bold text-white">Free</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-grey-light">No obligation</p>
                </div>
              </div>
            </div>

            {/* Right — Calendly */}
            <div>
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-dark-border bg-dark py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-grey-light">
            Trusted by programmes at every level
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "Rowing Australia",
              "Cambridge University",
              "Princeton University",
              "Hampton School",
              "Royal Shrewsbury",
              "Leander Rowing Club",
            ].map((name) => (
              <span key={name} className="text-sm font-medium tracking-wide text-grey-dim">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
