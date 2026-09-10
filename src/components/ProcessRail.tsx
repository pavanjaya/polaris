import Image from "next/image";

type Step = {
  step: string;
  title: string;
  body: string;
  image: string;
};

/** Static four-step grid — no carousel, no motion. */
export function ProcessRail({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <article key={s.step}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-mist">
            <Image
              src={s.image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
            {s.title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            {s.body}
          </p>
        </article>
      ))}
    </div>
  );
}
