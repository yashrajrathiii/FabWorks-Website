"use client";
import { BadgeCheck } from "lucide-react";
import { stats, whyUs } from "@/lib/site";
import { Counter, Reveal } from "@/components/motion";

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange">
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Why Tarbha Industries
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 rounded-xl border border-line bg-surface p-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="text-4xl font-bold text-orange md:text-5xl"
              />
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyUs.map((point, i) => (
            <Reveal key={point.title} delay={Math.min(i * 0.05, 0.2)}>
              <div className="flex h-full gap-4 rounded-xl border border-line p-6">
                <BadgeCheck
                  className="size-6 shrink-0 text-orange"
                  aria-hidden
                />
                <div>
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {point.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
