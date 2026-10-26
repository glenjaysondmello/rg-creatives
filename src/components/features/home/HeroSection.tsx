"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
  onOpenQuote?: () => void;
};

// Subtle golden curves flourish at the bottom matching reference
function GoldenCurvesAccent() {
  return (
    <svg
      viewBox="0 0 1000 120"
      className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none z-10 opacity-70"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldCurveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D97706" stopOpacity="0.05" />
          <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#FCD34D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="goldCurveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B45309" stopOpacity="0.02" />
          <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.6" />
          <stop offset="85%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B45309" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M-50 120 C 180 115, 420 112, 640 85 C 840 60, 940 25, 1050 0"
        stroke="url(#goldCurveGrad1)"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M-50 120 C 240 125, 480 102, 690 78 C 880 55, 970 18, 1050 -8"
        stroke="url(#goldCurveGrad2)"
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M-50 120 C 300 118, 520 108, 730 82 C 910 58, 990 12, 1050 -15"
        stroke="url(#goldCurveGrad1)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M-50 120 C 150 118, 380 115, 580 95 C 780 75, 900 40, 1050 10"
        stroke="url(#goldCurveGrad2)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

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
    <>
      {/* ─── Injected CSS: guarantee correct image per viewport ─── */}
      <style>{`
        #hero-mobile-img   { display: block; }
        #hero-desktop-img  { display: none;  }
        #hero-mobile-section  { display: block; }
        #hero-desktop-section { display: none;  }
        @media (min-width: 768px) {
          #hero-mobile-img   { display: none;  }
          #hero-desktop-img  { display: block; }
          #hero-mobile-section  { display: none;  }
          #hero-desktop-section { display: flex;  }
        }
      `}</style>

      {/* Anchor for navbar IntersectionObserver — always in DOM, zero height */}
      <div id="home" aria-hidden="true" style={{ height: 0, overflow: "hidden" }} />

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE HERO  (hidden on md+)
          Image: 1_20261003_215553_0000.png — 2950×5250 portrait
          paddingBottom: 177.97% = exact image ratio → object-cover has
          zero room to crop, every pixel is shown.
          Text overlaid at the top with a dark gradient for readability.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="hero-mobile-section"
        className="relative w-full bg-black text-white overflow-hidden"
        style={{ minHeight: "100dvh" }}
      >
        {/* ─── Background image
            object-[50%_62%] crops away the ceiling and centres the
            visible window on the camera/equipment zone so the camera
            appears in the lower-half of the section, well below the text.
        ─── */}
        <div className="absolute inset-0" id="hero-mobile-img">
          <Image
            src="/1_20261003_215553_0000.png"
            alt="Professional Event Production in Dubai &amp; UAE - RG Creatives"
            fill
            priority
            quality={75}
            unoptimized
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "50% 62%" }}
            className="filter brightness-[0.88] contrast-[1.06] saturate-[1.08]"
          />

          {/* Dark gradient — covers only the top ~38% for text legibility.
              Below 38% the image is fully clear so camera/laptops are visible. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.80) 10%, rgba(0,0,0,0.58) 22%, rgba(0,0,0,0.22) 34%, transparent 46%)",
            }}
          />

          {/* Bottom blend into next section */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Text content — pinned to the top, clears camera area */}
        <div className="absolute top-0 left-0 right-0 z-10 px-5 pt-[5.5rem]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/85"
          >
            EVENTS &nbsp;/&nbsp; MEDIA &nbsp;/&nbsp; EXPERIENCES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="mt-2 text-[clamp(2rem,10vw,2.8rem)] font-extrabold tracking-tight text-white leading-[1.06]"
          >
            Your Event. <br />
            Our{" "}
            <span className="text-[#FFC700] drop-shadow-[0_0_28px_rgba(255,199,0,0.38)]">
              Expertise.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mt-3 text-[13px] text-gray-200/95 font-normal leading-relaxed max-w-[75%] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            Professional event production and media services in Dubai &amp; UAE —
            from concept to on-screen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="mt-5"
          >
            <button
              onClick={handleGetInTouch}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FFC700] hover:bg-[#ffb700] text-black font-bold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,199,0,0.4)] cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        <GoldenCurvesAccent />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP / TABLET HERO  (hidden on <md)
          Full-viewport cinematic layout with left-to-right gradient.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="hero-desktop-section"
        className="relative min-h-[100dvh] w-full flex-col justify-center bg-black text-white overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none" id="hero-desktop-img">
          <Image
            src="/1-Hybrid Meeting/Hybrid 1.jpg"
            alt="Professional Event Production in Dubai & UAE - RG Creatives"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-[50%_40%] filter brightness-[0.85] contrast-[1.07] saturate-[1.08]"
          />

          {/* Left-to-right cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-transparent" />

          {/* Navbar shadow */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />

          {/* Bottom blend */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Text content */}
        <div className="relative z-20 container mx-auto px-8 py-12">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs md:text-sm font-semibold tracking-[0.26em] uppercase text-white/90"
            >
              EVENTS &nbsp;/&nbsp; MEDIA &nbsp;/&nbsp; EXPERIENCES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              className="mt-4 text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06]"
            >
              Your Event. <br />
              Our{" "}
              <span className="text-[#FFC700] drop-shadow-[0_0_28px_rgba(255,199,0,0.38)]">
                Expertise.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="mt-4 text-base text-gray-200/95 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Professional event production and media services in Dubai &amp; UAE —
              from concept to on-screen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              className="mt-7 flex items-center gap-4"
            >
              <button
                onClick={handleGetInTouch}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFC700] hover:bg-[#ffb700] text-black font-bold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,199,0,0.4)] cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="https://wa.me/971559617957"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/60 hover:bg-black/85 border border-white/20 hover:border-emerald-500/80 text-white font-semibold text-sm backdrop-blur-md transition-all duration-200 hover:scale-105"
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
        </div>

        <GoldenCurvesAccent />
      </section>
    </>
  );
}
