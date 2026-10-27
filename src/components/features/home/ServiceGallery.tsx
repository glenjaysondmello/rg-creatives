"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SERVICES, ServiceItem } from "./servicesData";
import { ServiceDetailModal } from "./ServiceDetailModal";

export function ServiceGallery() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );

  const handleOpenDetails = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  return (
    <section
      id="services"
      className="py-24 bg-black text-white relative border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Complete Event Solutions
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Professional media, broadcasting and interactive entertainment solutions for
            conferences, corporate events, weddings, exhibitions and private celebrations — Based in Dubai, Available Across the UAE.
          </p>
        </div>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {SERVICES.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Bottom row — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.slice(3).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index + 3}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>

      {/* Comprehensive Service Details Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={handleCloseDetails}
        onSelectService={(s) => setSelectedService(s)}
        allServices={SERVICES}
      />
    </section>
  );
}

function ServiceCard({
  service,
  index,
  onOpenDetails,
}: {
  service: ServiceItem;
  index: number;
  onOpenDetails: (s: ServiceItem) => void;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      onClick={() => onOpenDetails(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetails(service);
        }
      }}
      aria-label={`View more details for ${service.title}`}
      className="group relative flex flex-col rounded-2xl bg-zinc-950/90 border border-white/10 hover:border-amber-400/60 hover:bg-zinc-900/90 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_12px_36px_rgba(251,191,36,0.15)] overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-amber-400/50"
    >
      {/* Image Thumbnail - Unobstructed view on hover */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent pointer-events-none" />

        {/* Circular Service Icon Badge */}
        <div className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-black/75 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-300 shadow-md z-10">
          <Icon className="w-4 h-4 text-white group-hover:text-black transition-colors" />
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3 className="text-base font-bold text-white mb-1.5 leading-snug group-hover:text-amber-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-1 line-clamp-3">
          {service.shortDesc}
        </p>

        {/* Action Button: More Details */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(service);
            }}
            className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 inline-flex items-center gap-1.5 transition-all py-1 focus:outline-none"
            aria-label={`More details about ${service.title}`}
          >
            <span>More Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
