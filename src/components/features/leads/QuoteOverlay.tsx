"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

type QuoteOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
};

const SERVICES = [
  "Live Streaming",
  "Hybrid Events",
  "Multi-Camera Coverage",
  "Event Photography",
  "Event Videography",
  "360° Photo Booth",
  "DSLR Photobooth",
  "Full Production Package",
];

export function QuoteOverlay({
  isOpen,
  onClose,
  initialService,
}: QuoteOverlayProps) {
  const [step, setStep] = useState(initialService ? 2 : 1);
  const [formData, setFormData] = useState({
    service: initialService || "Live Streaming",
    name: "",
    date: "",
    venue: "",
    phone: "",
    details: "",
  });

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello RG Creatives! I would like to request a quote:
• Service: ${formData.service}
• Client: ${formData.name}
• Date: ${formData.date}
• Venue: ${formData.venue || "Dubai / UAE"}
• Phone: ${formData.phone}
${formData.details ? `• Details: ${formData.details}` : ""}`;

    const encoded = encodeURIComponent(text);
    const targetPhone = "971559617957"; // from PDF
    window.open(`https://wa.me/${targetPhone}?text=${encoded}`, "_blank");

    onClose();
    setTimeout(() => {
      setStep(1);
      setFormData({
        service: "Live Streaming",
        name: "",
        date: "",
        venue: "",
        phone: "",
        details: "",
      });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Slide-in Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative w-full max-w-lg bg-zinc-950 border-l border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 tracking-[0.2em] uppercase">
                    RG CREATIVES DUBAI
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Request an Event Quote
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2 mb-8">
                <div
                  className={`h-1.5 flex-1 rounded-full ${
                    step >= 1 ? "bg-amber-400" : "bg-white/10"
                  }`}
                />
                <div
                  className={`h-1.5 flex-1 rounded-full ${
                    step >= 2 ? "bg-amber-400" : "bg-white/10"
                  }`}
                />
              </div>

              {/* Step 1: Select Service */}
              {step === 1 && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Step 1: Select Required Service
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES.map((srv) => (
                      <button
                        key={srv}
                        onClick={() => handleServiceSelect(srv)}
                        className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                          formData.service === srv
                            ? "border-amber-400 bg-amber-400/10 text-white"
                            : "border-white/10 bg-zinc-900/60 text-gray-300 hover:border-white/20 hover:text-white hover:bg-zinc-800"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Details & Direct WhatsApp Dispatch */}
              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Selected:{" "}
                      <span className="text-amber-400">{formData.service}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> Change
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Venue / Location
                      </label>
                      <input
                        type="text"
                        placeholder="Dubai / Abu Dhabi"
                        value={formData.venue}
                        onChange={(e) =>
                          setFormData({ ...formData, venue: e.target.value })
                        }
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Event Scope / Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Estimated audience size, number of hours, specific requirements..."
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Send Quote Request via WhatsApp
                  </button>
                  <p className="text-[11px] text-gray-500 text-center">
                    Instant confirmation directly with RG Creatives on-site team.
                  </p>
                </form>
              )}
            </div>

            <div className="pt-6 border-t border-white/10 text-center text-xs text-gray-500 mt-6">
              Official Contact: +971 55 961 7957 • rgcreatives23@gmail.com
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
