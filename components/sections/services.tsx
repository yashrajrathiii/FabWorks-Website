"use client";
import {
  Box,
  Droplets,
  Factory,
  Fence,
  Frame,
  Grip,
  Lightbulb,
  UtilityPole,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";
import { Reveal } from "@/components/motion";

const icons: Record<string, LucideIcon> = {
  factory: Factory,
  grip: Grip,
  box: Box,
  utilityPole: UtilityPole,
  lightbulb: Lightbulb,
  fence: Fence,
  frame: Frame,
  droplets: Droplets,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange">
            What we make
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Services</h2>
          <p className="mt-4 max-w-2xl text-muted">
            From a single custom component to large fabrication requirements —
            manufactured to exact specifications, project requirements and
            deadlines.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={Math.min(i * 0.05, 0.3)}>
                <div className="group h-full rounded-xl border border-line bg-background p-6 transition-colors duration-200 hover:border-orange/60">
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-orange/10 text-orange transition-colors duration-200 group-hover:bg-orange group-hover:text-white">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
