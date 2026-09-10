"use client";

import { Fragment, useEffect, useLayoutEffect, useRef } from "react";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Heading whose words rise into view, one after another, when it scrolls
 * into the viewport.
 *
 * It renders fully visible by default. Only once the client script has run
 * does it "arm" the clip animation (before paint, so there's no flash) and
 * then reveal on scroll via IntersectionObserver. A rescue poll only ever
 * fires when the heading is genuinely on screen — a heading below the fold
 * always waits for the scroll, no matter how long the page has been open.
 * Pure CSS transitions; no GSAP.
 */
export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stays un-armed → fully visible, no animation
    }

    // Arm the clip before the browser paints so there's no flash of
    // un-clipped text.
    el.dataset.armed = "true";

    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      el.dataset.in = "true";
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);

    // Rescue: only if the heading is actually on screen but the observer
    // somehow didn't fire. Never triggers for content below the fold, so a
    // long dwell on the hero can't "use up" the reveal.
    const rescue = window.setInterval(() => {
      if (played) {
        window.clearInterval(rescue);
        return;
      }
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88 && r.bottom > 0) {
        play();
        io.disconnect();
        window.clearInterval(rescue);
      }
    }, 400);
    const stopRescue = window.setTimeout(
      () => window.clearInterval(rescue),
      20000,
    );

    return () => {
      io.disconnect();
      window.clearInterval(rescue);
      window.clearTimeout(stopRescue);
    };
  }, [text]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`reveal-text ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="reveal-text__word" aria-hidden="true">
            <span style={{ transitionDelay: `${i * 42}ms` }}>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
