import { SectionLabel } from "@/components/SectionLabel";

interface IntegrationLogosProps {
  label?: string;
  heading: string;
  subtext?: string;
  logos: string[];
}

function LogoIcon({ name }: { name: string }) {
  const cls = "h-8 w-8 text-grey-light";
  switch (name) {
    case "Garmin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5S3.5 16.687 3.5 12 7.313 3.5 12 3.5zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm-1 3h2v4.5l2.5 1.5-.75 1.25L12 14V8.5z" />
        </svg>
      );
    case "Polar":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      );
    case "Strava":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
        </svg>
      );
    case "Suunto":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zM8 9l4 6 4-6" />
        </svg>
      );
    case "Concept2":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 12a8 8 0 0116 0h-2a6 6 0 00-12 0H4zm4 0a4 4 0 018 0h-2a2 2 0 00-4 0H8zm3 0a1 1 0 012 0 1 1 0 01-2 0z" />
        </svg>
      );
    case "Peach":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-1.5 0-3 .5-4.2 1.4C6 4.8 5 7 5 9.5c0 3.5 2 6.5 4 8.5 1 1 2 2 3 4 1-2 2-3 3-4 2-2 4-5 4-8.5 0-2.5-1-4.7-2.8-6.1A7 7 0 0012 2zm0 4a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
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
