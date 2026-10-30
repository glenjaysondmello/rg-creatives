
import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { FaviconSwitcher } from "@/components/providers/FaviconSwitcher";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "RG Creatives | Professional Event Production & Media Services in Dubai",
  description:
    "Live Streaming • Hybrid Events • Multi-Camera Production • Photography • Videography • 360° & DSLR Photobooths across Dubai and the UAE.",
  // Single default favicon — FaviconSwitcher.tsx handles light/dark switching
  // via JS + MutationObserver so Next.js cannot re-inject conflicting links.
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased bg-black text-white selection:bg-amber-400 selection:text-black`}
      >
        <FaviconSwitcher />
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
