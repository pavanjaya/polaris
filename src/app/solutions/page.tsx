import type { Metadata } from "next";
import { PageHeader, Section, Card } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "CAPEX, OPEX/RESCO, open access & group captive, lease, BESS, end-to-end EPC and financial advisory — the Polaris solutions portfolio for C&I solar.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="One partner. Every commercial model."
        intro="From straightforward CAPEX deployments to OPEX, group-captive and open-access structures — Polaris matches the commercial model to your balance sheet, then engineers and operates the asset for its full 25-year life."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((s) => (
            <Card key={s.slug} className="p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">
                {s.slug.replace(/-/g, " ")}
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-ink">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.summary}</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <div className="bg-paper">
        <Section>
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Feasibility & design",
                body: "Load analysis, generation simulation, structural and financial modelling — IRR, payback and depreciation modelled before a decision is made.",
              },
              {
                step: "02",
                title: "Engineering & execution",
                body: "In-house electrical and structural engineers, Tier-1 equipment specified on fit not margin, HT evacuation and safety to US/EU/Indian benchmarks.",
              },
              {
                step: "03",
                title: "Monitoring & lifecycle O&M",
                body: "SCADA monitoring, analytics and long-term operations & maintenance — one point of accountability to year 25 of operation.",
              },
            ].map((phase) => (
              <div key={phase.step}>
                <div className="text-sm font-semibold text-brand-strong">{phase.step}</div>
                <h3 className="mt-2 text-lg font-semibold text-ink">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{phase.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <CTA />
    </>
  );
}
