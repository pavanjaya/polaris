"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSAP_EASE, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Heading whose words rise into view, one after another, when it scrolls
 * into the viewport. Each word sits in an overflow-clip so it appears to
 * "load" up from a mask. Screen readers get the plain string.
 */
export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  stagger = 0.055,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word] > span");

    if (prefersReducedMotion()) {
      gsap.set(words, { yPercent: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 0.9,
          ease: GSAP_EASE,
          stagger,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [text, stagger]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="whitespace-nowrap">
          <span
            data-word
            aria-hidden="true"
            className="inline-flex overflow-hidden align-bottom"
          >
            <span
              className="inline-block"
              style={{ transform: "translateY(118%)" }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
