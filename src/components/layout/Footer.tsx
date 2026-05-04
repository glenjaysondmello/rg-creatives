import Link from "next/link";
import { ArrowRight, Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                
                {/* Large CTA */}
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    LET&apos;S BUILD.
                </h2>
                
                {/* Primary Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <Link 
                        href="https://wa.me/1234567890" 
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full transition-transform hover:scale-105"
                    >
                        WhatsApp Us
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link 
                        href="tel:+1234567890" 
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-gray-700 bg-gray-900 rounded-full transition-colors hover:bg-gray-800"
                    >
                        <Phone className="mr-2 w-5 h-5" />
                        Call Now
                    </Link>
                </div>

                {/* Social Row */}
                <div className="flex gap-6 mb-12">
                    <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>

                {/* Contact Row */}
                <div className="flex flex-col md:flex-row gap-8 text-gray-400 mb-16">
                    <a href="mailto:hello@agency.com" className="hover:text-white transition-colors flex items-center justify-center">
                        <Mail className="w-4 h-4 mr-2" />
                        hello@agency.com
                    </a>
                    <span className="hidden md:inline text-gray-600">|</span>
                    <p>Dubai, United Arab Emirates</p>
                </div>

                {/* Bottom Copyright */}
                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Agency Name. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
