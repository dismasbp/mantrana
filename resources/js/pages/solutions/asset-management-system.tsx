import GuestLayout from "@/layouts/guest-layout";
import { Plus, Home, Play, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { assetManagementSystem } from '@/routes';
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import "swiper/css/grid";

export default function AssetManagementSystem() {
    const breadcrumbs = [
        { title: <Home size={16}/>, href: "/" },
        { title: "Asset Management", href:assetManagementSystem().url },
    ];

    const clients = [
        { img: "/storage/assets/client/client-1.png", label: "18 Hole" },
        { img: "/storage/assets/client/client-2.png", label: "Acer" },
        { img: "/storage/assets/client/client-3.png", label: "Asterra Machine" },
        { img: "/storage/assets/client/client-4.png", label: "Brain Academy" },
        { img: "/storage/assets/client/client-5.png", label: "BYD" },
        { img: "/storage/assets/client/client-6.png", label: "Dewaweb" },
        { img: "/storage/assets/client/client-7.png", label: "Digitalkie" },
        { img: "/storage/assets/client/client-8.png", label: "Djarum Super" },
        { img: "/storage/assets/client/client-9.png", label: "eCampuz" },
        { img: "/storage/assets/client/client-10.png", label: "ERP Solution" },
        { img: "/storage/assets/client/client-11.png", label: "Fisiohome" },
        { img: "/storage/assets/client/client-12.png", label: "Gamatechno" },
        { img: "/storage/assets/client/client-13.png", label: "Hyundai" },
        { img: "/storage/assets/client/client-14.png", label: "Kasdana" },
        { img: "/storage/assets/client/client-15.png", label: "Mazda" },
        { img: "/storage/assets/client/client-16.png", label: "Mela" },
        { img: "/storage/assets/client/client-17.png", label: "Morinaga" },
        { img: "/storage/assets/client/client-18.png", label: "Mustika Land" },
    ];
    return (
        <GuestLayout>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <h1 className="text-6xl md:text-7xl font-semibold mb-4 text-left text-white mb-30" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    Asset Management
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-md overflow-hidden">
                    <div className="p-6 items-start relative text-white flex flex-row" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-500 text-white mr-3 flex-shrink-0">
                            <Plus size={20} />
                        </span>
                        <span className="text-gray-400 font-medium" style={{ fontFamily: 'Helvetica, sans-serif' }}>Solution</span>
                    </div>
                    <div className="p-6 flex flex-col items-start relative text-white" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <h2 className="text-2xl md:text-xl font-semibold mb-4">Kelola Aset Lebih Efektif dengan Asset Management System Terpercaya</h2>
                    </div>
                    <div className="p-6 flex flex-col items-start relative text-gray-400" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <p>Optimalkan pemantauan, pemeliharaan, dan pelaporan aset perusahaan Anda dengan sistem manajemen aset yang disesuaikan khusus untuk bisnis Anda.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 rounded-md overflow-hidden">
                    <Button asChild className="bg-[#13161B] hover:bg-[#373A41] border-1 border-gray-400 text-white px-8 py-6 text-lg">
                        <Link href="/demo">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white mr-3 flex-shrink-0 border-2 border-gray-400">
                                <Play size={20} />
                            </span>
                            <span className="text-gray-400 font-medium">Demo Gratis</span>
                        </Link>
                    </Button>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                        <Link href="/contact">
                            Dapatkan Penawaran
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Benefit Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="py-6 mb-10 text-left">
                    <h6 className="text-gray-400 mb-6">Manfaat</h6>
                    <h2 className="text-4xl font-semibold mb-4">Manfaat Custom Asset Management System Mantrana</h2>
                    <p className="text-gray-400 text-md">Kelola segala kebutuhan perusahaan Anda dengan fitur otomatis untuk mengatur bisnis lebih efisien.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    <div className="grid grid-cols-1 gap-6 min-h-[30rem] rounded-md overflow-hidden">
                        <div className="flex flex-col justify-center items-start relative">
                            <h3 className="text-xl font-semibold my-2">Dashboard Komprehensif</h3>
                            <p className="text-gray-400 text-md">Kelola aset lebih efisien dengan pelacakan terpusat dan visualisasi data yang mudah dipahami. Pantau kondisi aset terkini secara real-time untuk mendukung keputusan cepat.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start relative">
                            <h3 className="text-xl font-semibold">Update Data Otomatis</h3>
                            <p className="text-gray-400 text-md">Pastikan seluruh data aset selalu akurat dengan sistem yang terhubung real-time. Proses keluar-masuk aset tercatat rapi dan mudah dianalisa.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start relative">
                            <h3 className="text-xl font-semibold">Pemeliharaan & Perawatan Rutin</h3>
                            <p className="text-gray-400 text-md">Perpanjang umur aset dan kurangi downtime dengan pemeliharaan yang lebih terencana. Sistem mempermudah pengajuan hingga monitoring biaya perawatan.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start relative">
                            <h3 className="text-xl font-semibold">Perhitungan Depresiasi Otomatis</h3>
                            <p className="text-gray-400 text-md">Pastikan nilai aset selalu tercatat dengan akurat. Sistem menghitung depresiasi secara otomatis sehingga perusahaan lebih mudah mengaloaksikan anggaran pegganti aset.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start relative">
                            <h3 className="text-xl font-semibold">Laporan Komprehensif</h3>
                            <p className="text-gray-400 text-md">Ambil keputusan lebih cepat dengan laporan aset yang mudah dipahami. Dashboard interaktif menampilkan data real-time untuk analisis menyeluruh.</p>
                        </div>
                    </div>

                    <div className="relative rounded-md bg-[#0C0E12] flex justify-center items-center overflow-hidden order-first md:order-last">
                        <img
                            src="/storage/assets/background/Asset_Management/hero-1.jpg"
                            alt="Asset Management"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-md transform translate-x-3 translate-y-3 shadow-[ -10px_-10px_20px_rgba(0,0,0,0),5px_5px_15px_rgba(0,0,0,0) ]"
                        />
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center lg:px-60">
                    <h2 className="text-4xl font-semibold mb-4">Fitur Lengkap untuk Mengelola Aset Perusahaan Anda Lebih <span className="text-blue-500 italic">Efektif</span> dan <span className="text-blue-500 italic">Efisien</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {[
                        {
                            img: "/storage/assets/Asset_Management/hero-1.png",
                            title: "Master Data Aset",
                            desc: "Memudahkan perusahaan dalam melakukan pendataan dan pencatatan informasi aset secara lengkap, mulai dari pengadaan, vendor, kategori, tipe, lokasi, hingga siapa pengguna aset.",
                        },
                        {
                            img: "/storage/assets/Asset_Management/hero-2.png",
                            title: "Aset Usage",
                            desc: "Menyediakan kemudahan dalam proses pengajuan dan persetujuan penggunaan aset, sekaligus mencatat histori pemakaian aset yang telah digunakan.",
                        },
                        {
                            img: "/storage/assets/Asset_Management/hero-3.png",
                            title: "Aset Transaction",
                            desc: "Mengelola seluruh transaksi dan status aset dengan lebih mudah, termasuk disposal, write off, revaluation, transfer, perubahan lokasi, depresiasi, hingga pengembalian aset.",
                        },
                        {
                            img: "/storage/assets/Asset_Management/hero-4.png",
                            title: "Aset Deprecation",
                            desc: "Menghitung depresiasi aset secara otomatis sehingga perusahaan dapat mengalokasikan anggaran untuk mengganti aset lama yang sudah habis masa manfaatnya dengan aset baru.",
                        },
                        {
                            img: "/storage/assets/Asset_Management/hero-5.png",
                            title: "Dashboard & Reporting",
                            desc: "Menyajikan data aset dalam bentuk laporan dan dashboard interaktif yang memudahkan proses monitoring, analisis, dan pengambilan keputusan berbasis data.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group p-6 rounded-xl bg-[#0C0E12] shadow-lg gap-4 transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex-shrink-0 flex">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    className="mb-10 md:mb-30 w-24 h-24 md:w-24 md:h-30 object-contain rounded-md transition-transform duration-300 group-hover:scale-150 group-hover:translate-y-5 group-hover:translate-x-5"
                                />
                            </div>

                            <div className="flex flex-col space-y-2 mt-4">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white transition-all duration-300 transform group-hover:translate-y-2 group-hover:opacity-90">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="p-6 rounded-xl flex flex-col justify-center items-center relative text-white" style={{ fontFamily: 'Helvetica, sans-serif',  }}>
                        <div
                            className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-xl"
                            style={{ backgroundImage: "url('/storage/assets/background/Asset_Management/hero-2.jpg')" }}
                        >
                        </div>
                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl mb-4 text-center drop-shadow-lg w-ful">
                                Ingin tahu lebih lanjut tentang fitur kami? Tim kami siap membantu Anda
                            </h3>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                                Hubungi Kami <ArrowUpRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Mantrana Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Mengapa Memilih Asset Management System dari Mantrana?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10">
                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:-translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-6.png" alt="Efisiensi" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Efisiensi Biaya</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Kontrol anggaran perawatan & perpanjangan aset.
                        </p>
                    </div>

                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-7.png" alt="Tailored Workflow" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Tailored Workflow</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Sistem dapat dikustomisasi sesuai kebutuhan unik perusahaan/instansi Anda.
                        </p>
                    </div>

                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:-translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-8.png" alt="Scalable" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Scalable</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Tetap andal, baik untuk ratusan maupun ribuan aset.
                        </p>
                    </div>

                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-9.png" alt="Compliance Ready" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Compliance Ready</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Mendukung tata kelola sesuai standar regulasi dan audit.
                        </p>
                    </div>

                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:-translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-10.png" alt="Transparan" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Transparan</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            KontrSemua pemangku kepentingan dapat memantau data real-time.ol anggaran perawatan & perpanjangan aset.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution Asset Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    <div>
                        <h2 className="text-4xl font-semibold mb-4">Solusi Asset Management System untuk Berbagai <span className="text-blue-500 italic">Industri</span></h2>
                        <p className="text-gray-400 text-md">
                            Sistem manajemen aset kami dirancang secara fleksibel untuk kebutuhan berbagai sektor industri. Custom fitur khusus untuk kelola perusahaan Anda lebih efektif & efisien.
                        </p>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Asset_Management/hero-11.png" alt="Manufaktur" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Manufaktur</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Asset_Management/hero-12.png" alt="Hospitality" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Hospitality</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Asset_Management/hero-13.png" alt="Pemerintahan" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Pemerintahan</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Asset_Management/hero-14.png" alt="Logistik" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Logistik</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Asset_Management/hero-15.png" alt="Retail" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Retail</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Asset_Management/hero-16.png" alt="Kesehatan" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Kesehatan</h4>
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <h4 className="text-3xl font-semibold text-blue-500 italic mb-4">50+ Industri lainnya</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Section */}
            <section className="pt-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-4">Perjalanan Digital Bersama Klien Kami</h2>
                    <p className="text-gray-400 text-md">
                        Dipercaya lebih dari 100+ klien perusahaan di Indonesia
                    </p>
                </div>
                
                <div className="w-full py-10">
                    <Swiper
                        modules={[Autoplay, Grid]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        spaceBetween={2}
                        slidesPerView={2}
                        grid={{ rows: 2, fill: 'row' }}
                        breakpoints={{
                            640: { slidesPerView: 4, grid: { rows: 2 } },
                            1024: { slidesPerView: 6, grid: { rows: 2 } },
                        }}
                    >
                        {clients.map((client, i) => (
                            <SwiperSlide key={i} className="flex justify-center items-center">
                                <div className="p-4 bg-[#000] rounded-2xl flex justify-center items-center">
                                    <img
                                        src={client.img}
                                        alt={client.label}
                                        loading="lazy"
                                        className="h-12 md:h-16 object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </GuestLayout>
    );
}