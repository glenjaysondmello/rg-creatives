import { ArrowRight } from "lucide-react";

export function InterstitialSection() {
    return (
        <section className="bg-black text-white py-32 flex items-center justify-center min-h-[80vh]">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/5 text-sm tracking-widest uppercase font-semibold text-gray-300">
                        Now Booking 2026/2027
                    </div>

                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">
                        WE DON&apos;T JUST RECORD EVENTS. <br />
                        <span className="text-gray-500">WE CRAFT LEGACIES.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed max-w-3xl">
                        Our specialized media teams operate invisibly but capture everything, delivering cinematic results that amplify your brand&apos;s story across Dubai and the UAE.
                    </p>

                    <button className="group inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-black bg-white rounded-full transition-transform hover:scale-105">
                        Discover Our Approach
                        <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}
