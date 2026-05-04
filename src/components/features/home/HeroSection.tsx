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
                className="container mx-auto px-4 flex flex-col items-center justify-center text-center z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Top Badge */}
                <motion.div 
                    variants={itemVariants}
                    className="mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-sm tracking-widest uppercase font-medium"
                >
                    Premium Media Agency
                </motion.div>

                {/* Main Heading with GWFX Structural Inspiration */}
                <motion.div variants={itemVariants} className="flex items-center justify-center mb-6 relative">
                    {/* Optional rotated text placeholder on the left */}
                    <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 text-sm tracking-[0.3em] text-gray-400 font-medium">
                        YOUR
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none">
                        ELEVATE<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">YOUR EVENT</span><br/>
                        EXPERIENCE
                    </h1>
                </motion.div>

                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
                    variants={itemVariants}
                >
                    Capturing Dubai&apos;s Best Moments.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    variants={itemVariants}
                >
                    {/* Primary CTA */}
                    <button
                        onClick={onOpenQuote}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span>Get a Quote</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Secondary CTA */}
                    <button
                        onClick={() => console.log("View Showreel Clicked")}
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-gray-700 bg-black/50 backdrop-blur-sm rounded-full transition-colors hover:bg-gray-800"
                    >
                        <Play className="mr-2 w-5 h-5 fill-current" />
                        <span>View Showreel</span>
                    </button>
                </motion.div>

                {/* Horizontal Metadata List */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium tracking-wide text-gray-400 uppercase"
                >
                    <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>Premium Live Streaming</span>
                    <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>360° Booths</span>
                    <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>Media Production</span>
                </motion.div>
            </motion.div>

            {/* Absolute Bottom Action Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-t-2xl p-4 flex items-center justify-between">
                        <div className="flex gap-8 px-4 text-sm font-medium text-gray-300">
                            <span className="hover:text-white cursor-pointer transition-colors">Dubai</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Abu Dhabi</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Sharjah</span>
                        </div>
                        <div className="bg-white/10 rounded-full px-6 py-2 border border-white/20 text-sm text-gray-300 flex items-center">
                            Search services...
                            <ArrowRight className="w-4 h-4 ml-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
