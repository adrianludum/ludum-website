interface ProofSectionProps {
  quote: string;
  author: string;
  title: string;
  initials: string;
  logos?: string[];
}

function Star() {
  return (
    <svg
      className="h-5 w-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

export function ProofSection({
  quote,
  author,
  title,
  initials,
  logos,
}: ProofSectionProps) {
  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Stars */}
        <div className="mb-6 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dark-border bg-dark-card text-sm font-bold text-white">
            {initials}
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">{author}</p>
            <p className="text-sm text-grey">{title}</p>
          </div>
        </div>

        {/* Trusted-by logos */}
        {logos && logos.length > 0 && (
          <div className="mt-12">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-grey-dim">
              Trusted by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="text-sm font-medium text-grey-dim"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
