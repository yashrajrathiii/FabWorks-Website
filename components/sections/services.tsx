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
import ScrollFloat from "@/components/ui/scroll-float";

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
          <ScrollFloat
            containerClassName="mt-3"
            textClassName="text-3xl font-bold text-orange md:text-5xl"
          >
            Services
          </ScrollFloat>
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
                  {/* thin orange→amber gradient border, brightest along the top */}
                  <div className="h-full rounded-2xl bg-gradient-to-br from-orange/60 via-[#F7B733]/35 to-black/10 p-px [transform-style:preserve-3d]">
                    <div className="group relative flex h-full min-h-[240px] flex-col rounded-[calc(1rem-1px)] bg-[linear-gradient(150deg,rgba(245,132,61,0.14)_0%,rgba(247,183,51,0.06)_38%,rgba(255,255,255,1)_100%)] bg-surface p-6 [transform-style:preserve-3d]">
                      {/* blueprint grid, fading out from the lit corner */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[calc(1rem-1px)]"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(44,38,39,0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(44,38,39,0.08) 1px, transparent 1px)
                          `,
                          backgroundSize: "26px 26px",
                          WebkitMaskImage:
                            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 45%, transparent 90%)",
                          maskImage:
                            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 45%, transparent 90%)",
                        }}
                      />
                      <div className="flex items-start justify-between [transform:translateZ(32px)]">
                        <span className="inline-flex size-12 items-center justify-center rounded-lg border border-orange/25 bg-orange/15 text-orange transition-all duration-200 group-hover:bg-[linear-gradient(135deg,#F26722,#F7B733)] group-hover:text-white">
                          <Icon className="size-6" aria-hidden />
                        </span>
                        <span
                          className="mt-1 size-2 rounded-full bg-gradient-to-br from-orange to-[#F7B733]"
                          aria-hidden
                        />
                      </div>
                      <h3 className="mt-auto pt-10 text-lg font-semibold [transform:translateZ(20px)]">
                        {s.title}
                      </h3>
                      <p className="mt-2 min-h-[3lh] text-sm leading-relaxed text-muted [transform:translateZ(12px)]">
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
