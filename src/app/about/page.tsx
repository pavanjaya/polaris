import type { Metadata } from "next";
import { PageHeader, Section, SectionHeading } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { company, milestones, values, founders, leadership, advantages } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Polaris Renewable Solutions is a solar EPC and energy-engineering firm founded in Nashik in 2015, operating across India and Morocco.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An energy-engineering firm, not a commodity installer"
        intro={`Founded in Nashik in ${company.founded}, Polaris has grown into a team of nearly 100 professionals across India and Morocco — with 650+ commissioned projects and 100+ MW of installed capacity.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Story" title="Why we started" />
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              In 2015 we asked a question few in India&apos;s energy sector were
              willing to confront: why should industrial growth come at the cost
              of unpredictable power bills? Energy costs were spiralling, grid
              reliability was eroding, and businesses were making multi-crore
              capital decisions without a coherent framework for their power
              infrastructure.
            </p>
            <p>
              We saw this not as an inevitability but as an engineering problem
              waiting to be solved. Polaris was founded to deliver that solution —
              not as a commodity installer, but as an energy-engineering firm that
              understands the physics of solar generation as fluently as the
              financial logic of a CFO&apos;s spreadsheet.
            </p>
            <p>
              A decade later, that has grown into 650+ commissioned projects,
              100+ MW of installed capacity, and cumulative turnover exceeding
              €17.5 million (₹187.76 crore) — with operations in India and, since
              2025, Morocco as Polaris Global Energie SARL.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-paper">
        <Section>
          <SectionHeading eyebrow="Journey" title="Milestones" />
          <ol className="mt-12 space-y-8 border-l border-line pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-brand bg-paper" />
                <div className="text-sm font-semibold text-brand-strong">{m.year}</div>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-soft">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <Section>
        <SectionHeading eyebrow="Purpose" title="What we hold onto" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="border-l-2 border-brand/60 pl-5">
              <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="bg-paper">
        <Section>
          <SectionHeading eyebrow="Why Polaris" title="The Polaris advantage" />
          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.title}>
                <h3 className="text-base font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading eyebrow="Leadership" title="Meet the founders" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {founders.map((p) => (
            <div key={p.name} className="rounded-lg border border-line bg-paper p-7">
              <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-strong">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{p.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => (
            <div key={p.name}>
              <h3 className="text-base font-semibold text-ink">{p.name}</h3>
              <p className="mt-0.5 text-sm text-brand-strong">{p.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
