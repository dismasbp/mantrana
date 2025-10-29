import GuestLayout from "@/layouts/guest-layout";
import { Plus, Percent, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <GuestLayout>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="relative w-full h-[340px] md:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden text-white px-2 md:px-10 py-4 flex flex-col justify-end">
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#02e2ff,_transparent_40%),radial-gradient(circle_at_top_right,_#2f59ff,_transparent_35%),radial-gradient(circle_at_bottom_right,_#7b2ff7,_transparent_45%)]" />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-end h-full">
                        <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold mb-3 md:mb-20 text-left drop-shadow-lg w-full">
                            About Mantrana
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-md overflow-hidden">
                            <div className="items-center relative text-white flex flex-row" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <span className="inline-flex items-center justify-center rounded-full bg-gray-500 text-black mr-3 flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </span>
                                <span className="text-gray-400 font-medium text-sm sm:text-base md:text-lg">
                                    About
                                </span>
                            </div>
                            <div className="flex flex-col items-start relative text-white" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <h2 className="text-md md:text-lg font-semibold md:mb-4">Transformasi Digital untuk Masa Depan Bisnis Anda</h2>
                            </div>
                            <div className="flex flex-col items-start relative text-gray-400" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <p>Kami membangun solusi digital yang memberdayakan bisnis di era transformasi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Percentage Data Section */}
            <section className="container mx-auto px-6 py-6" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:text-center text-left">
                    <div>
                        <div className="relative flex flex-row mb-3 md:justify-center">
                            <h3 className="text-5xl md:text-6xl font-medium mr-3">
                                50
                            </h3>
                            <span className="text-[#0056D6] mr-3 flex-shrink-0">
                                <Plus size={20} />
                            </span>
                        </div>
                        <h4 className="font-semibold">Proyek Sukses</h4>
                    </div>
                    <div>
                        <div className="relative flex flex-row mb-3 md:justify-center">
                            <h3 className="text-5xl md:text-6xl font-medium mr-3">
                                20
                            </h3>
                            <span className="text-[#0056D6] mr-3 flex-shrink-0">
                                <Plus size={20} />
                            </span>
                        </div>
                        <h4 className="font-semibold">Klien dari berbagai industri</h4>
                    </div>
                    <div>
                        <div className="relative flex flex-row mb-3 md:justify-center">
                            <h3 className="text-5xl md:text-6xl font-medium mr-3">
                                10
                            </h3>
                            <span className="text-[#0056D6] mr-3 flex-shrink-0">
                                <Plus size={20} />
                            </span>
                        </div>
                        <h4 className="font-semibold">Tahun Pengalaman</h4>
                    </div>
                    <div>
                        <div className="relative flex flex-row mb-3 md:justify-center">
                            <h3 className="text-5xl md:text-6xl font-medium mr-3">
                                98
                            </h3>
                            <span className="text-[#0056D6] mr-3 flex-shrink-0">
                                <Percent size={20} />
                            </span>
                        </div>
                        <h4 className="font-semibold">Tingkat Kepuasan Klien</h4>
                    </div>
                </div>
            </section>

            {/* Team Background Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="relative w-full min-h-[450px] md:min-h-[600px] rounded-2xl overflow-hidden px-10 py-4 bg-cover bg-center" style={{ backgroundImage: `url(/storage/assets/background/About/hero-1.jpg)` }}></div>
            </section>

            <section className="container mx-auto py-3" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <Separator/>
            </section>

            {/* Visi Misi Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="rounded-2xl shadow-md hover:shadow-lg order-1 md:order-1">
                        <div className="relative w-full h-[180px] sm:h-[240px] md:h-[350px] lg:h-[420px] px-10 py-4 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(/storage/assets/background/About/hero-2.jpg)` }}></div>
                    </div>
                    <div className="bg-[#0C0E12] p-6 md:p-10 content-center rounded-2xl shadow-md hover:shadow-lg order-2 md:order-2">
                        <h4 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-10">Visi</h4>
                        <p className="text-sm md:text-md lg:text-lg text-gray-400">menjadi mitra terpercaya dalam Menjadi mitra digital terpercaya bagi bisnis di berbagai industri, melalui solusi teknologi yang inovatif, efisien, dan berkelanjutan. digital di Indonesia</p>
                    </div>
                    <div className="bg-[#0C0E12] p-6 md:p-10 content-center rounded-2xl shadow-md hover:shadow-lg order-4 md:order-3">
                        <h4 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-10">Misi</h4>
                        <ol className="list-decimal list-outside ml-4 text-gray-400">
                            <li className="text-sm md:text-md lg:text-lg">Menghadirkan sistem digital yang disesuaikan dengan proses bisnis klien.</li>
                            <li className="text-sm md:text-md lg:text-lg">Mengoptimalkan efisiensi kerja melalui otomatisasi dan integrasi.</li>
                            <li className="text-sm md:text-md lg:text-lg">Meningkatkan kualitas keputusan bisnis dengan data dan insight real-time.</li>
                            <li className="text-sm md:text-md lg:text-lg">Menyediakan dukungan teknis jangka panjang yang transparan dan profesional.</li>
                        </ol>
                    </div>
                    <div className="rounded-2xl shadow-md hover:shadow-lg order-3 md:order-4">
                        <div className="relative w-full h-[180px] sm:h-[240px] md:h-[350px] lg:h-[420px] px-10 py-4 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(/storage/assets/background/About/hero-3.jpg)` }}></div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="container mx-auto px-6 py-6 md:mt-20">
                <div
                    className="relative w-full rounded-xl overflow-hidden flex justify-center items-center"
                    style={{ minHeight: '300px', maxHeight: '500px', fontFamily: 'Helvetica, sans-serif' }}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat bg-bottom"
                        style={{ backgroundImage: "url('/storage/assets/background/Asset_Management/hero-2.jpg')" }}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-4 md:px-12">
                        <div className="mb-16">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-lg leading-snug mb-3">
                                Bergabung dalam Perjalanan Digital Bersama Kami
                            </h3>
                            <p>Kami selalu terbuka untuk kolaborasi — baik dengan perusahaan yang ingin bertransformasi digital, maupun talenta yang ingin berkembang bersama kami.</p>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-10 md:py-5 text-lg md:text-xl inline-flex items-center gap-2">
                            Hubungi Kami <ArrowUpRight size={20} />
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}