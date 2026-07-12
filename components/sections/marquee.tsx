const keywords = [
  "Custom MS Fabrication",
  "Heavy-Duty Clamps",
  "Electric Poles",
  "Street Light Brackets",
  "Chambers",
  "Grills & Gates",
  "Hoarding Frames",
  "Fountains",
];

// Scrolling keyword strip between sections (pure CSS, reduced-motion aware).
export function Marquee() {
  const row = [...keywords, ...keywords];
  return (
    <div
      className="overflow-hidden border-y border-line bg-orange py-4"
      aria-hidden
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white"
          >
            {word}
            <span className="text-white/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
