import type { Metadata } from "next";
import { Section, Card, ArrowLink } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "CAPEX, OPEX/RESCO, open access & group captive, lease, BESS, end-to-end EPC and financial advisory — the Polaris solutions portfolio for C&I solar.",
};

/* ---------- flat illustrations, same family as the homepage icons ---------- */

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

// One icon per solution, in slug order: capex, opex, open-access, lease,
// glg, bess, epc, advisory.
const solutionIcons: React.ReactNode[] = [
  // CAPEX — solar panel + sun
  <svg viewBox="0 0 48 48" fill="none" key="capex" aria-hidden="true">
    <rect x="2" y="7" width="29" height="29" rx="6" fill={IL.pale} />
    <path d="M7 35 L13 14 H35 L41 35 Z" fill={IL.green} />
    <path
      d="M7 35H41M16 24.5H33M22 14l-4 21M29 14l1 21"
      stroke="#fff"
      strokeWidth="1.5"
    />
    <circle cx="38" cy="12" r="7" fill={IL.ink} />
  </svg>,
  // OPEX / RESCO — coins
  <svg viewBox="0 0 48 48" fill="none" key="opex" aria-hidden="true">
    <ellipse cx="24" cy="38" rx="17" ry="6" fill={IL.pale} />
    <rect x="7" y="20" width="34" height="16" rx="8" fill={IL.green} />
    <ellipse cx="24" cy="20" rx="17" ry="6" fill={IL.dark} />
    <ellipse cx="24" cy="14" rx="12" ry="4.5" fill={IL.pale} />
    <path
      d="M24 9v10M20 12h8"
      stroke={IL.ink}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>,
  // Open Access & Group Captive — network
  <svg viewBox="0 0 48 48" fill="none" key="oa" aria-hidden="true">
    <rect x="3" y="3" width="22" height="22" rx="5" fill={IL.pale} />
    <rect x="17" y="18" width="27" height="27" rx="6" fill={IL.green} />
    <path
      d="M13 13 31 31"
      stroke={IL.dark}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="13" cy="13" r="4.5" fill={IL.ink} />
    <circle cx="31" cy="31" r="5" fill="#fff" />
  </svg>,
  // Lease — contract
  <svg viewBox="0 0 48 48" fill="none" key="lease" aria-hidden="true">
    <rect x="9" y="3" width="28" height="39" rx="5" fill={IL.pale} />
    <path d="M9 29h28v8a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5z" fill={IL.green} />
    <path
      d="M15 12h16M15 19h16M15 26h10"
      stroke={IL.dark}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M14 37c3-4 6-4 9 0s6 4 9 0"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,
  // GLG — gauge
  <svg viewBox="0 0 48 48" fill="none" key="glg" aria-hidden="true">
    <circle cx="24" cy="27" r="20" fill={IL.pale} />
    <path
      d="M8 32A18 18 0 0 1 40 32"
      stroke={IL.green}
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M24 27 35 15"
      stroke={IL.ink}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="27" r="4" fill={IL.dark} />
  </svg>,
  // BESS — battery + bolt
  <svg viewBox="0 0 48 48" fill="none" key="bess" aria-hidden="true">
    <rect x="3" y="12" width="35" height="27" rx="6" fill={IL.pale} />
    <rect x="8" y="17" width="25" height="17" rx="3" fill={IL.green} />
    <rect x="38" y="20" width="6" height="11" rx="2" fill={IL.dark} />
    <path d="M23 14l-8 13h7l-3 9 10-14h-7z" fill={IL.ink} />
  </svg>,
  // End-to-end EPC & lifecycle O&M — loop
  <svg viewBox="0 0 48 48" fill="none" key="epc" aria-hidden="true">
    <rect x="3" y="3" width="22" height="22" rx="7" fill={IL.pale} />
    <circle
      cx="27"
      cy="27"
      r="17"
      fill="none"
      stroke={IL.green}
      strokeWidth="7"
      strokeDasharray="80 20"
      strokeLinecap="round"
      transform="rotate(-45 27 27)"
    />
    <path d="M27 27 L36 20 L38 29Z" fill={IL.dark} />
    <circle cx="27" cy="27" r="4" fill={IL.ink} />
  </svg>,
  // Financial structuring & advisory — bars + trend
  <svg viewBox="0 0 48 48" fill="none" key="advisory" aria-hidden="true">
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
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">Solutions</span>
          </Reveal>
          <RevealText
            as="h1"
            text="One partner. Every commercial model."
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              From straightforward CAPEX deployments to OPEX, group-captive and
              open-access structures — Polaris matches the commercial model to
              your balance sheet, then engineers and operates the asset for its
              full 25-year life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solutions grid */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((s, i) => (
            <div key={s.slug} id={s.slug} className="scroll-mt-28">
              <Reveal delay={(i % 2) * 70}>
                <Card className="p-8">
                  <span className="block h-12 w-12 [&>svg]:h-full [&>svg]:w-full">
                    {solutionIcons[i]}
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {s.summary}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-ink-soft">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* Bridge to the methodology page instead of re-summarising it here */}
      <div className="bg-[#FAFBF6]">
        <div className="container-px mx-auto flex max-w-[1760px] flex-col items-start gap-4 py-10 sm:flex-row sm:items-center sm:justify-between lg:py-12">
          <Reveal variant="fade">
            <p className="text-lg font-semibold tracking-tight text-ink">
              Every model runs through the same delivery discipline.
            </p>
          </Reveal>
          <Reveal variant="fade">
            <ArrowLink href="/our-approach">See how we deliver</ArrowLink>
          </Reveal>
        </div>
      </div>

      <CTA />
    </>
  );
}
