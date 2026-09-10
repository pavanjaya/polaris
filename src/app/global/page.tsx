import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Section, SectionHeading } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { ProjectCard } from "@/components/ProjectCard";
import { global, offices, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Polaris Global",
  description:
    "Polaris Global Energie SARL — the same engineering-led, financially-modelled approach to industrial solar, delivered beyond India across Morocco and the wider MENA and African markets.",
};

const moroccoOffice = offices.find((o) => o.name === "Morocco Office");
const intlProject = projects.find((p) => p.location.includes("Morocco"));

export default function GlobalPage() {
  return (
    <>
      <PageHeader
        eyebrow={global.eyebrow}
        title={global.title}
        intro={global.intro}
      />

      {/* Where we operate */}
      <Section>
        <SectionHeading eyebrow="Footprint" title="Where we operate" />
        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {global.presence.map((m) => (
            <div key={m.market}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">
                {m.status}
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                {m.market}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The entity */}
      <div className="bg-brand-tint">
        <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="The entity"
                title="Polaris Global Energie SARL"
              />
              <dl className="mt-8 grid max-w-md grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
                <dt className="font-semibold text-ink">Incorporated</dt>
                <dd className="text-ink-soft">{global.entity.incorporated}</dd>
                <dt className="font-semibold text-ink">Based in</dt>
                <dd className="text-ink-soft">{global.entity.base}</dd>
                <dt className="font-semibold text-ink">Leadership</dt>
                <dd className="text-ink-soft">{global.entity.directors}</dd>
                {moroccoOffice && (
                  <>
                    <dt className="font-semibold text-ink">Office</dt>
                    <dd className="text-ink-soft">{moroccoOffice.address}</dd>
                    <dt className="font-semibold text-ink">Contact</dt>
                    <dd className="text-ink-soft">
                      <a
                        href={`mailto:${moroccoOffice.email}`}
                        className="hover:underline"
                      >
                        {moroccoOffice.email}
                      </a>
                      {" · "}
                      {moroccoOffice.phones.join(" / ")}
                    </dd>
                  </>
                )}
              </dl>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mist shadow-[0_3px_14px_rgba(0,0,0,0.08)]">
              <Image
                src="/img/projects/morocco.jpg"
                alt="Polaris international rooftop solar project in Morocco"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* International project */}
      {intlProject && (
        <Section>
          <SectionHeading
            eyebrow="First international project"
            title="Under execution now"
          />
          <div className="mt-12 max-w-md">
            <ProjectCard project={intlProject} />
          </div>
        </Section>
      )}

      {/* Why global */}
      <div className="bg-paper">
        <Section>
          <SectionHeading eyebrow="How it works" title="The model travels" />
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {global.why.map((w) => (
              <div key={w.title}>
                <h3 className="text-base font-semibold tracking-tight text-ink">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <CTA />
    </>
  );
}
