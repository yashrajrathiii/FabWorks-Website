import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

// Original Tarbha Industries logo, recolored for the dark background
// (black artwork -> white, orange preserved, background made transparent).
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt={site.name}
      width={134}
      height={40}
      className={cn("h-10 w-auto", className)}
    />
  );
}
