"use client";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/neon-button";
import { GlowCard } from "@/components/ui/spotlight-card";
import ScrollFloat from "@/components/ui/scroll-float";

export function AboutContact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange">
            About us
          </p>
          <ScrollFloat
            containerClassName="mt-3"
            textClassName="text-3xl font-bold md:text-5xl"
          >
            {site.name}
          </ScrollFloat>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              With 25+ years of fabrication experience, {site.name} has built a
              reputation for precision, reliability and quality workmanship in
              custom mild steel fabrication — serving 2,000+ satisfied clients
              across {site.areasServed.join(", ")}.
            </p>
            <p>
              From custom industrial fabrication, heavy-duty clamps, electrical
              poles and street light brackets to hoarding board frames,
              chambers, fountains and other custom MS components — every
              product is manufactured with attention to detail, durability and
              functionality.
            </p>
            <p>
              Our commitment goes beyond fabrication: transparent
              communication, accurate quotations, timely delivery and
              long-term customer relationships.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GlowCard glowColor="orange" customSize className="w-full sm:p-6">
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-2 text-muted">
              Tell us what you need fabricated — we&apos;ll get back with an
              accurate quote.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-orange" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <a
                    href={site.phoneHref}
                    className="font-semibold hover:text-orange"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle
                  className="mt-1 size-5 shrink-0 text-orange"
                  aria-hidden
                />
                <div>
                  <p className="text-sm text-muted">WhatsApp</p>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-orange"
                  >
                    {site.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-orange" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Address</p>
                  <p className="font-semibold">{site.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-orange" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Working hours</p>
                  <p className="font-semibold">{site.hours}</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <MessageCircle className="size-5" aria-hidden />
                WhatsApp us
              </Button>
              <Button href={site.phoneHref} variant="ghost" className="flex-1">
                <Phone className="size-5" aria-hidden />
                Call now
              </Button>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
