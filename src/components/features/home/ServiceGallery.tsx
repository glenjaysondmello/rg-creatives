"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Service = {
  id: number;
  title: string;
  tag: string;
  className: string;
  image: string;
  video?: string;
  description: string;
  extendedDetails: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "360 Glam Booth",
    tag: "Immersive",
    className: "",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-and-pink-light-996-large.mp4",
    description:
      "Create immersive and viral event experiences with our premium 360 video booth setup.",
    extendedDetails:
      "Includes HD/4K 360 video capture, instant social media sharing, custom branding & overlays, LED lighting setup, props & premium backdrop options, and on-site technical support.",
  },
  {
    id: 2,
    title: "DSLR Photo Booth",
    tag: "Studio Quality",
    className: "",
    image:
      "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop",
    description:
      "Professional DSLR-powered photo booth experience with studio-quality images and instant guest interaction.",
    extendedDetails:
      "Features professional DSLR camera quality, instant prints & digital sharing, touchscreen interactive booth, custom templates & branding, GIFs, boomerangs & filters, and elegant booth setup.",
  },
  {
    id: 3,
    title: "Live Streaming",
    tag: "Global Reach",
    className: "",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop",
    description:
      "Broadcast your event live to audiences anywhere in the world with reliable multi-camera live streaming solutions.",
    extendedDetails:
      "Multi-camera production, professional audio integration, real-time switching, internet & backup solutions, and an on-site streaming technician.",
  },
  {
    id: 4,
    title: "Hybrid Meeting & Event Solutions",
    tag: "Seamless",
    className: "",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    description:
      "Seamlessly connect in-person and virtual audiences with professional hybrid event production services.",
    extendedDetails:
      "Multi-platform integration, live presentation support, professional audio/video setup, audience interaction tools, and recording & replay options.",
  },
  {
    id: 5,
    title: "Photo & Video Production",
    tag: "Cinematic",
    className: "",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-and-pink-light-996-large.mp4",
    description:
      "Capture unforgettable moments with cinematic photography and professional video production services.",
    extendedDetails:
      "Event photography, cinematic videography, corporate shoots, social media content creation, promotional videos, and highlight reels & aftermovies.",
  },
];

export function ServiceGallery() {
  return (
    <section id="services" className="py-28 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-xs font-semibold text-gray-500 tracking-[0.25em] uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              PREMIUM EVENT
              <br />
              SERVICES.
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-200 focus-ring">
            View All Services <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* ── Desktop / Tablet grid (md+) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* ── Mobile horizontal snap carousel (< md) ── */}
        <div className="md:hidden -mx-6 px-6">
          <div
            className={cn(
              "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory",
              "hide-scrollbar",
              "pb-4",
            )}
          >
            {services.map((service, index) => (
              <div key={service.id} className="snap-center flex-none w-[85vw]">
                <ServiceCard service={service} index={index} isMobile />
              </div>
            ))}
            <div className="flex-none w-[7.5vw]" aria-hidden="true" />
          </div>

          <div className="flex justify-center gap-1.5 mt-5">
            {services.map((s) => (
              <span
                key={s.id}
                className="block w-1.5 h-1.5 rounded-full bg-white/20"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-200 focus-ring">
            View All Services <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isMobile = false,
}: {
  service: Service;
  index: number;
  isMobile?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDetailsTabOpen, setIsDetailsTabOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        "group flex flex-col bg-gray-900 border border-white/10 rounded-[2rem] overflow-hidden relative",
        "hover:border-white/20 hover:shadow-[0_8px_40px_rgba(255,255,255,0.04)]",
        "transition-all duration-300",
        isMobile &&
          "active:scale-[1.02] active:shadow-[0_12px_48px_rgba(255,255,255,0.08)]",
        service.className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={
        isMobile
          ? { scale: 1.025, boxShadow: "0 12px 48px rgba(255,255,255,0.08)" }
          : undefined
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!isMobile) setIsDetailsTabOpen(false);
      }}
    >
      {/* Upper Half: Media */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-800">
        <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold tracking-widest text-black bg-white rounded-md uppercase">
          {service.tag}
        </div>

        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
        />

        {service.video && isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10"
          >
            <video
              src={service.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>

      {/* Lower Half: Content */}
      <div className="p-7 flex flex-col flex-grow justify-between relative">
        <div>
          <h3 className="text-xl font-bold leading-tight mb-3">
            {service.title}
          </h3>
          <p
            className="text-gray-400 text-sm line-clamp-2 leading-relaxed"
            title={service.description}
          >
            {service.description}
          </p>
        </div>

        {/* Bottom Bar Area */}
        <div
          className="relative mt-5 pt-5 border-t border-white/10"
          onMouseEnter={() => !isMobile && setIsDetailsTabOpen(true)}
          onMouseLeave={() => !isMobile && setIsDetailsTabOpen(false)}
        >
          {/* The Mini Tab Popover */}
          <AnimatePresence>
            {isDetailsTabOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute bottom-[calc(100%+0.5rem)] left-0 w-full bg-white text-black p-5 rounded-2xl shadow-2xl z-30"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-gray-900">
                  What`&apos;`s Included
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.extendedDetails}
                </p>
                {/* Triangle indicator */}
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45 rounded-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <button
              onClick={() => isMobile && setIsDetailsTabOpen(!isDetailsTabOpen)}
              className="text-xs font-bold tracking-[0.15em] text-white hover:text-gray-300 transition-colors uppercase focus-ring outline-none"
            >
              Details
            </button>
            <button
              onClick={() => isMobile && setIsDetailsTabOpen(!isDetailsTabOpen)}
              className="p-2.5 bg-white/5 rounded-full hover:bg-white/15 hover:scale-110 transition-all duration-200 cursor-pointer outline-none"
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
