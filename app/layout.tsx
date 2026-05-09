import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { AmbientBg } from "@/components/ambient-bg";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://rickmedeiros.dev"; // PREENCHER domínio final

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Henrique Medeiros — Full-Stack Engineer",
    template: "%s · Henrique Medeiros",
  },
  description:
    "Full-Stack Engineer building automation that ships. Portfólio de projetos, stack e estudos de caso.",
  openGraph: {
    type: "website",
    siteName: "Henrique Medeiros",
    title: "Henrique Medeiros — Full-Stack Engineer",
    description: "Building automation that ships.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Henrique Medeiros — Full-Stack Engineer",
    description: "Building automation that ships.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Henrique Medeiros",
    jobTitle: "Full-Stack Engineer",
    url: SITE_URL,
    sameAs: [
      "https://github.com/RickMdrs", 
      "https://linkedin.com/in/ryk-medeiros",
    ],
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg-deep)] text-[var(--color-fg)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <AmbientBg />
        <SmoothScrollProvider>
          <ScrollProgress />
          <Nav />
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
        <CustomCursor />
      </body>
    </html>
  );
}
