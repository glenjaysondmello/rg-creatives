"use client";

import { Calendar, PlayCircle, Trophy } from "lucide-react";
import { motion, Variants } from "framer-motion";

const actions = [
    {
        icon: PlayCircle,
        title: "View Showreel",
        description: "Experience our cinematic approach",
        href: "#services",
    },
    {
        icon: Calendar,
        title: "Book Services",
        description: "Secure your date today",
        href: "#contact",
    },
    {
        icon: Trophy,
        title: "Our Portfolio",
        description: "Award-winning event coverage",
        href: "#portfolio",
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const card: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function ActionButtonGrid() {
    return (
        <section className="bg-black py-12 relative z-20 -mt-12">
            <div className="container mx-auto px-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {actions.map((action) => {
                        const Icon = action.icon;
                        return (
                            <motion.a
                                key={action.title}
                                href={action.href}
                                variants={card}
                                whileHover={{ scale: 1.025, y: -4 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex flex-col items-center justify-center p-10 bg-gray-900/80 border border-white/10 rounded-[2rem] hover:bg-gray-800/80 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(255,255,255,0.04)] transition-colors duration-300 group cursor-pointer"
                            >
                                <div className="mb-5 p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-tight mb-1.5">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-200 font-medium text-center">
                                    {action.description}
                                </p>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
