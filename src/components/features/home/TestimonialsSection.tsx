"use client";

import { Star, Quote } from "lucide-react";
import { useState, useRef } from "react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "Dubai, UAE",
        text: "The team captured our corporate gala perfectly. The live stream was flawless and the cinematic recap video exceeded all our expectations.",
        category: "Corporate Event"
    },
    {
        id: 2,
        name: "Ahmed Al Maktoum",
        location: "Abu Dhabi, UAE",
        text: "Absolute professionals. Their 360 booth was the highlight of the evening, and the media team operated invisibly but caught every moment.",
        category: "Private Gala"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        location: "Sharjah, UAE",
        text: "We've worked with many agencies, but this team's attention to detail and premium quality output stands unmatched in the region.",
        category: "Brand Launch"
    }
];

export function TestimonialsSection() {
    // In a full implementation, we'd add drag/swipe logic for the carousel here
    // For now, we'll implement a clean flex-row scroll container
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 bg-black text-white border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                        Client Feedback
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        TRUSTED BY BRANDS.
                    </h3>
                </div>

                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((t) => (
                        <div 
                            key={t.id}
                            className="min-w-[85vw] md:min-w-0 snap-center bg-gray-900 border border-white/10 rounded-[2rem] p-8 flex flex-col relative"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                            
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h4 className="font-bold text-lg">{t.name}</h4>
                                    <p className="text-sm text-gray-400">{t.location}</p>
                                </div>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-white text-white ml-1" />
                                    ))}
                                </div>
                            </div>
                            
                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 bg-white/10 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                                    {t.category}
                                </span>
                                <p className="text-gray-300 italic text-lg leading-relaxed">
                                    &quot;{t.text}&quot;
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
