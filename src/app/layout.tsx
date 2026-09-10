import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Body / paragraph typeface
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polarisenergy.in"),
  title: {
    default: `${company.name} — Solar EPC for industry, India & Morocco`,
    template: `%s — ${company.shortName}`,
  },
  description: company.description,
  openGraph: {
    title: company.name,
    description: company.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${publicSans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
