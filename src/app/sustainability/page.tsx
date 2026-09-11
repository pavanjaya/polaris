import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CountUp } from "@/components/motion/CountUp";
import { CTA } from "@/components/CTA";
import { opportunity } from "@/lib/content";

export const metadata: Metadata = {
  title: "The case for solar",
  description:
    "For industrial enterprises, structured solar is no longer philosophical — it is mathematical. The financial and carbon case, and the metrics Polaris applies.",
};

/* ---------- flat illustrations, same family as the homepage icons ---------- */

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

const driverIcons: React.ReactNode[] = [
  // Rising grid tariffs — upward bars
  <svg viewBox="0 0 48 48" fill="none" key="tariffs" aria-hidden="true">
    <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
    <rect x="9" y="31" width="7" height="11" rx="2" fill={IL.dark} />
    <rect x="20.5" y="23" width="7" height="19" rx="2" fill={IL.green} />
    <rect x="32" y="15" width="7" height="27" rx="2" fill={IL.green} />
    <path
      d="M10 21 L20 14 L27 18 L39 8"
      stroke={IL.ink}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="39" cy="8" r="3" fill={IL.ink} />
  </svg>,
  // Carbon regulation pressure — leaf
  <svg viewBox="0 0 48 48" fill="none" key="carbon" aria-hidden="true">
    <rect x="12" y="3" width="26" height="26" rx="6" fill={IL.pale} />
    <circle cx="24" cy="20" r="16" fill={IL.green} />
    <path d="M24 12 C16 16 16 26 24 32 C32 26 32 16 24 12Z" fill="#fff" />
    <path d="M24 12 V32" stroke={IL.green} strokeWidth="2" />
  </svg>,
  // Grid vulnerability — broken bolt / warning
  <svg viewBox="0 0 48 48" fill="none" key="grid" aria-hidden="true">
    <rect x="3" y="12" width="35" height="27" rx="6" fill={IL.pale} />
    <rect x="8" y="17" width="25" height="17" rx="3" fill={IL.green} />
    <rect x="38" y="20" width="6" height="11" rx="2" fill={IL.dark} />
    <path d="M23 14l-8 13h7l-3 9 10-14h-7z" fill={IL.ink} />
  </svg>,
  // A unique window — clock
  <svg viewBox="0 0 48 48" fill="none" key="window" aria-hidden="true">
    <rect x="3" y="3" width="22" height="22" rx="7" fill={IL.pale} />
    <circle cx="27" cy="27" r="17" fill={IL.green} />
    <path d="M27 16 V27 L35 32" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="27" cy="27" r="3" fill={IL.ink} />
    <path d="M27 12 v3 M42 27 h-3 M27 42 v-3 M12 27 h3" stroke={IL.dark} strokeWidth="2.4" strokeLinecap="round" />
  </svg>,
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">The opportunity</span>
          </Reveal>
          <RevealText
            as="h1"
            text="No longer philosophical — mathematical."
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {opportunity.intro}
            </p>
          </Reveal>

          <Reveal variant="up" delay={130}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/10 pt-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
              {opportunity.financials.map((f) => (
                <div
                  key={f.metric}
                  className="lg:border-l lg:border-ink/10 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    {f.metric}
                  </dt>
                  <dd>
                    <CountUp
                      value={f.value}
                      className="mt-2 block text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl"
                    />
                  </dd>
                  <dd className="mt-1.5 text-xs leading-snug text-ink-faint">
                    {f.note}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Drivers"
          title="What is forcing the decision"
          intro="Four pressures have turned the C&I solar question from an ESG initiative into a board-level financial one."
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {opportunity.drivers.map((d, i) => (
            <Reveal as="article" key={d.title} delay={(i % 2) * 70}>
              <span className="block h-12 w-12 [&>svg]:h-full [&>svg]:w-full">
                {driverIcons[i]}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                {d.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {d.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="bg-[#FAFBF6]">
        <Section>
          <SectionHeading eyebrow="Context" title="A national shift" />
          <Reveal variant="up" delay={80}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
              {opportunity.context}
            </p>
          </Reveal>
        </Section>
      </div>

      <CTA />
    </>
  );
}
