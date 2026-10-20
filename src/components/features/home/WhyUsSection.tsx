"use client";

import { motion } from "framer-motion";
import { Camera, Users, ShieldCheck, Sliders, MapPin } from "lucide-react";

const WHY_US_ITEMS = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description: "Industry-grade gear for flawless production on location.",
  },
  {
    icon: Users,
    title: "Experienced On-Site Team",
    description: "Skilled technicians & operators managing your event.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Live Production",
    description: "Camera switching, audio, presentations & streaming — all in one workflow.",
  },
  {
    icon: Sliders,
    title: "Flexible Packages",
    description: "Tailored solutions for corporate, private, and special events.",
  },
  {
    icon: MapPin,
    title: "Dubai & UAE Coverage",
    description: "Available for events across Dubai and the UAE.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase mb-3">
            WHY RG CREATIVES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Trusted. Experienced. Professional.
          </h2>
        </div>

        {/* 5 Cards Row matching the mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {WHY_US_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-400/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-[0_10px_30px_rgba(251,191,36,0.08)]"
              >
                {/* Icon in subtle circular badge */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-amber-400/10 group-hover:border-amber-400/40 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white mb-2.5 leading-snug group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
