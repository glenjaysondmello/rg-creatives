"use client";

import { motion } from "framer-motion";
import {
  Radio,
  Users2,
  Video,
  Camera,
  Film,
  RotateCw,
  Printer,
  ArrowUpRight,
} from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const SERVICES: ServiceItem[] = [
  {
    id: "live-streaming",
    title: "Live Streaming",
    shortDesc: "Multi-camera, professional audio, recording & backup internet.",
    fullDesc:
      "Multi-camera live streaming with professional audio, recording, and a backup internet plan where required.",
    icon: Radio,
  },
  {
    id: "hybrid-events",
    title: "Hybrid Events",
    shortDesc: "Zoom / Teams integration, remote speakers, presentations & mix-minus audio.",
    fullDesc:
      "Production support for in-person and remote speakers, presentations, and seamless Zoom, Teams, and meeting platform integration.",
    icon: Users2,
  },
  {
    id: "multi-cam",
    title: "Multi-Camera Coverage",
    shortDesc: "Professional camera operators, live switching & event recording.",
    fullDesc:
      "Professional camera operators, live switching, and complete event recording.",
    icon: Video,
  },
  {
    id: "photography",
    title: "Event Photography",
    shortDesc: "High-quality, candid & corporate photography.",
    fullDesc:
      "Premium coverage for weddings, private parties, corporate events, conferences, and special occasions, including candid, formal, and key-moment photography.",
    icon: Camera,
  },
  {
    id: "videography",
    title: "Event Videography",
    shortDesc: "Cinematic videos, highlights & aftermovies.",
    fullDesc:
      "Cinematic coverage of weddings, parties, corporate events, and special occasions with professional post-production editing.",
    icon: Film,
  },
  {
    id: "booth-360",
    title: "360° Photo Booth",
    shortDesc: "Immersive, branded experiences.",
    fullDesc:
      "A 360-degree video booth experience with branded content options, slow-motion effects, and instant digital sharing.",
    icon: RotateCw,
  },
  {
    id: "dslr-booth",
    title: "DSLR Photobooth",
    shortDesc: "Premium photo booth with instant prints.",
    fullDesc:
      "A DSLR photo booth with instant prints and custom-branded print layouts, subject to package and event requirements.",
    icon: Printer,
  },
];

type ServiceGalleryProps = {
  onSelectService?: (serviceName: string) => void;
};

export function ServiceGallery({ onSelectService }: ServiceGalleryProps) {
  return (
    <section id="services" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Header matching reference mockup */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Complete Event Media Solutions
          </h2>
        </div>

        {/* 7 Services Grid matching mockup reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  if (onSelectService) {
                    onSelectService(service.title);
                  } else {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-400/50 hover:bg-zinc-900/90 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(251,191,36,0.1)]"
              >
                {/* Minimal Circular Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-400/10 group-hover:border-amber-400/40 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" />
                </div>

                {/* Service Title */}
                <h3 className="text-base font-bold text-white mb-2.5 leading-snug group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.shortDesc}
                </p>

                {/* Subtle Hover Action Indicator */}
                <div className="mt-4 pt-3 w-full border-t border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-semibold text-amber-400 inline-flex items-center gap-1">
                    Book Service
                    <ArrowUpRight className="w-3 h-3" />
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
