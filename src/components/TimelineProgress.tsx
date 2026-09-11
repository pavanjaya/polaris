"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * A green line that fills in over the grey timeline track as the visitor
 * scrolls through it — scrubbed to scroll position, not autoplayed. Sits
 * absolutely inside the nearest ancestor marked data-timeline-track, which
 * is used as the (stable, untransformed) ScrollTrigger trigger so the
 * animated element's own shrinking height never feeds back into the
 * trigger's start/end maths.
 */
export function TimelineProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const trigger = el.closest("[data-timeline-track]");
    if (!trigger) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top 78%",
            end: "bottom 62%",
            scrub: 0.6,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-y-0 left-0 w-px origin-top bg-brand"
    />
  );
}
