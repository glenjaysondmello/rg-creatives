"use client";

import { useState } from "react";
import { Star, PenLine } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { ReviewModal } from "./ReviewModal";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "RG Creatives delivered an exceptional live streaming experience for our conference. Professional, responsive and easy to work with!",
    name: "Sarah Al-Fahim",
    role: "Event Manager | Dubai",
    initials: "SA",
    color: "from-amber-400 to-amber-600",
  },
  {
    id: 2,
    quote:
      "The 360 booth was a huge hit at our event! Great quality, friendly team and smooth setup.",
    name: "James Carter",
    role: "Marketing Director | UAE",
    initials: "JC",
    color: "from-blue-400 to-indigo-600",
  },
  {
    id: 3,
    quote:
      "Highly recommend RG Creatives for corporate events. Their team is professional, creative and always on time.",
    name: "Priya Nair",
    role: "Event Planner | Dubai",
    initials: "PN",
    color: "from-emerald-400 to-teal-600",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function TestimonialsSection() {
  const [isReviewOpen, setReviewOpen] = useState(false);

  return (
    <section id="testimonials" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Header matching reference mockup */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase mb-3">
            CLIENT REVIEWS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* 3 Review Cards Grid matching mockup */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={cardAnim}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-400/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info with Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-black shadow-md shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-tight">
                    {t.name}
                  </span>
                  <span className="text-xs text-gray-400 font-medium mt-0.5">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Write a Review Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setReviewOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-zinc-900 hover:bg-zinc-800 text-xs sm:text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
          >
            <PenLine className="w-4 h-4 text-amber-400" />
            <span>Write a Review</span>
          </button>
        </div>
      </div>

      <ReviewModal isOpen={isReviewOpen} onClose={() => setReviewOpen(false)} />
    </section>
  );
}
