"use client";

import { useState } from "react";
import { Star, Quote, PenLine } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { ReviewModal } from "./ReviewModal";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "Dubai, UAE",
        text: "The team captured our corporate gala perfectly. The live stream was flawless and the cinematic recap video exceeded all our expectations.",
        category: "Corporate Event",
    },
    {
        id: 2,
        name: "Ahmed Al Maktoum",
        location: "Abu Dhabi, UAE",
        text: "Absolute professionals. Their 360 booth was the highlight of the evening, and the media team operated invisibly but caught every moment.",
        category: "Private Gala",
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        location: "Sharjah, UAE",
        text: "We've worked with many agencies, but this team's attention to detail and premium quality output stands unmatched in the region.",
        category: "Brand Launch",
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardAnim: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function TestimonialsSection() {
    const [isReviewOpen, setReviewOpen] = useState(false);
    return (
        <section
            id="testimonials"
            className="py-28 bg-black text-white border-t border-white/5 overflow-hidden"
        >
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
                        Client Feedback
                    </p>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        TRUSTED BY BRANDS.
                    </h2>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.id}
                            variants={cardAnim}
                            whileHover={{ y: -4 }}
                            className="min-w-[85vw] md:min-w-0 snap-center bg-gray-900/70 border border-white/10 hover:border-white/20 rounded-[2rem] p-8 flex flex-col relative hover:shadow-[0_8px_40px_rgba(255,255,255,0.04)] transition-all duration-300 cursor-default"
                        >
                            {/* Big quote watermark */}
                            <Quote className="absolute top-7 right-7 w-14 h-14 text-white/4" />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-white text-white"
                                    />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-gray-200 text-base leading-relaxed mb-8 flex-grow">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Divider */}
                            <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-white text-sm">{t.name}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{t.location}</p>
                                </div>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold rounded-full uppercase tracking-[0.15em] text-gray-400">
                                    {t.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Write a Review trigger */}
                <motion.div
                    className="flex justify-center mt-14"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                >
                    <motion.button
                        id="write-review-btn"
                        onClick={() => setReviewOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        <PenLine className="w-4 h-4 text-sky-400 group-hover:rotate-[-6deg] transition-transform duration-200" />
                        Write a Review
                    </motion.button>
                </motion.div>
            </div>

            {/* Review Modal — rendered at section level to stay within client tree */}
            <ReviewModal isOpen={isReviewOpen} onClose={() => setReviewOpen(false)} />
        </section>
    );
}
