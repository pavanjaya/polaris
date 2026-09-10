import type { Metadata } from "next";
import { PageHeader, Section, SectionHeading, Card, Button } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { careers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Polaris is a small, engineering-led solar team across India and Morocco. We hire engineers, project managers and energy analysts who want to own outcomes end to end.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Own outcomes, not tickets."
        intro={careers.intro}
      />

      <Section>
        <SectionHeading
          eyebrow="How it works here"
          title="A team built around ownership"
          intro="Four things that tend to define whether someone thrives at Polaris."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {careers.culture.map((c) => (
            <Card key={c.title} className="p-8">
              <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <div className="bg-[#faf9f3]">
        <Section>
          <SectionHeading eyebrow="Who we hire" title="Open applications" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {careers.roles} We don&rsquo;t always have a role posted, but we
            always read a good application. Send a CV and a short note on a
            project you owned to{" "}
            <a
              href={`mailto:${careers.email}`}
              className="font-semibold text-brand-strong hover:underline"
            >
              {careers.email}
            </a>
            .
          </p>
          <div className="mt-8">
            <Button href={`mailto:${careers.email}`}>Send an application</Button>
          </div>
        </Section>
      </div>

      <CTA />
    </>
  );
}
