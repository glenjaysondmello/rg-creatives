"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Work" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Reviews" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
                    : "py-5 bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-extrabold tracking-widest text-white hover:opacity-80 transition-opacity duration-200 focus-ring rounded-sm"
                >
                    AGENCY<span className="text-white/40">.</span>
                </Link>

                {/* Center Nav — desktop */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium tracking-wide text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group focus-ring"
                        >
                            {link.label}
                            <span className="absolute bottom-1 left-4 right-4 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Search pill — desktop */}
                    <div className="hidden md:flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200 group">
                        <Search className="w-4 h-4 text-gray-500 group-hover:text-gray-300 mr-2 transition-colors" />
                        <input
                            type="text"
                            placeholder="Explore..."
                            className="bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-500 w-20 focus:w-28 transition-all duration-300 focus-ring"
                        />
                    </div>

                    {/* CTA */}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] focus-ring"
                    >
                        Contact
                    </Link>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus-ring"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-1">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-3 px-2 text-base font-medium text-gray-300 hover:text-white border-b border-white/5 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
