interface StickyHeaderProps {
  title: string;
  subtitle: string;
  slogan: string;
}

export default function StickyHeader({ title, subtitle, slogan }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-6">
        <h1 className="heading-display text-3xl md:text-5xl lg:text-6xl leading-none">
          {title}
        </h1>
        <p className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground mt-1">
          {subtitle}
        </p>
        <p className="body-serif text-base md:text-lg italic text-muted-foreground mt-2">
          {slogan}
        </p>
      </div>
    </header>
  );
}
