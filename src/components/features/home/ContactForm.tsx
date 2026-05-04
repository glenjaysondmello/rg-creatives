"use client";

import { ArrowRight } from "lucide-react";

export function ContactForm() {
    return (
        <section id="contact" className="py-24 bg-black text-white relative">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                        Get in Touch
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        START YOUR PROJECT.
                    </h3>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Fill out the form below and our team will get back to you within 24 hours to discuss your event requirements.
                    </p>
                </div>

                <div className="bg-gray-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe"
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com"
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="+971 50 123 4567"
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Event Date</label>
                                <input 
                                    type="date" 
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Event Details</label>
                            <textarea 
                                rows={4}
                                placeholder="Tell us about your event, venue, and required services..."
                                className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <button 
                                type="submit"
                                className="flex-1 group inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-widest text-black bg-white rounded-full transition-transform hover:scale-105"
                            >
                                Submit Request
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button 
                                type="button"
                                className="sm:flex-none inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-widest text-white border border-white/20 bg-transparent rounded-full hover:bg-white/5 transition-colors"
                            >
                                WhatsApp Us
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
