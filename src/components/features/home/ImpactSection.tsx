import Image from "next/image";

const stats = [
    { value: "20,000+", label: "Projects Delivered" },
    { value: "1,000+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "50M+", label: "Views Generated" },
];

export function ImpactSection() {
    return (
        <section
            id="impact"
            className="bg-black text-white border-t border-white/5 overflow-hidden"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
                {/* Left Column — Image */}
                <div className="relative w-full min-h-[380px] lg:min-h-full">
                    <Image
                        src="/impact-visual.jpg"
                        alt="Cinematographer on set capturing premium visual content"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority
                    />
                    {/* Gradient overlay blending into right column */}
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 hidden lg:block"
                    />
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"
                    />
                </div>

                {/* Right Column — Content */}
                <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-20 relative">
                    {/* Subtle background glow */}
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent pointer-events-none"
                    />

                    <div className="relative z-10">
                        {/* Eyebrow */}
                        <p className="text-xs font-semibold text-sky-400 tracking-[0.3em] uppercase mb-5">
                            Our Impact
                        </p>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
                            CREATING{" "}
                            <span className="text-sky-400">CINEMATIC</span>{" "}
                            CONTENT
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-lg">
                            From luxury brands to corporate events, we deliver premium
                            visual content that drives engagement, builds brand authority,
                            and generates real results.
                        </p>

                        {/* Stats Grid — 2×2 */}
                        <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className="text-4xl xl:text-5xl font-extrabold text-sky-400 leading-none tracking-tight mb-1.5">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm text-gray-400 font-medium">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
