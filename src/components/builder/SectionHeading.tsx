interface SectionHeadingProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ id, number, title, subtitle }: SectionHeadingProps) => (
  <div id={id} className="scroll-mt-20 mb-6 md:mb-10">
    <span className="text-primary font-sans text-sm font-semibold tracking-widest uppercase">
      {number}
    </span>
    <h2 className="font-serif-cn text-2xl md:text-4xl font-bold text-foreground mt-2 mb-2 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-base md:text-lg font-serif-cn">{subtitle}</p>
    )}
    <div className="w-12 md:w-16 h-1 bg-primary rounded-full mt-3 md:mt-4" />
  </div>
);
