import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { offices, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Polaris Renewable Solutions — our Nashik headquarters and Gujarat office.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're trying to build"
        intro="Procurement, land, partnerships, or press — send a note and the right person will get back to you."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />

          <aside className="space-y-6">
            {offices.map((o) => (
              <div
                key={o.name}
                className="rounded-xl border border-line bg-paper p-6"
              >
                <h2 className="text-lg font-semibold text-ink">{o.name}</h2>
                <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="leading-relaxed">{o.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <a
                      href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                      className="text-brand-strong hover:underline"
                    >
                      {o.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <a
                      href={`mailto:${o.email}`}
                      className="text-brand-strong hover:underline"
                    >
                      {o.email}
                    </a>
                  </li>
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                Follow us
              </h2>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-strong hover:underline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
