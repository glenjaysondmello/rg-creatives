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
  metadataBase: new URL("https://www.rgcreatives.live"),
  title: "RG Creatives | Professional Event Production & Media Services in Dubai",
  description:
    "Live Streaming • Hybrid Events • Multi-Camera Production • Photography • Videography • 360° & DSLR Photobooths across Dubai and the UAE.",
  icons: {
    icon: [
      { url: "/rg-logo-black.png", type: "image/png", sizes: "1000x1000" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RG Creatives",
  url: "https://www.rgcreatives.live",
  logo: "https://www.rgcreatives.live/rg-logo-black.png",
  description:
    "Live Streaming • Hybrid Events • Multi-Camera Production • Photography • Videography • 360° & DSLR Photobooths across Dubai and the UAE.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971559617957",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
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
