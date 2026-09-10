/**
 * Motion has been removed from the site — this is now a transparent
 * wrapper kept only so existing call sites don't need to change.
 */
type Variant = "up" | "mask" | "scale" | "fade";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "section" | "span" | "figure";
  delay?: number;
  variant?: Variant;
  stagger?: number;
}) {
  return <Tag className={className}>{children}</Tag>;
}
