interface StickyHeaderProps {
  title: string;
  subtitle: string;
  slogan: string;
}

const navLinks = [
{ label: "CANDIDATOS", href: "#candidates" },
{ label: "PROPUESTAS", href: "#proposals" },
{ label: "VOTE AQUÍ", href: "#vote" },
{ label: "CONTÁCTENOS", href: "#contact" }];


function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function StickyHeader({ title, subtitle, slogan }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-6 py-4 md:py-6 flex-col md:flex-row gap-4 flex md:items-start md:justify-between">
        <div>
          <h1 className="heading-display text-3xl md:text-5xl lg:text-6xl leading-none whitespace-pre-line">
            {title}
          </h1>
          <p className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground mt-1">
            {subtitle}
          </p>
          <p className="body-serif text-base md:text-lg italic text-muted-foreground mt-2">
            {slogan}
          </p>
        </div>
        <nav className="flex gap-6 md:gap-8 md:pb-1">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollTo(e, link.href)}
            className="font-display text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            
              {link.label}
            </a>
          )}
        </nav>
      </div>
    </header>);

}