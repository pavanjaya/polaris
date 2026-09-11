import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CountUp } from "@/components/motion/CountUp";
import { TimelineProgress } from "@/components/TimelineProgress";
import {
  company,
  milestones,
  values,
  founders,
  leadership,
  advantages,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Polaris Renewable Solutions is a solar EPC and energy-engineering firm founded in Nashik in 2015, operating across India and Morocco.",
};

/* ---------- flat illustrations, same family as the homepage icons ---------- */

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

const valueIcons: React.ReactNode[] = [
  // Our purpose — target
  <svg viewBox="0 0 48 48" fill="none" key="purpose" aria-hidden="true">
    <rect x="3" y="4" width="26" height="26" rx="6" fill={IL.pale} />
    <circle cx="26" cy="24" r="18" fill={IL.green} />
    <circle cx="26" cy="24" r="11" fill="#fff" />
    <circle cx="26" cy="24" r="5" fill={IL.dark} />
    <circle cx="26" cy="24" r="1.8" fill={IL.ink} />
  </svg>,
  // Our mission — forward arrow
  <svg viewBox="0 0 48 48" fill="none" key="mission" aria-hidden="true">
    <rect x="4" y="8" width="26" height="26" rx="6" fill={IL.pale} />
    <path d="M8 40 L40 8 L30 40 L24 28 L8 40Z" fill={IL.green} />
    <path d="M24 28 L40 8" stroke={IL.dark} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="40" cy="8" r="4" fill={IL.ink} />
  </svg>,
  // Our vision — eye
  <svg viewBox="0 0 48 48" fill="none" key="vision" aria-hidden="true">
    <rect x="11" y="3" width="26" height="26" rx="6" fill={IL.pale} />
    <path
      d="M4 24C4 24 13 10 24 10C35 10 44 24 44 24C44 24 35 38 24 38C13 38 4 24 4 24Z"
      fill={IL.green}
    />
    <circle cx="24" cy="24" r="9" fill={IL.dark} />
    <circle cx="24" cy="24" r="4" fill={IL.ink} />
    <circle cx="21" cy="21" r="2" fill="#fff" />
  </svg>,
  // Our philosophy — bulb + leaf, echoing the Polaris mark
  <svg viewBox="0 0 48 48" fill="none" key="philosophy" aria-hidden="true">
    <rect x="12" y="3" width="26" height="26" rx="6" fill={IL.pale} />
    <circle cx="24" cy="20" r="16" fill={IL.green} />
    <path d="M24 12 C16 16 16 26 24 32 C32 26 32 16 24 12Z" fill="#fff" />
    <path d="M24 12 V32" stroke={IL.green} strokeWidth="2" />
    <path
      d="M17 38 h14 M19 42 h10 M21 46 h6"
      stroke={IL.dark}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>,
];

const advantageIcons: React.ReactNode[] = [
  // Engineering-led approach — drafting compass
  <svg viewBox="0 0 48 48" fill="none" key="eng" aria-hidden="true">
    <rect x="3" y="4" width="26" height="26" rx="6" fill={IL.pale} />
    <path d="M24 10 L36 40 H29.5 L24 25 L18.5 40 H12 Z" fill={IL.green} />
    <path d="M16 33 H32" stroke={IL.dark} strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="10" r="5.5" fill={IL.ink} />
    <circle cx="24" cy="10" r="1.8" fill="#fff" />
  </svg>,
  // Technology agnosticism — neutral overlapping marks
  <svg viewBox="0 0 48 48" fill="none" key="tech" aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
    <circle cx="17" cy="24" r="12" fill={IL.green} />
    <circle cx="31" cy="24" r="12" fill={IL.dark} opacity="0.9" />
    <circle cx="24" cy="24" r="5" fill="#fff" />
  </svg>,
  // Proven industrial track record — medal
  <svg viewBox="0 0 48 48" fill="none" key="track" aria-hidden="true">
    <rect x="12" y="3" width="24" height="24" rx="6" fill={IL.pale} />
    <circle cx="24" cy="21" r="14" fill={IL.green} />
    <path d="M17 32 L13 45 L24 39 L35 45 L31 32" fill={IL.dark} />
    <path
      d="M18 21 L22 25 L31 15"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Financial intelligence — bars + trend
  <svg viewBox="0 0 48 48" fill="none" key="fin" aria-hidden="true">
    <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
    <rect x="9" y="31" width="7" height="11" rx="2" fill={IL.dark} />
    <rect x="20.5" y="23" width="7" height="19" rx="2" fill={IL.green} />
    <rect x="32" y="15" width="7" height="27" rx="2" fill={IL.green} />
    <path
      d="M10 21 L20 14 L27 18 L39 8"
      stroke={IL.ink}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="39" cy="8" r="3" fill={IL.ink} />
  </svg>,
  // Full-lifecycle ownership — loop
  <svg viewBox="0 0 48 48" fill="none" key="cycle" aria-hidden="true">
    <rect x="3" y="3" width="22" height="22" rx="7" fill={IL.pale} />
    <circle
      cx="27"
      cy="27"
      r="17"
      fill="none"
      stroke={IL.green}
      strokeWidth="7"
      strokeDasharray="80 20"
      strokeLinecap="round"
      transform="rotate(-45 27 27)"
    />
    <path d="M27 27 L36 20 L38 29Z" fill={IL.dark} />
    <circle cx="27" cy="27" r="4" fill={IL.ink} />
  </svg>,
  // Multi-geography capability — globe
  <svg viewBox="0 0 48 48" fill="none" key="geo" aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
    <circle cx="26" cy="24" r="18" fill={IL.green} />
    <path
      d="M8 24h36M26 6c6 6 6 30 0 36M26 6c-6 6-6 30 0 36"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      opacity="0.85"
    />
    <circle cx="26" cy="24" r="4" fill={IL.ink} />
  </svg>,
];

const heroStats = [
  { value: "650+", label: "Projects delivered" },
  { value: "100 MW+", label: "Installed capacity" },
  { value: "100+", label: "Team members" },
  { value: "2", label: "Countries — India & Morocco" },
];

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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">About</span>
          </Reveal>
          <RevealText
            as="h1"
            text="An energy-engineering firm, not a commodity installer"
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Founded in Nashik in {company.founded}, Polaris has grown into a
              team of engineers and analysts operating across India and
              Morocco — one point of accountability from feasibility to year
              25.
            </p>
          </Reveal>
          <Reveal variant="up" delay={130}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {heroStats.map((it) => (
                <div key={it.label}>
                  <dt>
                    <CountUp
                      value={it.value}
                      className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
                    />
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-ink-faint">
                    {it.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Story" title="Why we started" />
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              In 2015 we asked a question few in India&apos;s energy sector were
              willing to confront: why should industrial growth come at the cost
              of unpredictable power bills? Energy costs were spiralling, grid
              reliability was eroding, and businesses were making multi-crore
              capital decisions without a coherent framework for their power
              infrastructure.
            </p>
            <p>
              We saw this not as an inevitability but as an engineering problem
              waiting to be solved. Polaris was founded to deliver that solution —
              not as a commodity installer, but as an energy-engineering firm that
              understands the physics of solar generation as fluently as the
              financial logic of a CFO&apos;s spreadsheet.
            </p>
            <p>
              A decade later, that has grown into 650+ commissioned projects,
              100+ MW of installed capacity, and cumulative turnover exceeding
              €17.5 million (₹187.76 crore) — with operations in India and, since
              2025, Morocco as Polaris Global Energie SARL.
            </p>
          </div>
        </div>
      </Section>

      {/* Milestones */}
      <div className="bg-[#FAFBF6]">
        <Section>
          <SectionHeading eyebrow="Journey" title="Milestones" />
          <div className="relative mt-12 pl-8" data-timeline-track>
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-px bg-ink/15"
            />
            <TimelineProgress />
            <ol className="space-y-8">
              {milestones.map((m) => (
                <Reveal as="li" key={m.year} variant="up" className="relative">
                  <span className="absolute -left-10 top-1 h-4 w-4 rounded-full border-2 border-brand bg-[#FAFBF6]" />
                  <div className="text-lg font-semibold tracking-tight text-brand-strong">
                    {m.year}
                  </div>
                  <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                    {m.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Section>
      </div>

      {/* Values */}
      <Section>
        <SectionHeading eyebrow="Purpose" title="What we hold onto" />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="article" key={v.title} delay={(i % 4) * 70}>
              <span className="block h-14 w-14 [&>svg]:h-full [&>svg]:w-full">
                {valueIcons[i]}
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {v.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Advantage */}
      <div className="bg-[#FAFBF6]">
        <Section>
          <SectionHeading eyebrow="Why Polaris" title="The Polaris advantage" />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal as="article" key={a.title} delay={(i % 3) * 70}>
                <span className="block h-12 w-12 [&>svg]:h-full [&>svg]:w-full">
                  {advantageIcons[i]}
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* Leadership */}
      <Section>
        <SectionHeading eyebrow="Leadership" title="Executive team" />
        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {founders.map((p, i) => (
            <Reveal as="article" key={p.name} delay={(i % 3) * 70}>
              <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-brand-tint">
                <span className="text-4xl font-semibold tracking-tight text-brand-dark">
                  {initials(p.name)}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                {p.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-strong">
                {p.role}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {p.bio}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-ink/10 pt-16">
          <Reveal as="span" variant="mask" className="block">
            <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
              Board of Directors
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 70}>
                <h4 className="text-base font-semibold tracking-tight text-ink">
                  {p.name}
                </h4>
                <p className="mt-0.5 text-sm text-brand-strong">{p.role}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {p.bio}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
