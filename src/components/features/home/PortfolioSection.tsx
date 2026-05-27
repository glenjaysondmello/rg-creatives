"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
    { id: 1, title: "Dubai Tech Week", category: "Live Streaming", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", tall: true },
    { id: 2, title: "Royal Wedding", category: "Cinematic Coverage", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", tall: false },
    { id: 3, title: "Global Summit", category: "Corporate AV", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop", tall: false },
    { id: 4, title: "Fashion Gala", category: "360° Booth", image: "https://images.unsplash.com/photo-1509631179647-0c500ba1417f?q=80&w=800&auto=format&fit=crop", tall: true },
    { id: 5, title: "Music Festival", category: "Drone Coverage", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop", tall: false },
    { id: 6, title: "Brand Launch", category: "Event Photography", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", tall: false },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardAnim: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export function PortfolioSection() {
    return (
        <section id="portfolio" className="py-28 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div>
                        <p className="text-xs font-semibold text-gray-500 tracking-[0.25em] uppercase mb-4">
                            Selected Works
                        </p>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            OUR PORTFOLIO.
                        </h2>
                    </div>
                    <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-200 focus-ring">
                        View Full Archive <ArrowUpRight className="w-4 h-4" />
                    </button>
                </motion.div>

                {/* ── Desktop / Tablet masonry grid (md+) ── */}
                <motion.div
                    className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[380px]"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {projects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </motion.div>

                {/* ── Mobile horizontal snap carousel (< md) ── */}
                <div className="md:hidden -mx-6 px-6">
                    <div
                        className={cn(
                            "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory",
                            "hide-scrollbar pb-4"
                        )}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                /* 85vw width gives ~7.5vw peek of the next card */
                                className="snap-center flex-none w-[85vw]"
                            >
                                <PortfolioCard project={project} isMobile mobileIndex={index} />
                            </div>
                        ))}
                        {/* trailing spacer so last card can fully snap-center */}
                        <div className="flex-none w-[7.5vw]" aria-hidden="true" />
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-1.5 mt-5">
                        {projects.map((p) => (
                            <span
                                key={p.id}
                                className="block w-1.5 h-1.5 rounded-full bg-white/20"
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-10 text-center md:hidden">
                    <button className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-200 focus-ring">
                        View Full Archive
                    </button>
                </div>
            </div>
        </section>
    );
}

function PortfolioCard({
    project,
    isMobile = false,
    mobileIndex = 0,
}: {
    project: (typeof projects)[number];
    isMobile?: boolean;
    mobileIndex?: number;
}) {
    return (
        <motion.div
            variants={isMobile ? undefined : cardAnim}
            initial={isMobile ? { opacity: 0, y: 24, scale: 0.98 } : undefined}
            whileInView={isMobile ? { opacity: 1, y: 0, scale: 1 } : undefined}
            viewport={isMobile ? { once: true } : undefined}
            transition={
                isMobile
                    ? { delay: mobileIndex * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    : undefined
            }
            /* Active-state: scale + stronger shadow on tap */
            whileTap={isMobile ? { scale: 1.03, boxShadow: "0 16px_56px rgba(255,255,255,0.10)" } : undefined}
            whileHover={!isMobile ? "hover" : undefined}
            className={cn(
                "group relative w-full overflow-hidden rounded-[2rem] bg-gray-900 cursor-pointer",
                /* Mobile card height is fixed; desktop respects row-span */
                isMobile ? "h-[420px]" : project.tall ? "row-span-2" : "row-span-1",
                "transition-shadow duration-300"
            )}
        >
            <Image
                src={project.image}
                alt={project.title}
                fill
                sizes={
                    isMobile
                        ? "85vw"
                        : "(max-width: 1200px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-400" />

            {/* Content — slides up on hover */}
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-350 ease-out">
                    <span className="block text-[10px] font-bold tracking-[0.25em] text-white/60 uppercase mb-2">
                        {project.category}
                    </span>
                    <div className="flex items-end justify-between gap-3">
                        <h3 className="text-xl font-bold text-white leading-tight">
                            {project.title}
                        </h3>
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 p-2 bg-white rounded-full">
                            <ArrowUpRight className="w-4 h-4 text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
