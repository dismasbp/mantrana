import GuestLayout from "@/layouts/guest-layout";
import { Plus, Home } from 'lucide-react';
// import { Button } from "@/components/ui/button";
import { assetManagementSystem } from '@/routes';
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function AssetManagementSystem() {
    const breadcrumbs = [
        { title: <Home size={16}/>, href: "/" },
        { title: "Asset Management", href:assetManagementSystem().url },
    ];
    return (
        <GuestLayout>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-left text-white mb-30" style={{ fontFamily: 'Helvetica, sans-serif' }}>
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
                        <h2 className="text-xl font-semibold mb-4">Kelola Aset Lebih Efektif dengan Asset Management System Terpercaya</h2>
                    </div>
                    <div className="p-6 flex flex-col items-start relative text-gray-400" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                        <p>Optimalkan pemantauan, pemeliharaan, dan pelaporan aset perusahaan Anda dengan sistem manajemen aset yang disesuaikan khusus untuk bisnis Anda.</p>
                    </div>
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
                            <h3 className="text-xl font-semibold">Dashboard Komprehensif</h3>
                            <p className="text-gray-400 text-md">Kelola aset lebih efisien dengan pelacakan terpusat dan visualisasi data yang mudah dipahami. Pantau kondisi aset terkini secara real-time untuk mendukung keputusan cepat</p>
                        </div>
                    </div>

                    <div
                        className="hidden lg:block bg-center bg-cover bg-no-repeat rounded-md"
                        style={{ backgroundImage: "url('/storage/assets/background/Home/hero-1.png')" }}
                    ></div>

                    <div
                        className="absolute inset-0 bg-center bg-cover bg-no-repeat lg:hidden"
                        style={{ backgroundImage: "url('/storage/assets/background/Home/hero-1.png')" }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}