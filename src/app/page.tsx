"use client";

import { useState } from "react";
import { HeroSection } from "@/components/features/home/HeroSection";
import { ServiceGallery } from "@/components/features/home/ServiceGallery";
import { CorporateEventSection } from "@/components/features/home/CorporateEventSection";
import { WhyUsSection } from "@/components/features/home/WhyUsSection";
import { PortfolioSection } from "@/components/features/home/PortfolioSection";
import { StatsBar } from "@/components/features/home/StatsBar";
import { TestimonialsSection } from "@/components/features/home/TestimonialsSection";
import { CtaBanner } from "@/components/features/home/CtaBanner";
import { ContactForm } from "@/components/features/home/ContactForm";
import { QuoteOverlay } from "@/components/features/leads/QuoteOverlay";

export default function Home() {
  const [isQuoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined,
  );

  const handleOpenQuote = (service?: string) => {
    setSelectedService(service);
    setQuoteOpen(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. Hero Section matching reference mockup */}
      <HeroSection onOpenQuote={() => handleOpenQuote()} />

      {/* 2. Our Services: Complete Event Media Solutions (7 services) */}
      <ServiceGallery />

      {/* 3. Corporate Event Production: Professional Support for Your Business Events */}
      <CorporateEventSection onOpenQuote={() => handleOpenQuote("Corporate Event Production")} />

      {/* 4. Why RG Creatives: Trusted. Experienced. Professional. (5 key pillars) */}
      <WhyUsSection />

      {/* 5. Our Portfolio: Real Events. Lasting Memories. (5 showcased projects) */}
      <PortfolioSection />

      {/* 6. Key Stats: 100+ Events, 50+ Corporate, 30+ Happy Clients, Dubai & UAE */}
      <StatsBar />

      {/* 7. Client Reviews: What Our Clients Say (3 reviews + review modal) */}
      <TestimonialsSection />

      {/* 8. Dubai Skyline CTA Banner: Let's Create Something Amazing Together */}
      <CtaBanner onOpenQuote={() => handleOpenQuote()} />

      {/* 9. Direct Contact & Booking Form */}
      <ContactForm />

      {/* 10. Interactive Lead/Quote Drawer */}
      <QuoteOverlay
        isOpen={isQuoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialService={selectedService}
      />
    </main>
  );
}
