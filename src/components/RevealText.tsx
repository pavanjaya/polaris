"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GSAP_EASE, prefersReducedMotion } from "@/lib/motion";

/**
 * Heading whose words rise into view, one after another, when it scrolls
 * into the viewport. Each word sits in an overflow-clip so it appears to
 * "load" up from a mask. Screen readers get the plain string.
 *
 * Uses IntersectionObserver (not ScrollTrigger) so it stays reliable
 * alongside Lenis smooth scroll and never leaves the text hidden.
 */
export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  stagger = 0.05,
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
    if (!words.length) return;

    if (prefersReducedMotion()) {
      gsap.set(words, { yPercent: 0 });
      return;
    }

    gsap.set(words, { yPercent: 120 });

    let done = false;
    const play = () => {
      if (done) return;
      done = true;
      gsap.to(words, {
        yPercent: 0,
        duration: 0.9,
        ease: GSAP_EASE,
        stagger,
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            play();
            io.disconnect();
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    // Safety net: if the heading is on screen but somehow still hidden,
    // force it in. Below-the-fold headings keep waiting for the scroll.
    const failsafe = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) play();
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [text, stagger]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          <span
            data-word
            aria-hidden="true"
            className="inline-flex overflow-hidden align-bottom"
          >
            <span
              className="inline-block pb-[0.14em]"
              style={{ transform: "translateY(120%)" }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
