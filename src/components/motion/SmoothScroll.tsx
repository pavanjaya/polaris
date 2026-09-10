"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide inertia scrolling (Lenis) driven off the GSAP ticker so every
 * ScrollTrigger animation stays perfectly in sync with the smoothed scroll.
 * No-ops when the visitor asks for reduced motion.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      // Higher lerp = catches up to the target faster → less "float".
      lerp: 0.16,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);
    // expose for debugging / programmatic scroll
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    document.documentElement.classList.add("lenis-active");

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      document.documentElement.classList.remove("lenis-active");
    };
  }, []);

  // On route change: jump to top instantly and recalc every trigger.
  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
