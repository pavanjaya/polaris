"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { projects } from "@/lib/content";

type Project = (typeof projects)[number];

const statusStyles: Record<string, string> = {
  Commissioned: "bg-ink text-white",
  Ongoing: "bg-amber/90 text-white",
};

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Tags({ project }: { project: Project }) {
  return (
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
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="u-card group flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-line/70 bg-paper text-left"
      >
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
          <Tags project={project} />

          <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-ink-faint">
            {project.location} · {project.year}
          </p>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
            {project.blurb}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand-strong">
            See project details
          </span>
        </div>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              aria-hidden="true"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            />
            <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-paper shadow-[0_30px_80px_-20px_rgba(11,21,37,0.45)]">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-paper/90 text-ink-faint shadow-sm backdrop-blur transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <CloseIcon />
              </button>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-mist">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
              </div>

              <div className="p-7 sm:p-9">
                {project.imageCaption && (
                  <p className="-mt-2 mb-5 text-xs italic text-ink-faint">
                    {project.imageCaption}
                  </p>
                )}
                <Tags project={project} />

                <h2
                  id={titleId}
                  className="mt-4 text-2xl font-semibold tracking-tight text-ink"
                >
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-ink-faint">
                  {project.location} · {project.year}
                </p>

                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                  {project.blurb}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-6 border-y border-line/70 py-6 sm:grid-cols-4">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink-faint">
                      Type
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {project.tech}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink-faint">
                      Capacity
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {project.capacity}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink-faint">
                      Annual generation
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {project.generation}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink-faint">
                      Effective savings
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {project.savings}
                    </dd>
                  </div>
                </dl>

                {project.highlights && (
                  <>
                    <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.15em] text-brand-strong">
                      Highlights
                    </h3>
                    <ul className="mt-4 space-y-3">
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
          </div>,
          document.body,
        )}
    </>
  );
}
