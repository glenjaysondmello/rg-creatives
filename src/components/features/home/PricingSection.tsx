"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
    {
        name: "Essential",
        price: "$1,500",
        badge: "Most Popular",
        features: ["4 Hours Coverage", "1 Videographer", "Highlight Reel (3 mins)", "Standard Audio"],
    },
    {
        name: "Premium",
        price: "$3,200",
        badge: "Best Value",
        features: ["8 Hours Coverage", "2 Videographers", "Cinematic Film (5-7 mins)", "Drone Footage", "Premium Audio + Lighting"],
    },
    {
        name: "Enterprise",
        price: "Custom",
        badge: "Full Scale",
        features: ["Multi-day Coverage", "Full Crew (4+)", "Live Streaming Setup", "Same-day Edits", "Raw Footage Included"],
    }
];

export function PricingSection() {
    const [selectedPackage, setSelectedPackage] = useState<number | null>(1); // Default select middle

    return (
        <section className="py-24 bg-black text-white border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                        Investment
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        TRANSPARENT PRICING.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setSelectedPackage(idx)}
                            className={cn(
                                "relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer",
                                selectedPackage === idx 
                                    ? "bg-gray-900 border-white/40 transform scale-105 z-10 shadow-2xl" 
                                    : "bg-black border-white/10 hover:border-white/20"
                            )}
                        >
                            {selectedPackage === idx && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full">
                                    {pkg.badge}
                                </div>
                            )}

                            <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                            <div className="text-4xl font-extrabold mb-8">{pkg.price}</div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center text-gray-300 text-sm">
                                        <Check className="w-5 h-5 mr-3 text-white" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button 
                                className={cn(
                                    "w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center",
                                    selectedPackage === idx 
                                        ? "bg-white text-black hover:bg-gray-200" 
                                        : "bg-gray-900 text-white border border-white/10 hover:bg-gray-800"
                                )}
                            >
                                Select Package <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
                
                {/* Optional Custom Builder Callout */}
                <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl border border-white/10 bg-gray-900/50">
                    <h4 className="text-xl font-bold mb-4">Need a custom quote?</h4>
                    <p className="text-gray-400 mb-6 text-sm">Use our interactive package builder to get an exact estimate based on your event requirements.</p>
                    <button className="inline-flex items-center text-white border-b border-white pb-1 font-medium hover:text-gray-300 hover:border-gray-300 transition-colors">
                        Launch Builder <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
