"use client";

import Image from "next/image";
import { useState } from "react";

type Step = {
  step: string;
  title: string;
  body: string;
  image: string;
};

/**
 * "Squeeze" carousel, à la Stripe's "What's happening" band: every step
 * shares one fixed row of space — the active panel expands and the rest
 * compress to slivers. Nothing scrolls; width is just redistributed.
 * Below the row, the active step's copy cross-fades in.
 */
export function ProcessRail({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const count = steps.length;
  const go = (dir: 1 | -1) => setActive((i) => (i + dir + count) % count);

  const arrowBtn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white";

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-1.5">
          {steps.map((s, i) => (
            <button
              key={s.step}
              type="button"
              aria-label={`Show ${s.title}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-ink" : "w-4 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous step"
            onClick={() => go(-1)}
            className={arrowBtn}
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            aria-label="Next step"
            onClick={() => go(1)}
            className={arrowBtn}
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>

      {/* squeeze row */}
      <div className="mt-6 flex h-[440px] flex-col gap-2 sm:h-[460px] sm:flex-row">
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-label={s.title}
              aria-pressed={isActive}
              className="group relative min-h-[64px] min-w-0 overflow-hidden rounded-xl bg-ink text-left transition-[flex-grow] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0 }}
            >
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 55vw"
                className={`object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "scale-100 opacity-90"
                    : "scale-105 opacity-50 group-hover:opacity-70"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* collapsed label — horizontal on the mobile stack, vertical on the desktop row */}
              <span
                className={`pointer-events-none absolute bottom-4 left-4 text-sm font-semibold text-white transition-opacity duration-300 sm:hidden ${
                  isActive ? "opacity-0" : "opacity-90"
                }`}
              >
                {s.title}
              </span>
              <span
                className={`pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-white transition-opacity duration-300 [writing-mode:vertical-rl] sm:block ${
                  isActive ? "opacity-0" : "opacity-90"
                }`}
                style={{ rotate: "180deg" }}
              >
                {s.title}
              </span>

              {/* active headline on the image */}
              <span
                className={`pointer-events-none absolute bottom-6 left-6 right-6 text-2xl font-bold leading-tight tracking-tight text-white transition-opacity duration-500 ${
                  isActive ? "opacity-100 delay-150" : "opacity-0"
                }`}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* active step copy */}
      <div className="mt-7 min-h-[104px] border-t border-ink/10 pt-6">
        <div key={active} className="squeezy-detail max-w-2xl">
          <h3 className="text-lg font-bold tracking-tight text-ink">
            {steps[active].title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            {steps[active].body}
          </p>
        </div>
      </div>
    </div>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: dir === "left" ? "scaleX(-1)" : undefined }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
