"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "py-3 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_2px_32px_rgba(0,0,0,0.6)]"
                    : "py-5 bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-extrabold tracking-widest text-white hover:opacity-75 transition-opacity duration-200 focus-ring rounded-sm shrink-0"
                >
                    AGENCY<span className="text-white/30">.</span>
                </Link>

                {/* Center Nav — desktop */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium tracking-wide text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group focus-ring"
                        >
                            {link.label}
                            {/* Underline accent */}
                            <span className="absolute bottom-1 left-4 right-4 h-px bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* CTA */}
                    <Link
                        href="#contact"
                        className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_24px_rgba(255,255,255,0.18)] focus-ring"
                    >
                        Contact
                    </Link>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors focus-ring"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
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
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.18 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center py-3.5 px-2 text-base font-medium text-white/70 hover:text-white border-b border-white/5 last:border-none transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* CTA inside mobile */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.18 }}
                                className="pt-4"
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center w-full py-3 px-6 text-sm font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
