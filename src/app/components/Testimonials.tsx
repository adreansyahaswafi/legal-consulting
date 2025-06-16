'use client'

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    const testimonials = [
        {
            id: 1,
            name: "Budi Santoso",
            position: "CEO PT. Maju Jaya",
            text: "Pelayanan yang sangat memuaskan! Tim yang profesional dan hasil kerja yang berkualitas tinggi.",
            rating: 5,
            avatar: "BS"
        },
        {
            id: 2,
            name: "Siti Rahayu",
            position: "Marketing Manager",
            text: "Kerjasama yang luar biasa dengan tim yang sangat responsif. Proyek diselesaikan tepat waktu.",
            rating: 5,
            avatar: "SR"
        },
        {
            id: 3,
            name: "Ahmad Wijaya",
            position: "Direktur Operasional",
            text: "Solusi yang diberikan sangat inovatif dan sesuai dengan kebutuhan bisnis kami.",
            rating: 5,
            avatar: "AW"
        },
        {
            id: 4,
            name: "Maya Indira",
            position: "Founder Startup Tech",
            text: "Pengalaman bekerja sama yang fantastis! Komunikasi lancar dan hasil akhir sangat memuaskan.",
            rating: 5,
            avatar: "MI"
        },
        {
            id: 5,
            name: "Rudi Hermawan",
            position: "General Manager",
            text: "Tim yang sangat kompeten dengan pemahaman bisnis yang mendalam dan profesional.",
            rating: 5,
            avatar: "RH"
        },
        {
            id: 6,
            name: "Linda Kusuma",
            position: "Head of Digital",
            text: "Strategi yang direkomendasikan sangat efektif dan ROI yang kami dapatkan sangat memuaskan.",
            rating: 5,
            avatar: "LK"
        },
        {
            id: 7,
            name: "Dewi Sartika",
            position: "Business Development",
            text: "Pelayanan prima dengan solusi yang out of the box. Sangat puas dengan hasilnya.",
            rating: 5,
            avatar: "DS"
        },
        {
            id: 8,
            name: "Hendra Wijaya",
            position: "IT Director",
            text: "Implementasi teknologi yang sangat baik dan support yang responsif 24/7.",
            rating: 5,
            avatar: "HW"
        },
        {
            id: 9,
            name: "Rina Sari",
            position: "Operations Manager",
            text: "Peningkatan efisiensi operasional yang signifikan setelah menggunakan layanan mereka.",
            rating: 5,
            avatar: "RS"
        }
    ];

    // Handle responsive items per slide
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2);
            } else {
                setItemsPerSlide(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, isAutoPlaying, totalSlides]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background with law-themed imagery */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900 via-gray-900 to-yellow-900">
                {/* Law scales pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        <defs>
                            <pattern id="scales" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M10 5 L5 15 L15 15 Z M10 5 L5 0 L15 0 Z" fill="currentColor" className="text-white" />
                                <circle cx="10" cy="5" r="1" fill="currentColor" className="text-white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#scales)" />
                    </svg>
                </div>

                {/* Gavel pattern */}
                <div className="absolute top-20 left-10 opacity-10 rotate-12">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9.5 2L8 3.5L12 7.5L13.5 6L9.5 2ZM6 5.5L4.5 7L8.5 11L10 9.5L6 5.5ZM2 12L3.5 13.5L7.5 9.5L6 8L2 12Z" fill="currentColor" />
                        <rect x="8" y="12" width="2" height="8" fill="currentColor" />
                        <rect x="6" y="18" width="6" height="2" fill="currentColor" />
                    </svg>
                </div>

                <div className="absolute bottom-32 right-16 opacity-10 -rotate-12">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9.5 2L8 3.5L12 7.5L13.5 6L9.5 2ZM6 5.5L4.5 7L8.5 11L10 9.5L6 5.5ZM2 12L3.5 13.5L7.5 9.5L6 8L2 12Z" fill="currentColor" />
                        <rect x="8" y="12" width="2" height="8" fill="currentColor" />
                        <rect x="6" y="18" width="6" height="2" fill="currentColor" />
                    </svg>
                </div>

                {/* Legal books pattern */}
                <div className="absolute top-1/2 left-20 opacity-8 rotate-6">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-white">
                        <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" />
                        <rect x="3" y="4" width="18" height="2" fill="currentColor" opacity="0.7" />
                        <rect x="6" y="8" width="12" height="1" fill="currentColor" opacity="0.5" />
                        <rect x="6" y="11" width="12" height="1" fill="currentColor" opacity="0.5" />
                        <rect x="6" y="14" width="8" height="1" fill="currentColor" opacity="0.5" />
                    </svg>
                </div>

                <div className="absolute top-20 right-32 opacity-8 -rotate-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
                        <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" />
                        <rect x="3" y="4" width="18" height="2" fill="currentColor" opacity="0.7" />
                        <rect x="6" y="8" width="12" height="1" fill="currentColor" opacity="0.5" />
                        <rect x="6" y="11" width="12" height="1" fill="currentColor" opacity="0.5" />
                        <rect x="6" y="14" width="8" height="1" fill="currentColor" opacity="0.5" />
                    </svg>
                </div>

                {/* Courthouse pillars */}
                <div className="absolute bottom-10 left-1/4 opacity-6">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-white">
                        <rect x="10" y="20" width="8" height="60" fill="currentColor" />
                        <rect x="25" y="20" width="8" height="60" fill="currentColor" />
                        <rect x="40" y="20" width="8" height="60" fill="currentColor" />
                        <rect x="55" y="20" width="8" height="60" fill="currentColor" />
                        <rect x="70" y="20" width="8" height="60" fill="currentColor" />
                        <rect x="5" y="15" width="80" height="8" fill="currentColor" />
                        <rect x="0" y="80" width="90" height="8" fill="currentColor" />
                        <polygon points="45,5 5,15 85,15" fill="currentColor" />
                    </svg>
                </div>

                {/* Legal documents scattered pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/3 rotate-12">
                        <svg width="30" height="40" viewBox="0 0 24 32" fill="none" className="text-white">
                            <rect x="2" y="0" width="20" height="32" rx="2" fill="currentColor" />
                            <rect x="5" y="4" width="14" height="1" fill="currentColor" opacity="0.7" />
                            <rect x="5" y="7" width="14" height="1" fill="currentColor" opacity="0.7" />
                            <rect x="5" y="10" width="10" height="1" fill="currentColor" opacity="0.7" />
                        </svg>
                    </div>
                    <div className="absolute bottom-1/4 right-1/3 -rotate-12">
                        <svg width="30" height="40" viewBox="0 0 24 32" fill="none" className="text-white">
                            <rect x="2" y="0" width="20" height="32" rx="2" fill="currentColor" />
                            <rect x="5" y="4" width="14" height="1" fill="currentColor" opacity="0.7" />
                            <rect x="5" y="7" width="14" height="1" fill="currentColor" opacity="0.7" />
                            <rect x="5" y="10" width="10" height="1" fill="currentColor" opacity="0.7" />
                        </svg>
                    </div>
                </div>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Apa Kata Klien Kami
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                        Testimoni dari klien yang telah merasakan pelayanan hukum profesional kami
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Testimonials Container */}
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Testimonials Grid */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                        {testimonials
                                            .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                            .map((testimonial) => (
                                                <div key={testimonial.id} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
                                                    {/* Quote Icon */}
                                                    <div className="flex justify-center mb-4">
                                                        <Quote className="w-8 h-8 text-amber-600" />
                                                    </div>

                                                    {/* Rating */}
                                                    <div className="flex justify-center mb-4">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 text-amber-500 fill-current mx-0.5" />
                                                        ))}
                                                    </div>

                                                    {/* Testimonial Text */}
                                                    <blockquote className="text-gray-700 text-center mb-6 italic leading-relaxed">
                                                        "{testimonial.text}"
                                                    </blockquote>

                                                    {/* Client Info */}
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3 shadow-lg">
                                                            {testimonial.avatar}
                                                        </div>
                                                        <h4 className="font-semibold text-gray-900 text-center">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-gray-600 text-sm text-center">
                                                            {testimonial.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-12 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-amber-400 scale-125'
                                    : 'bg-white/50 hover:bg-white/70'
                                }`}
                        />
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="text-center mt-6">
                    <span className="text-white/80 text-sm">
                        {currentSlide + 1} / {totalSlides}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;