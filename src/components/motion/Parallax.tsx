"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Layered parallax. Wrap an element (usually an image) and it drifts
 * against the scroll as its section passes through the viewport.
 * `speed` is the fraction of the element's height it travels (0.12 = subtle).
 */
export function Parallax({
  children,
  className = "",
  speed = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const distance = () => el.offsetHeight * speed;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: () => -distance() },
        {
          y: () => distance(),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
