"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/motion";

function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * One testimonial at a time, centred on a faint off-white — no card, no
 * border, no shadow. Auto-advances (paused on hover / focus / reduced
 * motion); dots below jump between quotes.
 */
export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (count < 2 || paused || prefersReducedMotion()) return;
    const id = window.setInterval(
      () => setIndex((v) => (v + 1) % count),
      7000,
    );
    return () => window.clearInterval(id);
  }, [count, paused]);

  const t = testimonials[index];

  return (
    <section
      className="bg-[#fbfbf6]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container-px mx-auto max-w-3xl py-24 text-center lg:py-32">
        <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-faint">
          In their words
        </h2>

        <span
          aria-hidden="true"
          className="mt-8 block select-none font-serif text-[5rem] leading-[0.6] text-brand/25"
        >
          &ldquo;
        </span>

        <div
          key={index}
          className="squeezy-detail flex min-h-[24rem] flex-col justify-start sm:min-h-[21rem]"
        >
          <blockquote className="mx-auto mt-8 max-w-3xl text-2xl font-medium leading-relaxed text-ink-soft sm:text-[1.9rem] sm:leading-[1.4]">
            {t.quote}
          </blockquote>

          <figcaption className="mt-10 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-tint text-sm font-bold text-brand-dark">
              {initials(t.name)}
            </span>
            <span className="text-left text-sm">
              <span className="block font-semibold text-ink">{t.name}</span>
              <span className="block text-ink-faint">{t.org}</span>
            </span>
          </figcaption>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index ? "scale-110 bg-brand" : "bg-ink/15 hover:bg-ink/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
