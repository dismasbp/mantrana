import GuestLayout from "@/layouts/guest-layout";
import { Layers, Check, Package, Ticket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import "swiper/css/grid";

export default function Home() {
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
            <section className="container mx-auto px-6 py-16 text-center">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[30rem] rounded-md overflow-hidden">
                    <div className="p-6 flex flex-col justify-center items-start relative z-10 text-white" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-left drop-shadow-lg">
                            Custom Software <span className="text-blue-500">ERP</span> untuk Tingkatkan Produktivitas Anda
                        </h1>
                        <p className="mb-10 text-gray-200 text-md text-left max-w-lg drop-shadow-md">
                            Optimalkan alur kerja bisnis di perusahaan Anda dengan integritas fitur ERP yang disesuaikan dengan kebutuhan Anda
                        </p>
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                        >
                            Hubungi Kami
                        </Button>
                    </div>

                    <div
                        className="hidden md:block bg-center bg-cover bg-no-repeat rounded-md"
                        style={{ backgroundImage: "url('/storage/assets/background/Home/hero-1.png')" }}
                    ></div>

                    <div
                        className="absolute inset-0 bg-center bg-cover bg-no-repeat md:hidden"
                        style={{
                            backgroundImage:
                                "url('/storage/assets/background/Home/hero-1.png')",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                </div>
            </section>

            {/* Integrated ERP Solutions Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Solusi ERP Terintegrasi untuk Bisnis Anda</h2>
                    <p className="text-gray-400 text-md">
                        Satu sistem yang menyatukan pengelolaan aset, persediaan, dan layanan pelanggan. Lebih efisien, transparan, dan siap mendukung pertumbuhan bisnis Anda.
                    </p>
                </div>

                {/* Asset Management */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
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
                            Kelola seluruh siklus hidup aset—dari pencatatan, pemakaian, hingga pemeliharaan—secara otomatis dan real-time.
                        </p>

                        <ul className="my-6 space-y-4">
                        {[
                            "Pendataan Terpusat",
                            "Monitoring kondisi & lokasi aset",
                            "Depresiasi tercatat otomatis",
                            "Laporan siap audit",
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

                    <div className="relative rounded-md bg-[#181D27] flex justify-center items-center overflow-hidden order-first md:order-last">
                        <img
                            src="/storage/assets/background/Home/hero-2-2.png"
                            alt="Asset Management"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-md transform translate-x-10 translate-y-10 shadow-[ -10px_-10px_20px_rgba(0,0,0,0.4),5px_5px_15px_rgba(0,0,0,0) ]"
                        />
                    </div>
                </div>

                {/* Inventory Management */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    <div className="relative rounded-md bg-[#181D27] flex justify-center items-center overflow-hidden">
                        <img
                            src="/storage/assets/background/Home/hero-3-2.png"
                            alt="Inventory Management"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-md transform -translate-x-10 translate-y-10 shadow-[ -10px_-10px_20px_rgba(0,0,0,0.4),5px_5px_15px_rgba(0,0,0,0) ]"
                        />
                    </div>

                    <div className="p-6 rounded-md flex flex-col justify-center items-start relative z-10" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <div className="mb-4">
                            <button className="p-3 rounded-full bg-blue-600 text-white transition-colors">
                                <Package size={24} />
                            </button>
                        </div>
                        <h3
                            className="text-3xl font-semibold mb-4 text-left relative md:-mr-50 md:translate-x-0"
                        >
                            Inventory Management System
                        </h3>
                        <p className="text-gray-400 text-md text-left max-w-lg">
                            Pastikan ketersediaan stok selalu terkendali dengan inventori digital yang akurat dan real-time.
                        </p>

                        <ul className="my-6 space-y-4">
                        {[
                            "Kontrol stok multi-lokasi",
                            "Notifikasi level persediaan",
                            "Data akurat & terupdate otomatis",
                            "Analisis kebutuhan persediaan",
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

                {/* Ticketing Management */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    <div className="p-6 rounded-md flex flex-col justify-center items-start relative z-10" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <div className="mb-4">
                            <button className="p-3 rounded-full bg-blue-600 text-white transition-colors">
                                <Ticket size={24} />
                            </button>
                        </div>
                        <h3
                            className="text-3xl font-semibold mb-4 text-left relative md:-mr-50 md:translate-x-0"
                        >
                            Ticketing Management System
                        </h3>
                        <p className="text-gray-400 text-md text-left max-w-lg">
                            Atur permintaan layanan & keluhan pelanggan lebih terstruktur dalam satu dashboard.
                        </p>

                        <ul className="my-6 space-y-4">
                        {[
                            "Pencatatan tiket otomatis",
                            "Tracking status real-time",
                            "Prioritas & distribusi lebih jelas",
                            "Evaluasi performa layanan",
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

                    <div className="relative rounded-md bg-[#181D27] flex justify-center items-center overflow-hidden order-first md:order-last">
                        <img
                            src="/storage/assets/background/Home/hero-4-2.png"
                            alt="Ticketing Management"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-md transform translate-x-10 translate-y-10 shadow-[ -10px_-10px_20px_rgba(0,0,0,0.4),5px_5px_15px_rgba(0,0,0,0) ]"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Our ERP Software Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Mengapa Harus Software ERP Kami?</h2>
                    <p className="text-gray-400 text-md">
                        Kami menghadirkan ERP yang benar-benar custom, scalable, dan aman, agar sesuai dengan SOP, regulasi, serta kebutuhan unik bisnis Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {[
                        {
                            img: "/storage/assets/Home/hero-1.png",
                            title: "Custom Workflow",
                            desc: "ERP disesuaikan dengan alur kerja & regulasi perusahaan Anda. Tidak ada fitur yang mubazir, hanya yang relevan dengan kebutuhan bisnis.",
                        },
                        {
                            img: "/storage/assets/Home/hero-2.png",
                            title: "Harga Fleksibel",
                            desc: "Model biaya fleksibel sesuai skala bisnis. Mulai dari perusahaan kecil, B2B, hingga instansi pemerintah bisa menyesuaikan investasi sistemnya.",
                        },
                        {
                            img: "/storage/assets/Home/hero-3.png",
                            title: "Scalable Infrastructure",
                            desc: "Sistem siap tumbuh bersama bisnis Anda. Dari puluhan hingga ribuan aset dan transaksi tetap lancar dengan performa tinggi.",
                        },
                        {
                            img: "/storage/assets/Home/hero-4.png",
                            title: "Unlimited User Access",
                            desc: "Berikan akses ERP kepada seluruh tim tanpa batasan jumlah pengguna, agar kolaborasi lebih transparan dan efisien.",
                        },
                        {
                            img: "/storage/assets/Home/hero-5.png",
                            title: "Secure & Compliance Ready",
                            desc: "Dibangun dengan standar keamanan tinggi serta sesuai regulasi yang berlaku, sehingga data bisnis aman dan mudah diaudit.",
                        },
                        {
                            img: "/storage/assets/Home/hero-6.png",
                            title: "Cloud & On-Premise Deployment",
                            desc: "Bebas pilih model implementasi—cloud untuk akses fleksibel dari mana saja, atau on-premise untuk kebutuhan khusus perusahaan.",
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
                    </div>
            </section>

            {/* ERP Designed for All Industries */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Software ERP Dirancang Untuk Segala Industri</h2>
                    <p className="text-gray-400 text-md">
                        Sesuaikan kebutuhan software ERP yang dibuat untuk beragam industri.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {[
                        {
                            img: "/storage/assets/Home/hero-7.png",
                            title: "Pariwisata",
                        },
                        {
                            img: "/storage/assets/Home/hero-8.png",
                            title: "Manufacturing",
                        },
                        {
                            img: "/storage/assets/Home/hero-9.png",
                            title: "Konstruksi",
                        },
                        {
                            img: "/storage/assets/Home/hero-10.png",
                            title: "Real Estate",
                        },
                        {
                            img: "/storage/assets/Home/hero-11.png",
                            title: "Retail",
                        },
                        {
                            img: "/storage/assets/Home/hero-12.png",
                            title: "Logistik",
                        },
                        {
                            img: "/storage/assets/Home/hero-13.png",
                            title: "Hotel",
                        },
                        {
                            img: "/storage/assets/Home/hero-14.png",
                            title: "Pendidikan",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl bg-[#0C0E12] shadow-lg flex flex-col items-center text-center space-y-4"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md"
                            />

                            <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Client Section */}
            <section className="py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
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