import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { ProcessRail } from "./ProcessRail";
import { Parallax } from "./motion/Parallax";
import { CountUp } from "./motion/CountUp";
import { Button, ArrowLink, ArrowRight } from "./ui";
import { RevealText } from "./RevealText";
import { SolarSystemLines } from "./SolarSystemLines";
import { TestimonialCarousel } from "./TestimonialCarousel";
import {
  offerings,
  projects,
  insights,
  company,
  clients,
  clientLogos,
  process as deliverySteps,
  impact,
  trust,
  segments,
  global as globalReach,
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

const introStats = [
  { value: "650+", label: "Projects delivered" },
  { value: "100 MW+", label: "Installed capacity" },
  { value: "2", label: "Countries — India & Morocco" },
  { value: "25 yr", label: "Asset lifecycle covered" },
];

export function IntroStatement() {
  return (
    <section className="bg-aura">
      <div className="container-px mx-auto grid max-w-[1760px] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:py-32">
        <div>
          <Reveal variant="fade">
            <span className="pill">What we do</span>
          </Reveal>
          <RevealText
            text="We engineer, finance and operate commercial & industrial solar."
            className="mt-5 block max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
          />
          <Reveal variant="up" delay={60}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              From rooftop plants for SMEs to large captive and open-access
              projects for enterprises. A solar EPC founded in Nashik in{" "}
              {company.founded}, {company.shortName} is a full-lifecycle partner —
              one point of accountability from feasibility to the 20th year of
              operation, across India and Morocco.
            </p>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {introStats.map((it) => (
                <div key={it.label}>
                  <dt className="text-2xl font-bold tracking-tight text-ink">
                    {it.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-ink-faint">
                    {it.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={120} className="hidden lg:block">
          <SolarSystemLines className="ml-auto" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Client strip ---------- */

export function ClientStrip() {
  // duplicated so the CSS loop is seamless
  const loop = [...clientLogos, ...clientLogos];
  return (
    <section className="bg-paper py-12 lg:py-16">
      <Reveal variant="fade" className="container-px mx-auto max-w-[1760px]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
          Trusted on 650+ industrial projects
        </p>
      </Reveal>

      <div className="marquee mt-9">
        <div className="marquee-track" aria-hidden="true">
          {loop.map((c, i) => (
            <span key={`${c.name}-${i}`} className="marquee-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt="" loading="lazy" />
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

/* ---------- Where we work ---------- */

export function Footprint() {
  return (
    <section className="relative overflow-hidden bg-aura">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] text-ink/[0.05]">
        <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
          <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="88" ry="34" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="88" ry="64" stroke="currentColor" strokeWidth="1" />
          <path d="M100 12v176M32 46a120 120 0 0 0 136 0M32 154a120 120 0 0 1 136 0" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="container-px relative mx-auto max-w-[1760px] py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-24 xl:gap-32">
          <div>
            <Reveal variant="fade">
              <span className="pill">Global reach</span>
            </Reveal>
            <RevealText
              text="Indian engineering discipline, delivered across borders."
              className="mt-5 block max-w-xl text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
            />
            <Reveal variant="up" delay={60}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                {globalReach.intro}
              </p>
              <div className="mt-8">
                <ArrowLink href="/global">Explore Polaris Global</ArrowLink>
              </div>
            </Reveal>
          </div>

          <Reveal
            variant="up"
            delay={100}
            className="divide-y divide-ink/10 border-y border-ink/10"
          >
            {globalReach.presence.map((m) => (
              <div key={m.market} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-5">
                <div>
                  <p className="font-bold text-ink">{m.market}</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-brand-strong">
                    {m.status}
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {m.detail}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Global scene divider ---------- */

export function GlobalScene() {
  return (
    <section className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] pb-16 lg:pb-24">
        <Reveal variant="scale" className="overflow-hidden rounded-2xl">
          <Image
            src="/img/global-reach.jpg"
            alt="Illustrated montage of world landmarks with wind turbines, solar panels, a container port, rail and power infrastructure."
            width={1800}
            height={1009}
            sizes="(max-width: 1760px) 100vw, 1760px"
            className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Who we serve ---------- */

export function Segments() {
  return (
    <section className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <Reveal variant="fade">
          <span className="pill">Who we serve</span>
        </Reveal>
        <RevealText
          text="Built for energy-intensive industry."
          className="mt-5 block max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
        />

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal
              as="article"
              key={s.name}
              delay={(i % 3) * 70}
              className="border-t border-ink/10 pt-5"
            >
              <h3 className="text-lg font-bold tracking-tight text-ink">
                {s.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {s.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Polaris (trust) ---------- */

const trustIcons: React.ReactNode[] = [
  // engineering-led — drafting compass
  <svg key="eng" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="5" r="2" />
    <path d="M10.5 6.8 4 20M13.5 6.8 20 20M7.7 14h8.6" />
  </svg>,
  // standards — shield with check
  <svg key="std" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V6z" />
    <path d="M9 12l2 2 4-4.5" />
  </svg>,
  // financial model — rising bars
  <svg key="fin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 20h16M7 20v-6M12 20V9M17 20v-9M6 10l5-4 3 2 5-5" />
  </svg>,
  // year 25 — clock
  <svg key="om" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.5l3.5 2" />
  </svg>,
];

export function TrustRow() {
  return (
    <section className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <Reveal variant="fade">
          <span className="pill">Why Polaris</span>
        </Reveal>
        <RevealText
          text="Discipline you can underwrite."
          className="mt-5 block max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
        />

        <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-20">
          {trust.map((t, i) => (
            <Reveal as="article" key={t.title} delay={(i % 4) * 70}>
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-tint text-brand-strong [&>svg]:h-7 [&>svg]:w-7">
                {trustIcons[i]}
              </span>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-ink">
                {t.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {t.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Careers nudge ---------- */

export function CareersStrip() {
  return (
    <section className="bg-[#faf9f3]">
      <div className="container-px mx-auto max-w-[1760px] py-10 lg:py-12">
        <Reveal
          variant="fade"
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-lg font-bold tracking-tight text-ink">
              Polaris is growing — across India and Morocco.
            </p>
            <p className="mt-1 text-[15px] text-ink-soft">
              Engineers, project managers and energy analysts who want to own
              outcomes, not tickets.
            </p>
          </div>
          <ArrowLink href="/careers">See how we hire</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Our solutions ---------- */

const offeringIcons = [illos[0], illos[2], illos[1], illos[4]];

export function Expertise() {
  return (
    <section className="bg-[#FAFBF6]">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealText
            text="Our solutions"
            className="text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
          />
          <Reveal variant="fade">
            <ArrowLink href="/solutions">Explore all solutions</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((s, i) => (
            <Reveal as="article" key={s.title} delay={(i % 4) * 70}>
              <span className="block h-14 w-14 [&>svg]:h-full [&>svg]:w-full">
                {offeringIcons[i]}
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
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

/* ---------- How we deliver ---------- */

export function Process() {
  return (
    <section
      id="how-we-work"
      className="container-px mx-auto max-w-[1760px] scroll-mt-24 py-20 lg:py-28"
    >
      <Reveal variant="fade">
        <span className="pill">How we deliver</span>
      </Reveal>
      <RevealText
        text="One accountable team, from the financial model to year 25."
        className="mt-5 block max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
      />

      <Reveal variant="fade">
        <ProcessRail steps={deliverySteps} />
      </Reveal>
    </section>
  );
}

/* ---------- Environmental impact ---------- */

function ImpactSun() {
  const CX = 600;
  const CY = 210;
  const RAYS = 30;
  return (
    <svg
      viewBox="0 0 1200 420"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      className="impact-sun h-full w-full"
      style={{ transformOrigin: `${CX}px ${CY}px` }}
    >
      <defs>
        <radialGradient id="sunCoreGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.3" stopColor="#d9fbc2" />
          <stop offset="0.65" stopColor="#7dcc5e" stopOpacity="0.55" />
          <stop offset="1" stopColor="#7dcc5e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* expanding energy rings */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          className="ring"
          cx={CX}
          cy={CY}
          r="60"
          stroke="#8fe06e"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ animationDelay: `${i * 1}s`, transformOrigin: `${CX}px ${CY}px` }}
        />
      ))}

      {/* rotating rays */}
      <g className="rays" style={{ transformOrigin: `${CX}px ${CY}px` }}>
        {Array.from({ length: RAYS }).map((_, i) => {
          const a = (i / RAYS) * Math.PI * 2;
          const r1 = 52;
          const r2 = i % 2 === 0 ? 220 : 140;
          return (
            <line
              key={i}
              x1={CX + Math.cos(a) * r1}
              y1={CY + Math.sin(a) * r1}
              x2={CX + Math.cos(a) * r2}
              y2={CY + Math.sin(a) * r2}
              stroke="#a9ef8a"
              strokeWidth="3"
              strokeLinecap="round"
              opacity={i % 2 === 0 ? 0.85 : 0.45}
            />
          );
        })}
      </g>

      {/* core */}
      <circle
        className="core"
        cx={CX}
        cy={CY}
        r="110"
        fill="url(#sunCoreGrad)"
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <circle cx={CX} cy={CY} r="24" fill="#eafce0" />
    </svg>
  );
}

export function ImpactBand() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 text-white lg:py-28">
      {/* radiant sun */}
      <div className="pointer-events-none absolute inset-x-0 top-[6rem] h-[22rem] lg:top-[8rem] lg:h-[30rem]">
        <div className="absolute left-1/2 top-1/2 h-72 w-[44rem] max-w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-active-green/25 blur-[130px]" />
        <ImpactSun />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-[1760px]">
        <Reveal variant="fade">
          <span className="pill">Impact</span>
        </Reveal>
        <RevealText
          text="Clean energy that compounds."
          className="mt-5 block max-w-2xl text-3xl font-bold tracking-tight sm:text-[2.5rem]"
        />
        <Reveal variant="up" delay={80}>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Every Polaris system keeps generating — and displacing grid carbon —
            for its full 25-year life.
          </p>
        </Reveal>

        <div className="mt-[19rem] grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-[24rem] lg:grid-cols-4">
          {impact.items.map((it, i) => (
            <Reveal key={it.label} variant="up" delay={i * 80}>
              <CountUp
                value={it.value}
                className="block bg-gradient-to-r from-[#9be87c] via-brand to-brand-strong bg-clip-text text-[2.5rem] font-bold tracking-tight text-transparent sm:text-5xl"
              />
              <span className="mt-2 block text-sm text-white/60">{it.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={120}>
          <p className="mt-10 text-xs text-white/40">{impact.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Brand promise ---------- */

export function BrandPromise() {
  return (
    <section className="relative overflow-hidden bg-aura">
      <div className="pointer-events-none absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-active-green/20 blur-[110px]" />
      <div className="container-px relative mx-auto max-w-[1760px] py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Reveal variant="fade">
              <span className="pill">Our philosophy</span>
            </Reveal>
            <RevealText
              text="Energy as an asset."
              className="mt-5 block max-w-xl text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
            />
            <Reveal variant="up" delay={60}>
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
          </div>

          <Reveal
            variant="scale"
            delay={100}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist"
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
    <section className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <RevealText
          text="Our projects"
          className="text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
        />
        <Reveal variant="fade">
          <ArrowLink href="/projects">Discover our projects</ArrowLink>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto pb-1">
        {projects.map((p) => (
          <Link
            key={p.name}
            href="/projects"
            className="u-card group w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl border border-line/70 bg-paper sm:w-[340px]"
          >
            <div className="relative h-44 w-full overflow-hidden bg-mist">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="340px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-strong">
                  {p.tech}
                </span>
                <span className="inline-flex rounded-full bg-ink/[0.06] px-2.5 py-1 text-xs font-semibold text-ink">
                  {p.capacity}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-ink">
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
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

export function Testimonials() {
  return <TestimonialCarousel />;
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
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealText
            text="Latest insights"
            className="text-3xl font-bold tracking-tight text-ink sm:text-[2.5rem]"
          />
          <Reveal variant="fade">
            <ArrowLink href="/insights">See all insights</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {insights.slice(0, 3).map((post, i) => (
            <Reveal as="article" key={post.slug} delay={(i % 3) * 70}>
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-mist">
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
