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
import { Card3D } from "@/components/ui/animated-3d-card";

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
              <Reveal key={s.title} delay={Math.min(i * 0.05, 0.3)} className="h-full">
                <Card3D>
                  {/* thin gradient border, brightest along the top edge */}
                  <div className="h-full rounded-2xl bg-gradient-to-b from-orange/40 via-white/10 to-white/5 p-px [transform-style:preserve-3d]">
                    <div className="group flex h-full min-h-[240px] flex-col rounded-[calc(1rem-1px)] bg-[linear-gradient(150deg,rgba(242,103,34,0.16)_0%,rgba(23,21,27,0.6)_40%,rgba(13,13,17,1)_100%)] bg-[#111014] p-6 [transform-style:preserve-3d]">
                      <div className="flex items-start justify-between [transform:translateZ(32px)]">
                        <span className="inline-flex size-12 items-center justify-center rounded-lg border border-orange/25 bg-orange/15 text-orange transition-colors duration-200 group-hover:bg-orange group-hover:text-white">
                          <Icon className="size-6" aria-hidden />
                        </span>
                        <span
                          className="mt-1 size-2 rounded-full bg-orange/80"
                          aria-hidden
                        />
                      </div>
                      <h3 className="mt-auto pt-10 text-lg font-semibold [transform:translateZ(20px)]">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted [transform:translateZ(12px)]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
