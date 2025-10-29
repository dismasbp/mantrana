import { usePage } from '@inertiajs/react';
import { PageProps as InertiaPageProps } from '@inertiajs/core';
import GuestLayout from "@/layouts/guest-layout";
import { Plus, Calendar } from 'lucide-react';
import { router, Link } from "@inertiajs/react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

interface Article {
    id: number;
    title: string;
    slug: string;
    photo: string | null;
    fulltext: string;
    created_at: string;
}

interface Tag {
    id: number;
    name: string;
    slug: string;
}

interface Category {
    id: number;
    name: string;
    slug: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationMeta {
    current_page: number;
    from: number | null;
    last_page: number;
    total: number;
    path: string;
    per_page: number;
    to: number | null;
}

interface PaginatedArticles {
    data: Article[];
    links: PaginationLink[];
    meta: PaginationMeta;
}

interface BlogProps {
    featured: Article[];
    articles: PaginatedArticles;
    title?: string;
    description?: string;
}

interface AppPageProps extends InertiaPageProps {
    headerTitle?: string;
    headerBadge?: string;
    tag?: Tag | null;
    category?: Category | null;
}

export default function BlogMainPage({ featured, articles }: BlogProps) {
    const { headerTitle = 'Blogs', headerBadge = 'Blogs', tag, category } = usePage<AppPageProps>().props;
    
    if (!featured || featured.length === 0) {
        return (
            <GuestLayout>
                <section className="container mx-auto px-6 py-16"style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    <p className="text-center text-gray-400">Blog tidak ditemukan.</p>
                </section>
            </GuestLayout>
        );
    }
    if (!articles.data || articles.data.length === 0) {
        return (
            <GuestLayout>
                <section className="container mx-auto px-6 py-16"style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    <p className="text-center text-gray-400">Blog tidak ditemukan.</p>
                </section>
            </GuestLayout>
        );
    }

    const first         = featured[0];
    const nextArticle   = featured.slice(1, 7);
    const blogs         = articles.data;
    return (
        <GuestLayout>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="relative w-full min-h-[400px] md:min-h-[450px] rounded-2xl overflow-hidden text-white px-10 py-4 flex flex-col justify-end">
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#02e2ff,_transparent_40%),radial-gradient(circle_at_top_right,_#2f59ff,_transparent_35%),radial-gradient(circle_at_bottom_right,_#7b2ff7,_transparent_45%)]" />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-end md:justify-between h-full">
                        <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold mb-3 md:mb-10 text-left drop-shadow-lg w-full">
                            {headerTitle}
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-md overflow-hidden">
                            <div className="items-center relative text-white flex flex-row" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <span className="inline-flex items-center justify-center rounded-full bg-gray-500 text-black mr-3 flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </span>
                                <span className="text-gray-400 font-medium text-sm sm:text-base md:text-lg">
                                    {headerBadge}
                                </span>
                            </div>
                            <div className="flex flex-col items-start relative text-white" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <h2 className="text-md md:text-lg font-semibold md:mb-4">Wawasan mendalam seputar transformasi digital, tren teknologi, dan inovasi bisnis yang relevan dengan perjalanan transformasi Anda.</h2>
                            </div>
                            <div className="flex flex-col items-start relative text-gray-400" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                                <p>Wawasan & Artikel Mantrana.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Blog Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <Link
                        href={`/blog/z/${first.slug}`}
                        className="md:col-span-2 h-[420px] rounded-2xl overflow-hidden relative group"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:blur-xs"
                            style={{ backgroundImage: `url(/storage/${first.photo})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/0"></div>
                        <div className="absolute bottom-0 left-0 p-6 space-y-2 z-10">
                            <p className="text-sm text-white flex items-center gap-2 mb-6">
                                <Calendar size={16}/>
                                {new Date(first.created_at).toLocaleDateString('id-ID', {
                                    day: '2-digit', month: 'long', year: 'numeric'
                                })}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white line-clamp-2">
                                {first.title}
                            </h2>
                            <p className="text-white/70 line-clamp-2 text-sm" dangerouslySetInnerHTML={{ __html: first.fulltext }}></p>
                        </div>
                    </Link>
                    {nextArticle.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/z/${article.slug}`}
                            className="rounded-2xl overflow-hidden bg-[#0C0E12] border border-white/5 group shadow-lg flex flex-col"
                        >
                            <div className="h-48 overflow-hidden flex-1">
                                <img
                                    src={`/storage/${article.photo}`}
                                    alt={article.title}
                                    className="w-full h-full rounded-2xl object-cover"
                                />
                            </div>
                            <div className="p-5 space-y-3 mt-auto">
                                <p className="text-xs text-white/60 flex items-center gap-2 transition-transform duration-300 group-hover:translate-y-3">
                                    <Calendar size={14} />
                                    {new Date(article.created_at).toLocaleDateString('id-ID', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </p>
                                <h3 className="text-lg font-semibold text-white line-clamp-2 transition-transform duration-300 group-hover:translate-y-3">
                                    {article.title}
                                </h3>
                                <p
                                    className="text-white/60 text-sm line-clamp-2"
                                    dangerouslySetInnerHTML={{
                                        __html: article.fulltext.replace(/<img[^>]*>/g, ''),
                                    }}
                                ></p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Blog Section */}
            <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                <div className="flex justify-between items-center mb-8 flex-wrap md:flex-nowrap gap-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                        {tag
                            ? `Blog tekait ${tag.name}`
                            : category
                            ? category.name
                            : 'Semua Blog'}
                    </h2>

                    <Select
                        onValueChange={(value) => {
                            let path = '/blog';
                            if (tag) path = `/blog/tags/${tag.slug}`;
                            else if (category) path = `/blog/cat/${category.slug}`;

                            router.get(path, { sort: value }, { preserveScroll: true });
                        }}
                        defaultValue={new URLSearchParams(window.location.search).get('sort') ?? 'latest'}
                    >
                        <SelectTrigger className="w-[130px] bg-[#0C0E12] border border-white/10 text-white text-sm rounded-lg">
                            <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#111316] text-white border border-white/10">
                            <SelectItem value="latest">Terbaru</SelectItem>
                            <SelectItem value="oldest">Terlama</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.id}
                            href={`/blog/z/${blog.slug}`}
                            className="rounded-2xl overflow-hidden bg-[#0C0E12] border border-white/5 group shadow-lg flex flex-col"
                        >
                            <div className="h-48 overflow-hidden flex-1">
                                <img
                                    src={`/storage/${blog.photo}`}
                                    alt={blog.title}
                                    className="w-full h-full rounded-2xl object-cover"
                                />
                            </div>
                            <div className="p-5 space-y-3 mt-auto">
                                <p className="text-xs text-white/60 flex items-center gap-2 transition-transform duration-300 group-hover:translate-y-3">
                                    <Calendar size={14} />
                                    {new Date(blog.created_at).toLocaleDateString('id-ID', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </p>
                                <h3 className="text-lg font-semibold text-white line-clamp-2 transition-transform duration-300 group-hover:translate-y-3">
                                    {blog.title}
                                </h3>
                                <p
                                    className="text-white/60 text-sm line-clamp-2"
                                    dangerouslySetInnerHTML={{
                                        __html: blog.fulltext.replace(/<img[^>]*>/g, ''),
                                    }}
                                ></p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </GuestLayout>
    );
}