"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

type CorporateEventSectionProps = {
  onOpenQuote?: () => void;
};

const CORPORATE_TYPES = [
  "Conferences & Seminars",
  "Award Ceremonies",
  "Product Launches",
  "Exhibitions & Trade Shows",
  "Gala Dinners",
  "Government Events",
  "Corporate Meetings",
  "Hybrid Conferences & Webinars",
];

export function CorporateEventSection({ onOpenQuote }: CorporateEventSectionProps) {
  return (
    <section id="corporate" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-6">
        {/* Main Card with Conference Backdrop */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[580px] lg:min-h-[520px] flex items-center shadow-2xl">
          {/* Background image showing huge LED screen with INNOVATION BUILDS A BRIGHTER FUTURE */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/3-Full Coverage/20260626_191444.jpg"
              alt="Corporate Conference Production in Dubai"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.7]"
            />
            {/* Dark gradient overlay on the left to ensure high readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 lg:via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
          </div>

          <div className="relative z-10 w-full p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase mb-4">
                CORPORATE EVENT PRODUCTION
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
                Professional Support for <br className="hidden sm:inline" />
                Your Business Events
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-8 max-w-xl">
                We provide end-to-end technical and media support for conferences, seminars, exhibitions, product launches and corporate functions in Dubai and across the UAE.
              </p>

              <button
                onClick={() => {
                  if (onOpenQuote) {
                    onOpenQuote();
                  } else {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(251,191,36,0.35)] focus-ring cursor-pointer"
              >
                <span>Explore Corporate Events</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Right Column: "Perfect For" Floating White Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 text-black shadow-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-5 border-b border-gray-100 pb-3">
                  Perfect for
                </h3>

                <ul className="space-y-3">
                  {CORPORATE_TYPES.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                      <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gray-700 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
