import Link from "next/link";
import { company, solutions, socials, offices } from "@/lib/content";
import { Logo } from "./Logo";

// Brand marks matching the client's reference set. Filled glyphs
// (Facebook / X / LinkedIn / YouTube) inherit the wrapper's fill;
// Instagram is a line mark, so it sets its own stroke.
const socialIcon: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7A10.02 10.02 0 0 0 22 12.06c0-5.53-4.5-10.02-10-10.02Z" />
  ),
  X: (
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.83L1.55 2.25h6.83l4.71 6.23 5.15-6.23Zm-1.16 17.52h1.83L7.02 4.13H5.06l12.02 15.64Z" />
  ),
  LinkedIn: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  YouTube: (
    <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.6 24 12 24 12s0-3.6-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  ),
  Instagram: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      d="M7.5 3.25h9A4.25 4.25 0 0 1 20.75 7.5v9a4.25 4.25 0 0 1-4.25 4.25h-9A4.25 4.25 0 0 1 3.25 16.5v-9A4.25 4.25 0 0 1 7.5 3.25Zm4.5 4.6a4.15 4.15 0 1 1 0 8.3 4.15 4.15 0 0 1 0-8.3Zm5-1.35h.01"
      strokeLinecap="round"
    />
  ),
};

const columns = [
  {
    title: "Solutions",
    links: solutions.slice(0, 5).map((s) => ({
      label: s.title,
      href: "/solutions",
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Polaris Global", href: "/global" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#FAFBF6] text-ink">
      <div className="container-px mx-auto max-w-[1760px] py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div className="max-w-xs">
            <Logo tone="dark" height={64} />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              {company.description}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-5 space-y-3.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-ink-soft underline-offset-[5px] transition-colors hover:text-brand-strong hover:underline hover:decoration-1"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-ink">Offices</h3>
            <div className="mt-5 space-y-5 text-sm text-ink-soft">
              {offices.map((o) => (
                <div key={o.name}>
                  <p className="font-medium text-ink">{o.name}</p>
                  <p className="mt-1 leading-relaxed">{o.address}</p>
                  <a
                    href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                    className="mt-1 block transition-colors hover:text-brand-strong"
                  >
                    {o.phone}
                  </a>
                </div>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="block transition-colors hover:text-brand-strong"
              >
                {company.email}
              </a>
            </div>

            <h3 className="mt-8 text-sm font-semibold text-ink">Follow us</h3>
            <div className="mt-4 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Polaris on ${s.label}`}
                  className="text-ink transition-colors hover:text-brand-strong"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {socialIcon[s.label]}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <div className="flex gap-6">
            <Link href="/" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/" className="transition-colors hover:text-ink">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
