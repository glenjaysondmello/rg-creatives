"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
    },
});

function Field({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-2 group">
            <label className="block text-xs font-semibold text-gray-500 tracking-[0.1em] uppercase group-focus-within:text-gray-300 transition-colors duration-200">
                {label}
            </label>
            {children}
        </div>
    );
}

const inputCls =
    "w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/5 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.05)] transition-all duration-200";

export function ContactForm() {
    return (
        <section id="contact" className="py-28 bg-black text-white relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp(0)}
                >
                    <p className="text-xs font-semibold text-gray-500 tracking-[0.25em] uppercase mb-4">
                        Get in Touch
                    </p>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                        START YOUR PROJECT.
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
                        Fill out the form below and our team will respond within 24 hours to
                        discuss your event requirements.
                    </p>
                </motion.div>

                {/* Form card */}
                <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Field label="Full Name">
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="Email Address">
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className={inputCls}
                                />
                            </Field>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Field label="Phone Number">
                                <input
                                    type="tel"
                                    placeholder="+971 50 123 4567"
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="Event Date">
                                <input
                                    type="date"
                                    className={`${inputCls} [color-scheme:dark]`}
                                />
                            </Field>
                        </div>

                        {/* Textarea */}
                        <Field label="Event Details">
                            <textarea
                                rows={4}
                                placeholder="Tell us about your event, venue, and required services..."
                                className={`${inputCls} resize-none`}
                            />
                        </Field>

                        {/* CTAs */}
                        <div className="pt-2 flex flex-col sm:flex-row gap-4">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex-1 group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black bg-white rounded-full hover:bg-gray-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] transition-all duration-200 focus-ring"
                            >
                                Submit Request
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </motion.button>
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link
                                    href="https://wa.me/919972487827"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white border border-white/20 bg-transparent rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-200 focus-ring"

                                >
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp Us
                                </Link>
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
