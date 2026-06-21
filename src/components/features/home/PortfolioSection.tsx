"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Graduation Ceremony",
    category: "Live Event Coverage",
    description:
      "Multi-camera streaming and dynamic highlight reel creation for the graduating class.",
    image: "/grad_ceremony_.png",
    tall: true,
  },
  {
    id: 2,
    title: "Royal Wedding",
    category: "Cinematic Coverage",
    description:
      "Capturing the magic and elegance of a timeless union with cinematic precision.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    tall: false,
  },
  {
    id: 3,
    title: "Global Summit",
    category: "Corporate AV",
    description:
      "Comprehensive audio-visual solutions and live broadcasting for international delegates.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop",
    tall: false,
  },
  {
    id: 4,
    title: "Gala Dinner",
    category: "Corporate Event",
    description:
      "Premium event coverage capturing keynote speakers, awards, and exclusive VIP moments.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop",
    tall: true,
  },
  {
    id: 5,
    title: "Music Festival",
    category: "Drone Coverage",
    description:
      "High-octane aerial footage and stage coverage capturing the energy of massive crowds.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
    tall: false,
  },
  {
    id: 6,
    title: "Brand Launch",
    category: "Event Photography",
    description:
      "Dynamic and polished photography capturing the excitement of a new product reveal.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    tall: false,
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollNode = scrollContainerRef.current;
        const maxScroll = scrollNode.scrollWidth - scrollNode.clientWidth;

        if (scrollNode.scrollLeft >= maxScroll - 10) {
          scrollNode.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const firstChild = scrollNode.children[0] as HTMLElement;
          const cardWidth = firstChild
            ? firstChild.offsetWidth + 16
            : window.innerWidth * 0.85;
          scrollNode.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isInteracting]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const containerNode = e.currentTarget;
    const maxScroll = containerNode.scrollWidth - containerNode.clientWidth;
    if (maxScroll <= 0) return;

    const scrollPercent = containerNode.scrollLeft / maxScroll;
    const index = Math.round(scrollPercent * (projects.length - 1));
    setActiveIndex(index);
  };

  return (
    <section id="portfolio" className="py-28 bg-black text-white">
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
              Selected Works
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              OUR PORTFOLIO.
            </h2>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:flex flex-wrap gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              className={cn(
                "grow h-[380px]",
                project.tall
                  ? "md:basis-[100%] lg:basis-[55%]"
                  : "md:basis-[45%] lg:basis-[30%]",
              )}
            />
          ))}
        </motion.div>

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
            {projects.map((project, index) => (
              <div key={project.id} className="snap-center flex-none w-[85vw]">
                <PortfolioCard project={project} isMobile mobileIndex={index} />
              </div>
            ))}
            <div className="flex-none w-[7.5vw]" aria-hidden="true" />
          </div>

          <div className="flex justify-center items-center gap-2 mt-5">
            {projects.map((p, idx) => (
              <span
                key={p.id}
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

function PortfolioCard({
  project,
  isMobile = false,
  mobileIndex = 0,
  className,
}: {
  project: (typeof projects)[number];
  isMobile?: boolean;
  mobileIndex?: number;
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={isMobile ? undefined : cardAnim}
      initial={isMobile ? { opacity: 0, y: 24, scale: 0.98 } : undefined}
      whileInView={isMobile ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={isMobile ? { once: true } : undefined}
      transition={
        isMobile
          ? {
              delay: mobileIndex * 0.08,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }
          : undefined
      }
      whileHover={!isMobile ? "hover" : undefined}
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "group relative w-full overflow-hidden rounded-4xl bg-gray-900 cursor-pointer transition-all duration-200",
        // Swapped whileTap for CSS hardware accelerated active state to avoid scroll locking
        isMobile
          ? "h-[420px] active:scale-[1.02] active:shadow-[0_16px_56px_rgba(255,255,255,0.1)]"
          : className,
      )}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={isMobile ? "85vw" : "(max-width: 1200px) 50vw, 50vw"}
        className="object-cover transition-transform duration-700 lg:group-hover:scale-105"
      />

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-400",
          isExpanded ? "opacity-90" : "opacity-60 lg:group-hover:opacity-90",
        )}
      />

      <div className="absolute inset-0 p-7 flex flex-col justify-end">
        <div
          className={cn(
            "transform transition-transform duration-350 ease-out",
            isExpanded
              ? "translate-y-0"
              : "translate-y-4 lg:group-hover:translate-y-0",
          )}
        >
          <span className="block text-[10px] font-bold tracking-[0.25em] text-white/60 uppercase mb-2">
            {project.category}
          </span>

          <div className="flex items-end justify-between gap-3">
            <h3 className="text-xl font-bold text-white leading-tight">
              {project.title}
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
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
