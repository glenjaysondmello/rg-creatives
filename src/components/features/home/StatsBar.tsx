"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Users, MapPin } from "lucide-react";

const STATS = [
  {
    icon: Calendar,
    value: "100+",
    label: "Events Covered",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Corporate Events",
  },
  {
    icon: Users,
    value: "30+",
    label: "Happy Clients",
  },
  {
    icon: MapPin,
    value: "Based in Dubai",
    label: "Available Across the UAE",
  },
];

export function StatsBar() {
  return (
    <section className="py-12 bg-black text-white relative border-t border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-4 justify-start sm:justify-center p-4 rounded-xl bg-zinc-950/40 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
