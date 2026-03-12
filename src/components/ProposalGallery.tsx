interface Proposal {
  title: string;
  description: string;
  image: string;
}

interface ProposalGalleryProps {
  proposals: Proposal[];
}

export default function ProposalGallery({ proposals }: ProposalGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {proposals.map((p, i) => (
        <div key={i} className="group">
          <div className="overflow-hidden mb-4">
            <img
              src={p.image}
              alt={p.title}
              className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
          <h3 className="font-display text-base md:text-lg font-extrabold uppercase tracking-tight mb-2">
            {p.title}
          </h3>
          <p className="body-serif text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
