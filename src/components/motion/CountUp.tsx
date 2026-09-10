"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSAP_EASE, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/** Splits "€17.5M" -> { prefix:"€", value:17.5, decimals:1, suffix:"M" } */
function parse(raw: string) {
  const m = raw.match(/^(\D*)([\d]+(?:[.,]\d+)?)(.*)$/);
  if (!m) return { prefix: "", value: 0, decimals: 0, suffix: raw };
  const numStr = m[2].replace(",", ".");
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

    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: target,
        duration,
        ease: GSAP_EASE,
        onUpdate: () => setDisplay(obj.n),
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, el);
    return () => ctx.revert();
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
