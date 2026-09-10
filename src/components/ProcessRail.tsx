"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Step = {
  step: string;
  title: string;
  body: string;
  image: string;
};

export function ProcessRail({ steps }: { steps: Step[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors disabled:opacity-30 disabled:cursor-default hover:border-ink hover:bg-ink hover:text-white disabled:hover:bg-transparent disabled:hover:text-ink disabled:hover:border-ink/15";

  return (
    <>
      <div className="mt-8 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          className={btn}
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          className={btn}
        >
          <Arrow dir="right" />
        </button>
      </div>

      <div
        ref={railRef}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1"
      >
        {steps.map((s) => (
          <article
            key={s.step}
            data-card
            className="group relative h-[460px] w-[300px] shrink-0 snap-start overflow-hidden rounded-xl bg-ink sm:w-[380px]"
          >
            <Image
              src={s.image}
              alt=""
              fill
              sizes="380px"
              className="object-cover opacity-80 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-between p-7 text-white">
              <span className="text-sm font-bold tracking-widest text-brand">
                {s.step}
              </span>
              <div>
                <h3 className="text-2xl font-bold leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-[15px] leading-relaxed text-white/80 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-40 group-hover:opacity-100">
                  {s.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
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
