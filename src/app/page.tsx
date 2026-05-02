"use client";

import { HeroSection } from "@/components/features/home/HeroSection";
import { ServiceGallery } from "@/components/features/home/ServiceGallery";
import { QuoteOverlay } from "@/components/features/leads/QuoteOverlay";
import { useState } from "react";

export default function Home() {
  const [isQuoteOpen, setQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black">
      <HeroSection onOpenQuote={() => setQuoteOpen(true)} />
      <ServiceGallery />
      <QuoteOverlay isOpen={isQuoteOpen} onClose={() => setQuoteOpen(false)} />

      {/* Placeholder for scroll testing */}
      <div className="h-screen bg-gray-900 flex items-center justify-center text-white">
        <p>Scroll down content...</p>
      </div>
    </main>
  );
}
