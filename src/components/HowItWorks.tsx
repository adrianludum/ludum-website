import { SectionLabel } from "@/components/SectionLabel";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  label?: string;
  heading: string;
  steps: Step[];
}

export function HowItWorks({ label, heading, steps }: HowItWorksProps) {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        {label && <SectionLabel text={label} />}
        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-dark-border bg-dark-card p-8"
            >
              <span className="mb-4 block text-3xl font-bold text-white/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-grey">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
