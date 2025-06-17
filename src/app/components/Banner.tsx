'use client'

import { useState, useEffect } from 'react';
import { Scale, Shield, Users, Award, ChevronRight, Play, Pause, ArrowRight, CheckCircle } from 'lucide-react';
import Header from './Header';

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredStat, setHoveredStat] = useState<any>(null);
    const [textAnimationKey, setTextAnimationKey] = useState(0);

    const slides = [
        {
            title: "Keadilan Adalah Prioritas Utama Kami",
            subtitle: "Melayani dengan integritas dan dedikasi tinggi untuk setiap klien",
            description: "Tim profesional kami siap memberikan solusi hukum terbaik dengan pengalaman lebih dari 15 tahun",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            accent: "from-amber-400 to-yellow-300"
        },
        {
            title: "Perlindungan Hukum Terpercaya",
            subtitle: "Berpengalaman lebih dari 15 tahun dalam berbagai bidang hukum",
            description: "Kami telah menangani 500+ kasus dengan tingkat keberhasilan 98% untuk berbagai klien",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            accent: "from-blue-400 to-cyan-300"
        },
        {
            title: "Solusi Hukum Profesional",
            subtitle: "Tim advokat berpengalaman siap membantu permasalahan hukum Anda",
            description: "Konsultasi 24/7 tersedia untuk memberikan bantuan hukum kapan saja Anda membutuhkannya",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            accent: "from-emerald-400 to-teal-300"
        }
    ];

    const stats = [
        { icon: Award, number: "500+", label: "Kasus Diselesaikan", description: "Berbagai jenis kasus hukum", color: "text-amber-400" },
        { icon: Users, number: "15+", label: "Tahun Pengalaman", description: "Melayani klien dengan dedikasi", color: "text-blue-400" },
        { icon: Shield, number: "98%", label: "Tingkat Keberhasilan", description: "Hasil yang memuaskan", color: "text-emerald-400" },
        { icon: Scale, number: "24/7", label: "Konsultasi Tersedia", description: "Siap membantu kapan saja", color: "text-purple-400" }
    ];

    const features = [
        "Konsultasi hukum gratis",
        "Tim advokat berpengalaman",
        "Penanganan kasus profesional",
        "Layanan 24/7"
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            if (isAutoPlaying) {
                setCurrentSlide((prev) => {
                    const nextSlide = (prev + 1) % slides.length;
                    setTextAnimationKey(prevKey => prevKey + 1);
                    return nextSlide;
                });
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
        setTextAnimationKey(prevKey => prevKey + 1);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
            <Header />
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ${currentSlide === index ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Background ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
            </div>

            {/* Interactive Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                    style={{
                        top: `${20 + mousePosition.y * 0.01}%`,
                        left: `${10 + mousePosition.x * 0.01}%`,
                        transition: 'all 0.3s ease-out'
                    }}
                ></div>
                <div
                    className="absolute w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse"
                    style={{
                        bottom: `${20 + mousePosition.y * 0.005}%`,
                        right: `${10 + mousePosition.x * 0.005}%`,
                        transition: 'all 0.5s ease-out'
                    }}
                ></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-ping"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center py-16 lg:pt-0">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7 space-y-6 lg:space-y-8">
                            {/* Main Heading */}
                            <div
                                key={textAnimationKey}
                                className="space-y-4 animate-fadeInUp"
                            >
                                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                                    <span className="block animate-slideInLeft">
                                        {slides[currentSlide].title.split(' ').slice(0, 2).join(' ')}
                                    </span>
                                    <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${slides[currentSlide].accent} animate-slideInRight`}>
                                        {slides[currentSlide].title.split(' ').slice(2).join(' ')}
                                    </span>
                                </h2>
                                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed animate-fadeInUp delay-200">
                                    {slides[currentSlide].subtitle}
                                </p>
                                <p className="text-sm lg:text-base text-gray-400 leading-relaxed animate-fadeInUp delay-400">
                                    {slides[currentSlide].description}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 animate-fadeInUp delay-500">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 group"
                                        style={{ animationDelay: `${600 + index * 100}ms` }}
                                    >
                                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm lg:text-base text-gray-300 group-hover:text-white transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-700">
                                <button className="group relative bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105 active:scale-95">
                                    <span className="relative z-10 flex items-center justify-center">
                                        Konsultasi Gratis
                                        <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                                </button>

                                <button className="group border-2 border-white/30 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 active:scale-95">
                                    <span className="flex items-center justify-center">
                                        Tentang Kami
                                        <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div className="lg:col-span-5 space-y-6 animate-fadeInUp delay-800">
                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer"
                                            onMouseEnter={() => setHoveredStat(index)}
                                            onMouseLeave={() => setHoveredStat(null)}
                                            style={{ animationDelay: `${900 + index * 100}ms` }}
                                        >
                                            <div className="flex flex-col items-center text-center space-y-2 lg:space-y-3">
                                                <div className="relative">
                                                    <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                                                    <div className={`absolute -inset-2 ${stat.color.replace('text-', 'bg-')}/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-xl lg:text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                                                        {stat.number}
                                                    </div>
                                                    <div className="text-xs lg:text-sm text-gray-300 group-hover:text-white transition-colors">
                                                        {stat.label}
                                                    </div>
                                                    {hoveredStat === index && (
                                                        <div className="text-xs text-gray-400 animate-fadeIn">
                                                            {stat.description}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Slide Indicators */}
            <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                <div className="flex space-x-2 lg:space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleSlideChange(index)}
                            className={`relative w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                ? 'bg-amber-400 scale-125 shadow-lg shadow-amber-400/50'
                                : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                                }`}
                        >
                            {currentSlide === index && (
                                <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Progress Bar */}
            {isAutoPlaying && (
                <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 w-32 lg:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-progress"
                        style={{ animationDuration: '4000ms' }}
                    ></div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes progress {
                    from {
                        width: 0%;
                    }
                    to {
                        width: 100%;
                    }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                
                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                
                .animate-progress {
                    animation: progress linear forwards;
                }
                
                .delay-200 {
                    animation-delay: 200ms;
                }
                
                .delay-400 {
                    animation-delay: 400ms;
                }
                
                .delay-500 {
                    animation-delay: 500ms;
                }
                
                .delay-700 {
                    animation-delay: 700ms;
                }
                
                .delay-800 {
                    animation-delay: 800ms;
                }
            `}</style>
        </div>
    );
};

export default Banner;