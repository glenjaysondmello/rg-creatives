"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type Service = {
  id: number;
  title: string;
  tag: string;
  className: string;
  image: string;
  video?: string;
  description: string;
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
      "Includes HD/4K 360 video capture, instant social media sharing, custom branding & overlays, LED lighting setup, props & premium backdrop options, and on-site technical support.",
  },
  {
    id: 2,
    title: "DSLR Photo Booth",
    tag: "Studio Quality",
    className: "",
    image: "/photo_booth.png",
    description:
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
      "Event photography, cinematic videography, corporate shoots, social media content creation, promotional videos, and highlight reels & aftermovies.",
  },
];

export function ServiceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const firstChild = container.children[0] as HTMLElement;
          const cardWidth = firstChild
            ? firstChild.offsetWidth + 16
            : window.innerWidth * 0.85;
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isInteracting]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;

    const scrollPercent = container.scrollLeft / maxScroll;
    const index = Math.round(scrollPercent * (services.length - 1));
    setActiveIndex(index);
  };

  return (
    <section id="services" className="py-28 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
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
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              className="w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)]"
            />
          ))}
        </div>

        {/* Mobile Layout — Changed snap-mandatory to snap-proximity */}
        <div className="md:hidden -mx-6 px-6">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsInteracting(false), 2000);
            }}
            className={cn(
              "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-proximity",
              "hide-scrollbar pb-4",
            )}
          >
            {services.map((service, index) => (
              <div key={service.id} className="snap-center flex-none w-[85vw]">
                <ServiceCard service={service} index={index} isMobile />
              </div>
            ))}
            <div className="flex-none w-[7.5vw]" aria-hidden="true" />
          </div>

          <div className="flex justify-center items-center gap-2 mt-5">
            {services.map((s, idx) => (
              <span
                key={s.id}
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300 ease-in-out",
                  activeIndex === idx ? "w-5 bg-white" : "w-1.5 bg-white/20",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isMobile = false,
  className,
}: {
  service: Service;
  index: number;
  isMobile?: boolean;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!isMobile) setIsExpanded(false);
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "group relative w-full overflow-hidden rounded-4xl bg-gray-900 cursor-pointer h-[420px]",
        // Uses native CSS transitions on mobile active taps to keep scrolls fluid
        isMobile &&
          "active:scale-[1.02] active:shadow-[0_16px_56px_rgba(255,255,255,0.1)] transition-all duration-200",
        className,
        service.className,
      )}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes={isMobile ? "85vw" : "(max-width: 1200px) 50vw, 33vw"}
        className="object-cover transition-transform duration-700 lg:group-hover:scale-105 z-0"
      />

      {service.video && isHovered && !isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-0"
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

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-400 z-10",
          isExpanded ? "opacity-90" : "opacity-60 lg:group-hover:opacity-90",
        )}
      />

      <div className="absolute inset-0 p-7 flex flex-col justify-end z-20">
        <div
          className={cn(
            "transform transition-transform duration-350 ease-out",
            isExpanded
              ? "translate-y-0"
              : "translate-y-4 lg:group-hover:translate-y-0",
          )}
        >
          <span className="block text-[10px] font-bold tracking-[0.25em] text-white/60 uppercase mb-2">
            {service.tag}
          </span>

          <div className="flex items-end justify-between gap-3">
            <h3 className="text-xl font-bold text-white leading-tight">
              {service.title}
            </h3>
            <div
              className={cn(
                "shrink-0 p-2 bg-white rounded-full lg:hidden transition-transform duration-300",
                isExpanded && "rotate-45",
              )}
            >
              <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
          </div>

          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out mt-1",
              isExpanded
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]",
            )}
          >
            <div className="overflow-hidden">
              <p
                className={cn(
                  "text-sm text-gray-300 pt-3 transition-opacity duration-300 delay-100",
                  isExpanded
                    ? "opacity-100"
                    : "opacity-0 lg:group-hover:opacity-100",
                )}
              >
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
