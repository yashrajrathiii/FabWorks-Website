"use client";
import React from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

// 3D tilt card: tips toward the cursor with spring physics, plus a moving
// glare highlight. Children with [transform:translateZ(...)] float above the
// surface (the card preserves 3D). Reduced-motion users get a static card.

export function Card3D({
  children,
  className,
  maxTilt = 8,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const spring = { stiffness: 260, damping: 20 };
  const rotateX = useSpring(
    useTransform(my, [0, 1], [maxTilt, -maxTilt]),
    spring
  );
  const rotateY = useSpring(
    useTransform(mx, [0, 1], [-maxTilt, maxTilt]),
    spring
  );

  const glareXp = useTransform(mx, (v) => `${(v * 100).toFixed(1)}%`);
  const glareYp = useTransform(my, (v) => `${(v * 100).toFixed(1)}%`);
  const glare = useMotionTemplate`radial-gradient(280px circle at ${glareXp} ${glareYp}, rgba(242, 103, 34, 0.18), rgba(247, 183, 51, 0.10) 45%, transparent 70%)`;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const onMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className="h-full [perspective:900px]">
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={
          reduce
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        whileHover={reduce ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn("group/card relative h-full", className)}
      >
        {children}
        <motion.div
          aria-hidden
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        />
      </motion.div>
    </div>
  );
}
