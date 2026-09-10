/**
 * Motion removed — renders the heading as plain text. Kept so call
 * sites (`<RevealText text=… />`) don't need to change.
 */
export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return <Tag className={className}>{text}</Tag>;
}
