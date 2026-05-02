"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type QuoteOverlayProps = {
    isOpen: boolean;
    onClose: () => void;
};

const services = [
    "360 Booth",
    "Video Editing",
    "Live Streaming",
    "Event Photography",
    "Other",
];

export function QuoteOverlay({ isOpen, onClose }: QuoteOverlayProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: "",
        name: "",
        date: "",
        whatsapp: "",
    });

    const handleServiceSelect = (service: string) => {
        setFormData((prev) => ({ ...prev, service }));
        setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Format WhatsApp Message
        const message = `Hi, I'm interested in ${formData.service} for an event on ${formData.date}. My name is ${formData.name}.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/?text=${encodedMessage}`; // Add generic number or specific one if provided

        // In a real app, you'd likely target a specific number, e.g., wa.me/971500000000
        // For now, I'll use a placeholder or empty to let user select contact if on mobile, 
        // but usually a number is required. I'll add a placeholder number 971500000000.
        const targetNumber = "971500000000"; // Replace with actual agency number
        window.open(`https://wa.me/${targetNumber}?text=${encodedMessage}`, "_blank");

        onClose();
        // Reset form after delay
        setTimeout(() => {
            setStep(1);
            setFormData({ service: "", name: "", date: "", whatsapp: "" });
        }, 500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />

                    {/* Slide-Over Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-[60] w-full max-w-md bg-zinc-900 border-l border-white/10 shadow-2xl overflow-y-auto"
                    >
                        <div className="p-6 md:p-8 min-h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-white">Get a Quote</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                                <motion.div
                                    className="h-full bg-purple-500"
                                    initial={{ width: "50%" }}
                                    animate={{ width: step === 1 ? "50%" : "100%" }}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {step === 1 ? (
                                    <div className="space-y-4">
                                        <p className="text-gray-400 mb-6">
                                            What service are you looking for?
                                        </p>
                                        <div className="grid gap-3">
                                            {services.map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => handleServiceSelect(s)}
                                                    className="w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all text-lg font-medium text-white"
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="flex items-center text-sm text-gray-400 hover:text-white mb-4 transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4 mr-1" />
                                            Back to Services
                                        </button>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">
                                                    Your Name
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">
                                                    Event Date
                                                </label>
                                                <input
                                                    required
                                                    type="date"
                                                    value={formData.date}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, date: e.target.value })
                                                    }
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">
                                                    WhatsApp Number
                                                </label>
                                                <input
                                                    required
                                                    type="tel"
                                                    value={formData.whatsapp}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, whatsapp: e.target.value })
                                                    }
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                    placeholder="+971 50 123 4567"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 mt-8 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-200 transition-transform active:scale-95"
                                        >
                                            Continue to WhatsApp
                                        </button>
                                        <p className="text-center text-xs text-gray-500">
                                            We'll open WhatsApp to confirm details.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
