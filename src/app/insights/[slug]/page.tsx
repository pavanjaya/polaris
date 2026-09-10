import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { insights } from "@/lib/content";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Section className="max-w-3xl !pt-[calc(83px+3rem)]">
        <Link
          href="/insights"
          className="text-sm font-semibold text-aurora-400"
        >
          ← All insights
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs text-ice-200/60">
          <span className="rounded-full bg-black/[0.03] px-2.5 py-1 font-medium text-brand-strong">
            {post.category}
          </span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ice-100">
          {post.title}
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-ice-200">
          <p className="text-lg text-ice-100">{post.excerpt}</p>
          <p>
            This is placeholder body copy for the Polaris Renewable Energy
            insights template. Replace it with the full article, including any
            charts, data tables, and author bio.
          </p>
          <p>
            The layout is intentionally narrow for comfortable reading, with the
            shared call-to-action below every post.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
