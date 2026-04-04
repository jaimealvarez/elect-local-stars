interface StickyHeaderProps {
  titleLine1: string;
  titleLine2: string;
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

export default function StickyHeader({ titleLine1, titleLine2, subtitle, slogan }: StickyHeaderProps) {
  return (
    <header <header className="sticky top-0 z-50 bg-[#F2C300] border-b border-[#e0b200]">
      <div className="px-6 py-4 md:py-6 flex flex-col items-center text-center">
        <div>
          <h1 className="heading-display text-3xl md:text-5xl lg:text-6xl leading-none">
            {titleLine1}
          </h1>
          <h1 className="heading-display text-3xl md:text-5xl lg:text-6xl leading-none mt-1">
            {titleLine2}
          </h1>
          <p className="font-display text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground mt-1">
            {subtitle}
          </p>
          <p className="body-serif text-base md:text-lg italic text-muted-foreground mt-2">
            {slogan}
          </p>
        </div>
        <nav className="flex gap-6 md:gap-8 mt-3">
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
