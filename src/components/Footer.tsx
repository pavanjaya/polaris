import Link from "next/link";
import { company, solutions, socials, offices } from "@/lib/content";
import { Logo } from "./Logo";

const socialIcon: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M13 22v-8h2.7l.4-3H13V9.2c0-.9.3-1.5 1.6-1.5H16V5.1A21 21 0 0 0 13.7 5C11.4 5 10 6.3 10 8.9V11H7.3v3H10v8z" />
  ),
  Instagram: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.7c3 0 3.4 0 4.6.07 1.1.05 1.7.24 2.1.4.5.2.9.44 1.3.84.4.4.64.8.84 1.3.16.4.35 1 .4 2.1.07 1.2.07 1.6.07 4.6s0 3.4-.07 4.6c-.05 1.1-.24 1.7-.4 2.1-.2.5-.44.9-.84 1.3-.4.4-.8.64-1.3.84-.4.16-1 .35-2.1.4-1.2.07-1.6.07-4.6.07s-3.4 0-4.6-.07c-1.1-.05-1.7-.24-2.1-.4a3.5 3.5 0 0 1-1.3-.84 3.5 3.5 0 0 1-.84-1.3c-.16-.4-.35-1-.4-2.1C2.7 15.4 2.7 15 2.7 12s0-3.4.07-4.6c.05-1.1.24-1.7.4-2.1.2-.5.44-.9.84-1.3.4-.4.8-.64 1.3-.84.4-.16 1-.35 2.1-.4C8.6 2.7 9 2.7 12 2.7ZM12 7.35A4.65 4.65 0 1 0 12 16.65 4.65 4.65 0 0 0 12 7.35Zm0 7.67A3.02 3.02 0 1 1 12 8.98a3.02 3.02 0 0 1 0 6.04Zm5.92-7.85a1.09 1.09 0 1 1-2.17 0 1.09 1.09 0 0 1 2.17 0Z"
    />
  ),
  X: (
    <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L8.3 21H5l7.5-8.6L4.6 3H11l4.5 5.6zm-1.1 16.2h1.8L8.1 4.7H6.2z" />
  ),
  LinkedIn: (
    <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5zM3 8.98h4V21H3zM9 8.98h3.8v1.64h.05a4.17 4.17 0 0 1 3.75-2.06C20.4 8.56 22 10.62 22 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32s-2.33 1.58-2.33 3.21V21H9z" />
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
    <footer className="bg-[#faf9f3] text-ink">
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
                      className="text-ink-soft transition-colors hover:text-brand-strong"
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

        <p className="mt-6 text-[11px] text-ink-faint">
          Figures and project details on this site are illustrative placeholders.
        </p>
      </div>
    </footer>
  );
}
