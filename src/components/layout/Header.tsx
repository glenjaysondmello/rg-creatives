import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="text-xl font-bold tracking-wider text-white">
                        AGENCY NAME
                    </Link>
                </div>

                {/* Center Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    <Link href="#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                    <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Work</Link>
                    <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
                    <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</Link>
                </nav>

                {/* Right Action */}
                <div className="flex-shrink-0 flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/20">
                        <Search className="w-4 h-4 text-gray-400 mr-2" />
                        <input 
                            type="text" 
                            placeholder="Explore..." 
                            className="bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-400 w-24 focus:w-32 transition-all duration-300"
                        />
                    </div>
                    <Link 
                        href="#contact" 
                        className="px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:scale-105 transition-transform"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}
