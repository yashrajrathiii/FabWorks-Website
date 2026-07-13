"use client";
import React from "react";
import { cn } from "@/lib/utils";

// Glassmorphism button with neon gradient edge lines (21st.dev "neon-button"
// pattern, adapted to the Tarbha palette: blue for primary, orange for ghost).

type Variant = "default" | "solid" | "ghost";
type Size = "default" | "sm" | "lg";

const base =
  "relative group inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border font-semibold transition-all duration-300 cursor-pointer";

const variantClasses: Record<Variant, string> = {
  default:
    "bg-blue/20 border-blue/40 text-white backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] hover:bg-blue/35 hover:border-blue/70",
  solid:
    "bg-blue border-transparent text-white hover:bg-blue/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
  ghost:
    "bg-white/5 border-white/15 text-foreground backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-orange/60 hover:text-orange hover:bg-white/10",
};

const neonClasses: Record<Variant, string> = {
  default: "via-[#8f7bff]",
  solid: "via-[#8f7bff]",
  ghost: "via-orange",
};

const sizeClasses: Record<Size, string> = {
  default: "h-12 px-6",
  sm: "h-10 px-5 text-sm",
  lg: "h-14 px-8 text-lg",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  neon?: boolean;
};

export type NeonButtonProps = BaseProps &
  (
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  );

export function Button({
  variant = "default",
  size = "default",
  neon = true,
  className,
  children,
  ...props
}: NeonButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);
  const lines = neon && (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100",
          neonClasses[variant]
        )}
      />
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100",
          neonClasses[variant]
        )}
      />
    </>
  );

  if (props.href !== undefined) {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {lines}
        {children}
      </a>
    );
  }
  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {lines}
      {children}
    </button>
  );
}
