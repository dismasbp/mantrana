import { useState } from "react";
import GuestLayout from "@/layouts/guest-layout";
import { Home, Calendar, ArrowUpRight } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaFacebook, FaLink } from "react-icons/fa6";
import { Separator } from '@/components/ui/separator';
import blog from '@/routes/blog';
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

interface Tag {
    id: number;
    name: string;
    slug: string;
}

interface Category {
    name: string;
    slug: string;
}

interface Article {
    id: number;
    title: string;
    slug: string;
    photo: string | null;
    fulltext: string;
    created_at: string;
    category?: Category;
    tags?: Tag[];
}

interface BlogDetailProps {
    article: Article;
    articles: Article[]; // array karena digunakan map
    previous?: Article | null;
    next?: Article | null;
    title?: string;
    description?: string;
}

export default function BlogDetailPage({ article, articles, previous, next }: BlogDetailProps) {
    const breadcrumbs = [
        { title: <Home size={16}/>, href: "/" },
        { title: "Blogs", href: "/blog" },
        ...(article.category
            ? [{ title: article.category.name, href: `/blog/cat/${article.category.slug}` }]
            : []),
        { title: article.title, href: blog.detail.url(article.slug) },
    ];

    const [copied, setCopied] = useState(false);
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const shareToFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, "_blank", "noopener,noreferrer");
    };

    const shareToX = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(article.title ?? "")}`, "_blank", "noopener,noreferrer");
    };

    const shareToInstagram = () => {
        if (navigator.share) {
            navigator.share({ title: article.title, url: currentUrl }).catch(() => {});
            return;
        }
        window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
        } catch {
            const el = document.createElement("textarea");
            el.value = currentUrl;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopied(true);
        }
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <GuestLayout>
            {/* Hero */}
            <section className="container mx-auto px-6 py-6" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="relative w-full min-h-[450px] md:min-h-[600px] rounded-2xl overflow-hidden px-10 py-4 bg-cover bg-center" style={{ backgroundImage: `url(/storage/${article.photo})` }}></div>
            </section>

            {/* Blog Detail */}
            <section className="container mx-auto px-6 py-6" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="py-6">
                    <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1.5fr] gap-6">
                        {/* Sidebar */}
                        <div className="order-last md:order-first">
                            <div className="my-6">
                                <p className="text-gray-400 text-md">Tanggal</p>
                                <h3 className="text-lg font-semibold mb-4">{new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</h3>
                            </div>
                            <div className="my-6">
                                <p className="text-gray-400 text-md">Kategori</p>
                                <h3 className="text-lg font-semibold mb-4">{article.category?.name ?? "-"}</h3>
                            </div>

                            <div className="my-6">
                                <p className="text-gray-400 text-md">Share</p>
                                <div className="flex gap-3 mt-4">
                                    <Button onClick={shareToFacebook} className="p-3 rounded-md text-[#85888E] bg-[#0C0E12] hover:bg-white/20"><FaFacebook /></Button>
                                    <Button onClick={shareToInstagram} className="p-3 rounded-md text-[#85888E] bg-[#0C0E12] hover:bg-white/20"><FaInstagram /></Button>
                                    <Button onClick={shareToX} className="p-3 rounded-md text-[#85888E] bg-[#0C0E12] hover:bg-white/20"><FaXTwitter /></Button>
                                    <Button onClick={copyLink} className="p-3 rounded-md text-[#85888E] bg-[#0C0E12] hover:bg-white/20"><FaLink /></Button>
                                </div>
                                {copied && <p className="text-sm text-green-500 mt-2">Link copied to clipboard</p>}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-justify">
                            <h1 className="text-4xl font-semibold mb-6">{article.title}</h1>
                            <div className="prose prose-invert max-w-none mb-10" dangerouslySetInnerHTML={{ __html: article.fulltext }}></div>
                            <Separator className="my-6" />
                            <div className="my-10">
                                <h4 className="text-md md:text-lg text-gray-300 mb-4">Tags</h4>
                                <div className="flex flex-wrap gap-3">
                                    {article.tags?.map(tag => (
                                        <Link key={tag.id} href={`../tags/${tag.slug}`} className="text-sm text-[#559AFF] bg-[#00173C] px-4 py-2 rounded-full border border-white/10 hover:border-[#559AFF]">
                                            #{tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {previous && (
                                    <Link href={`/blog/z/${previous.slug}`} className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden group shadow-lg">
                                        <img src={`/storage/${previous.photo}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70"></div>
                                        <p className="absolute bottom-14 left-4 text-xs md:text-sm text-white/90">Sebelumnya</p>
                                        <h3 className="absolute bottom-3 left-4 right-6 text-white font-semibold text-sm md:text-base line-clamp-2">{previous.title}</h3>
                                    </Link>
                                )}
                                {next && (
                                    <Link href={`/blog/z/${next.slug}`} className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden group shadow-lg text-right">
                                        <img src={`/storage/${next.photo}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70"></div>
                                        <p className="absolute bottom-14 right-4 text-xs md:text-sm text-white/90">Selanjutnya</p>
                                        <h3 className="absolute bottom-3 left-6 right-4 text-white font-semibold text-sm md:text-base line-clamp-2">{next.title}</h3>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Blogs */}
            <section className="container mx-auto px-6 py-6">
                <div className="flex justify-between items-center mb-8 flex-wrap md:flex-nowrap gap-4">
                    <h2 className="text-xl md:text-2xl text-white italic">Berita Lainnya</h2>
                    <Link href="/blog" className="text-sm md:text-base text-white hover:underline">Lihat semuanya</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {articles.map(blog => (
                        <Link key={blog.id} href={`/blog/z/${blog.slug}`} className="rounded-2xl overflow-hidden bg-[#0C0E12] border border-white/5 group shadow-lg flex flex-col">
                            <div className="h-48 overflow-hidden flex-1">
                                <img src={`/storage/${blog.photo}`} alt={blog.title} className="w-full h-full rounded-2xl object-cover" />
                            </div>
                            <div className="p-5 space-y-3 mt-auto">
                                <p className="text-xs text-white/60 flex items-center gap-2">
                                    <Calendar size={14} />
                                    {new Date(blog.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
                                </p>
                                <h3 className="text-lg font-semibold text-white line-clamp-2">{blog.title}</h3>
                                <p className="text-white/70 line-clamp-2 text-sm" dangerouslySetInnerHTML={{ __html: blog.fulltext }}></p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="container mx-auto px-6 py-6">
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
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-4 md:px-12">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-lg mb-16 leading-snug">
                            Ingin tahu sejauh mana kesiapan digital bisnis Anda?
                        </h3>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 md:py-6 text-lg md:text-xl inline-flex items-center gap-2">
                            Hubungi Kami <ArrowUpRight size={20} />
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}