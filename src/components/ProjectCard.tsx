import Image from "next/image";
import { projects } from "@/lib/content";

type Project = (typeof projects)[number];

const statusStyles: Record<string, string> = {
  Commissioned: "bg-ink text-white",
  Ongoing: "bg-amber/90 text-white",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="u-card group flex flex-col overflow-hidden rounded-lg border border-line/70 bg-paper">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-mist">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 pb-8">
        <div className="flex flex-wrap gap-2">
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

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-ink-faint">
          {project.location} · {project.year}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.blurb}
        </p>
      </div>
    </article>
  );
}
