"use client";
import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/mapcn-map-marker";
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

      <div className="mx-auto mt-12 grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <Reveal className="order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <MapPin className="size-9 shrink-0 text-orange" aria-hidden />
            <h3 className="text-3xl font-bold text-foreground md:text-4xl">
              Visit us
            </h3>
          </div>
          <p className="mt-4 max-w-md text-muted">
            Find us on {site.address}. Tap the marker on the map to open our
            location in Google Maps and get directions.
          </p>
        </Reveal>
        <Reveal className="order-2 lg:order-1">
          <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-line">
            <Map center={[site.location.lng, site.location.lat]} zoom={15}>
              <MapMarker
                longitude={site.location.lng}
                latitude={site.location.lat}
                defaultOpen
              >
                <MarkerContent>
                  <span className="relative flex size-5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                    <span className="relative inline-flex size-5 rounded-full border-2 border-white bg-orange shadow-lg" />
                  </span>
                </MarkerContent>
                <MarkerTooltip>{site.name}</MarkerTooltip>
                <MarkerPopup>
                  <div className="space-y-2">
                    <p className="font-semibold">{site.name}</p>
                    <p className="text-xs text-muted">{site.address}</p>
                    <a
                      href={site.googleMapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:underline"
                    >
                      Open in Google Maps
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  </div>
                </MarkerPopup>
              </MapMarker>
            </Map>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
