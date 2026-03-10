import { useState } from "react";

interface Candidate {
  name: string;
  role: "Principal" | "Substitute";
  bio: string;
  photo: string;
}

interface CandidateRowProps {
  title: string;
  principal: Candidate;
  substitute: Candidate;
}

function CandidateEntry({ candidate }: { candidate: Candidate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="grid grid-cols-[30%_70%] gap-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="pr-6 pb-2">
        <img
          src={candidate.photo}
          alt={`Portrait of ${candidate.name}`}
          className="w-full aspect-[4/5] object-cover grayscale"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
          {candidate.role}
        </span>
        <h3
          className={`font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight pb-1 transition-none ${
            hovered ? "candidate-name-underline" : "border-b-2 border-transparent"
          }`}
          style={{ width: "fit-content" }}
        >
          {candidate.name}
        </h3>
        <p className="body-serif text-sm md:text-base leading-relaxed text-muted-foreground mt-3">
          {candidate.bio}
        </p>
      </div>
    </div>
  );
}

export default function CandidateRow({ title, principal, substitute }: CandidateRowProps) {
  return (
    <div className="py-8 md:py-12">
      <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <CandidateEntry candidate={principal} />
        <CandidateEntry candidate={substitute} />
      </div>
    </div>
  );
}
