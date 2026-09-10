"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, company, regions } from "@/lib/content";
import { Logo } from "./Logo";

function RegionToggle({ overlay }: { overlay: boolean }) {
  const pathname = usePathname();
  const isGlobal = pathname.startsWith("/global");
  const seg = "rounded-md px-2.5 py-1 text-[13px] font-semibold transition-colors";
  const active = overlay ? "bg-white text-ink" : "bg-ink text-white";
  const idle = overlay
    ? "text-white/80 hover:text-white"
    : "text-ink-soft hover:text-ink";
  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg border p-0.5 ${
        overlay ? "border-white/30" : "border-ink/15"
      }`}
    >
      {regions.map((r) => {
        const on = r.label === "Global" ? isGlobal : !isGlobal;
        return (
          <Link key={r.label} href={r.href} className={`${seg} ${on ? active : idle}`}>
            {r.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  const isHome = pathname === "/";
  // Transparent overlay only on the homepage hero, before scrolling.
  const overlay = isHome && !solid && !open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overlay ? "bg-transparent" : "bg-paper/95 backdrop-blur"
      }`}
    >
      <div className="container-px mx-auto flex h-[83px] max-w-[1760px] items-center justify-between">
        <Link href="/" aria-label={`${company.name} home`}>
          <Logo height={66} tone={overlay ? "light" : "dark"} />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium transition-colors hover:opacity-70 ${
                  overlay
                    ? "text-white"
                    : active
                      ? "text-brand-strong"
                      : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <RegionToggle overlay={overlay} />
          <Link
            href="/contact"
            className={`rounded-lg px-5 py-2.5 text-[14px] font-semibold transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-hover hover:text-ink ${
              overlay ? "bg-white text-ink" : "bg-ink text-white"
            }`}
          >
            Request a call back
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border xl:hidden ${
            overlay ? "border-white/40 text-white" : "border-ink/15 text-ink"
          }`}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper xl:hidden">
          <nav className="container-px mx-auto flex max-w-[1760px] flex-col py-3">
            <div className="mb-2 flex gap-0.5 self-start rounded-lg border border-ink/15 p-0.5">
              {regions.map((r) => {
                const on =
                  r.label === "Global"
                    ? pathname.startsWith("/global")
                    : !pathname.startsWith("/global");
                return (
                  <Link
                    key={r.label}
                    href={r.href}
                    className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
                      on ? "bg-ink text-white" : "text-ink-soft"
                    }`}
                  >
                    {r.label}
                  </Link>
                );
              })}
            </div>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3.5 text-sm font-medium text-ink last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 rounded-lg bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-hover hover:text-ink"
            >
              Request a call back
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
