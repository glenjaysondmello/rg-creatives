"use client";

import { useState, useRef } from "react";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

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
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // Form State mapped to your specific fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Make sure these are set in your .env.local file!
    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          date: form.date,
          message: form.details,
        },
        publicKey,
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          icon: <CheckCircle className="text-green-500" />,
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #27272a",
          },
        });
        setForm({ name: "", email: "", phone: "", date: "", details: "" });
        setLoading(false);
      })
      .catch((error: unknown) => {
        // CHANGED: We use console.warn or log here so Next.js doesn't throw a full-screen overlay
        console.warn("EmailJS Failed:", error);

        toast.error("Failed to send message. Please try again.", {
          icon: <AlertCircle className="text-red-500" />,
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #27272a",
          },
        });
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-28 bg-black text-white relative">
      {/* Toaster for Notifications */}
      <Toaster position="bottom-center" />

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
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full Name">
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputCls}
                />
              </Field>
              <Field label="Email Address">
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
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
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+971 50 123 4567"
                  className={inputCls}
                />
              </Field>
              <Field label="Event Date">
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className={`${inputCls} [color-scheme:dark]`}
                />
              </Field>
            </div>

            {/* Textarea */}
            <Field label="Event Details">
              <textarea
                name="details"
                required
                value={form.details}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your event, venue, and required services..."
                className={`${inputCls} resize-none`}
              />
            </Field>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black bg-white rounded-full hover:bg-gray-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] transition-all duration-200 focus-ring disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit Request"}
                {!loading && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="https://wa.me/971567571993"
                  className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white border border-white/20 bg-transparent rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-200 focus-ring"
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
