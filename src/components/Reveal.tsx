"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSAP_EASE, DUR, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Variant = "up" | "mask" | "scale" | "fade";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  variant = "up",
  stagger = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "section" | "span" | "figure";
  delay?: number;
  variant?: Variant;
  /** when > 0, animates the element's direct children in sequence */
  stagger?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: gsap.TweenTarget = stagger ? el.children : el;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, yPercent: 0, scale: 1 });
      return;
    }

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = { opacity: 1 };
    if (variant === "up") {
      fromVars.y = 28;
      toVars.y = 0;
    }
    if (variant === "mask") {
      fromVars.yPercent = 100;
      fromVars.opacity = 1;
      toVars.yPercent = 0;
      toVars.opacity = 1;
    }
    if (variant === "scale") {
      fromVars.scale = 1.06;
      toVars.scale = 1;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, {
        ...toVars,
        duration: DUR.base,
        ease: GSAP_EASE,
        delay: delay / 1000,
        stagger: stagger || 0,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, el);

    // Rescue only content that is genuinely on screen but stuck hidden —
    // never anything still below the fold, so it can't pre-fire while the
    // visitor lingers higher up the page.
    const settled = { toVars: { ...toVars, y: 0, yPercent: 0, scale: 1 } };
    const rescue = window.setInterval(() => {
      const r = el.getBoundingClientRect();
      const revealed = parseFloat(getComputedStyle(el).opacity || "1") > 0.9;
      if (revealed) {
        window.clearInterval(rescue);
        return;
      }
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
        gsap.set(targets, settled.toVars);
        window.clearInterval(rescue);
      }
    }, 500);
    const stopRescue = window.setTimeout(
      () => window.clearInterval(rescue),
      20000,
    );

    return () => {
      window.clearInterval(rescue);
      window.clearTimeout(stopRescue);
      ctx.revert();
    };
  }, [delay, variant, stagger]);

  const maskWrap = variant === "mask" ? "overflow-hidden" : "";
  const hiddenInit = (variant === "up" || variant === "fade") && !stagger;

  return (
    <Tag
      // @ts-expect-error - ref across the tag union
      ref={ref}
      className={`${maskWrap} ${className}`}
      style={{
        willChange: "transform, opacity",
        opacity: hiddenInit ? 0 : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
