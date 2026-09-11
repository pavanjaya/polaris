import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CountUp } from "@/components/motion/CountUp";
import { ProcessRail } from "@/components/ProcessRail";
import { process as deliverySteps, glance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Polaris delivers industrial solar: an investment-grade financial model, in-house engineering, single-point EPC execution and 25-year accountable O&M.",
};

// The homepage carousel uses `process[].body` verbatim (one terse line per
// step, sized for a compressed teaser). This page is the step's own home,
// so it gets the fuller two-sentence version instead of restating the same
// four steps a second time underneath the carousel.
const stepDetails = [
  "We run a full load analysis and generation simulation against your actual consumption — then build an investment-grade model: IRR, payback, depreciation and cash flow, structured to whichever route fits your balance sheet.",
  "In-house electrical and structural engineers size every system on fit and yield, not margin. Structural loading, HT evacuation and safety are engineered to Indian, EU and US benchmarks on every project.",
  "Procurement, construction and commissioning run under one accountable team — no hand-offs between contractors. Most C&I plants are energised in 45–90 days, commissioned against the original financial model.",
  "SCADA monitoring, generation analytics and preventive maintenance keep every system performing to its modelled output for its full 25-year life — the same team that built the case stays accountable.",
];

const detailedSteps = deliverySteps.map((s, i) => ({
  ...s,
  body: stepDetails[i],
}));

export default function OurApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">Our approach</span>
          </Reveal>
          <RevealText
            as="h1"
            text="One accountable team, from the financial model to year 25."
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Every Polaris project runs through the same four-stage
              discipline — modelled before it&apos;s engineered, engineered
              before it&apos;s built, and operated by the same team that
              signed off the numbers. No hand-offs, no orphaned systems.
              Click through each stage below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Squeeze carousel, with the fuller per-step copy — this is the
          page's one telling of the four steps, not a teaser for another. */}
      <section className="container-px mx-auto max-w-[1760px] pt-16 lg:pt-20">
        <ProcessRail steps={detailedSteps} />
      </section>

      {/* By the numbers */}
      <div className="mt-20 bg-[#FAFBF6] lg:mt-28">
        <Section>
          <Reveal variant="fade">
            <span className="pill">The results</span>
          </Reveal>
          <RevealText
            text="This is what the approach has delivered."
            className="mt-5 block max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem]"
          />
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {glance.map((it) => (
              <div key={it.label}>
                <dt>
                  <CountUp
                    value={it.value}
                    className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                  />
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink-faint">
                  {it.label}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>

      <CTA />
    </>
  );
}
