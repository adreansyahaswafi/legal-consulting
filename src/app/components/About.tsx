'use client'

import React, { useState, useEffect } from 'react';
import { Shield, Users, Award, ChevronLeft, ChevronRight, Star, Mail, Phone, Play, Pause, CheckCircle, Briefcase } from 'lucide-react';

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [screenSize, setScreenSize] = useState('desktop');
    const [isVisible, setIsVisible] = useState(false);

    // Sample team data
    const teamMembers = [
        {
            id: 1,
            name: "Dr. Ahmad Santoso, S.H., M.H.",
            position: "Managing Partner",
            specialization: "Hukum Korporasi & Merger",
            experience: "25+ tahun",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            education: "Universitas Indonesia",
            achievements: ["Best Corporate Lawyer 2023", "Top 100 Lawyers Indonesia"],
            email: "ahmad@lexpartners.co.id",
            phone: "+62 21 1234 5678",
            cases: "200+",
            rating: 4.9
        },
        {
            id: 2,
            name: "Maria Widiastuti, S.H., M.H.",
            position: "Senior Partner",
            specialization: "Hukum Perdata & Keluarga",
            experience: "20+ tahun",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
            education: "Universitas Gadjah Mada",
            achievements: ["Women Lawyer of the Year 2022", "Family Law Expert"],
            email: "maria@lexpartners.co.id",
            phone: "+62 21 1234 5679",
            cases: "150+",
            rating: 4.8
        },
        {
            id: 3,
            name: "Budi Hartono, S.H., LL.M.",
            position: "Senior Partner",
            specialization: "Hukum Pidana & Litigasi",
            experience: "18+ tahun",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            education: "Harvard Law School",
            achievements: ["Criminal Defense Excellence Award", "Top Litigator 2023"],
            email: "budi@lexpartners.co.id",
            phone: "+62 21 1234 5680",
            cases: "180+",
            rating: 4.9
        },
        {
            id: 4,
            name: "Sari Kusuma, S.H., M.H.",
            position: "Partner",
            specialization: "Hukum Bisnis & Kontrak",
            experience: "15+ tahun",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            education: "Universitas Padjadjaran",
            achievements: ["Business Law Specialist", "Contract Expert Award"],
            email: "sari@lexpartners.co.id",
            phone: "+62 21 1234 5681",
            cases: "120+",
            rating: 4.7
        },
        {
            id: 5,
            name: "Reza Pratama, S.H., M.H.",
            position: "Associate Partner",
            specialization: "Hukum Properti & Tanah",
            experience: "12+ tahun",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            education: "Universitas Airlangga",
            achievements: ["Property Law Expert", "Land Rights Specialist"],
            email: "reza@lexpartners.co.id",
            phone: "+62 21 1234 5682",
            cases: "100+",
            rating: 4.6
        },
        {
            id: 6,
            name: "Linda Maharani, S.H., M.H.",
            position: "Associate Partner",
            specialization: "Hukum Ketenagakerjaan",
            experience: "10+ tahun",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
            education: "Universitas Brawijaya",
            achievements: ["Labor Law Champion", "Employee Rights Advocate"],
            email: "linda@lexpartners.co.id",
            phone: "+62 21 1234 5683",
            cases: "90+",
            rating: 4.8
        }
    ];

    const features = [
        {
            icon: Award,
            title: "Pengalaman 20+ Tahun",
            description: "Menangani berbagai kasus kompleks dengan hasil memuaskan",
            color: "text-amber-600"
        },
        {
            icon: Users,
            title: "Tim Profesional",
            description: "Pengacara bersertifikat dengan keahlian di berbagai bidang",
            color: "text-blue-600"
        },
        {
            icon: Shield,
            title: "Kerahasiaan Terjamin",
            description: "Menjaga kerahasiaan klien dengan standar etika tertinggi",
            color: "text-emerald-600"
        }
    ];

    // Responsive logic
    const getItemsPerSlide = () => {
        if (screenSize === 'mobile') return 1;
        if (screenSize === 'tablet') return 2;
        return 3;
    };

    const itemsPerSlide = getItemsPerSlide();
    const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);

    // Screen size detection
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize('mobile');
            } else if (width < 1024) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        setIsVisible(true);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % totalSlides);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    return (
        <section id="about" className="py-12 lg:py-20 bg-gradient-to-br from-yellow-900 via-gray-600 to-black-800 overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl animate-bounce"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Why Choose Us Section */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Left Content */}
                    <div className="space-y-6 lg:space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                                <Shield className="w-4 h-4" />
                                <span>Firma Hukum Terpercaya</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Mengapa Memilih{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
                                    LexPartners?
                                </span>
                            </h2>
                            <p className="text-base lg:text-lg text-white leading-relaxed">
                                Dengan pengalaman lebih dari 20 tahun, kami telah menangani ribuan kasus dengan tingkat keberhasilan yang tinggi. Tim ahli kami terdiri dari pengacara berpengalaman yang berkomitmen memberikan solusi terbaik.
                            </p>
                        </div>

                        <div className="space-y-4 lg:space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                                        style={{ animationDelay: `${index * 200}ms` }}
                                    >
                                        <div className={`bg-gradient-to-br from-white to-gray-50 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 border-2 border-transparent group-hover:border-amber-200`}>
                                            <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${feature.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-300 text-base lg:text-lg group-hover:text-amber-600 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm lg:text-base text-white group-hover:text-gray-400  mt-1 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <CheckCircle className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Content - Statistics */}
                    <div className="relative animate-fadeInUp delay-500">
                        <div className="bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 rounded-2xl lg:rounded-3xl p-6 lg:p-8 transform hover:scale-105 transition-all duration-500 shadow-2xl">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8">
                                <div className="grid grid-cols-2 gap-4 lg:gap-6 text-center">
                                    <div className="space-y-2">
                                        <div className="text-2xl lg:text-4xl font-bold text-gray-900 animate-countUp">2000+</div>
                                        <div className="text-sm lg:text-base text-gray-600">Kasus Berhasil</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl lg:text-4xl font-bold text-gray-900 animate-countUp">95%</div>
                                        <div className="text-sm lg:text-base text-gray-600">Tingkat Keberhasilan</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl lg:text-4xl font-bold text-gray-900 animate-countUp">20+</div>
                                        <div className="text-sm lg:text-base text-gray-600">Tahun Pengalaman</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl lg:text-4xl font-bold text-gray-900 animate-countUp">24/7</div>
                                        <div className="text-sm lg:text-base text-gray-600">Layanan Konsultasi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Section Header */}
                    <div className="text-center mb-8 lg:mb-12">
                        <div className="inline-block animate-bounce mb-4">
                            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-3 rounded-full shadow-lg">
                                <Users className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Tim{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
                                Profesional
                            </span>{' '}
                            Kami
                        </h2>
                        <p className="text-base lg:text-xl text-white max-w-3xl mx-auto">
                            Bertemu dengan tim pengacara berpengalaman yang siap membantu menyelesaikan masalah hukum Anda
                        </p>
                        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Team Slider */}
                    <div className="relative">
                        {/* Navigation Buttons - Hidden on mobile */}
                        {screenSize !== 'mobile' && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl rounded-full p-3 hover:bg-amber-50 transition-all duration-300 hover:scale-110 border-2 border-gray-100 hover:border-amber-400 hidden md:block"
                                >
                                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 hover:text-amber-600" />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl rounded-full p-3 hover:bg-amber-50 transition-all duration-300 hover:scale-110 border-2 border-gray-100 hover:border-amber-400 hidden md:block"
                                >
                                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 hover:text-amber-600" />
                                </button>
                            </>
                        )}

                        {/* Team Cards Container */}
                        <div className="overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className={`grid gap-6 px-4 ${screenSize === 'mobile'
                                                ? 'grid-cols-1'
                                                : screenSize === 'tablet'
                                                    ? 'grid-cols-2'
                                                    : 'grid-cols-3'
                                            } ${screenSize !== 'mobile' ? 'lg:px-12' : ''}`}>
                                            {teamMembers
                                                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                                .map((member, index) => (
                                                    <div
                                                        key={member.id}
                                                        className="group bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 border-gray-100 hover:border-amber-400/50 animate-fadeInUp"
                                                        style={{ animationDelay: `${index * 100}ms` }}
                                                    >
                                                        {/* Profile Image */}
                                                        <div className="relative mb-4 lg:mb-6">
                                                            <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-400 group-hover:border-amber-500 transition-colors duration-300 shadow-lg">
                                                                <img
                                                                    src={member.image}
                                                                    alt={member.name}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                />
                                                            </div>
                                                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-yellow-500 p-2 rounded-full shadow-lg">
                                                                <Star className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                                                            </div>

                                                            {/* Rating Stars */}
                                                            <div className="flex justify-center mt-2 space-x-1">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        className={`w-3 h-3 ${i < Math.floor(member.rating)
                                                                                ? 'text-yellow-400 fill-current'
                                                                                : 'text-gray-300'
                                                                            }`}
                                                                    />
                                                                ))}
                                                                <span className="text-xs text-gray-500 ml-1">
                                                                    {member.rating}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Member Info */}
                                                        <div className="text-center mb-4">
                                                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                                                                {member.name}
                                                            </h3>
                                                            <p className="text-amber-600 font-semibold mb-2 text-sm lg:text-base">
                                                                {member.position}
                                                            </p>
                                                            <p className="text-gray-500 text-xs lg:text-sm mb-2 leading-relaxed">
                                                                {member.specialization}
                                                            </p>

                                                            {/* Experience and Cases */}
                                                            <div className="flex justify-center space-x-4 mb-3">
                                                                <div className="inline-block bg-amber-100 px-3 py-1 rounded-full">
                                                                    <span className="text-amber-700 text-xs lg:text-sm font-medium">
                                                                        {member.experience}
                                                                    </span>
                                                                </div>
                                                                <div className="inline-flex items-center space-x-1 bg-blue-100 px-3 py-1 rounded-full">
                                                                    <Briefcase className="w-3 h-3 text-blue-600" />
                                                                    <span className="text-blue-700 text-xs lg:text-sm font-medium">
                                                                        {member.cases}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Education & Achievements */}
                                                        <div className="mb-4 text-center space-y-2">
                                                            <p className="text-gray-500 text-xs lg:text-sm">
                                                                <strong>Pendidikan:</strong> {member.education}
                                                            </p>
                                                            <div className="space-y-1">
                                                                {member.achievements.slice(0, 2).map((achievement, idx) => (
                                                                    <div key={idx} className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">
                                                                        {achievement}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Contact Info */}
                                                        <div className="space-y-2">
                                                            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs lg:text-sm">
                                                                <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                                                                <span className="truncate">{member.email}</span>
                                                            </div>
                                                            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs lg:text-sm">
                                                                <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                                                                <span>{member.phone}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Navigation Buttons */}
                        {screenSize === 'mobile' && (
                            <div className="flex justify-center space-x-4 mt-6">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white shadow-lg rounded-full p-3 hover:bg-amber-50 transition-all duration-300 hover:scale-110 border-2 border-gray-100 hover:border-amber-400"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-700 hover:text-amber-600" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-white shadow-lg rounded-full p-3 hover:bg-amber-50 transition-all duration-300 hover:scale-110 border-2 border-gray-100 hover:border-amber-400"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-700 hover:text-amber-600" />
                                </button>
                            </div>
                        )}

                        {/* Slide Indicators */}
                        <div className="flex justify-center space-x-2 mt-6 lg:mt-8">
                            {Array.from({ length: totalSlides }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'bg-gradient-to-r from-amber-400 to-yellow-500 scale-125 shadow-lg shadow-amber-400/50'
                                            : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Auto-play Controls */}
                        <div className="flex justify-center items-center space-x-4 mt-4 lg:mt-6">
                            <button
                                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isAutoPlaying
                                        ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {isAutoPlaying ? (
                                    <Pause className="w-4 h-4" />
                                ) : (
                                    <Play className="w-4 h-4" />
                                )}
                                <span className="hidden sm:inline">
                                    {isAutoPlaying ? 'Auto-play: ON' : 'Auto-play: OFF'}
                                </span>
                            </button>

                            <div className="text-xs text-gray-500">
                                {currentSlide + 1} / {totalSlides}
                            </div>
                        </div>

                        {/* Progress Bar for Auto-play */}
                        {isAutoPlaying && (
                            <div className="mt-4 w-32 lg:w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-progress"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

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
                
                @keyframes countUp {
                    from {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
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
                
                .animate-countUp {
                    animation: countUp 1s ease-out forwards;
                }
                
                .animate-progress {
                    animation: progress 5s linear forwards;
                }
                
                .delay-200 { animation-delay: 200ms; }
                .delay-500 { animation-delay: 500ms; }
                .delay-700 { animation-delay: 700ms; }
            `}</style>
        </section>
    );
}