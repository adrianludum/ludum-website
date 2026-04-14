import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  accent?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

/**
 * Type scale — 3 sizes, no drift.
 *
 * H1: hero headlines, 1 per page
 * H2: section headlines
 * H3: card/subsection headlines
 *
 * Accent rule (Rams): only H1 uses the coral-accent second line.
 * H2 and H3 are always white.
 */
export function H1({ children, accent, className = "" }: HeadingProps) {
  return (
    <h1
      className={`text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl ${className}`}
    >
      {children}
      {accent && (
        <>
          <br />
          <span className="text-coral">{accent}</span>
        </>
      )}
    </h1>
  );
}

export function H2({ children, className = "" }: HeadingProps) {
  return (
    <h2
      className={`text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }: HeadingProps) {
  return (
    <h3 className={`text-xl font-semibold leading-tight text-white ${className}`}>
      {children}
    </h3>
  );
}

export function Lead({ children, className = "" }: HeadingProps) {
  return (
    <p className={`max-w-prose text-lg leading-relaxed text-grey-light sm:text-xl ${className}`}>
      {children}
    </p>
  );
}

export function Body({ children, className = "" }: HeadingProps) {
  return (
    <p className={`max-w-prose text-base leading-relaxed text-grey-light ${className}`}>
      {children}
    </p>
  );
}

export function Eyebrow({ children, className = "" }: HeadingProps) {
  return (
    <p
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-grey-light ${className}`}
    >
      {children}
    </p>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Section wrapper — normalised vertical rhythm.
 * py-20 mobile, py-28 large. Nothing else.
 */
export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
