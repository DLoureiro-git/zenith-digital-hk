import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zenith Digital HK | AI Intelligence for Enterprise Asia",
  description:
    "Hong Kong's premier AI consultancy — building agentic systems, deploying AI platforms, and transforming enterprise operations across Asia-Pacific.",
  keywords: [
    "AI consultancy Hong Kong",
    "enterprise AI",
    "agentic systems",
    "LLM integration",
    "AI strategy Asia-Pacific",
    "digital transformation",
  ],
  openGraph: {
    title: "Zenith Digital HK | AI Intelligence for Enterprise Asia",
    description:
      "Hong Kong's premier AI consultancy — building agentic systems, deploying AI platforms, and transforming enterprise operations across Asia-Pacific.",
    siteName: "Zenith Digital HK",
    locale: "en_HK",
    type: "website",
    // og:image: use /public/images/og-image.jpg (1200x630 recommended)
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Digital HK | AI Intelligence for Enterprise Asia",
    description:
      "Hong Kong's premier AI consultancy — building agentic systems, deploying AI platforms, and transforming enterprise operations across Asia-Pacific.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <main id="main-content" className="animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
