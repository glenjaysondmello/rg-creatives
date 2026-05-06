"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const packages = [
    {
        name: "Essential",
        price: "$1,500",
        badge: "Most Popular",
        features: ["4 Hours Coverage", "1 Videographer", "Highlight Reel (3 mins)", "Standard Audio"],
    },
    {
        name: "Premium",
        price: "$3,200",
        badge: "Best Value",
        features: [
            "8 Hours Coverage",
            "2 Videographers",
            "Cinematic Film (5-7 mins)",
            "Drone Footage",
            "Premium Audio + Lighting",
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        badge: "Full Scale",
        features: [
            "Multi-day Coverage",
            "Full Crew (4+)",
            "Live Streaming Setup",
            "Same-day Edits",
            "Raw Footage Included",
        ],
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardAnim: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function PricingSection() {
    const [selectedPackage, setSelectedPackage] = useState<number | null>(1);

    return (
        <section id="pricing" className="py-28 bg-black text-white border-t border-white/5">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-xs font-semibold text-gray-500 tracking-[0.25em] uppercase mb-4">
                        Investment
                    </p>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        TRANSPARENT PRICING.
                    </h2>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {packages.map((pkg, idx) => {
                        const isSelected = selectedPackage === idx;
                        return (
                            <motion.div
                                key={idx}
                                variants={cardAnim}
                                onClick={() => setSelectedPackage(idx)}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                    "relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer",
                                    isSelected
                                        ? "bg-gray-900 border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.06)]"
                                        : "bg-black border-white/8 hover:border-white/20 hover:bg-gray-900/50"
                                )}
                            >
                                {/* Active badge */}
                                {isSelected && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg"
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        {pkg.badge}
                                    </motion.div>
                                )}

                                {/* Name + Price */}
                                <div className="mb-8">
                                    <h3 className="text-base font-semibold text-gray-400 uppercase tracking-widest mb-3">
                                        {pkg.name}
                                    </h3>
                                    <div className="text-5xl font-extrabold leading-none tracking-tight">
                                        {pkg.price}
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3.5 mb-10 flex-grow">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li
                                            key={fIdx}
                                            className="flex items-center text-sm text-gray-300 gap-3"
                                        >
                                            <span
                                                className={cn(
                                                    "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                                                    isSelected
                                                        ? "bg-white text-black"
                                                        : "bg-white/10 text-white"
                                                )}
                                            >
                                                <Check className="w-3 h-3" />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    className={cn(
                                        "w-full py-3.5 rounded-xl font-bold uppercase tracking-[0.15em] text-xs transition-all duration-200 flex items-center justify-center gap-2 focus-ring",
                                        isSelected
                                            ? "bg-white text-black hover:bg-gray-100"
                                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                    )}
                                >
                                    Select Package <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Custom quote callout */}
                <motion.div
                    className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h4 className="text-lg font-bold mb-3">Need a custom quote?</h4>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                        Use our interactive package builder to get an exact estimate based on
                        your event requirements.
                    </p>
                    <button className="inline-flex items-center gap-2 text-sm text-white border-b border-white/30 pb-1 font-semibold hover:text-gray-300 hover:border-gray-400 transition-colors focus-ring">
                        Launch Builder <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
