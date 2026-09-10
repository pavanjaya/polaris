import type { Metadata } from "next";
import { PageHeader, Section, SectionHeading, Button } from "@/components/ui";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "P-ESS",
  description:
    "Polaris Energy Storage Solutions (P-ESS) — battery storage and time-of-day optimisation that firm up solar, shave demand peaks and strengthen grid independence for industrial sites.",
};

const capabilities = [
  {
    title: "Peak shaving & demand management",
    body: "Discharge into the site's peak windows to cut contract-demand penalties and flatten the load curve.",
  },
  {
    title: "Time-of-day arbitrage",
    body: "Charge on cheap or surplus solar hours, discharge against expensive ToD tariff slabs — a modelled, bankable spread.",
  },
  {
    title: "Backup & power quality",
    body: "Seamless ride-through for critical loads, plus voltage and frequency support that reduces hidden process losses.",
  },
  {
    title: "Solar firming & round-the-clock supply",
    body: "Pair storage with an existing or new Polaris plant to extend clean supply past sundown and toward 24×7 CFE targets.",
  },
];

const configs = [
  { k: "Duration", v: "1–8 hour systems, sized to the load profile" },
  { k: "Chemistry", v: "LFP as standard; technology-agnostic on procurement" },
  { k: "Commercial model", v: "CAPEX, OPEX / tolling, or bundled with an EPC contract" },
  { k: "Controls", v: "SCADA dispatch, analytics and lifecycle O&M by Polaris" },
];

export default function PessPage() {
  return (
    <>
      <PageHeader
        eyebrow="P-ESS"
        title="Polaris Energy Storage Solutions"
        intro="Storage is where solar stops being an intermittent input and becomes a controllable asset. P-ESS is our battery-storage and energy-optimisation practice — engineered and modelled with the same financial rigour as every Polaris system."
      />

      <Section>
        <SectionHeading eyebrow="What it does" title="Four jobs, one asset" />
        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title}>
              <h3 className="text-lg font-bold tracking-tight text-ink">
                {c.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="bg-[#faf9f3]">
        <Section>
          <SectionHeading eyebrow="How it ships" title="Configured to the site" />
          <dl className="mt-10 max-w-2xl divide-y divide-ink/10 border-y border-ink/10">
            {configs.map((row) => (
              <div
                key={row.k}
                className="grid grid-cols-[9rem_1fr] gap-6 py-4 text-[15px]"
              >
                <dt className="font-semibold text-ink">{row.k}</dt>
                <dd className="text-ink-soft">{row.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <Button href="/contact">Talk to us about storage</Button>
          </div>
        </Section>
      </div>

      <CTA />
    </>
  );
}
