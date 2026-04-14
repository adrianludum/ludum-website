import type { Metadata } from "next";
import { Eyebrow, H1, Lead, H3 } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Request a Demo — Ludum",
  description:
    "Book a 30-minute call with the Ludum team. See the platform tailored to your sport, squad size, and coaching challenges.",
};

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-5 w-5 flex-shrink-0 text-white/70"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ml-2 h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DemoPage() {
  return (
    <div className="bg-black">
      {/* ---- Demo Hero ---- */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-5">
            {/* Left column (3/5 = 60%) */}
            <div className="lg:col-span-3">
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

              {/* Single honest stat */}
              <div className="mt-12 border-t border-white/10 pt-7">
                <p className="text-5xl font-bold leading-none text-white">
                  30<span className="ml-2 text-2xl font-medium text-grey">min</span>
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-grey-light">
                  Video call · No obligation
                </p>
              </div>
            </div>

            {/* Right column (2/5 = 40%) — Honest booking card */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-dark-border bg-dark-card p-8">
                <H3>Book your demo</H3>
                <p className="mt-3 text-sm leading-relaxed text-grey-light">
                  Email us with a rough time that works for you and
                  we&apos;ll reply within 4 hours to confirm.
                </p>

                <a
                  href="mailto:demo@ludum.com?subject=Request%20a%20Demo"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-coral px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
                >
                  Email demo@ludum.com
                  <ArrowIcon />
                </a>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-xs text-grey">
                  <p className="flex items-center justify-between">
                    <span className="uppercase tracking-wider">Duration</span>
                    <span className="text-white">30 minutes</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="uppercase tracking-wider">Format</span>
                    <span className="text-white">Video call</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="uppercase tracking-wider">Response</span>
                    <span className="text-white">Within 4 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Trust Strip ---- */}
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
              <span
                key={name}
                className="text-sm font-medium tracking-wide text-grey-dim"
              >
                {name}
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-lg font-medium leading-relaxed text-white">
              &ldquo;I was sceptical about adding another tool — but this
              isn&apos;t another tool. It&apos;s the tool that replaced ten
              others.&rdquo;
            </p>
            <footer className="mt-4">
              <p className="text-sm text-grey">
                — Matt Ryan, Olympic Medallist &amp; Head Coach
              </p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
