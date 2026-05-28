interface SectionHeadingProps {
  index: string;
  title: string;
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-gold">{index}</span>
      <h2 className="font-mono text-2xl font-bold tracking-tight text-content md:text-3xl">
        {title}
      </h2>
      <span className="ml-2 h-px flex-1 translate-y-[-0.4rem] bg-gold/20" />
    </div>
  );
}
