'use client'

import { Shield, Users, Award, Scale } from 'lucide-react';

const services = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Hukum Perusahaan",
      description: "Konsultasi lengkap untuk kebutuhan hukum perusahaan, kontrak bisnis, dan merger & akuisisi."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Hukum Pidana",
      description: "Pembelaan hukum pidana dengan pengalaman puluhan tahun dan tingkat keberhasilan tinggi."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hukum Keluarga",
      description: "Penanganan kasus perceraian, hak asuh anak, dan sengketa harta warisan dengan pendekatan personal."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Hukum Properti",
      description: "Konsultasi dan penanganan sengketa properti, jual beli tanah, dan perizinan bangunan."
    }
  ];

export default function Services() {

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Layanan <span className="text-amber-500">Profesional</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Kami menyediakan berbagai layanan hukum dengan standar internasional dan pendekatan yang personal
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}