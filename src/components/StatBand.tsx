import { stats } from "@/lib/content";

export function StatBand() {
  return (
    <div className="bg-paper">
      <div className="container-px mx-auto grid max-w-[1760px] grid-cols-2 gap-x-8 gap-y-10 py-16 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl text-ink sm:text-[2.75rem]">{s.value}</div>
            <div className="mt-2 text-sm leading-snug text-ink-soft">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
