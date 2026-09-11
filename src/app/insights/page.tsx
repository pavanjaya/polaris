import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
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
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">Insights</span>
          </Reveal>
          <RevealText
            as="h1"
            text="Notes from the people building the projects"
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Markets, policy and engineering — written by the Polaris
              development, finance and operations teams.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {insights.map((post, i) => (
            <Reveal as="article" key={post.slug} delay={(i % 2) * 70}>
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-mist">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs text-ink-faint">
                  <span className="rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-strong">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-ink transition-colors group-hover:text-brand-strong sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
