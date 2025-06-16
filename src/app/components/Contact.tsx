'use client'
import React, { useState, useEffect } from 'react';
import {
    Mail,
    MapPin,
    Phone,
    Clock,
    Send,
    User,
    MessageSquare,
    CheckCircle,
    ExternalLink,
    Navigation,
    Building
} from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [focusedField, setFocusedField] = useState<any>(null);
    const [hoveredContact, setHoveredContact] = useState<any>(null);

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Telepon",
            main: "+62 21 1234 5678",
            sub: "24/7 Emergency Hotline",
            color: "from-blue-500 to-blue-600",
            hoverColor: "hover:from-blue-600 hover:to-blue-700"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            main: "info@lexadvocates.co.id",
            sub: "Respon dalam 1 jam",
            color: "from-green-500 to-green-600",
            hoverColor: "hover:from-green-600 hover:to-green-700"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Alamat",
            main: "Jl. Sudirman No. 123",
            sub: "Jakarta Pusat 10220",
            color: "from-purple-500 to-purple-600",
            hoverColor: "hover:from-purple-600 hover:to-purple-700"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Jam Operasional",
            main: "Senin - Jumat",
            sub: "08:00 - 17:00 WIB",
            color: "from-orange-500 to-orange-600",
            hoverColor: "hover:from-orange-600 hover:to-orange-700"
        }
    ];

    return (
        <section id="contact" className="relative py-20 bg-white overflow-hidden">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-100/60 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-3/4 w-80 h-80 bg-purple-100/60 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-400 rotate-45 animate-spin-slow"></div>
                <div className="absolute top-32 right-20 w-16 h-16 border-2 border-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-purple-400 rotate-12 animate-pulse"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block animate-bounce mb-4">
                        <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-3 rounded-full shadow-lg">
                            <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">Kami</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
                        Siap membantu Anda menyelesaikan masalah hukum dengan solusi terbaik
                    </p>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full animate-pulse"></div>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-amber-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl ${hoveredContact === index ? 'shadow-2xl shadow-amber-500/20' : ''
                                }`}
                            onMouseEnter={() => setHoveredContact(index)}
                            onMouseLeave={() => setHoveredContact(null)}
                        >
                            <div className={`bg-gradient-to-r ${info.color} ${info.hoverColor} p-4 rounded-xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                                <div className="text-white group-hover:animate-bounce">
                                    {info.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                                {info.title}
                            </h3>
                            <p className="text-amber-600 font-medium mb-1 group-hover:text-amber-700 transition-colors duration-300">
                                {info.main}
                            </p>
                            <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">
                                {info.sub}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-2xl">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl mr-4 shadow-lg">
                                    <Send className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Konsultasi Gratis</h3>
                                    <p className="text-gray-600">Ceritakan masalah hukum Anda</p>
                                </div>
                            </div>

                            {!isSubmitted ? (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${focusedField === 'name' ? 'text-amber-500' : 'text-gray-400'
                                                }`}>
                                                <User className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Nama Lengkap"
                                                className="w-full pl-10 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 group-hover:border-amber-400/70"
                                            />
                                        </div>

                                        <div className="relative group">
                                            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${focusedField === 'email' ? 'text-amber-500' : 'text-gray-400'
                                                }`}>
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Email"
                                                className="w-full pl-10 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 group-hover:border-amber-400/70"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${focusedField === 'phone' ? 'text-amber-500' : 'text-gray-400'
                                            }`}>
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="Nomor Telepon"
                                            className="w-full pl-10 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 group-hover:border-amber-400/70"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className={`absolute top-4 left-0 pl-3 flex items-start pointer-events-none transition-colors duration-300 ${focusedField === 'message' ? 'text-amber-500' : 'text-gray-400'
                                            }`}>
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            rows={5}
                                            placeholder="Ceritakan masalah hukum Anda secara detail..."
                                            className="w-full pl-10 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none group-hover:border-amber-400/70"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-amber-500/25 group"
                                    >
                                        <div className="flex items-center justify-center space-x-2">
                                            <span>Kirim Pesan</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="animate-bounce mb-6">
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Pesan Terkirim!</h4>
                                    <p className="text-gray-600">
                                        Terima kasih! Tim kami akan menghubungi Anda dalam 1 jam kerja.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Map & Office Info */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Interactive Map */}
                        <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-2xl group hover:shadow-amber-500/20 transition-all duration-500">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Navigation className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Lokasi Kantor</h4>
                                    <p className="text-gray-600">Jakarta Pusat</p>
                                </div>
                            </div>

                            {/* Embedded Map */}
                            <div className="relative mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8317!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1644350000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl"
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-amber-400/50 transition-colors duration-300">
                                    <div className="flex items-center space-x-3">
                                        <Building className="w-5 h-5 text-amber-500" />
                                        <span className="text-gray-900 font-medium">Gedung Perkantoran</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-500" />
                                </div>

                                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Buka di Google Maps
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Animation Dots */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
        </section>
    );
}