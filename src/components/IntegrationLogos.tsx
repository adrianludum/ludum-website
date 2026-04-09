import { SectionLabel } from "@/components/SectionLabel";

interface IntegrationLogosProps {
  label?: string;
  heading: string;
  subtext?: string;
  logos: string[];
}

export function IntegrationLogos({
  label,
  heading,
  subtext,
  logos,
}: IntegrationLogosProps) {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {label && (
          <div className="flex justify-center">
            <SectionLabel text={label} />
          </div>
        )}
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        {subtext && (
          <p className="mx-auto mb-12 max-w-2xl text-lg text-grey-light">
            {subtext}
          </p>
        )}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-xl border border-dark-border bg-dark-card px-4 py-6"
            >
              <span className="text-sm font-semibold text-grey-light">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
