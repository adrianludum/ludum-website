import Link from "next/link";
import Image from "next/image";

interface CTASectionProps {
  heading: string;
  headingAccent?: string;
  subtext: string;
  buttonText?: string;
  buttonHref?: string;
  bgImage?: string;
}

export function CTASection({
  heading,
  headingAccent,
  subtext,
  buttonText = "Request a Demo \u2192",
  buttonHref = "/demo/",
  bgImage,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </>
      )}
      {!bgImage && <div className="absolute inset-0 bg-dark" />}

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          <span className="text-white">{heading}</span>
          {headingAccent && (
            <>
              <br />
              <span className="text-coral">{headingAccent}</span>
            </>
          )}
        </h2>
        <p className="mt-4 text-lg text-grey-light">{subtext}</p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-block rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
