"use client";

import { HeroSection } from "@/components/features/home/HeroSection";
import { ActionButtonGrid } from "@/components/features/home/ActionButtonGrid";
import { InterstitialSection } from "@/components/features/home/InterstitialSection";
import { ServiceGallery } from "@/components/features/home/ServiceGallery";
import { PricingSection } from "@/components/features/home/PricingSection";
import { PortfolioSection } from "@/components/features/home/PortfolioSection";
import { TestimonialsSection } from "@/components/features/home/TestimonialsSection";
import { ContactForm } from "@/components/features/home/ContactForm";
import { QuoteOverlay } from "@/components/features/leads/QuoteOverlay";
import { useState } from "react";

export default function Home() {
  const [isQuoteOpen, setQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black">
      <HeroSection onOpenQuote={() => setQuoteOpen(true)} />
      <ActionButtonGrid />
      <InterstitialSection />
      <ServiceGallery />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactForm />
      
      <QuoteOverlay isOpen={isQuoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}

