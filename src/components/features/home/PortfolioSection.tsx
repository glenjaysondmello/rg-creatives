"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    { id: 1, title: "Dubai Tech Week", category: "Live Streaming", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Royal Wedding", category: "Cinematic Coverage", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Global Summit", category: "Corporate AV", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Fashion Gala", category: "360° Booth", image: "https://images.unsplash.com/photo-1509631179647-0c500ba1417f?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Music Festival", category: "Drone Coverage", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop" },
    { id: 6, title: "Brand Launch", category: "Event Photography", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" },
];

export function PortfolioSection() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                            Selected Works
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            OUR PORTFOLIO.
                        </h3>
                    </div>
                </div>

                {/* Grid Layout mimicking Masonry visually with varying spans or simple strict grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-[2rem] bg-gray-900 cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            
                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-xs font-bold tracking-widest text-white/70 uppercase mb-2">
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-bold text-white">
                                    {project.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors">
                        View Full Archive
                    </button>
                </div>
            </div>
        </section>
    );
}
