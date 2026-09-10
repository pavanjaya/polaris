import type { Metadata } from "next";
import { PageHeader, Section, SectionHeading, Card } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { opportunity } from "@/lib/content";

export const metadata: Metadata = {
  title: "The case for solar",
  description:
    "For industrial enterprises, structured solar is no longer philosophical — it is mathematical. The financial and carbon case, and the metrics Polaris applies.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="The opportunity"
        title="No longer philosophical — mathematical"
        intro={opportunity.intro}
      />

      <div className="bg-paper">
        <div className="container-px mx-auto grid max-w-[1760px] gap-8 py-14 sm:grid-cols-2 lg:grid-cols-5">
          {opportunity.financials.map((f) => (
            <div key={f.metric}>
              <div className="text-2xl font-semibold tracking-tight text-brand-strong sm:text-[1.75rem]">
                {f.value}
              </div>
              <div className="mt-1 text-sm font-medium text-ink">{f.metric}</div>
              <div className="mt-1 text-xs leading-snug text-ink-faint">{f.note}</div>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Drivers"
          title="What is forcing the decision"
          intro="Four pressures have turned the C&I solar question from an ESG initiative into a board-level financial one."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {opportunity.drivers.map((d) => (
            <Card key={d.title} className="p-8">
              <h3 className="text-lg font-semibold text-ink">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{d.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <div className="bg-paper">
        <Section>
          <SectionHeading eyebrow="Context" title="A national shift" />
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {opportunity.context}
          </p>
        </Section>
      </div>

      <CTA />
    </>
  );
}
