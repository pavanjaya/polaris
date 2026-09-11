import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
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
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">Portfolio</span>
          </Reveal>
          <RevealText
            as="h1"
            text="650+ projects. 100 MW+ commissioned."
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              A representative selection of the C&I portfolio — rooftop and
              ground-mounted plants for industry leaders across India, and
              the first international pilot in Morocco.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal variant="fade">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
            Commissioned
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commissioned.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {ongoing.length > 0 && (
          <>
            <Reveal variant="fade">
              <h2 className="mt-20 text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
                Ongoing
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ongoing.map((p) => (
                <Reveal key={p.name}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Section>

      <div className="bg-[#FAFBF6]">
        <Section>
          <Reveal variant="fade">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
              Trusted by
            </h2>
          </Reveal>
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
      </div>

      <CTA />
    </>
  );
}
