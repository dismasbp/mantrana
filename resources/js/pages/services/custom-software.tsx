import GuestLayout from "@/layouts/guest-layout";
import { Plus, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import "swiper/css";
import "swiper/css/grid";

export default function CustomSoftware() {
    return (
        <GuestLayout>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <h1 className="text-6xl md:text-7xl font-semibold mb-4 text-left text-white mb-30" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    Custom Software
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-6 rounded-md overflow-hidden">
                    <div className="p-6 items-start relative text-white flex flex-row" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-500 text-white mr-3 flex-shrink-0">
                            <Plus size={20} />
                        </span>
                        <span className="text-gray-400 font-medium" style={{ fontFamily: 'Helvetica, sans-serif' }}>Services</span>
                    </div>
                    <div className="p-6 flex flex-col items-start relative text-white" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <h2 className="text-2xl md:text-xl font-semibold mb-4">Custom Software Sesuai Alur Kerja Bisnis Anda</h2>
                        <p className="text-gray-300">Wujudkan sistem digital yang benar-benar sesuai kebutuhan perusahaan Anda — terintegrasi, scalable, dan siap mendukung pertumbuhan bisnis di era digital.</p>
                        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg mt-10">
                            <Link href="/contact">
                                Konsultasi Gratis
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 rounded-md">
                        <div>
                            <img
                                src="/storage/assets/background/Custom_Software/hero-1.jpg"
                                alt="Custom Software 1"
                                loading="lazy"
                                className="w-full h-full object-cover rounded-md shadow-lg"
                            />
                        </div>
                        <div>
                            <img
                                src="/storage/assets/background/Custom_Software/hero-2.jpg"
                                alt="Custom Software 2"
                                loading="lazy"
                                className="w-full h-full object-cover rounded-md shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Software Solutions Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Solusi Custom Software yang Dirancang untuk Bisnis Anda</h2>
                    <p className="text-gray-400 text-md">
                        Bangun sistem digital yang fleksibel, efisien, dan siap berkembang — tanpa batasan template atau fitur yang tidak relevan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                    <div className="bg-[#0C0E12] rounded-2xl p-6 shadow-md hover:shadow-lg">
                        <img src="/storage/assets/Custom_Software/hero-1.png" alt="Sesuai Proses Bisnis Anda" className="w-16 h-16 mb-10" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-10">Sesuai Proses Bisnis Anda</h3>
                        <p className="text-gray-400 text-md">
                            Dirancang mengikuti SOP dan alur kerja unik perusahaan, bukan sebaliknya.
                        </p>
                    </div>
                    <div className="bg-[#0C0E12] rounded-2xl p-6 shadow-md hover:shadow-lg">
                        <img src="/storage/assets/Custom_Software/hero-2.png" alt="Tingkatkan Efisiensi Operasional" className="w-16 h-16 mb-10" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-10">Tingkatkan Efisiensi Operasional</h3>
                        <p className="text-gray-400 text-md">
                            Otomatisasi proses manual dan hemat waktu tim Anda.
                        </p>
                    </div>
                    <div className="bg-[#0C0E12] rounded-2xl p-6 shadow-md hover:shadow-lg">
                        <img src="/storage/assets/Custom_Software/hero-3.png" alt="Terintergrasi & Scalable" className="w-16 h-16 mb-10" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-10">Terintergrasi & Scalable</h3>
                        <p className="text-gray-400 text-md">
                            Siap berkembang seiring ekspansi bisnis dan jumlah pengguna.
                        </p>
                    </div>
                    <div className="bg-[#0C0E12] rounded-2xl p-6 shadow-md hover:shadow-lg">
                        <img src="/storage/assets/Custom_Software/hero-4.png" alt="Pengambilan Keputusan Lebih Cepat" className="w-16 h-16 mb-10" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-10">Pengambilan Keputusan Lebih Cepat</h3>
                        <p className="text-gray-400 text-md">
                            Dashboard real-time dan laporan interaktif untuk insight instan.
                        </p>
                    </div>
                </div>

                <div className="py-20">
                    <div className="relative w-full overflow-hidden rounded-xl">
                        <img
                            src="/storage/assets/background/Custom_Software/hero-3.jpg"
                            alt="Custom Software 3"
                            loading="lazy"
                            className="w-full aspect-[16/7] object-cover object-top"
                        />
                    </div>
                </div>
            </section>

            {/* Layanan Section */}
            <section className="container mx-auto px-6 py-1" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Layanan Kami</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                    {[
                        {
                            img: "/storage/assets/Custom_Software/hero-5.png",
                            title: "Web & Mobile App Development",
                            desc: "Kembangkan aplikasi responsif untuk akses multi-platform.",
                        },
                        {
                            img: "/storage/assets/Custom_Software/hero-6.png",
                            title: "System Integration & API",
                            desc: "Hubungkan sistem lama dan baru agar data mengalir mulus.",
                        },
                        {
                            img: "/storage/assets/Custom_Software/hero-7.png",
                            title: "Custom Dashboard & Reporting",
                            desc: "Visualisasi data yang dirancang sesuai kebutuhan.",
                        },
                        {
                            img: "/storage/assets/Custom_Software/hero-8.png",
                            title: "Workflow Automation",
                            desc: "Otomatiskan proses kerja berulang agar tim fokus pada hal strategis.",
                        },
                        {
                            img: "/storage/assets/Custom_Software/hero-9.png",
                            title: "Role-Based Access Control",
                            desc: "Kelola akses pengguna dengan keamanan tinggi.",
                        },
                        {
                            img: "/storage/assets/Custom_Software/hero-10.png",
                            title: "Cloud-Based Infrastructure",
                            desc: "Sistem fleksibel & dapat diakses dari mana saja.",
                        },
                        {
                            img: "/storage/assets/Custom_Software/hero-11.png",
                            title: "Maintenance & Support",
                            desc: "Dukungan teknis berkelanjutan agar sistem selalu optimal.",
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
                                <h3 className="text-2xl md:text-3xl font-semibold text-white transition-all duration-300 transform group-hover:-translate-y-10 group-hover:opacity-90">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto transition-all duration-300 transform group-hover:-translate-y-10 group-hover:opacity-90">
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

            {/* Why Should Choose Mantrana Section */}
            <section className="mx-auto py-10 w-full" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="py-10 bg-[#0C0E12]">
                    <h2 className="text-4xl font-semibold mb-4 text-center">Kenapa Memilih Custom Software Mantrana?</h2>

                    <div className="container mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="mb-10">
                            <Plus className="text-blue-600 mb-8" size={30} />
                            <h3 className="text-xl font-semibold mb-8">Tim Expert & Berpengalaman</h3>
                            <p className="text-gray-400 text-md">Didukung developer profesional lintas industri.</p>
                        </div>
                        <div className="mb-10">
                            <Plus className="text-blue-600 mb-8" size={30} />
                            <h3 className="text-xl font-semibold mb-8">100% Customizable</h3>
                            <p className="text-gray-400 text-md">Solusi dibuat khusus, bukan template generik.</p>
                        </div>
                        <div className="mb-10">
                            <Plus className="text-blue-600 mb-8" size={30} />
                            <h3 className="text-xl font-semibold mb-8">Agile & Scalable</h3>
                            <p className="text-gray-400 text-md">Pengembangan fleksibel mengikuti pertumbuhan bisnis Anda.</p>
                        </div>
                        <div className="mb-10">
                            <Plus className="text-blue-600 mb-8" size={30} />
                            <h3 className="text-xl font-semibold mb-8">Keamanan & Compliance</h3>
                            <p className="text-gray-400 text-md">Mengikuti standar keamanan & siap untuk audit regulasi.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Custom Software Section */}
            <section className="container mx-auto px-6 py-3" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    <div>
                        <h2 className="text-5xl font-semibold mb-4">Solusi Fleksibel untuk Berbagai Sektor</h2>
                        <p className="text-gray-400 text-md">
                            Custom software kami dapat diadaptasi untuk berbagai jenis bisnis dan organisasi — dari operasional internal hingga layanan publik skala besar.
                        </p>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Custom_Software/hero-12.png" alt="Manufaktur" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Manufaktur</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Custom_Software/hero-13.png" alt="Hospitality" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Hospitality</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Custom_Software/hero-14.png" alt="Pemerintahan" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Pemerintahan</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Custom_Software/hero-15.png" alt="Logistik" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Logistik</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Custom_Software/hero-16.png" alt="Retail" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Retail</h4>
                            </div>
                            <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg">
                                <img src="/storage/assets/Custom_Software/hero-17.png" alt="Kesehatan" className="w-16 h-16 mb-4" />
                                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Kesehatan</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Framework Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-20">Our Framework</h2>
                </div>

                <div className="grid grid-cols-[1fr_1fr] md:grid-cols-5 gap-3 mt-10">
                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:-translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-6.png" alt="Our Framework" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Our Framework</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Proses Pengembangan yang Jelas & Transparan.
                        </p>
                    </div>

                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-7.png" alt="Analisis & Konsultasi" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Analisis & Konsultasi</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Kami memahami kebutuhan dan alur kerja bisnis Anda secara mendalam.
                        </p>
                    </div>

                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:-translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-8.png" alt="Perancangan Solusi" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Perancangan Solusi</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Rancang sistem yang efisien dan sesuai tujuan bisnis.
                        </p>
                    </div>

                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:translate-y-7 transition-all duration-300">
                        <img src="/storage/assets/Asset_Management/hero-9.png" alt="Pengembangan & Implementasi" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Pengembangan & Implementasi</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Bangun sistem secara agile dengan pengujian menyeluruh.
                        </p>
                    </div>

                    <div className="bg-[#0C0E12] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg lg:-translate-y-7 transition-all duration-300 col-span-2 md:col-span-1">
                        <img src="/storage/assets/Asset_Management/hero-10.png" alt="Maintenance & Scale Up" className="w-16 h-16 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Maintenance & Scale Up</h3>
                        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-md mx-auto">
                            Kami terus mendampingi untuk perawatan dan pengembangan lanjutan.
                        </p>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}