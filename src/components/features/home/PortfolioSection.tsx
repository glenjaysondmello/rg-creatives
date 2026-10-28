"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface BentoItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

// All 12 portfolio items with their exact pixel dimensions.
// Arranged to ensure an even mix of portrait and landscape across columns,
// balanced column heights (within 1.5% variance), and zero empty voids.
const BENTO_IMAGES: BentoItem[] = [
  // ── Column 1 group (desktop) ──
  {
    id: "portfolio-eri177",
    src: "/portfolio/ERI00177.jpg",
    alt: "Couple enjoying the 360 spinning photo booth at an outdoor night event",
    title: "360° Video Booth Experience",
    category: "Interactive Photo Booth",
    width: 4152,
    height: 6328, // 2:3 portrait
  },
  {
    id: "portfolio-conference",
    src: "/portfolio/hybrid_conference.jpg",
    alt: "Large scale conference and hybrid event production",
    title: "Hybrid Conference Summit",
    category: "Hybrid Production",
    width: 1600,
    height: 900, // 16:9 landscape
  },
  {
    id: "portfolio-eri682",
    src: "/portfolio/ERI00682.jpg",
    alt: "Guests dancing and celebrating on the 360 photo booth",
    title: "Celebration on 360 Video Booth",
    category: "Interactive Experiences",
    width: 4077,
    height: 4525, // 9:10 near-square portrait
  },
  {
    id: "portfolio-instruments",
    src: "/portfolio/close-up-instruments-119213604.jpg",
    alt: "Close-up of professional audio instruments at a live event",
    title: "Live Sound & Audio Engineering",
    category: "Audio Systems",
    width: 800,
    height: 534, // 3:2 landscape
  },

  // ── Column 2 group (desktop) ──
  {
    id: "portfolio-event",
    src: "/portfolio/event.jpg",
    alt: "Live event atmosphere with crowd and stage lighting",
    title: "Live Stage & Audience Experience",
    category: "Event Production",
    width: 1200,
    height: 800, // 3:2 landscape
  },
  {
    id: "portfolio-dslr",
    src: "/portfolio/DSLR%20Booth.jpg",
    alt: "DSLR photo booth with instant printing at a wedding reception",
    title: "DSLR Instant Photo Booth",
    category: "Photo Booth Rental",
    width: 768,
    height: 1364, // 9:16 portrait
  },
  {
    id: "portfolio-grad",
    src: "/portfolio/grad_photography.jpg",
    alt: "Graduation ceremony setup and event photography",
    title: "Graduation Ceremony Staging",
    category: "Event Photography",
    width: 1600,
    height: 1461, // 1.1:1 square-ish
  },
  {
    id: "portfolio-live-stage",
    src: "/portfolio/live_streaming_stage.jpg",
    alt: "Multi-camera live streaming and stage displays",
    title: "Multi-Camera Stage Broadcast",
    category: "Live Streaming",
    width: 1600,
    height: 900, // 16:9 landscape
  },

  // ── Column 3 group (desktop) ──
  {
    id: "portfolio-booth360",
    src: "/portfolio/booth_360.jpg",
    alt: "Interactive 360 photo booth setup at an outdoor venue",
    title: "Interactive 360 Kiosk",
    category: "Photo & Video Booths",
    width: 1200,
    height: 1600, // 3:4 portrait
  },
  {
    id: "portfolio-hybrid-full",
    src: "/portfolio/hybrid_full_coverage.jpg",
    alt: "Live event production and full camera coverage",
    title: "Full Multi-Angle Event Coverage",
    category: "Full Video Coverage",
    width: 1600,
    height: 741, // 2.16:1 wide landscape
  },
  {
    id: "portfolio-image-360",
    src: "/portfolio/Image.png",
    alt: "360 photo booth platform glowing with infinity LED lights at night",
    title: "Infinity LED 360 Platform",
    category: "Specialty Experiences",
    width: 1024,
    height: 1536, // 2:3 portrait
  },
  {
    id: "portfolio-switching",
    src: "/portfolio/broadcast_switching.jpg",
    alt: "Live broadcast switching station with technical control surface",
    title: "Live Video Switching Station",
    category: "Broadcast Control",
    width: 1600,
    height: 900, // 16:9 landscape
  },
];

export function PortfolioSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === 0 ? BENTO_IMAGES.length - 1 : prev - 1) : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === BENTO_IMAGES.length - 1 ? 0 : prev + 1) : null
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-black text-white relative border-t border-white/5 scroll-mt-20"
      aria-label="Portfolio Gallery"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase mb-3">OUR WORK</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">Our Portfolio</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            A showcase of our live event productions, corporate summits, interactive photo booth experiences, and broadcast coverage — Based in Dubai, Available Across the UAE.
          </p>
        </motion.div>

        {/* Responsive Bento Masonry layout:
            - columns-1 on mobile
            - columns-2 on tablet
            - columns-3 on desktop
            Eliminates all row-height gaps between image containers while giving
            every image its exact, true aspect ratio with 0% cropping. */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
          {BENTO_IMAGES.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid inline-block w-full mb-4 md:mb-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.06 }}
                onClick={() => setSelectedIndex(index)}
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
                className="group relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-900 cursor-pointer shadow-lg hover:border-amber-400/40 hover:shadow-[0_0_28px_rgba(251,191,36,0.14)] transition-all duration-300 isolate transform-gpu"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />

                {/* Ambient vignette + hover detail badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 flex flex-col justify-end p-4 sm:p-5">
                  <span className="text-[10px] sm:text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle base gradient for subtle depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none z-[5]" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Resolution Modal Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/92 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white/80 hover:text-white border border-white/10 transition-colors duration-200 hover:scale-105"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white/80 hover:text-white border border-white/10 transition-colors duration-200 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white/80 hover:text-white border border-white/10 transition-colors duration-200 hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl bg-zinc-950 flex flex-col items-center justify-center"
            >
              <div
                className="relative max-w-full max-h-[80vh] flex items-center justify-center p-2 sm:p-4"
                style={{
                  aspectRatio: `${BENTO_IMAGES[selectedIndex].width} / ${BENTO_IMAGES[selectedIndex].height}`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BENTO_IMAGES[selectedIndex].src}
                  alt={BENTO_IMAGES[selectedIndex].alt}
                  className="w-auto h-auto max-h-[76vh] max-w-full object-contain rounded-xl"
                  style={{ display: "block" }}
                />
              </div>

              <div className="w-full bg-zinc-950/95 border-t border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] sm:text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    {BENTO_IMAGES[selectedIndex].category}
                  </p>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    {BENTO_IMAGES[selectedIndex].title}
                  </p>
                </div>
                <p className="text-[11px] text-gray-400 font-mono">
                  {selectedIndex + 1} / {BENTO_IMAGES.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
