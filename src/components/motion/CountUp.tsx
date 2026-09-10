"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GSAP_EASE, prefersReducedMotion } from "@/lib/motion";

/** Splits "€17.5M" -> {prefix:"€", value:17.5, decimals:1, suffix:"M"};
 *  "93,000 t" -> {prefix:"", value:93000, decimals:0, suffix:" t"} */
function parse(raw: string) {
  const m = raw.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: "", value: 0, decimals: 0, suffix: raw };
  const numStr = m[2].replace(/,/g, "");
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix: m[1],
    value: parseFloat(numStr),
    decimals,
    suffix: m[3],
  };
}

export function CountUp({
  value,
  className = "",
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { prefix, value: target, decimals, suffix } = parse(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setDisplay(target);
      return;
    }

    let done = false;
    const run = () => {
      if (done) return;
      done = true;
      const obj = { n: 0 };
      gsap.to(obj, {
        n: target,
        duration,
        ease: GSAP_EASE,
        onUpdate: () => setDisplay(obj.n),
        onComplete: () => setDisplay(target),
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    // Rescue only when the number is actually on screen but the observer
    // didn't fire — never while it's still below the fold.
    const rescue = window.setInterval(() => {
      if (done) {
        window.clearInterval(rescue);
        return;
      }
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
        run();
        io.disconnect();
        window.clearInterval(rescue);
      }
    }, 500);
    const stopRescue = window.setTimeout(
      () => window.clearInterval(rescue),
      20000,
    );

    return () => {
      io.disconnect();
      window.clearInterval(rescue);
      window.clearTimeout(stopRescue);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
