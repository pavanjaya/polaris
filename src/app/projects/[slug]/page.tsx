import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.blurb };
}

const statusStyles: Record<string, string> = {
  Commissioned: "bg-ink text-white",
  Ongoing: "bg-amber/90 text-white",
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const stats = [
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
    { label: "Commercial Model", value: project.model },
    { label: "Type", value: project.tech },
    { label: "Capacity", value: project.capacity },
    ...(project.generation !== "—"
      ? [{ label: "Annual Generation", value: project.generation }]
      : []),
    ...(project.savings !== "—"
      ? [{ label: "Effective Savings", value: project.savings }]
      : []),
  ];

  return (
    <>
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-10 pt-[calc(83px+2.5rem)] lg:pb-14 lg:pt-[calc(83px+4rem)]">
          <Link
            href="/projects"
            className="text-sm font-semibold text-brand-strong transition-colors hover:text-ink"
          >
            ← All projects
          </Link>

          <div className="mt-8 flex flex-wrap gap-2">
            <span
              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                statusStyles[project.status] ?? "bg-ink text-white"
              }`}
            >
              {project.status}
            </span>
            <span className="inline-flex rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-strong">
              {project.tech}
            </span>
            <span className="inline-flex rounded-full bg-ink/[0.06] px-2.5 py-1 text-xs font-semibold text-ink">
              {project.capacity}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3rem]">
            {project.name}
          </h1>
        </div>
      </section>

      <div className="container-px relative mx-auto max-w-[1760px] -mt-4 lg:-mt-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-mist lg:aspect-[21/9]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1760px) 100vw, 1760px"
            priority
            className="object-cover"
          />
          {project.imageCaption && (
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-3 pt-10 text-xs italic text-white/90 sm:px-7">
              {project.imageCaption}
            </p>
          )}
        </div>
      </div>

      <div className="container-px mx-auto max-w-[1760px] py-14 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Stats sidebar */}
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-ink/10 pt-8 sm:grid-cols-3 lg:grid-cols-2 lg:border-t-0 lg:pt-0">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-wide text-ink-faint">
                  {s.label}
                </dt>
                <dd className="mt-1.5 text-lg font-semibold tracking-tight text-ink">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Blurb + highlights */}
          <div>
            <p className="text-xl leading-relaxed text-ink-soft">
              {project.blurb}
            </p>

            {project.highlights && (
              <>
                <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.15em] text-brand-strong">
                  Highlights
                </h2>
                <ul className="mt-5 space-y-4">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
