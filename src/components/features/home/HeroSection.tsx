"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
  onOpenQuote?: () => void;
};

// Enhanced event production photo: 1264×1264 (1:1)
// - Left: Tripod camera systems
// - Center / Right: Switcher keyboard console, laptop, multiview director monitors
// - Background: Large stage with LED screen (Dubai skyline) and presenter
// - Top: Dark hall ceiling with ambient lighting (ideal space for text)
const HERO_SRC = "/Enhanced%20event%20production%20photo.jpg";
const HERO_ALT =
  "Professional Event Production and Live Broadcasting in Dubai & UAE - RG Creatives";

/* ─── Golden curves accent at bottom ────────────────────────────────────── */
function GoldenCurvesAccent() {
  return (
    <svg
      viewBox="0 0 1000 120"
      className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none z-10 opacity-60"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gcg1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D97706" stopOpacity="0.05" />
          <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#FCD34D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="gcg2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B45309" stopOpacity="0.02" />
          <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.6" />
          <stop offset="85%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B45309" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path d="M-50 120 C 180 115, 420 112, 640 85 C 840 60, 940 25, 1050 0" stroke="url(#gcg1)" strokeWidth="1.6" fill="none" />
      <path d="M-50 120 C 240 125, 480 102, 690 78 C 880 55, 970 18, 1050 -8" stroke="url(#gcg2)" strokeWidth="2.2" fill="none" />
      <path d="M-50 120 C 300 118, 520 108, 730 82 C 910 58, 990 12, 1050 -15" stroke="url(#gcg1)" strokeWidth="1.2" fill="none" />
      <path d="M-50 120 C 150 118, 380 115, 580 95 C 780 75, 900 40, 1050 10" stroke="url(#gcg2)" strokeWidth="1" fill="none" />
    </svg>
  );
}

/* ─── Main Hero Component ─────────────────────────────────────────────────── */
export function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const handleGetInTouch = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full h-[100dvh] min-h-[100dvh] bg-black text-white overflow-hidden select-none"
    >
      {/* Anchor for IntersectionObserver */}
      <div id="home" aria-hidden="true" className="absolute top-0 left-0 h-0 w-0 overflow-hidden" />

      {/* ── Background Image Layer ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={HERO_SRC}
          alt={HERO_ALT}
          fill
          priority
          quality={90}
          unoptimized
          sizes="100vw"
          className="object-cover object-[18%_bottom] sm:object-[center_90%] md:object-[center_90%] lg:object-[42%_74%] xl:object-[42%_74%] brightness-[0.90] contrast-[1.05] saturate-[1.05]"
        />

        {/* Top/Upper gradient overlay: provides contrast for text over ceiling area */}
        <div
          className="absolute inset-x-0 top-0 h-[46%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.15) 80%, transparent 100%)",
          }}
        />

        {/* Left gradient on tablet and desktop for high text readability without obscuring cameras */}
        <div
          className="hidden sm:block absolute inset-y-0 left-0 w-[45%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.28) 45%, transparent 100%)",
          }}
        />

        {/* Bottom edge subtle fade */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* ── MOBILE / TABLET Content Layer (hidden on desktop landscape) ── */}
      <div className="lg:hidden relative z-20 w-full hero-content-padding px-5 sm:px-8 md:px-12">
        <div className="max-w-xl md:max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-white/90 mb-1 sm:mb-1.5"
          >
            EVENTS &nbsp;/&nbsp; MEDIA &nbsp;/&nbsp; EXPERIENCES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[clamp(1.85rem,5vw,2.6rem)] font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Your Event. <br />
            Our{" "}
            <span className="text-[#FFC700] drop-shadow-[0_0_28px_rgba(255,199,0,0.38)]">
              Expertise.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-2 text-xs sm:text-sm text-gray-200/90 leading-relaxed max-w-sm sm:max-w-md"
          >
            Professional event production and media services — Based in Dubai, Available Across the UAE —
            from concept to on-screen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={handleGetInTouch}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FFC700] hover:bg-[#ffb700] text-black font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_28px_rgba(255,199,0,0.4)] cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <a
              href="https://wa.me/971559617957"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/85 border border-white/20 hover:border-emerald-500/80 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all duration-200 hover:scale-105"
            >
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.802.376-.276.3-1.053 1.029-1.053 2.509 0 1.48 1.079 2.91 1.229 3.111.15.2 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.086 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.126-.276-.201-.577-.352z" />
                </svg>
              </div>
              <span>WhatsApp Us</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP Content Layer: Absolutely positioned beside laptop / camera stand ── */}
      <div
        className="hidden lg:block absolute z-20"
        style={{
          bottom: "clamp(5%, 22%, 28%)",
          left: "clamp(48px, 5vw, 80px)",
          maxWidth: "clamp(280px, 28vw, 380px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/90 mb-1"
        >
          EVENTS &nbsp;/&nbsp; MEDIA &nbsp;/&nbsp; EXPERIENCES
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[clamp(1.75rem,2.8vw,2.75rem)] font-extrabold tracking-tight text-white leading-[1.06]"
        >
          Your Event. <br />
          Our{" "}
          <span className="text-[#FFC700] drop-shadow-[0_0_28px_rgba(255,199,0,0.38)]">
            Expertise.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-2 text-[13px] text-gray-200/90 leading-relaxed"
        >
          Professional event production and media services — Based in Dubai, Available Across the UAE —
          from concept to on-screen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-3 flex flex-col items-start gap-2.5"
        >
          <button
            onClick={handleGetInTouch}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFC700] hover:bg-[#ffb700] text-black font-bold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_28px_rgba(255,199,0,0.4)] cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <a
            href="https://wa.me/971559617957"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/60 hover:bg-black/85 border border-white/20 hover:border-emerald-500/80 text-white font-semibold text-sm backdrop-blur-md transition-all duration-200 hover:scale-105"
          >
            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-black" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.802.376-.276.3-1.053 1.029-1.053 2.509 0 1.48 1.079 2.91 1.229 3.111.15.2 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.086 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.126-.276-.201-.577-.352z" />
              </svg>
            </div>
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Golden curves along bottom */}
      <GoldenCurvesAccent />
    </section>
  );
}
