"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#corporate", label: "Corporate Events" },
  { href: "#why-us", label: "About Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Detect and track browser light/dark mode preference
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkTheme(mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };

    try {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } catch {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  // Track scroll for header background + home active state
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // When near the very top, always mark Home as active
      if (window.scrollY < 80) {
        setActiveSection("#home");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      // Use a looser rootMargin so the home hero (which is very tall) triggers reliably
      { rootMargin: "-10% 0px -50% 0px", threshold: 0 },
    );

    NAV_LINKS.forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    document.body.style.overflow = "";

    // Home always scrolls to the very top
    if (targetId === "#home") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
      setActiveSection("#home");
      window.history.pushState(null, "", "#home");
      return;
    }

    const id = targetId.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 50);
      window.history.pushState(null, "", targetId);
    }
  };

  const isLight = mounted && !isDarkTheme;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? scrolled
            ? "py-3 bg-white/95 backdrop-blur-xl border-b border-zinc-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.06)] text-black"
            : "py-4 bg-gradient-to-b from-white/95 via-white/80 to-transparent backdrop-blur-sm text-black"
          : scrolled
            ? "py-3 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] text-white"
            : "py-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm text-white"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo — adapts automatically to browser light/dark mode */}
        <Link
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="group flex items-center focus-ring rounded-lg py-0.5"
          aria-label="RG Creatives Home"
        >
          <div className="relative h-12 md:h-[50px] lg:h-[54px] w-36 sm:w-40 md:w-44 lg:w-48 transition-transform duration-200 group-hover:scale-105">
            {/* Dark-mode logo: white text — visible on dark backgrounds */}
            <Image
              src="/logo2.png"
              alt="RG Creatives FZE - Event Production & Media"
              fill
              priority
              className={`object-contain object-left transition-opacity duration-300 ${isLight ? "opacity-0" : "opacity-100"}`}
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
              style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.7))" }}
            />
            {/* Light-mode logo: black text — visible on light backgrounds */}
            <Image
              src="/RG_Creatives_Black.png"
              alt="RG Creatives FZE - Event Production & Media"
              fill
              priority
              className={`object-contain object-left transition-opacity duration-300 ${isLight ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
            />
          </div>
        </Link>

        {/* Center Nav — desktop/tablet (md+) */}
        <nav
          className="hidden md:flex items-center gap-0.5 lg:gap-1 xl:gap-2"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`relative px-2 md:px-2.5 lg:px-3.5 py-1.5 text-[11px] md:text-[12px] lg:text-[13px] font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? isLight
                      ? "text-amber-600 bg-black/5 font-semibold"
                      : "text-amber-400 bg-white/5"
                    : isLight
                      ? "text-zinc-700 hover:text-black hover:bg-black/5"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full ${
                      isLight ? "bg-amber-600" : "bg-amber-400"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: WhatsApp Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/971559617957"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 hover:scale-105 group ${
              isLight
                ? "text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-emerald-600/40 shadow-sm"
                : "text-white bg-zinc-900/90 hover:bg-zinc-800 border border-emerald-500/40 hover:border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            }`}
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-3 h-3 fill-black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.802.376-.276.3-1.053 1.029-1.053 2.509 0 1.48 1.079 2.91 1.229 3.111.15.2 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.086 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.126-.276-.201-.577-.352z" />
              </svg>
            </div>
            <span>WhatsApp Us</span>
          </a>

          {/* Mobile hamburger — only shown below md breakpoint */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden p-2 rounded-lg transition-colors focus-ring ${
              isLight
                ? "text-zinc-800 hover:text-black hover:bg-black/5"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className={`overflow-hidden backdrop-blur-xl border-t ${
              isLight
                ? "bg-white/98 border-zinc-200 text-zinc-900"
                : "bg-black/95 border-white/10 text-white"
            }`}
          >
            <nav
              className="flex flex-col px-6 py-4 gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.18 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={`flex items-center py-3.5 px-2 text-base font-medium border-b last:border-none transition-colors ${
                        isLight
                          ? isActive
                            ? "text-amber-600 pl-4 border-l-2 border-l-amber-600 bg-black/5 rounded-r-lg border-zinc-100"
                            : "text-zinc-700 hover:text-black border-zinc-100"
                          : isActive
                            ? "text-amber-400 pl-4 border-l-2 border-l-amber-400 bg-white/5 rounded-r-lg border-white/5"
                            : "text-white/70 hover:text-white border-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* CTA inside mobile */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.18 }}
                className="pt-4 flex flex-col gap-3"
              >
                <a
                  href="https://wa.me/971559617957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 text-sm font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-colors shadow-lg"
                >
                  WhatsApp Us (+971 55 961 7957)
                </a>
                <Link
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="flex items-center justify-center w-full py-3 px-6 text-sm font-bold text-black bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
