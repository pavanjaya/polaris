/**
 * Motion removed — plain wrapper, no parallax.
 */
export function Parallax({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  return <div className={className}>{children}</div>;
}
