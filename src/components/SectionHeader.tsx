export default function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="pt-16 md:pt-24 pb-6 md:pb-8 section-divider">
      <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-[#0B1B5E] font-extrabold">
        {title}
      </h2>
    </div>
  );
}
