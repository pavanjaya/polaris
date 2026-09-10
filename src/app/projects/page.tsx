import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/CTA";
import { projects, clients } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected commercial & industrial solar projects delivered by Polaris across India and Morocco — rooftop and ground-mounted, CAPEX and beyond.",
};

export default function ProjectsPage() {
  const commissioned = projects.filter((p) => p.status === "Commissioned");
  const ongoing = projects.filter((p) => p.status !== "Commissioned");

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="650+ projects. 100 MW+ commissioned."
        intro="A representative selection of the C&I portfolio — rooftop and ground-mounted plants for industry leaders across India, and the first international pilot in Morocco."
      />

      <Section>
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
          Commissioned
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commissioned.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        {ongoing.length > 0 && (
          <>
            <h2 className="mt-20 text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
              Ongoing
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ongoing.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </>
        )}

        <h2 className="mt-24 text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
          Trusted by
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {clients.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
