"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection({ onOpenQuote }: { onOpenQuote: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Parallax Effect: Background moves slower than scroll
            // Target the video container
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    yPercent: 20, // Move background down by 20% of its height
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current, // Element that triggers the animation
                        start: "top top", // When top of trigger hits top of viewport
                        end: "bottom top", // When bottom of trigger hits top of viewport
                        scrub: true, // Smooth scrubbing
                    },
                });
            }
        },
        { scope: containerRef }
    );

    // Framer Motion Variants for Staggered Reveal
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each child animation
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30, // "Kinetic Minimalist" directive
            },
        },
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
        >
            {/* Navbar Overlay */}
            <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-gradient-to-b from-black/80 to-transparent">
                <div className="text-xl font-bold tracking-wider">AGENCY NAME</div>
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                    <a href="#" className="hover:text-gray-300 transition-colors">Services</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Work</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
                </div>
            </nav>

            {/* Video Background with Parallax */}
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
                    poster="" // Could add a poster image here ideally
                >
                    <source
                        src="/360Booth_Showreel.mp4"
                        type="video/mp4"
                    />
                </video>
                {/* Dark Overlay for protection */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <motion.div
                className="container mx-auto px-4 text-center z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    variants={itemVariants}
                >
                    Elevate Your Event Experience
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    Capturing Dubai&apos;s Best Moments.
                    <span className="block mt-2 text-lg text-gray-400">
                        Premium Live Streaming, 360° Booths, and Media Production.
                    </span>
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    variants={itemVariants}
                >
                    {/* Primary CTA */}
                    <button
                        onClick={onOpenQuote}
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span>Get a Quote</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Secondary CTA */}
                    <button
                        onClick={() => console.log("View Showreel Clicked")}
                        className="group inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white border border-gray-700 bg-black/50 backdrop-blur-sm rounded-full transition-colors hover:bg-gray-800"
                    >
                        <Play className="mr-2 w-5 h-5 fill-current" />
                        <span>View Showreel</span>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
