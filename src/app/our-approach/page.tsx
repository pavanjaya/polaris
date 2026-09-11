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

const stepDetails = [
  "Before any equipment is specified, we run a full load analysis and generation simulation against your actual consumption profile — not a generic template. The output is an investment-grade financial model: IRR, simple payback, depreciation schedule and year-by-year cash flow, structured for whichever route fits your balance sheet — CAPEX, OPEX/RESCO, lease or group-captive. Nothing moves to design until the numbers are signed off.",
  "In-house electrical and structural engineers — not a sales team with a datasheet — size every system on physical fit and yield, not on margin. Structural loading, HT evacuation and safety design are engineered to Indian, EU and US benchmarks on every project, regardless of geography, and reviewed against site-specific constraints: roof condition, shading, terrain, monsoon exposure.",
  "Procurement, construction and commissioning run under one accountable team — no hand-offs between a design contractor, an EPC vendor and a separate O&M provider. Most commercial & industrial plants are energised in 45–90 days, with Tier-1 equipment specified for fit rather than brand incentives, and every commissioning signed off against the original financial model.",
  "The relationship doesn't end at commissioning. SCADA monitoring, generation analytics and a preventive maintenance schedule keep every system performing to its modelled output for its full 25-year asset life, with the same team that built the financial case accountable for the numbers it produces — no orphaned installations.",
];

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
            </p>
          </Reveal>
        </div>
      </section>

      {/* Squeeze carousel — the same signature interaction as the homepage */}
      <section className="container-px mx-auto max-w-[1760px] pt-16 lg:pt-20">
        <ProcessRail steps={deliverySteps} />
      </section>

      {/* Expanded step-by-step */}
      <Section>
        <Reveal variant="fade">
          <span className="pill">The detail</span>
        </Reveal>
        <RevealText
          text="What happens at each stage."
          className="mt-5 block max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem]"
        />
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {deliverySteps.map((s, i) => (
            <Reveal as="article" key={s.step} delay={(i % 2) * 70}>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
                {s.step}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {stepDetails[i]}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* By the numbers */}
      <div className="bg-[#FAFBF6]">
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
