import Image from "next/image";

interface PhotoBreakProps {
  image: string;
  heading: string;
  headingAccent: string;
  subtext: string;
}

export function PhotoBreak({
  image,
  heading,
  headingAccent,
  subtext,
}: PhotoBreakProps) {
  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          <span className="text-white">{heading}</span>
          <br />
          <span className="text-coral">{headingAccent}</span>
        </h2>
        <p className="mt-4 text-lg text-grey-light">{subtext}</p>
      </div>
    </section>
  );
}
