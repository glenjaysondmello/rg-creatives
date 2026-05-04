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
        className: "", 
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop", 
        video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-and-pink-light-996-large.mp4", 
    },
    {
        id: 2,
        title: "Cinematic Video Production",
        tag: "4K Production",
        className: "", 
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop", 
        video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-and-pink-light-996-large.mp4", 
    },
    {
        id: 3,
        title: "Live Streaming",
        tag: "Global Reach",
        className: "", 
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop", 
    },
    {
        id: 4,
        title: "Event Photography",
        tag: "Candid Moments",
        className: "", 
        image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop", 
    },
    {
        id: 5,
        title: "Corporate AV Setup",
        tag: "Enterprise",
        className: "",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "Drone Videography",
        tag: "Aerial Views",
        className: "",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop",
    }
];

export function ServiceGallery() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-16 flex flex-col md:flex-row justify-between items-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                            Our Expertise
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            PREMIUM EVENT<br/>SERVICES.
                        </h3>
                    </div>
                    <button className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                        View All Services <ArrowUpRight className="ml-2 w-4 h-4" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
                
                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                        View All Services <ArrowUpRight className="ml-2 w-4 h-4" />
                    </button>
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
                "group flex flex-col bg-gray-900 border border-white/10 rounded-[2rem] overflow-hidden",
                service.className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Upper Half: Media */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-800">
                {/* Square Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold tracking-widest text-black bg-white rounded-md uppercase">
                    {service.tag}
                </div>

                <Image
                    src={service.image}
                    alt={service.title}
                    fill
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
            <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-2xl font-bold leading-tight mb-4">
                        {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                        Professional {service.title.toLowerCase()} tailored for your specific event needs and audience engagement.
                    </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <button className="text-sm font-semibold tracking-wide text-white hover:text-gray-300 transition-colors uppercase">
                        Details
                    </button>
                    <div className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

