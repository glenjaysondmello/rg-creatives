"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion, Variants } from "framer-motion";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/rg_creatives_fze?igsh=MW45MjlqNnh0ajMxNg==",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1Gue7iyD58/", // Replace with your actual Facebook page link
    label: "Facebook",
  },
];

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export function Footer() {
  return (
    <footer className="bg-black text-white pt-28 pb-8 border-t border-white/10">
      <motion.div
        className="container mx-auto px-6 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Large CTA */}
        <motion.h2
          variants={fadeUp(0)}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-10 leading-none"
        >
          LET&apos;S BUILD.
        </motion.h2>

        {/* Primary CTAs */}
        <motion.div
          variants={fadeUp(0.1)}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="https://wa.me/971567571993"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-100 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)] transition-all duration-200 focus-ring"
            >
              WhatsApp Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="tel:+971567571993"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white border border-white/20 bg-gray-900/60 rounded-full hover:bg-gray-800 hover:border-white/30 transition-all duration-200 focus-ring"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp(0.2)} className="flex gap-3 mb-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.93 }}
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors duration-200 focus-ring"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          variants={fadeUp(0.25)}
          className="flex flex-col md:flex-row gap-6 text-sm text-gray-500 mb-16"
        >
          <a
            href="mailto:Rgcreatives23@gmail.com"
            className="hover:text-white transition-colors inline-flex items-center justify-center gap-2 focus-ring"
          >
            <Mail className="w-4 h-4" />
            Rgcreatives23@gmail.com
          </a>
          <span className="hidden md:inline text-gray-700">·</span>
          <span>Dubai, United Arab Emirates</span>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp(0.3)}
          className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600"
        >
          <p>
            &copy; {new Date().getFullYear()} RG Creatives. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="hover:text-gray-400 transition-colors focus-ring"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-400 transition-colors focus-ring"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
