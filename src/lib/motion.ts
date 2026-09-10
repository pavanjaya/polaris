// Shared motion tokens — keep every animation on the same curve.

// Expo-out: fast start, long luxurious settle. The Hark Capital feel.
export const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
// GSAP-form of the same curve.
export const GSAP_EASE = "expo.out";

export const DUR = {
  fast: 0.4,
  base: 0.9,
  slow: 1.2,
} as const;

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
