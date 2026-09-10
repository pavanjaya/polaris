"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "./ui";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force muted autoplay to work in Safari (React doesn't set the muted
  // attribute, so Safari's autoplay gate can block it).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const tryPlay = () => {
      v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);
    const onVis = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <section className="relative flex h-screen min-h-[620px] items-center justify-center overflow-hidden bg-brand-dark">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover [filter:saturate(1.12)_contrast(1.04)]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/img/hero-poster.jpg"
        src="/hero.mp4"
      />

      {/* scrims */}
      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40" />

      <div className="container-px relative z-10 mx-auto flex max-w-[1200px] flex-col items-center text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/85 sm:text-sm">
          Engineering the Bottom Line
        </p>

        <h1 className="text-[13vw] font-bold tracking-tight leading-[0.95] text-white sm:text-[6.5rem] lg:text-[8rem]">
          Energy as an asset.
        </h1>

        <p className="mt-8 max-w-xl text-base text-white/80 sm:text-lg">
          Solar EPC and energy-engineering for industrial enterprises —
          across India and Morocco.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[15px] font-semibold text-ink hover:bg-white/90"
          >
            Get a proposal
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur hover:bg-white/25"
          >
            See our projects
          </Link>
        </div>
      </div>
    </section>
  );
}
