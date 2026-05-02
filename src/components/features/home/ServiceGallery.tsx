"use client";

import { motion } from "framer-motion";
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
};

const services: Service[] = [
    {
        id: 1,
        title: "360° Glam Booth",
        tag: "Event Favorite",
        className: "col-span-1 row-span-2 min-h-[500px]", // Large Vertical
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop", // Camera/Event vibe
        video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-and-pink-light-996-large.mp4", // Placeholder
    },
    {
        id: 2,
        title: "Cinematic Video Production",
        tag: "4K Production",
        className: "col-span-1 md:col-span-2 row-span-1 min-h-[250px]", // Large Horizontal
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop", // Art/Film vibe
        video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-and-pink-light-996-large.mp4", // Placeholder
    },
    {
        id: 3,
        title: "Live Streaming",
        tag: "Global Reach",
        className: "col-span-1 row-span-1 min-h-[250px]", // Small
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop", // Streaming/Tech
    },
    {
        id: 4,
        title: "Event Photography",
        tag: "Candid Moments",
        className: "col-span-1 row-span-1 min-h-[250px]", // Small
        image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop", // Photography
    },
];

export function ServiceGallery() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-2">
                        Our Expertise
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold">
                        World-Class Event Services
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={cn(
                "relative overflow-hidden group rounded-2xl cursor-pointer bg-gray-900 border border-white/10",
                service.className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            {/* Video Overlay on Hover */}
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
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            )}

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-black bg-white rounded-full">
                            {service.tag}
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white rounded-full">
                            <ArrowUpRight className="w-4 h-4 text-black" />
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                        {service.title}
                    </h3>
                </div>
            </div>
        </motion.div>
    );
}
