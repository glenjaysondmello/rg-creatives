"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 32 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
});

export function InterstitialSection() {
    return (
        <section className="bg-black text-white py-32 flex items-center justify-center min-h-[80vh] relative overflow-hidden">
            {/* Subtle background glow */}
            <div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none"
            />
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto flex flex-col items-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.div
                        variants={fadeUp(0)}
                        className="inline-block px-5 py-2 mb-10 rounded-full border border-white/20 bg-white/5 text-xs tracking-[0.25em] uppercase font-semibold text-gray-300"
                    >
                        Now Booking 2026/2027
                    </motion.div>

                    <motion.h2
                        variants={fadeUp(0.1)}
                        className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.05]"
                    >
                        WE DON&apos;T JUST RECORD EVENTS.{" "}
                        <br />
                        <span className="text-gray-500">WE CRAFT LEGACIES.</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp(0.2)}
                        className="text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-2xl"
                    >
                        Our specialized media teams operate invisibly but capture everything,
                        delivering cinematic results that amplify your brand&apos;s story across
                        Dubai and the UAE.
                    </motion.p>

                    <motion.div variants={fadeUp(0.3)}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-black bg-white rounded-full transition-shadow hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] focus-ring"
                        >
                            Discover Our Approach
                            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
