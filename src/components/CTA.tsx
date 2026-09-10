import Link from "next/link";
import { ArrowRight } from "./ui";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* fresh green glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-active-green/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[34rem] w-[44rem] rounded-full bg-active-green/15 blur-[130px]" />
      {/* geometric motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMaxYMid slice"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-[70%] text-brand-deep"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="46"
          strokeLinecap="round"
        >
          <path d="M120 40 L400 300" />
          <path d="M400 40 L120 300" />
          <path d="M300 200 H560" />
          <path d="M470 -20 V180" />
        </g>
        <rect
          x="470"
          y="30"
          width="90"
          height="44"
          rx="22"
          transform="rotate(-38 515 52)"
          fill="var(--color-brand)"
        />
      </svg>

      <div className="container-px relative mx-auto max-w-[1760px] py-20 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal as="span" variant="mask" className="block">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-[3.25rem]">
              Start your <span className="text-active-green">clean energy</span>{" "}
              build today.
            </h2>
          </Reveal>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
