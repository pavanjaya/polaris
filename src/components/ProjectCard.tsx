import Image from "next/image";
import { projects } from "@/lib/content";

type Project = (typeof projects)[number];

const statusStyles: Record<string, string> = {
  Commissioned: "bg-white text-ink",
  Ongoing: "bg-amber/90 text-white",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="u-card group flex flex-col overflow-hidden border border-line bg-paper">
      <div className="relative h-48 w-full overflow-hidden bg-mist">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 px-2 py-1 text-xs font-semibold ${
            statusStyles[project.status] ?? "bg-white text-ink"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs text-ink-faint">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
          {project.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.blurb}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-faint">
              Type
            </dt>
            <dd className="mt-1 font-medium text-ink">{project.tech}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-faint">
              Capacity
            </dt>
            <dd className="mt-1 font-medium text-ink">{project.capacity}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
