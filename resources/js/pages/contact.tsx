import { useState } from "react";
import GuestLayout from "@/layouts/guest-layout";
import { Plus, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactSelect from "react-select";
import { Link, Head, usePage, router } from "@inertiajs/react";
import contact from "@/routes/contact";

interface LeadsProps {
    users: { id: number; name: string }[];
}

const selectCustomStyles = {
    control: (base: any) => ({
        ...base,
        width: "100%",
        minHeight: "40px",
        borderRadius: "0.5rem",
        borderWidth: "1px",
        borderColor: "inherit",
        backgroundColor: "inherit",
        padding: "0.25rem",
        "@media (max-width: 768px)": {
            minHeight: "36px",
        },
    }),
    menu: (base: any) => ({
        ...base,
        borderRadius: "0.5rem",
        marginTop: 0,
        backgroundColor: document.documentElement.classList.contains("dark")
        ? "#1F2937" // dark mode menu background
        : "#FFFFFF", // light mode menu background
        zIndex: 50, // agar muncul di atas modal/overlay
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isFocused
        ? document.documentElement.classList.contains("dark")
            ? "#374151" // dark mode hover
            : "#F3F4F6" // light mode hover
        : document.documentElement.classList.contains("dark")
        ? "#1F2937" // dark mode normal
        : "#FFFFFF", // light mode normal
        color: document.documentElement.classList.contains("dark")
        ? "#F9FAFB"
        : "#111827",
        cursor: "pointer",
    }),
    multiValue: (base: any) => ({
        ...base,
        backgroundColor: document.documentElement.classList.contains("dark")
        ? "#4B5563"
        : "#D1D5DB",
    }),
    multiValueLabel: (base: any) => ({
        ...base,
        color: document.documentElement.classList.contains("dark")
        ? "#F9FAFB"
        : "#111827",
    }),
    multiValueRemove: (base: any) => ({
        ...base,
        color: document.documentElement.classList.contains("dark")
        ? "#F9FAFB"
        : "#111827",
        ":hover": {
        backgroundColor: document.documentElement.classList.contains("dark")
            ? "#EF4444"
            : "#DC2626",
        color: "#fff",
        },
    }),
};

const selectTheme = (baseTheme: any) => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
        ...baseTheme,
        colors: {
            ...baseTheme.colors,
            primary: isDark ? "#2563EB" : "#3B82F6",
            primary25: isDark ? "#1E40AF33" : "#BFDBFE",
            neutral0: "inherit",
            neutral80: isDark ? "#F9FAFB" : "#111827",
        },
    };
};

export default function About({ users }: LeadsProps) {
    // const { marketing } = usePage<{ marketing: any }>().props;

    const [form, setForm] = useState({
        product_id: "",
        marketing_id: "",
        fullname: "",
        phone: "",
        email: "",
        company: "",
        product: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(contact.store().url, form, {
            onSuccess: () => {
                setForm({
                    product_id: "",
                    marketing_id: "",
                    fullname: "",
                    phone: "",
                    email: "",
                    company: "",
                    product: "",
                    message: "",
                });
            },
        });
    };

    const userOptions = users.map(user => ({
        value: String(user.id),
        label: user.name,
    }));

    const productOptions = [
        { id: 1, value: 'Asset Management', label: 'Asset Management' },
        { id: 2, value: 'Inventory', label: 'Inventory' },
        { id: 3, value: 'E-Ticketing', label: 'E-Ticketing' },
        { id: 4, value: 'Custom Software', label: 'Custom Software' },
        { id: 5, value: 'IT Consultant', label: 'IT Consultant' },
        { id: 6, value: 'IT Support', label: 'IT Support' },
        { id: 7, value: 'Training & Certification', label: 'Training & Certification' },
        { id: 8, value: 'Digital Marketing', label: 'Digital Marketing' },
        { id: 9, value: 'Pariwisata', label: 'Pariwisata' },
        { id: 10, value: 'Manufacturing', label: 'Manufacturing' },
        { id: 11, value: 'Construciton', label: 'Construciton' },
        { id: 12, value: 'Real Estate', label: 'Real Estate' },
        { id: 13, value: 'Retail', label: 'Retail' },
        { id: 14, value: 'Logistik', label: 'Logistik' },
        { id: 15, value: 'Hotel', label: 'Hotel' },
        { id: 16, value: 'Pendidikan', label: 'Pendidikan' }
    ];
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
                            Hubungi Kami
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-md overflow-hidden">
                            <div className="items-center relative text-white flex flex-row">
                                <span className="inline-flex items-center justify-center rounded-full bg-gray-500 text-black mr-3 flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </span>
                                <span className="text-gray-400 font-medium text-sm sm:text-base md:text-lg">
                                    Contact Us
                                </span>
                            </div>
                            <div className="flex flex-col items-start relative text-white">
                                <h2 className="text-md md:text-lg font-semibold md:mb-4">Kami siap membantu transformasi digital bisnis Anda. Hubungi kami melalui form di bawah atau kontak langsung tim kami.</h2>
                            </div>
                            <div className="flex flex-col items-start relative text-gray-400">
                                <p>Yuk, mulai transformasi digital bisnis Anda bersama kami.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="container mx-auto px-6 py-6" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-2xl md:text-4xl font-medium mb-6">
                            Kami senang bisa mendengar dari Anda
                        </h3>
                        <p>Isi formulir di samping ini dan tim kami akan segera menghubungi Anda untuk berdiskusi lebih lanjut mengenai kebutuhan digital bisnis Anda.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="fullname" className="block text-sm font-medium mb-2">
                                Nama Lengkap<span className="text-red-500">*</span>
                            </Label>
                            <Input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="w-full px-4 py-2"
                                placeholder="cth. Mantrana"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email<span className="text-red-500">*</span>
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2"
                                placeholder="cth. info@mantrana.co.id"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="company" className="block text-sm font-medium mb-2">
                                Perusahaan<span className="text-red-500">*</span>
                            </Label>
                            <Input
                                type="text"
                                id="company"
                                name="company"
                                className="w-full px-4 py-2"
                                placeholder="cth. info@mantrana.co.id"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                                Nomor Telepon
                            </Label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                                className="w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="cth. 08123456789"
                                maxLength={15}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="message" className="block text-sm font-medium mb-2">
                                Pesan
                            </Label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-500 rounded-md"
                                placeholder="Tuliskan pesan Anda"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="marketing_id">Marketing</Label>
                            <ReactSelect
                                className="mt-2"
                                options={userOptions}
                                value={userOptions.find(opt => opt.value === form.marketing_id) || null}
                                onChange={selected =>
                                    setForm({ ...form, marketing_id: selected ? selected.value : "" })
                                }
                                placeholder="Pilih marketing..."
                                isClearable
                                styles={selectCustomStyles}
                                theme={selectTheme}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="product_id">Produk</Label>
                            <ReactSelect
                                className="mt-2"
                                options={productOptions}
                                value={productOptions.find(opt => opt.value === form.product_id) || null}
                                onChange={selected =>
                                    setForm({ ...form, product_id: selected ? selected.value : "" })
                                }
                                placeholder="Pilih produk..."
                                isClearable
                                styles={selectCustomStyles}
                                theme={selectTheme}
                                required
                            />
                        </div>
                        <Button className="text-sm md:text-md lg:text-lg font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white p-6">
                            Kirim Pesan
                        </Button>
                        <p className="text-sm md:text-md lg:text-lg text-gray-300 text-center">
                            Dengan mengirimkan, Anda menyetujui
                            <Link
                                href="#"
                                className="ml-4 font-semibold">Persyaratan dan Kebijakan Privasi
                            </Link>
                            </p>
                    </form>
                </div>
            </section>
        </GuestLayout>
    );
}