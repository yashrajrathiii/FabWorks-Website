import { site } from "@/lib/site";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center">
        <Logo />
        <p className="max-w-md text-sm text-muted">
          Built with precision. Trusted for 25+ years. Serving 2,000+ happy
          clients.
        </p>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}, {site.city}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
