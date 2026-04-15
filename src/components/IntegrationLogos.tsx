import { SectionLabel } from "@/components/SectionLabel";

interface IntegrationLogosProps {
  label?: string;
  heading: string;
  subtext?: string;
  logos: string[];
}

function LogoIcon({ name }: { name: string }) {
  switch (name) {
    case "Garmin":
      return (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#007DC5" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="7" stroke="#007DC5" strokeWidth="1.5" />
          <path d="M12 7v5.5l3 1.5" stroke="#007DC5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#007DC5" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "Polar":
      return (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L4 8v8l8 5 8-5V8l-8-5z" fill="#D4002A" opacity="0.15" />
          <path d="M12 3L4 8v8l8 5 8-5V8l-8-5z" stroke="#D4002A" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 8v5l4 2.5" stroke="#D4002A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Strava":
      return (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="#FC4C02">
          <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
        </svg>
      );
    case "Suunto":
      return (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#E8352D" strokeWidth="1.5" />
          <path d="M7 14l5-7 5 7" stroke="#E8352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Concept2":
      return (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
          <path d="M4 12a8 8 0 0116 0" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 12a5 5 0 0110 0" stroke="#E53F47" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="#E53F47" />
          <text x="5" y="20" fill="#888" fontSize="4" fontWeight="700">C2</text>
        </svg>
      );
    case "Peach":
      return (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
          <path d="M15 3c-1.5 0-3 1-3 1s-1.5-1-3-1C6.5 3 4 5.5 4 8.5 4 14 12 21 12 21s8-7 8-12.5C20 5.5 17.5 3 15 3z" fill="#FF6B6B" />
          <path d="M12 4c0-2 2-3 3.5-2" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
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

        <div className="flex flex-wrap items-center justify-center gap-6">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl border border-dark-border bg-dark-card px-5 py-4"
            >
              <LogoIcon name={name} />
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
