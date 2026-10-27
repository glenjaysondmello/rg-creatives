"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface BentoItem {
  id: string;
  src: string;
  alt: string;
  spanClass: string;
  heightClass?: string;
  isPortrait?: boolean;
}

const BENTO_IMAGES: BentoItem[] = [
  // Row 1: Wide (7) + Narrow portrait (5)
  {
    id: "portfolio-1",
    src: "/portfolio/grad_photography.jpg",
    alt: "Graduation ceremony setup and event photography",
    spanClass: "col-span-12 sm:col-span-7",
  },
  {
    id: "portfolio-2",
    src: "/portfolio/DSLR%20Booth.jpg",
    alt: "DSLR photo booth with instant printing at a wedding reception",
    spanClass: "col-span-12 sm:col-span-5",
    isPortrait: true,
  },

  // Row 2: Three equal columns — portrait + landscape + landscape
  {
    id: "portfolio-3",
    src: "/portfolio/ERI00177.jpg",
    alt: "Couple enjoying the 360 spinning photo booth at an outdoor night event",
    spanClass: "col-span-12 sm:col-span-4",
    isPortrait: true,
  },
  {
    id: "portfolio-4",
    src: "/portfolio/hybrid_conference.jpg",
    alt: "Large scale conference and hybrid event production",
    spanClass: "col-span-12 sm:col-span-4",
  },
  {
    id: "portfolio-5",
    src: "/portfolio/live_streaming_stage.jpg",
    alt: "Multi-camera live streaming and stage displays",
    spanClass: "col-span-12 sm:col-span-4",
  },

  // Row 3: Two landscape images side by side
  {
    id: "portfolio-6",
    src: "/portfolio/broadcast_switching.jpg",
    alt: "Live broadcast switching station",
    spanClass: "col-span-12 sm:col-span-7",
  },
  {
    id: "portfolio-7",
    src: "/portfolio/hybrid_full_coverage.jpg",
    alt: "Live event production and full camera coverage",
    spanClass: "col-span-12 sm:col-span-5",
  },

  // Row 4: Two booth images side by side — each at natural ratio
  {
    id: "portfolio-8",
    src: "/portfolio/booth_360.jpg",
    alt: "Interactive 360 photo booth experience",
    spanClass: "col-span-12 sm:col-span-6",
    isPortrait: true,
    heightClass: "h-[360px] sm:h-[480px] md:h-[540px]",
  },
  {
    id: "portfolio-9",
    src: "/portfolio/ERI00682.jpg",
    alt: "360 photo booth platform with LED ring light setup at an outdoor venue",
    spanClass: "col-span-12 sm:col-span-6",
    isPortrait: true,
    heightClass: "h-[360px] sm:h-[480px] md:h-[540px]",
  },

  // Row 5: Full-width portrait — cinematic closer
  {
    id: "portfolio-10",
    src: "/portfolio/Image.png",
    alt: "Group of guests posing and celebrating on the 360 photo booth",
    spanClass: "col-span-12",
    heightClass: "h-[420px] sm:h-[520px] md:h-[580px]",
    isPortrait: true,
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

        <div className="grid grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {BENTO_IMAGES.map((item, index) => {
            const defaultHeight = "h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]";
            const heightCls = item.heightClass ?? defaultHeight;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: (index % 2) * 0.08 }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-950 cursor-pointer shadow-xl hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.12)] transition-colors transition-shadow duration-300 isolate transform-gpu ${heightCls} ${item.spanClass}`}
              >
                {item.isPortrait ? (
                  <>
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      aria-hidden="true"
                      sizes="(max-width: 640px) 100vw, 600px"
                      className="object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-zinc-950/50 pointer-events-none z-[1]" />
                    <div className="relative w-full h-full z-[2]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        className="object-contain transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                        priority={index < 2}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 60vw, 800px"
                    className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-30" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md"
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
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl bg-zinc-950 isolate ${
                BENTO_IMAGES[selectedIndex].isPortrait
                  ? "max-w-lg max-h-[88vh] aspect-[3/4]"
                  : "max-w-6xl max-h-[88vh] aspect-[16/10]"
              }`}
            >
              <Image
                src={BENTO_IMAGES[selectedIndex].src}
                alt={BENTO_IMAGES[selectedIndex].alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
