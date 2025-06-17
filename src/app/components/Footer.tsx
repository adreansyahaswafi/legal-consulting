'use client'

import React, { useState, useEffect } from 'react';
import {
    Scale,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    ArrowUp,
    ChevronRight,
    Clock,
    Award,
    Shield,
    Users
} from 'lucide-react';

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [hoveredLink, setHoveredLink] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Beranda', href: '#home' },
        { name: 'Layanan', href: '#services' },
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Tim Ahli', href: '#team' },
        { name: 'Blog', href: '#blog' },
        { name: 'Kontak', href: '#contact' }
    ];

    const legalServices = [
        { name: 'Hukum Perusahaan', href: '#corporate' },
        { name: 'Hukum Pidana', href: '#criminal' },
        { name: 'Hukum Keluarga', href: '#family' },
        { name: 'Hukum Properti', href: '#property' },
        { name: 'Hukum Perburuhan', href: '#labor' },
        { name: 'Mediasi & Arbitrase', href: '#mediation' }
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook', color: 'hover:text-blue-400' },
        { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter', color: 'hover:text-sky-400' },
        { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram', color: 'hover:text-pink-400' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube', color: 'hover:text-red-500' }
    ];

    const achievements = [
        { icon: <Award className="w-6 h-6" />, number: '2000+', label: 'Kasus Berhasil' },
        { icon: <Users className="w-6 h-6" />, number: '500+', label: 'Klien Puas' },
        { icon: <Shield className="w-6 h-6" />, number: '20+', label: 'Tahun Pengalaman' }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-black-900 via-white-800 to-yellow-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="group">
                            <div className="flex items-center mb-6">
                                <Scale className="w-8 h-8 text-amber-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                <h3 className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                                    LexAdvocates
                                </h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                                Firma hukum terpercaya dengan komitmen memberikan solusi hukum terbaik untuk setiap klien.
                                Pengalaman 20+ tahun melayani berbagai kalangan.
                            </p>

                            {/* Live Clock */}
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-amber-400 transition-colors duration-300">
                                <div className="flex items-center text-amber-400 mb-2">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium">Jam Operasional</span>
                                </div>
                                <div className="text-white">
                                    {currentTime?.toLocaleTimeString('id-ID')}
                                </div>
                                <div className="text-gray-400 text-sm mt-1">
                                    Senin - Jumat: 08:00 - 17:00
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-white mb-6 relative">
                            Menu Utama
                            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-400 transform origin-left transition-all duration-300 hover:w-full"></div>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center text-gray-300 hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2"
                                        onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                                        onMouseLeave={() => setHoveredLink('')}
                                    >
                                        <ChevronRight className={`w-4 h-4 mr-2 transition-all duration-300 ${hoveredLink === `quick-${index}` ? 'opacity-100 transform translate-x-1' : 'opacity-0'
                                            }`} />
                                        <span className="group-hover:font-medium transition-all duration-300">
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Services */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-white mb-6 relative">
                            Layanan Hukum
                            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-400 transform origin-left transition-all duration-300 hover:w-full"></div>
                        </h4>
                        <ul className="space-y-3">
                            {legalServices.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="group flex items-center text-gray-300 hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2"
                                        onMouseEnter={() => setHoveredLink(`service-${index}`)}
                                        onMouseLeave={() => setHoveredLink('')}
                                    >
                                        <ChevronRight className={`w-4 h-4 mr-2 transition-all duration-300 ${hoveredLink === `service-${index}` ? 'opacity-100 transform translate-x-1' : 'opacity-0'
                                            }`} />
                                        <span className="group-hover:font-medium transition-all duration-300">
                                            {service.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-white mb-6 relative">
                            Hubungi Kami
                            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-400 transform origin-left transition-all duration-300 hover:w-full"></div>
                        </h4>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                                <Phone className="w-5 h-5 text-amber-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                                <div>
                                    <div className="text-white font-medium group-hover:text-amber-400 transition-colors duration-300">
                                        +62 21 1234 5678
                                    </div>
                                    <div className="text-gray-400 text-sm">24/7 Emergency</div>
                                </div>
                            </div>

                            <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                                <Mail className="w-5 h-5 text-amber-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                                <div>
                                    <div className="text-white font-medium group-hover:text-amber-400 transition-colors duration-300">
                                        info@lexadvocates.co.id
                                    </div>
                                    <div className="text-gray-400 text-sm">Konsultasi Online</div>
                                </div>
                            </div>

                            <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                                <MapPin className="w-5 h-5 text-amber-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                                <div>
                                    <div className="text-white font-medium group-hover:text-amber-400 transition-colors duration-300">
                                        Jl. Sudirman No. 123
                                    </div>
                                    <div className="text-gray-400 text-sm">Jakarta Pusat 10220</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h5 className="text-white font-semibold mb-4">Ikuti Kami</h5>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`group bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-amber-400 text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                                        title={social.name}
                                    >
                                        <div className="group-hover:animate-bounce">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="border-t border-slate-700 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-amber-400 transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-amber-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                        {achievement.icon}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                                            {achievement.number}
                                        </div>
                                        <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                                            {achievement.label}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-8 mb-8 border border-amber-500/20">
                    <div className="text-center">
                        <h4 className="text-2xl font-bold text-white mb-4">
                            Dapatkan Update Hukum Terbaru
                        </h4>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Berlangganan newsletter kami untuk mendapatkan informasi terkini tentang perkembangan hukum dan tips legal.
                        </p>
                        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                            <input
                                type="email"
                                placeholder="Masukkan email Anda"
                                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                            />
                            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Berlangganan
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <p className="text-gray-400 text-center md:text-left">
                                &copy; 2025 LexAdvocates. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                                    Kebijakan Privasi
                                </a>
                                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                                    Syarat & Ketentuan
                                </a>
                                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                                    Sitemap
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-sm">Made with</span>
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-400 text-sm">in Jakarta</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button onClick={scrollToTop} type='button' className="fixed z-50 cursor-pointer bottom-8 right-8 animate-bounce">
                    <div className="w-10 h-10 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                        <ArrowUp className="w-5 h-5 text-yellow-400 group-hover:animate-bounce" />
                    </div>
                </button>
            )}

            {/* Floating Animation Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50 animate-pulse"></div>
        </footer>
    );
};