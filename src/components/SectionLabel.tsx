interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-coral">
      {text}
    </p>
  );
}
