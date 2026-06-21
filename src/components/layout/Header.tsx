"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  // { href: "#pricing", label: "Pricing" },
  // { href: "#testimonials", label: "Reviews" },
  // { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track scroll for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      // Triggers when the section crosses the vertical center of the viewport
      { rootMargin: "-50% 0px -50% 0px" },
    );

    NAV_LINKS.forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Also observe contact section
    const contactElement = document.getElementById("contact");
    if (contactElement) observer.observe(contactElement);

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Smooth scroll handler that works every time
  // Smooth scroll handler that works every time
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    // 1. Close mobile menu
    setMobileOpen(false);

    // 2. Immediately force-unlock the scroll so the browser allows movement
    document.body.style.overflow = "";

    const id = targetId.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      // 3. Add a slight delay to let React process the menu closing
      // and let the browser register the unlocked body before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 50);

      // Update the URL hash silently
      window.history.pushState(null, "", targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_2px_32px_rgba(0,0,0,0.6)]"
          : "py-5 bg-black md:bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-32 md:w-40 h-8 md:h-10 shrink-0">
          <Link
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="absolute top-1/2 -translate-y-1/2 left-0 hover:opacity-75 transition-opacity duration-200 focus-ring rounded-sm z-10 flex items-center"
          >
            <Image
              src="/rg_logo.png"
              alt="Company Logo"
              width={210}
              height={66}
              className="w-auto h-14 md:h-18 object-contain max-w-none"
              priority
            />
          </Link>
        </div>

        {/* Center Nav — desktop */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg hover:bg-white/5 group focus-ring ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {/* Underline accent */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-px bg-white/80 transition-transform duration-300 origin-left rounded-full ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
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
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
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
                      className={`flex items-center py-3.5 px-2 text-base font-medium border-b border-white/5 last:border-none transition-colors ${
                        isActive
                          ? "text-white pl-4 border-l-2 border-l-white bg-white/5 rounded-r-lg"
                          : "text-white/70 hover:text-white"
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
                className="pt-4"
              >
                <Link
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
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
