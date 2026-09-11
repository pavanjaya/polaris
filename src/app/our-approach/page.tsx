import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CountUp } from "@/components/motion/CountUp";
import { process as deliverySteps, glance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Polaris delivers industrial solar: an investment-grade financial model, in-house engineering, single-point EPC execution and 25-year accountable O&M.",
};

// A fuller telling of each step than the homepage carousel's one-liner —
// this page's whole job is to explain the approach, so it gets room:
// an intro line plus the specifics that actually back the claim.
const stepDetails: { intro: string; points: string[] }[] = [
  {
    intro:
      "Before any equipment is specified, we run a full load analysis and generation simulation against your actual consumption profile — not a generic template. The output is an investment-grade financial model, built for whichever structure fits your balance sheet.",
    points: [
      "IRR, simple payback, depreciation schedule and year-by-year cash flow — modelled before design begins",
      "Structured for CAPEX, OPEX/RESCO, lease or group-captive, whichever route suits your books",
      "Every number reviewed and signed off before a rupee is committed",
    ],
  },
  {
    intro:
      "In-house electrical and structural engineers — not a sales team with a datasheet — size every system on physical fit and yield, not on margin. The same discipline applies whether the site is in Maharashtra or Casablanca.",
    points: [
      "Structural loading, HT evacuation and safety engineered to Indian, EU and US benchmarks",
      "Design reviewed against site-specific constraints — roof condition, shading, terrain, monsoon exposure",
      "Tier-1 equipment specified for fit, never for a brand incentive",
    ],
  },
  {
    intro:
      "Procurement, construction and commissioning run under one accountable team — no hand-offs between a design contractor, a separate EPC vendor and a third-party O&M provider. It's the same people from mobilisation to switch-on.",
    points: [
      "Most commercial & industrial plants energised in 45–90 days",
      "Single point of contact through procurement, construction and commissioning",
      "Every handover checked against the original financial model, not just the drawing",
    ],
  },
  {
    intro:
      "The relationship doesn't end at commissioning. SCADA monitoring, generation analytics and a preventive maintenance schedule keep every system performing to its modelled output for its full asset life.",
    points: [
      "Real-time SCADA monitoring and generation analytics for every plant",
      "Preventive maintenance scheduled across the full 25-year asset life",
      "The team that built the financial case stays accountable for it — no orphaned systems",
    ],
  },
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

      {/* The four stages — alternating image + text, each with room to
          actually explain itself instead of a compressed caption. */}
      <Section className="space-y-24 lg:space-y-32">
        {deliverySteps.map((s, i) => {
          const detail = stepDetails[i];
          const imageFirst = i % 2 === 0;
          return (
            <div
              key={s.step}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal
                variant="scale"
                className={imageFirst ? "lg:order-1" : "lg:order-2"}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mist">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <Reveal variant="fade">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
                    {s.step}
                  </span>
                </Reveal>
                <Reveal as="span" variant="mask" className="mt-3 block">
                  <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal variant="up" delay={60}>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {detail.intro}
                  </p>
                </Reveal>
                <Reveal variant="up" delay={110}>
                  <ul className="mt-6 space-y-3">
                    {detail.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          );
        })}
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
