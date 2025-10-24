import GuestLayout from "@/layouts/guest-layout";
import { Plus, Check, Layers, Archive } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import "swiper/css";
import "swiper/css/grid";

export default function Pariwisata() {
    const clients = [
        { img: "/storage/assets/client/client-1.png", label: "18 Hole", year: "2025" },
        { img: "/storage/assets/client/client-2.png", label: "Acer", year: "2025" },
        { img: "/storage/assets/client/client-3.png", label: "Asterra Machine", year: "2024" },
        { img: "/storage/assets/client/client-4.png", label: "Brain Academy", year: "2024" },
        { img: "/storage/assets/client/client-5.png", label: "BYD", year: "2023" },
        { img: "/storage/assets/client/client-6.png", label: "Dewaweb", year: "2023" },
        { img: "/storage/assets/client/client-7.png", label: "Digitalkie", year: "2022" },
        { img: "/storage/assets/client/client-8.png", label: "Djarum Super", year: "2022" },
        { img: "/storage/assets/client/client-9.png", label: "eCampuz", year: "2021" },
        { img: "/storage/assets/client/client-10.png", label: "ERP Solution", year: "2021" },
        { img: "/storage/assets/client/client-11.png", label: "Fisiohome", year: "2020" },
        { img: "/storage/assets/client/client-12.png", label: "Gamatechno", year: "2020" },
    ];
    return (
        <GuestLayout>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <h1 className="text-6xl md:text-7xl font-semibold mb-4 text-left text-white mb-30" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    Pariwisata
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-6 rounded-md overflow-hidden">
                    <div className="p-6 items-start relative text-white flex flex-row" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-500 text-white mr-3 flex-shrink-0">
                            <Plus size={20} />
                        </span>
                        <span className="text-gray-400 font-medium" style={{ fontFamily: 'Helvetica, sans-serif' }}>Use Cases</span>
                    </div>
                    <div className="p-6 flex flex-col items-start relative text-white" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <h2 className="text-2xl md:text-xl font-semibold mb-4">Software ERP untuk Industri Pariwisata, Kelola Aset & Inventori Lebih Mudah</h2>
                        <p className="text-gray-300">Kelola fasilitas wisata, kendaraan operasional, hingga inventori perlengkapan layanan dalam satu sistem terintegrasi. Pastikan pelayanan wisata lebih efisien, transparan, dan meningkatkan kepuasan pengunjung.</p>
                        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg mt-10">
                            <Link href="/contact">
                                Dapatkan Demo Gratis
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ERP Pariwisata Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Modul Spesifik Software ERP untuk Industri Pariwisata</h2>
                    <p className="text-gray-400 text-md">
                        Kelola segala kebutuhan perusahaan Anda dengan fitur otomatis untuk mengatur bisnis lebih efisien.
                    </p>
                </div>

                {/* Inventory Management */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    <div className="p-6 rounded-md flex flex-col justify-center items-start relative z-10" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <div className="mb-4">
                            <button className="p-3 rounded-full bg-blue-600 text-white transition-colors">
                                <Archive size={24} />
                            </button>
                        </div>
                        <h3
                            className="text-3xl font-semibold mb-4 text-left relative md:-mr-50 md:translate-x-0"
                        >
                            Inventory Management System
                        </h3>
                        <p className="text-gray-400 text-md text-left max-w-lg">
                            Pastikan perlengkapan wisata selalu tersedia dan tercatat akurat untuk mendukung kelancaran operasional.
                        </p>

                        <ul className="my-6 space-y-4">
                        {[
                            "Monitoring stok perlengkapan wisata & kebutuhan operasional multi-lokasi",
                            "Catatan keluar-masuk barang otomatis",
                            "Notifikasi stok minimum untuk cegah keterlambatan layanan",
                            "Laporan inventori interaktif untuk pengambilan keputusan cepat",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center transition-transform hover:translate-x-1">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white mr-3 flex-shrink-0">
                                <Check size={20} />
                            </span>
                            <span className="text-gray-400 font-medium">{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                
                    <div className="relative rounded-md bg-[#181D27] flex justify-center items-center overflow-hidden">
                        <img
                            src="/storage/assets/background/Pariwisata/hero-1.jpg"
                            alt="Inventory Management"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-md transform translate-x-10 translate-y-10 shadow-[ -10px_-10px_20px_rgba(0,0,0,0.4),5px_5px_15px_rgba(0,0,0,0) ]"
                        />
                    </div>
                </div>

                {/* Asset Management */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    <div className="relative rounded-md bg-[#181D27] flex justify-center items-center overflow-hidden">
                        <img
                            src="/storage/assets/background/Pariwisata/hero-2.jpg"
                            alt="Asset Management"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-md transform -translate-x-10 translate-y-10 shadow-[ -10px_-10px_20px_rgba(0,0,0,0.4),5px_5px_15px_rgba(0,0,0,0) ]"
                        />
                    </div>

                    <div className="p-6 rounded-md flex flex-col justify-center items-start relative z-10" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <div className="mb-4">
                            <button className="p-3 rounded-full bg-blue-600 text-white transition-colors">
                                <Layers size={24} />
                            </button>
                        </div>
                        <h3
                            className="text-3xl font-semibold mb-4 text-left relative md:-mr-50 md:translate-x-0"
                        >
                            Asset Management System
                        </h3>
                        <p className="text-gray-400 text-md text-left max-w-lg">
                            Kelola aset wisata seperti kendaraan, peralatan rekreasi, hotel/resort facilities, hingga gedung operasional dengan lebih terstruktur.
                        </p>

                        <ul className="my-6 space-y-4">
                        {[
                            "Pendataan aset wisata terpusat",
                            "Jadwal pemeliharaan preventif & korektif",
                            "Monitoring kondisi & lokasi aset real-time",
                            "Perhitungan depresiasi untuk perencanaan anggaran",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center transition-transform hover:translate-x-1">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white mr-3 flex-shrink-0">
                                <Check size={20} />
                            </span>
                            <span className="text-gray-400 font-medium">{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Superiority Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="my-5">
                    <h6 className="text-lg font-semibold text-blue-600 mb-4">Keunggulan</h6>
                    <h2 className="text-4xl font-semibold mb-4 w-3xl">Keunggulan Software ERP untuk Industri Pariwisata</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                    <div className="bg-[#0C0E12] rounded-2xl p-6 shadow-md hover:shadow-lg">
                        <img src="/storage/assets/Custom_Software/hero-1.png" alt="Ketersediaan Layanan Selalu Terjamin" className="w-16 h-16 mb-10" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-10">Ketersediaan Layanan Selalu Terjamin</h3>
                        <p className="text-gray-400 text-md">
                            Perlengkapan wisata selalu tercatat dan terpantau sehingga tidak ada gangguan layanan bagi pengunjung.
                        </p>
                    </div>
                    <div className="bg-[#0C0E12] rounded-2xl p-6 shadow-md hover:shadow-lg">
                        <img src="/storage/assets/Custom_Software/hero-2.png" alt="Fasilitas Wisata Lebih Terawat" className="w-16 h-16 mb-10" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-10">Fasilitas Wisata Lebih Terawat</h3>
                        <p className="text-gray-400 text-md">
                            Dengan jadwal pemeliharaan otomatis, aset wisata lebih terjaga dan downtime fasilitas dapat diminimalkan.
                        </p>
                    </div>
                    <div className="bg-[#0C0E12] rounded-2xl p-6 shadow-md hover:shadow-lg">
                        <img src="/storage/assets/Custom_Software/hero-3.png" alt="Efisiensi Operasional" className="w-16 h-16 mb-10" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-10">Efisiensi Operasional</h3>
                        <p className="text-gray-400 text-md">
                            Inventori & aset dikelola otomatis, mengurangi kesalahan manual dan meningkatkan produktivitas tim.
                        </p>
                    </div>
                    <div className="bg-[#0C0E12] rounded-2xl p-6 shadow-md hover:shadow-lg">
                        <img src="/storage/assets/Custom_Software/hero-4.png" alt="Pengalaman Wisata Lebih Baik" className="w-16 h-16 mb-10" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-10">Pengalaman Wisata Lebih Baik</h3>
                        <p className="text-gray-400 text-md">
                            Pengunjung merasakan layanan yang cepat, fasilitas lengkap, dan pengalaman lebih menyenangkan berkat manajemen yang efisien.
                        </p>
                    </div>
                </div>
            </section>

            {/* Client Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: "Helvetica, sans-serif" }}>
                <div className="grid grid-cols-2 md:grid-cols-[0.75fr_1.25fr] lg:grid-cols-[0.5fr_1.5fr] gap-6">
                    <div className="py-6 text-white flex flex-row">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-500 text-white mr-3">
                            <Plus size={18} />
                        </span>
                        <span className="text-gray-400 font-medium">Klien Kami</span>
                    </div>

                    <div className="py-6">
                        <p className="text-md mb-10 text-gray-400 text-right lg:text-left">(2020 – 25 ©)</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-6">
                    <div></div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {clients.map((client, i) => (
                            <div
                                key={i}
                                className="relative bg-[#0C0E12] rounded-2xl flex justify-center items-center p-6 aspect-square shadow-md hover:shadow-lg transition-all"
                            >
                                <img
                                    src={client.img}
                                    alt={client.img}
                                    loading="lazy"
                                    className="h-10 md:h-14 object-contain"
                                />
                                <p className="absolute bottom-3 right-3 text-xs text-gray-400 font-light">
                                    /{client.year}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}