import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export function ProductCard({
  tag,
  title,
  description,
  image,
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-dark-border bg-dark-card transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="mb-3 inline-block rounded-full bg-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral">
          {tag}
        </span>
        <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-grey">
          {description}
        </p>
        <span className="text-sm font-semibold text-coral transition-colors group-hover:text-coral-dark">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
