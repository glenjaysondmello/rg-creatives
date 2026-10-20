"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type CtaBannerProps = {
  onOpenQuote?: () => void;
};

export function CtaBanner({ onOpenQuote }: CtaBannerProps) {
  return (
    <section id="pricing" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Dubai Skyline Panorama in Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop"
              alt="Dubai Skyline at Night"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.4] saturate-[1.2]"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="text-xs font-bold text-amber-400 tracking-[0.25em] uppercase mb-3">
                PLANNING AN EVENT IN DUBAI?
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                Let&apos;s Create Something Amazing Together
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-2xl">
                Tell us your event date, venue, audience, and the services you&apos;re considering. We&apos;ll follow up to discuss the right setup for your event.
              </p>
            </div>

            {/* Right Buttons Column */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-end xl:items-center gap-3.5 justify-end">
              <button
                onClick={() => {
                  if (onOpenQuote) {
                    onOpenQuote();
                  } else {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(251,191,36,0.35)] cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/971559617957"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-zinc-900/90 hover:bg-zinc-800 border border-white/20 hover:border-emerald-500 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.802.376-.276.3-1.053 1.029-1.053 2.509 0 1.48 1.079 2.91 1.229 3.111.15.2 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.086 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.126-.276-.201-.577-.352z" />
                  </svg>
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
