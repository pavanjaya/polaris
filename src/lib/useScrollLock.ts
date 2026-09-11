"use client";

import { useEffect } from "react";

type LenisLike = { stop: () => void; start: () => void };

/**
 * Locks background scroll while `active` is true — for modals/dialogs.
 * Setting `document.body.style.overflow = "hidden"` alone isn't enough on
 * this site: Lenis (src/components/motion/SmoothScroll.tsx) drives scroll
 * itself and ignores the native `overflow` CSS property, so the page keeps
 * scrolling underneath a "fixed" modal unless Lenis is explicitly stopped.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
    lenis?.stop();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      lenis?.start();
    };
  }, [active]);
}
