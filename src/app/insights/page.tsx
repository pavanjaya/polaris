import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, ArrowRight } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Analysis from the Polaris Renewable Energy team on clean energy markets, policy, and project engineering.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the people building the projects"
        intro="Markets, policy, and engineering — written by the Polaris development, trading, and operations teams."
      />

      <Section>
        <ul className="divide-y divide-line">
          {insights.map((post) => (
            <li key={post.slug} className="py-8 first:pt-0">
              <article className="group">
                <div className="flex items-center gap-3 text-xs text-ice-200/60">
                  <span className="rounded-full bg-black/[0.03] px-2.5 py-1 font-medium text-brand-strong">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-ice-100 transition-colors group-hover:text-aurora-400">
                  <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ice-200">
                  {post.excerpt}
                </p>
                <Link
                  href={`/insights/${post.slug}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-aurora-400"
                >
                  Read
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <CTA />
    </>
  );
}
