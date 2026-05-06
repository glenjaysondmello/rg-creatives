"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection({ onOpenQuote }: { onOpenQuote: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    yPercent: 20,
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
        { scope: containerRef }
    );

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.18 },
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
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-white"
        >
            {/* ── Video Background with Parallax ── */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 scale-110 will-change-transform"
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

                {/* Multi-layer overlay: top fade for navbar legibility, center dim, bottom fade for smooth section transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
            </div>

            {/* ── Content ── */}
            <motion.div
                className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center pt-32 pb-40"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs tracking-[0.2em] uppercase font-medium text-white/80"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                    Premium Media Agency · Dubai
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex items-center justify-center w-full"
                >
                    {/* Rotated label — desktop only, absolutely positioned so it never overlaps heading */}
                    <span
                        aria-hidden="true"
                        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.35em] text-white/40 font-medium whitespace-nowrap select-none"
                    >
                        YOUR
                    </span>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none text-center">
                        ELEVATE
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                            YOUR EVENT
                        </span>
                        <br />
                        EXPERIENCE
                    </h1>
                </motion.div>

                {/* Subheading */}
                <motion.p
                    variants={itemVariants}
                    className="mt-6 text-base sm:text-lg md:text-xl text-white/60 max-w-xl mx-auto font-light leading-relaxed"
                >
                    Capturing Dubai&apos;s finest moments — from intimate gatherings to grand spectacles.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary */}
                    <button
                        onClick={onOpenQuote}
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-black bg-white rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_32px_rgba(255,255,255,0.2)] focus-ring"
                    >
                        Get a Quote
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>

                    {/* Secondary */}
                    <button
                        onClick={() => console.log("View Showreel Clicked")}
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-medium text-white border border-white/20 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-200 focus-ring"
                    >
                        <Play className="w-4 h-4 fill-current" />
                        View Showreel
                    </button>
                </motion.div>

                {/* Service Tags */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-medium tracking-widest text-white/40 uppercase"
                >
                    {["Premium Live Streaming", "360° Booths", "Media Production"].map((tag) => (
                        <span key={tag} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-white/40" />
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            {/* ── Bottom Action Bar ── */}
            <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block">
                <div className="container mx-auto px-6">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 border-b-0 rounded-t-2xl px-6 py-4 flex items-center justify-between gap-4">
                        {/* Location Pills */}
                        <div className="flex gap-6 text-sm font-medium text-white/50">
                            {["Dubai", "Abu Dhabi", "Sharjah"].map((city) => (
                                <button
                                    key={city}
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    {city}
                                </button>
                            ))}
                        </div>

                        {/* Search pill */}
                        <button className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-full px-5 py-2 border border-white/20 text-sm text-white/50 hover:text-white/80 transition-all duration-200">
                            Search services…
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Smooth bottom gradient → next section ── */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
