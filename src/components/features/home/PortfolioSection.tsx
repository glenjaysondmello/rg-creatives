"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type PortfolioItem = {
  id: string;
  title: string;
  locationCategory: string;
  image: string;
  video?: string;
  description: string;
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "conference",
    title: "Corporate Conference",
    locationCategory: "Dubai | Live Streaming + Hybrid",
    image: "/corporate_stage.jpg",
    description:
      "Full live multi-camera broadcast, audio engineering, and remote speaker Zoom/Teams integration for over 1,200 delegates at the Dubai Leadership Conference.",
  },
  {
    id: "product-launch",
    title: "Product Launch",
    locationCategory: "Dubai | Multi-Camera + Video",
    image: "/product_launch.jpg",
    description:
      "High-energy live switching, cinematic recap videography, dynamic spotlight lighting, and real-time social media clip generation.",
  },
  {
    id: "wedding",
    title: "Wedding",
    locationCategory: "Dubai | Photography + Videography",
    image: "/wedding_hall.jpg",
    description:
      "Grand luxury wedding reception coverage featuring drone cinematography, multi-angle candid photography, and bespoke same-day edit film.",
  },
  {
    id: "360-booth",
    title: "360 Booth",
    locationCategory: "Dubai | 360° Video Experience",
    image: "/booth_360.jpg",
    video: "/360Booth_Showreel.mp4",
    description:
      "Custom branded 360 video booth platform with automated slow-motion capture, instant AirDrop/QR sharing, and custom event graphic overlays.",
  },
  {
    id: "dslr-booth",
    title: "DSLR Photobooth",
    locationCategory: "Dubai | Instant Prints",
    image: "/dslr_photobooth.jpg",
    description:
      "High-resolution DSLR photo kiosk with customized brand print templates, studio flash lighting, touchscreen UI, and instant photo strip printing.",
  },
];

export function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Header matching reference mockup */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase mb-3">
              OUR PORTFOLIO
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Real Events. Lasting Memories.
            </h2>
          </div>

          <a
            href="#contact"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-zinc-900 border border-white/15 rounded-full hover:bg-zinc-800 hover:border-white/30 transition-all duration-200"
          >
            <span>View All Projects</span>
          </a>
        </div>

        {/* 5 Cards Row matching reference mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Play Badge */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 mb-3.5 shadow-lg group-hover:border-amber-400/50 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Circular Play / Inspect Icon Badge */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-200 shadow-md">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Title & Category below thumbnail */}
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-400 font-light mt-1">
                {item.locationCategory}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 border border-white/15 overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Container */}
              <div className="relative aspect-video w-full bg-black">
                {selectedItem.video ? (
                  <video
                    src={selectedItem.video}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Information Drawer */}
              <div className="p-6 sm:p-8">
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  {selectedItem.locationCategory}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {selectedItem.description}
                </p>

                <div className="mt-6 flex justify-end gap-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-transform active:scale-95"
                  >
                    Request Similar Setup
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
