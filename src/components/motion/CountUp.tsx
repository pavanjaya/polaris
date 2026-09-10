/**
 * Motion removed — renders the value as-is (no count animation).
 */
export function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  return <span className={className}>{value}</span>;
}
