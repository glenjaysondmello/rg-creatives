"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { ServiceItem } from "./servicesData";

type ServiceDetailModalProps = {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
  allServices: ServiceItem[];
};

export function ServiceDetailModal({
  service,
  isOpen,
  onClose,
  onSelectService,
  allServices,
}: ServiceDetailModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Pause Lenis smooth scroll and lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
        lenis?.start();
      };
    } else {
      lenis?.start();
    }
  }, [isOpen, lenis]);

  // Reset scroll position to top when active service changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [service?.id]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!service) return null;

  const currentIndex = allServices.findIndex((s) => s.id === service.id);
  const prevService =
    allServices[(currentIndex - 1 + allServices.length) % allServices.length];
  const nextService = allServices[(currentIndex + 1) % allServices.length];

  const Icon = service.icon;

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello RG Creatives! I would like more details about your ${service.title} service.`,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          onWheel={(e) => {
            e.stopPropagation();
            if (contentRef.current) {
              contentRef.current.scrollTop += e.deltaY;
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overscroll-contain"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => {
              e.stopPropagation();
              // Route wheel events occurring on header, footer, or modal padding to content area
              if (
                contentRef.current &&
                !contentRef.current.contains(e.target as Node)
              ) {
                contentRef.current.scrollTop += e.deltaY;
              }
            }}
            className="relative w-full max-w-4xl h-full max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-2xl sm:rounded-3xl bg-zinc-950 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden overscroll-contain"
          >
            {/* Modal Top Bar */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-amber-400 tracking-wider uppercase block truncate">
                    {service.subtitle}
                  </span>
                  <h3 className="text-sm sm:text-lg font-bold text-white tracking-tight leading-tight truncate">
                    {service.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close details"
                className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 shrink-0 ml-2"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div
              ref={contentRef}
              data-lenis-prevent
              tabIndex={0}
              onWheel={(e) => {
                e.stopPropagation();
              }}
              className="overflow-y-auto flex-1 min-h-0 p-4 sm:p-7 md:p-8 space-y-6 sm:space-y-7 overscroll-contain focus:outline-none"
            >
              {/* Hero Image & Tagline Banner */}
              <div className="relative aspect-[16/9] max-h-52 sm:max-h-72 w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg shrink-0">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-medium backdrop-blur-md mb-1.5 sm:mb-2">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Event Solutions</span>
                  </div>
                  <h4 className="text-base sm:text-2xl font-bold text-white drop-shadow-md leading-snug">
                    {service.tagline}
                  </h4>
                </div>
              </div>

              {/* Service Overview */}
              <div className="space-y-2.5">
                <h5 className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
                  About This Service
                </h5>
                <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed">
                  {service.overview.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* What's Included / Key Capabilities */}
              <div className="space-y-2.5">
                <h5 className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
                  What Our Service Includes
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-amber-400/30 transition-colors flex gap-3 items-start"
                    >
                      <div className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1">
                        <h6 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                          {feature.name}
                        </h6>
                        <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-light">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div className="space-y-2.5">
                <h5 className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Ideal For
                </h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.idealFor.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 font-normal hover:border-amber-400/40 hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Closing Note */}
              {service.closing && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/20">
                  <p className="text-xs sm:text-sm text-amber-200/95 font-medium leading-relaxed">
                    {service.closing}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="sticky bottom-0 z-30 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 px-4 sm:px-8 py-3 sm:py-3.5 bg-zinc-950/95 backdrop-blur-xl border-t border-white/10 shrink-0">
              {/* Previous / Next service buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => onSelectService(prevService)}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title={`Previous: ${prevService.title}`}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Prev Service</span>
                  <span className="sm:hidden">Prev</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectService(nextService)}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title={`Next: ${nextService.title}`}
                >
                  <span className="hidden sm:inline">Next Service</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Inquiry / Contact CTA */}
              <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                <a
                  href={`https://wa.me/971559617957?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  type="button"
                  onClick={handleContactClick}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Contact Team</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

