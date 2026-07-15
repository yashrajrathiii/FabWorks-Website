"use client";
import { workItems } from "@/lib/site";
import { Reveal } from "@/components/motion";
import ScrollFloat from "@/components/ui/scroll-float";

// First 6 work items shown as a gallery grid. Placeholder tiles —
// replace /public/work/placeholder-N.svg with real photos (same names).
export function WorkGallery() {
  return (
    <section id="work" className="scroll-mt-16 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange">
            Our work
          </p>
          <ScrollFloat
            containerClassName="mt-3"
            textClassName="text-3xl font-bold text-orange md:text-5xl"
          >
            Recent fabrication
          </ScrollFloat>
          <p className="mt-4 max-w-2xl text-muted">
            A selection of projects delivered across Chhattisgarh, Odisha,
            Maharashtra, Rajasthan and Madhya Pradesh.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.slice(0, 6).map((title, i) => (
            <Reveal key={title} delay={Math.min(i * 0.05, 0.25)}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
                <img
                  src={`/work/placeholder-${(i % 6) + 1}.svg`}
                  alt={`${title} — photo coming soon`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 font-semibold text-white">
                  {title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
