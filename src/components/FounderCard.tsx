"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";

type Founder = {
  name: string;
  honorific?: string;
  role: string;
  bio: string[];
  photo?: string;
};

function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

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

/**
 * Founder tile: avatar, name/role, a 3-line-clamped first paragraph of the
 * bio, and a "Read <first name>'s bio" trigger that opens the full
 * multi-paragraph bio in a modal — instead of dumping the whole bio on the
 * card, à la Uber's leadership page.
 */
export function FounderCard({ founder }: { founder: Founder }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const firstName = founder.name.split(" ")[0];
  const fullName = founder.honorific
    ? `${founder.honorific} ${founder.name}`
    : founder.name;

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
    <article>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-brand-tint">
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={fullName}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-semibold tracking-tight text-brand-dark">
            {initials(founder.name)}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
        {fullName}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-strong">{founder.role}</p>
      <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-soft">
        {founder.bio[0]}
      </p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-brand-strong hover:underline"
      >
        Read {firstName}&apos;s bio
      </button>

      {open && (
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
          <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-paper p-8 shadow-[0_30px_80px_-20px_rgba(11,21,37,0.45)] sm:p-9">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <CloseIcon />
            </button>

            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-brand-tint">
              {founder.photo ? (
                <Image
                  src={founder.photo}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-base font-semibold text-brand-dark">
                  {initials(founder.name)}
                </span>
              )}
            </div>
            <h3
              id={titleId}
              className="mt-4 text-xl font-semibold tracking-tight text-ink"
            >
              {fullName}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-strong">
              {founder.role}
            </p>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              {founder.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
