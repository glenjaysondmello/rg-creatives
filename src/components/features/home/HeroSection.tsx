"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (videoRef.current) {
        // Reversed parallax: starts flush at the top, moves up slightly as you scroll down
        gsap.to(videoRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef },
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 280, damping: 28 },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      // Pushed exactly below the navbar (80px) and adjusted the height
      className="relative min-h-[calc(100vh-80px)] mt-[80px] w-full flex flex-col lg:flex-row bg-black text-white overflow-hidden"
    >
      {/* ── Mobile Logo (Hidden on Desktop) ── */}
      {/* <div className="lg:hidden absolute top-6 left-0 right-0 w-full flex items-center justify-center z-30">
        <div className="text-2xl font-bold tracking-widest text-white drop-shadow-lg">
          LOGO
        </div>
      </div> */}

      {/* ── Left Side (Desktop) / Background (Mobile): Video Section ── */}
      <div className="absolute inset-0 z-0 lg:relative lg:w-1/2 lg:h-[calc(100vh-80px)] lg:order-1 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
        {/* Desktop Logo (Hidden on Mobile) */}
        {/* <div className="hidden lg:block absolute top-8 left-8 xl:left-12 z-20">
          <div className="text-3xl font-bold tracking-widest text-white drop-shadow-lg">
            LOGO
          </div>
        </div> */}

        {/* Video Background with GSAP Parallax */}
        {/* Removed scale & negative top margins. Now perfectly fits 100% of the video frame */}
        <div
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-[115%] will-change-transform"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/360Booth_Showreel.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 lg:bg-gradient-to-tr lg:from-black/70 lg:via-black/30 lg:to-transparent" />
        </div>

        {/* ── Desktop Headline (Overlays the Video) ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hidden lg:flex absolute inset-0 z-30 flex-col items-center justify-center text-center px-8 pointer-events-none"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[1.05] drop-shadow-2xl"
          >
            ELEVATE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
              YOUR EVENT
            </span>
            <br />
            EXPERIENCE
          </motion.h1>
        </motion.div>
      </div>

      {/* ── Right Side (Desktop) / Foreground Content (Mobile) ── */}
      <div className="relative z-10 w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 lg:w-1/2 lg:min-h-[calc(100vh-80px)] lg:items-start lg:text-left lg:px-16 xl:px-24 lg:py-16 order-2 bg-transparent lg:bg-black">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl lg:max-w-none"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs tracking-[0.2em] uppercase font-medium text-white/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Premium Media Agency
          </motion.div>

          {/* ── Mobile Headline (Hidden on Desktop) ── */}
          <motion.div
            variants={itemVariants}
            className="relative w-full lg:hidden"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] drop-shadow-lg">
              ELEVATE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
                YOUR EVENT
              </span>
              <br />
              EXPERIENCE
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 lg:mt-2 text-base sm:text-lg text-white/70 lg:text-white/60 max-w-md font-light leading-relaxed"
          >
            Capturing Dubai&apos;s finest moments — from intimate gatherings to
            grand spectacles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-[0_0_32px_rgba(255,255,255,0.2)] focus-ring"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#services"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white border border-white/20 bg-white/5 lg:bg-transparent backdrop-blur-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-200 focus-ring"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Service Tags */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs font-medium tracking-widest text-white/50 lg:text-white/30 uppercase"
          >
            {["Live Streaming", "360° Booths", "Media Production"].map(
              (tag) => (
                <span key={tag} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/30 lg:bg-white/20" />
                  {tag}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Smooth bottom gradient (Mobile Only) ── */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
