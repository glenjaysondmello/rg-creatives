"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Main 5-Column Grid matching reference mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Logo & Bio */}
          <div className="lg:col-span-1 flex flex-col">
            <Link href="#home" className="inline-block mb-4 group" aria-label="RG Creatives Home">
              <div className="relative h-12 w-44 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="RG Creatives - Event Production & Media"
                  fill
                  className="object-contain object-left"
                  sizes="176px"
                />
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
              High-end on-site production, multi-camera streaming, hybrid meeting support, and immersive photobooths across Dubai and the UAE.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Live Streaming
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Hybrid Events
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Photography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Videography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  360° Booth
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  DSLR Photobooth
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#corporate" className="hover:text-amber-400 transition-colors">
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (from PDF) */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <a
                  href="tel:+971559617957"
                  className="hover:text-white transition-colors inline-flex items-center gap-2.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>+971 55 961 7957</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rgcreatives23@gmail.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-2.5"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>rgcreatives23@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.rgcreatives.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2.5"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>www.rgcreatives.live</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Dubai | UAE</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/rg_creatives_fze?igsh=MW45MjlqNnh0ajMxNg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400/50 hover:bg-white/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1Gue7iyD58/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400/50 hover:bg-white/10 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400/50 hover:bg-white/10 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400/50 hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row matching reference mockup */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2025 RG Creatives. All rights reserved.</p>
          <p className="text-gray-400">Event Production &amp; Media Services in Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
