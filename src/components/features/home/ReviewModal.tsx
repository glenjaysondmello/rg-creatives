"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { X, Star, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ──────────────────────────────────────────────────────────────────

interface ReviewFormData {
    fullName: string;
    email: string;
    country: string;
    service: string;
    rating: number;
    review: string;
}

const SERVICES = [
    "Photography",
    "Videography",
    "Live Streaming",
    "360° Photo Booth",
    "Drone Coverage",
    "Event Management",
    "Corporate Event",
    "Brand Launch",
];

const INITIAL_FORM: ReviewFormData = {
    fullName: "",
    email: "",
    country: "",
    service: "",
    rating: 0,
    review: "",
};

// ─── Shared input class ──────────────────────────────────────────────────────

const inputCls =
    "w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200";

// ─── Star Rating Sub-component ───────────────────────────────────────────────

function StarRating({
    value,
    onChange,
}: {
    value: number;
    onChange: (val: number) => void;
}) {
    const [hovered, setHovered] = useState(0);

    return (
        <div className="flex gap-1.5" role="group" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => onChange(star)}
                    className="focus:outline-none group"
                >
                    <Star
                        className={`w-7 h-7 transition-all duration-150 ${star <= (hovered || value)
                            ? "fill-sky-400 text-sky-400 scale-110"
                            : "fill-transparent text-gray-600 group-hover:text-sky-400/50"
                            }`}
                    />
                </button>
            ))}
        </div>
    );
}

// ─── Modal Component ─────────────────────────────────────────────────────────

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
    const [form, setForm] = useState<ReviewFormData>(INITIAL_FORM);
    const [submitted, setSubmitted] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Bulletproof Body & HTML Scroll Lock
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);

        // Save original styles
        const originalHtmlOverflow = window.getComputedStyle(document.documentElement).overflow;
        const originalBodyOverflow = window.getComputedStyle(document.body).overflow;

        // Calculate scrollbar width to prevent the layout from shifting left/right
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Force hidden on BOTH html and body tags (crucial for Next.js/mobile)
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarWidth}px`;

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            // Restore original styles on unmount/close
            document.documentElement.style.overflow = originalHtmlOverflow;
            document.body.style.overflow = originalBodyOverflow;
            document.body.style.paddingRight = "0px";
        };
    }, [isOpen, onClose]);

    const handleField = useCallback(
        (field: keyof ReviewFormData, value: string | number) => {
            setForm((prev) => ({ ...prev, [field]: value }));
        },
        []
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Review submitted:", form);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setForm(INITIAL_FORM);
            onClose();
        }, 2200);
    };

    // Click outside to close
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        ref={overlayRef}
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        onClick={handleOverlayClick}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        aria-modal="true"
                        role="dialog"
                        aria-labelledby="review-modal-title"
                    >
                        {/* Panel */}
                        <motion.div
                            key="panel"
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/10 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden"
                            // Stop scroll events inside the modal from bubbling to the background
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

                            {/* Scrollable body */}
                            <div className="overflow-y-auto overscroll-contain max-h-[85vh] p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <h2
                                        id="review-modal-title"
                                        className="text-2xl font-extrabold text-white tracking-tight"
                                    >
                                        Write Your Review
                                    </h2>
                                    <button
                                        onClick={onClose}
                                        aria-label="Close review modal"
                                        className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200 -mt-1 -mr-1 focus:outline-none focus:ring-2 focus:ring-white/20"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 text-center flex flex-col items-center gap-4"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mb-2">
                                            <Star className="w-8 h-8 fill-sky-400 text-sky-400" />
                                        </div>
                                        <p className="text-xl font-bold text-white">Thank you!</p>
                                        <p className="text-sm text-gray-400">
                                            Your review has been submitted for approval.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form
                                        id="review-form"
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        {/* Full Name */}
                                        <div className="space-y-1.5">
                                            <label
                                                htmlFor="review-fullname"
                                                className="block text-xs font-semibold text-gray-400 tracking-[0.1em] uppercase"
                                            >
                                                Full Name <span className="text-sky-400">*</span>
                                            </label>
                                            <input
                                                id="review-fullname"
                                                type="text"
                                                required
                                                value={form.fullName}
                                                onChange={(e) =>
                                                    handleField("fullName", e.target.value)
                                                }
                                                placeholder="Your name"
                                                className={inputCls}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-1.5">
                                            <label
                                                htmlFor="review-email"
                                                className="block text-xs font-semibold text-gray-400 tracking-[0.1em] uppercase"
                                            >
                                                Email <span className="text-sky-400">*</span>
                                            </label>
                                            <input
                                                id="review-email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) =>
                                                    handleField("email", e.target.value)
                                                }
                                                placeholder="your@email.com"
                                                className={inputCls}
                                            />
                                        </div>

                                        {/* Country */}
                                        <div className="space-y-1.5">
                                            <label
                                                htmlFor="review-country"
                                                className="block text-xs font-semibold text-gray-400 tracking-[0.1em] uppercase"
                                            >
                                                Country
                                            </label>
                                            <input
                                                id="review-country"
                                                type="text"
                                                value={form.country}
                                                onChange={(e) =>
                                                    handleField("country", e.target.value)
                                                }
                                                placeholder="Your country"
                                                className={inputCls}
                                            />
                                        </div>

                                        {/* Service */}
                                        <div className="space-y-1.5">
                                            <label
                                                htmlFor="review-service"
                                                className="block text-xs font-semibold text-gray-400 tracking-[0.1em] uppercase"
                                            >
                                                Service
                                            </label>
                                            <select
                                                id="review-service"
                                                value={form.service}
                                                onChange={(e) =>
                                                    handleField("service", e.target.value)
                                                }
                                                className={`${inputCls} cursor-pointer [color-scheme:dark]`}
                                            >
                                                <option value="" disabled>
                                                    Select a service
                                                </option>
                                                {SERVICES.map((s) => (
                                                    <option key={s} value={s}>
                                                        {s}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Rating */}
                                        <div className="space-y-1.5">
                                            <p className="text-xs font-semibold text-gray-400 tracking-[0.1em] uppercase">
                                                Rating
                                            </p>
                                            <StarRating
                                                value={form.rating}
                                                onChange={(val) => handleField("rating", val)}
                                            />
                                        </div>

                                        {/* Review textarea */}
                                        <div className="space-y-1.5">
                                            <label
                                                htmlFor="review-text"
                                                className="block text-xs font-semibold text-gray-400 tracking-[0.1em] uppercase"
                                            >
                                                Your Review <span className="text-sky-400">*</span>
                                            </label>
                                            <textarea
                                                id="review-text"
                                                required
                                                rows={4}
                                                value={form.review}
                                                onChange={(e) =>
                                                    handleField("review", e.target.value)
                                                }
                                                placeholder="Share your experience with us..."
                                                className={`${inputCls} resize-none`}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="w-full flex items-center justify-center gap-2.5 px-8 py-4 mt-2 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-bold text-sm tracking-wide transition-colors duration-200 shadow-[0_0_32px_rgba(14,165,233,0.35)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                                        >
                                            <Send className="w-4 h-4" />
                                            Submit for Approval
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}