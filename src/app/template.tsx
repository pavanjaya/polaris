// Re-mounts on every navigation — the CSS `pageEnter` animation replays,
// giving a fluid fade-and-rise page transition without a runtime library.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
