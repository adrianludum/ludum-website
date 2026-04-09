import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Request a Demo — Ludum",
  description:
    "Book a 30-minute call with the Ludum team. See the platform tailored to your sport, squad size, and coaching challenges.",
};

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CheckCircle() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Calendar mock data                                                 */
/* ------------------------------------------------------------------ */

const MARCH_2026 = {
  year: 2026,
  month: "March",
  startDay: 0, // Sunday
  days: 31,
  available: [3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26, 31],
  selected: 24,
};

const TIME_SLOTS = [
  { time: "9:00 AM GMT", selected: false },
  { time: "10:30 AM GMT", selected: true },
  { time: "2:00 PM GMT", selected: false },
  { time: "4:30 PM GMT", selected: false },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DemoPage() {
  // Build calendar grid
  const blanks = Array.from({ length: MARCH_2026.startDay }, (_, i) => (
    <div key={`b-${i}`} />
  ));
  const days = Array.from({ length: MARCH_2026.days }, (_, i) => {
    const day = i + 1;
    const isAvailable = MARCH_2026.available.includes(day);
    const isSelected = day === MARCH_2026.selected;
    return (
      <div
        key={day}
        className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
          isSelected
            ? "bg-coral text-white"
            : isAvailable
              ? "bg-dark-card text-grey-light hover:bg-coral/20 cursor-pointer"
              : "text-grey-dim"
        }`}
      >
        {day}
      </div>
    );
  });

  return (
    <div className="bg-black">
      {/* ---- Demo Hero ---- */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-5">
            {/* Left column (3/5 = 60%) */}
            <div className="lg:col-span-3">
              <SectionLabel text="Request a Demo" />
              <h1 className="max-w-lg text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                See Ludum working with{" "}
                <span className="text-coral">your programme.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-grey-light">
                Book a 30-minute call with our team. We&apos;ll walk through the
                platform tailored to your sport, your squad size, and the
                problems you&apos;re trying to solve.
              </p>

              <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-white">
                What to expect
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "A conversation about your coaching challenges \u2014 not a sales pitch",
                  "A live walkthrough of the features that matter to you",
                  "Honest answers about what Ludum can and can\u2019t do for your setup",
                  "If it\u2019s a fit, we\u2019ll set up a free trial and onboard your squad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle />
                    <span className="text-sm leading-relaxed text-grey-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stat badges */}
              <div className="mt-10 flex gap-6">
                {[
                  { value: "30", label: "Minutes" },
                  { value: "Free", label: "No Obligation" },
                  { value: "48hrs", label: "To Go Live" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-dark-border bg-dark-card px-5 py-4 text-center"
                  >
                    <p className="text-2xl font-bold text-coral">{s.value}</p>
                    <p className="mt-1 text-xs text-grey">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column (2/5 = 40%) — Calendar placeholder */}
            <div className="lg:col-span-2">
              {/* In production: replace with Calendly inline embed */}
              <div className="rounded-2xl border border-dark-border bg-dark-card p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">
                    Pick a time that works
                  </h4>
                  <span className="text-xs text-grey">
                    30 min &middot; Video Call
                  </span>
                </div>

                {/* Month nav */}
                <div className="mt-6 flex items-center justify-between">
                  <button className="text-grey-light hover:text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-sm font-medium text-white">
                    {MARCH_2026.month} {MARCH_2026.year}
                  </span>
                  <button className="text-grey-light hover:text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day labels */}
                <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-medium text-grey">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                    <div key={d} className="py-1">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="mt-1 grid grid-cols-7 place-items-center gap-1">
                  {blanks}
                  {days}
                </div>

                {/* Time slots */}
                <div className="mt-6 space-y-2">
                  <p className="text-xs font-medium text-grey">
                    Available times
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <div
                        key={slot.time}
                        className={`rounded-lg px-3 py-2.5 text-center text-sm font-medium transition-colors ${
                          slot.selected
                            ? "bg-coral text-white"
                            : "bg-dark border border-dark-border text-grey-light hover:border-coral/40 cursor-pointer"
                        }`}
                      >
                        {slot.time}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <p className="mt-6 text-center text-[11px] text-grey-dim">
                  Powered by Calendly &middot; Times shown in your timezone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Trust Strip ---- */}
      <section className="border-t border-dark-border bg-dark py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-grey">
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
                — Matt Ryan, Olympic Medallist & Head Coach
              </p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
