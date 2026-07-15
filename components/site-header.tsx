"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/neon-button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="#top" aria-label={`${site.name} — home`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-4 md:flex" aria-label="Main">
          <div className="flex items-center gap-1 rounded-full border border-black/10 bg-black/5 p-1 backdrop-blur-md">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:bg-black/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            Get a quote
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-background/95 px-4 py-4 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-3 font-medium text-muted hover:bg-surface hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get a quote
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
