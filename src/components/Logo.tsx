import Image from "next/image";

const SRC = {
  dark: "/logo-polaris.png",
  light: "/logo-polaris-white.png",
} as const;

export function Logo({
  className = "",
  tone = "dark",
  height = 44,
}: {
  className?: string;
  tone?: "dark" | "light";
  height?: number;
}) {
  return (
    <Image
      src={SRC[tone]}
      alt="Polaris Renewable Solutions Pvt. Ltd."
      width={2418}
      height={928}
      priority
      style={{ height, width: "auto" }}
      className={className}
    />
  );
}
