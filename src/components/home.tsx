import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { Parallax } from "./motion/Parallax";
import { CountUp } from "./motion/CountUp";
import { Button, ArrowLink, ArrowRight } from "./ui";
import {
  solutions,
  projects,
  stats,
  insights,
  company,
  clients,
} from "@/lib/content";

/* ---------- flat illustrations (Uber-style, brand green) ---------- */

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

const illos: React.ReactNode[] = [
  // CAPEX — solar panel + sun
  <svg viewBox="0 0 48 48" fill="none" key="capex" aria-hidden="true">
    <rect x="2" y="7" width="29" height="29" rx="6" fill={IL.pale} />
    <path d="M7 35 L13 14 H35 L41 35 Z" fill={IL.green} />
    <path d="M7 35H41M16 24.5H33M22 14l-4 21M29 14l1 21" stroke="#fff" strokeWidth="1.5" />
    <circle cx="38" cy="12" r="7" fill={IL.ink} />
  </svg>,
  // OPEX / RESCO — coins
  <svg viewBox="0 0 48 48" fill="none" key="opex" aria-hidden="true">
    <ellipse cx="24" cy="38" rx="17" ry="6" fill={IL.pale} />
    <rect x="7" y="20" width="34" height="16" rx="8" fill={IL.green} />
    <ellipse cx="24" cy="20" rx="17" ry="6" fill={IL.dark} />
    <ellipse cx="24" cy="14" rx="12" ry="4.5" fill={IL.pale} />
    <path d="M24 9v10M20 12h8" stroke={IL.ink} strokeWidth="2.2" strokeLinecap="round" />
  </svg>,
  // Open Access & Group Captive — network
  <svg viewBox="0 0 48 48" fill="none" key="oa" aria-hidden="true">
    <rect x="3" y="3" width="22" height="22" rx="5" fill={IL.pale} />
    <rect x="17" y="18" width="27" height="27" rx="6" fill={IL.green} />
    <path d="M13 13 31 31" stroke={IL.dark} strokeWidth="3" strokeLinecap="round" />
    <circle cx="13" cy="13" r="4.5" fill={IL.ink} />
    <circle cx="31" cy="31" r="5" fill="#fff" />
  </svg>,
  // Lease — contract
  <svg viewBox="0 0 48 48" fill="none" key="lease" aria-hidden="true">
    <rect x="9" y="3" width="28" height="39" rx="5" fill={IL.pale} />
    <path d="M9 29h28v8a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5z" fill={IL.green} />
    <path d="M15 12h16M15 19h16M15 26h10" stroke={IL.dark} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M14 37c3-4 6-4 9 0s6 4 9 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // GLG — gauge
  <svg viewBox="0 0 48 48" fill="none" key="glg" aria-hidden="true">
    <circle cx="24" cy="27" r="20" fill={IL.pale} />
    <path d="M8 32A18 18 0 0 1 40 32" stroke={IL.green} strokeWidth="6" strokeLinecap="round" />
    <path d="M24 27 35 15" stroke={IL.ink} strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="24" cy="27" r="4" fill={IL.dark} />
  </svg>,
  // BESS — battery + bolt
  <svg viewBox="0 0 48 48" fill="none" key="bess" aria-hidden="true">
    <rect x="3" y="12" width="35" height="27" rx="6" fill={IL.pale} />
    <rect x="8" y="17" width="25" height="17" rx="3" fill={IL.green} />
    <rect x="38" y="20" width="6" height="11" rx="2" fill={IL.dark} />
    <path d="M23 14l-8 13h7l-3 9 10-14h-7z" fill={IL.ink} />
  </svg>,
];

/* ---------- Intro statement ---------- */

export function IntroStatement() {
  return (
    <section className="container-px mx-auto max-w-[1760px] py-20 lg:py-32">
      <Reveal>
        <p className="flex items-center gap-2 text-sm font-semibold text-brand-strong">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          What we do
        </p>
        <h2 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight text-ink sm:text-[2.75rem]">
          We engineer, finance and operate commercial &amp; industrial solar.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          From rooftop plants for SMEs to large captive and open-access projects
          for enterprises. A solar EPC founded in Nashik in {company.founded},{" "}
          {company.shortName} is a full-lifecycle partner — one point of
          accountability from feasibility to the 20th year of operation, across
          India and Morocco.
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- Client strip ---------- */

export function ClientStrip() {
  // duplicated so the CSS loop is seamless
  const loop = [...clients, ...clients];
  return (
    <section className="border-y border-line bg-paper py-12 lg:py-16">
      <Reveal variant="fade" className="container-px mx-auto max-w-[1760px]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
          Selected clients &amp; project stakeholders
        </p>
      </Reveal>

      <div className="marquee mt-8">
        <div className="marquee-track" aria-hidden="true">
          {loop.map((c, i) => (
            <span key={`${c}-${i}`} className="marquee-item">
              {c}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
        <span className="sr-only">
          Polaris clients include {clients.join(", ")}.
        </span>
      </div>
    </section>
  );
}

/* ---------- Our expertise ---------- */

export function Expertise() {
  return (
    <section className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Our expertise
          </h2>
          <ArrowLink href="/solutions">All our solutions</ArrowLink>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(0, 6).map((s, i) => (
            <Reveal as="article" key={s.slug} delay={(i % 3) * 70}>
              <span className="block h-14 w-14 [&>svg]:h-full [&>svg]:w-full">
                {illos[i]}
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">
                {s.summary}
              </p>
              <Link
                href="/solutions"
                className="mt-6 inline-block border-b border-ink/25 pb-1 text-[15px] font-medium text-ink transition-colors hover:border-ink"
              >
                Learn more
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- In a few numbers ---------- */

export function ByTheNumbers() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* section background pattern */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-ink/[0.06]"
      >
        <defs>
          <pattern
            id="dotgrid"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>

      <div className="container-px relative mx-auto max-w-[1760px]">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.6fr]">
          <Reveal
            variant="scale"
            className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl bg-ink p-9 text-white"
          >
            {/* inner motif */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]"
            >
              <rect width="100%" height="100%" fill="url(#dotgrid)" />
            </svg>

            <Reveal as="span" variant="mask" className="relative block">
              <h2 className="text-3xl font-bold tracking-tight">
                Polaris in a few numbers
              </h2>
            </Reveal>

            <Reveal variant="up" delay={120} className="relative mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                variant="up"
                delay={i * 90}
                className="flex flex-col justify-between rounded-xl border border-line bg-paper p-8"
              >
                <span className="h-1 w-10 rounded-full bg-brand" />
                <div className="mt-8">
                  <CountUp
                    value={s.value}
                    className="block text-4xl font-bold tracking-tight text-ink sm:text-[2.75rem]"
                  />
                  <Reveal variant="up" delay={i * 90 + 200}>
                    <span className="mt-2 block text-sm text-ink-soft">
                      {s.label}
                    </span>
                  </Reveal>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Brand promise ---------- */

export function BrandPromise() {
  return (
    <section className="bg-brand-tint">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-ink sm:text-[2.75rem]">
              Energy as an asset.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              A roof is underutilised real estate. By combining Tier-1
              engineering with investment-grade financial modelling — IRR,
              payback, depreciation and tax optimisation — we change the
              structure of a balance sheet, not just a utility bill.
            </p>
            <div className="mt-8">
              <Button href="/about">About Polaris</Button>
            </div>
          </Reveal>

          <Reveal
            variant="scale"
            delay={100}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist"
          >
            <Parallax speed={0.14} className="absolute inset-0">
              <Image
                src="/img/solar-rooftop.jpg"
                alt="Rooftop solar array on an industrial facility"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="scale-110 object-cover"
              />
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Our projects (horizontal) ---------- */

export function ProjectsRail() {
  return (
    <section className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Our projects
        </h2>
        <ArrowLink href="/projects">Discover our projects</ArrowLink>
      </Reveal>

      <div className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto pb-1">
        {projects.map((p) => (
          <Link
            key={p.name}
            href="/projects"
            className="u-card group w-[300px] shrink-0 snap-start overflow-hidden border border-line bg-paper sm:w-[340px]"
          >
            <div className="relative h-44 w-full overflow-hidden bg-mist">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="340px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 bg-white px-2 py-1 text-xs font-semibold text-ink">
                {p.tech}
              </span>
              <span className="absolute bottom-3 left-3 bg-black/55 px-2 py-1 text-xs font-semibold text-white">
                {p.capacity}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold tracking-tight text-ink">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-ink-faint">{p.location}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:underline">
                See project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------- Latest insights ---------- */

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function LatestNews() {
  return (
    <section className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Latest insights
          </h2>
          <ArrowLink href="/insights">See all insights</ArrowLink>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {insights.slice(0, 3).map((post, i) => (
            <Reveal as="article" key={post.slug} delay={(i % 3) * 70}>
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-mist shadow-[0_3px_14px_rgba(0,0,0,0.08)]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="mt-5 inline-block rounded bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-strong">
                  {post.category}
                </span>
                <h3 className="mt-4 line-clamp-2 text-2xl font-bold leading-[1.15] tracking-tight text-ink group-hover:underline">
                  {post.title}
                </h3>
                <time
                  dateTime={post.date}
                  className="mt-3 block text-sm text-ink-faint"
                >
                  {fmt(post.date)}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
