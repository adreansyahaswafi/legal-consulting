'use client'

import { Scale } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <header
            className={`bg-transparent fixed w-full top-0 z-50 transition-all duration-300 animate-fadeInDown ${isScrolled ? 'shadow-xl bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900' : ''
                }`}        >
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end lg:justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 hidden lg:block">
                        <div className="flex items-center space-x-3">
                            <div className="relative group">
                                <Scale className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                                <div className="absolute -inset-2 bg-amber-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div>
                                <h1 className="text-xl lg:text-2xl font-bold text-white">LexPartners</h1>
                                <p className="text-amber-400 text-xs lg:text-sm">Law Firm</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`relative cursor-pointer text-white hover:text-yellow-400 px-3 py-2 text-sm font-bold transition-colors duration-200 group`}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md text-yellow-400 hover:text-blue-600 transition-colors duration-200"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-gradient-to-br from-black via-gray-700 to-gray-900 border-t border-gray-700 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                        <a
                            key={item}
                            href="#"
                            onClick={closeMenu}
                            className="block px-3 py-2 text-whote hover:text-yellow-600 hover:bg-white rounded-md text-base font-medium transition-all duration-200"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item}
                        </a>
                    ))}

                </div>
            </div>
        </header>
    );
}
