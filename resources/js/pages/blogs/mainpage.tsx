import React from "react";
import GuestLayout from "@/layouts/guest-layout";
import { Plus, ArrowUpRight } from 'lucide-react';
// import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import "swiper/css";
import "swiper/css/grid";

interface Article {
    id: number;
    title: string;
    slug: string;
    photo: string | null;
    excerpt: string;
    created_at: string;
}

interface BlogProps {
    articles: Article[];
    title?: string;
    description?: string;
}

export default function BlogMainPage({ articles }: BlogProps) {
    if (!articles || articles.length === 0) {
        return (
            <GuestLayout>
                <p className="text-center text-gray-400">No articles found.</p>
            </GuestLayout>
        );
    }

    const featured  = articles[0];
    const rightTop  = articles.slice(1, 3);
    const bottom    = articles.slice(3, 7);
    return (
        <GuestLayout>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16"style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="relative w-full min-h-[400px] md:min-h-[450px] rounded-2xl overflow-hidden text-white px-10 py-4 flex flex-col justify-end">
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#02e2ff,_transparent_40%),radial-gradient(circle_at_top_right,_#2f59ff,_transparent_35%),radial-gradient(circle_at_bottom_right,_#7b2ff7,_transparent_45%)]" />

                    {/* Noise + dark overlay */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/storage/assets/noise.png')]" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        {/* Title + Breadcrumb */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 text-left drop-shadow-lg w-ful">
                            Blogs
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-md overflow-hidden">
                            <div className="items-start relative text-white flex flex-row" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-500 text-black mr-3 flex-shrink-0">
                                    <Plus size={20} />
                                </span>
                                <span className="text-gray-400 font-medium" style={{ fontFamily: 'Helvetica, sans-serif' }}>Blogs</span>
                            </div>
                            <div className="flex flex-col items-start relative text-white" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <h2 className="text-2xl md:text-xl font-semibold mb-4">Wawasan mendalam seputar transformasi digital, tren teknologi, dan inovasi bisnis yang relevan dengan perjalanan transformasi Anda.</h2>
                            </div>
                            <div className="flex flex-col items-start relative text-gray-400" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <p>Wawasan & Artikel Mantrana.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Software Solutions Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* ✅ Featured Card */}
                    <Link
                        href={`/blogs/${featured.slug}`}
                        className="md:col-span-2 h-[380px] rounded-xl overflow-hidden group relative flex items-end p-6"
                        style={{ backgroundImage: `url(/storage/${featured.photo})` }}
                    >
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all"></div>
                        <div className="relative z-10">
                            <p className="text-xs text-gray-300 mb-1">
                                {new Date(featured.created_at).toLocaleDateString()}
                            </p>
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400">
                                {featured.title}
                            </h2>
                            <p className="text-gray-300 line-clamp-2 mb-3">{featured.excerpt}</p>

                            <span className="inline-flex items-center gap-1 text-sm text-blue-400">
                                Baca Selengkapnya <ArrowUpRight size={16} />
                            </span>
                        </div>
                    </Link>

                    {/* ✅ Right top card */}
                    {rightTop.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blogs/${article.slug}`}
                            className="h-[380px] rounded-xl overflow-hidden group relative flex items-end p-6"
                            style={{ backgroundImage: `url(/storage/${article.photo})` }}
                        >
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all"></div>
                            <div className="relative z-10">
                                <p className="text-xs text-gray-300 mb-1">
                                    {new Date(article.created_at).toLocaleDateString()}
                                </p>
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                                    {article.title}
                                </h2>

                                <span className="inline-flex items-center gap-1 text-sm text-blue-400">
                                    Detail <ArrowUpRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}

                    {/* ✅ Bottom 4 small cards */}
                    {bottom.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blogs/${article.slug}`}
                            className="h-[260px] rounded-xl overflow-hidden group relative flex items-end p-5"
                            style={{ backgroundImage: `url(/storage/${article.photo})` }}
                        >
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all"></div>
                            <h3 className="relative z-10 text-lg font-semibold text-white group-hover:text-blue-400 line-clamp-2">
                                {article.title}
                            </h3>
                        </Link>
                    ))}

                </div>
            </section>
        </GuestLayout>
    );
}