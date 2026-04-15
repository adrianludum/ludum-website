import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";

interface IntegrationLogosProps {
  label?: string;
  heading: string;
  subtext?: string;
  logos: string[];
}

const logoFiles: Record<string, { file: string; invert?: boolean }> = {
  Garmin: { file: "/images/logos/garmin.svg", invert: true },
  Polar: { file: "/images/logos/polar.svg", invert: true },
  Strava: { file: "/images/logos/strava.svg" },
  Suunto: { file: "/images/logos/suunto.svg", invert: true },
  Concept2: { file: "/images/logos/concept2.svg" },
  Peach: { file: "/images/logos/peach.svg" },
};

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

        <div className="flex flex-wrap items-center justify-center gap-6">
          {logos.map((name) => {
            const logo = logoFiles[name];
            return (
              <div
                key={name}
                className="flex items-center gap-3 rounded-xl border border-dark-border bg-dark-card px-5 py-4"
              >
                {logo ? (
                  <Image
                    src={logo.file}
                    alt={name}
                    width={100}
                    height={28}
                    unoptimized
                    className={logo.invert ? "brightness-0 invert" : ""}
                    style={{ objectFit: "contain", height: 28, width: "auto" }}
                  />
                ) : (
                  <span className="text-sm font-semibold text-grey-light">
                    {name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
