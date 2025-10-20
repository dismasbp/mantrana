import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCell, TableHead,
    TableHeader, TableRow,
} from "@/components/ui/table";
import office from "@/routes/office";
import { Trash, Pencil } from 'lucide-react';
import ConfirmModal from "@/components/modal-confirm";

interface ArticleItem {
    id: number;
    title: string;
    category_id: string;
    category_name: string | null;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Article", href: office.article.index().url },
];

export default function Article() {
    const { articles } = usePage<{ articles: any }>().props;
    const items: ArticleItem[] = articles?.data ?? [];

    // Delete modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
    const selectedArticle = items.find(a => a.id === selectedArticleId);

    const openDeleteModal = (id: number) => {
        setSelectedArticleId(id);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedArticleId) {
            router.delete(office.article.destroy(selectedArticleId).url, {
                onSuccess: () => {
                    // setItems(prev => prev.filter(a => a.id !== selectedArticleId));
                    setIsModalOpen(false);
                    setSelectedArticleId(null);
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>Article</title>
                <meta name="description" content="Manage articles" />
            </Head>

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium">Article List</h3>
                    </div>
                    <div>
                        <Button
                            onClick={() => router.visit(office.article.create().url)}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Create New
                        </Button>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Photo</TableHead>
                            <TableHead>Meta Title</TableHead>
                            <TableHead>Meta Description</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Code Snippet</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground">
                                    No articles found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            items.map((article: any, idx: number) => (
                                <TableRow key={article.id}>
                                    <TableCell>{idx + 1}</TableCell>
                                    <TableCell>{article.title}</TableCell>
                                    <TableCell>{article.category.name || "-"}</TableCell>
                                    <TableCell>
                                        <div>
                                            <input type="checkbox" id={`lightbox-${article.id}`} className="hidden peer" />
                                            <label htmlFor={`lightbox-${article.id}`} className="cursor-pointer inline-block">
                                                <img
                                                    src={article.photo ? `/storage/${article.photo}` : '/placeholder.png'}
                                                    alt={article.photo_alt ?? article.title}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                            </label>

                                            {/* Lightbox overlay (uses Tailwind peer utilities) */}
                                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 opacity-0 pointer-events-none transition-opacity duration-200 peer-checked:opacity-100 peer-checked:pointer-events-auto">
                                                {/* Clicking this label closes the lightbox */}
                                                <label htmlFor={`lightbox-${article.id}`} className="absolute inset-0 cursor-default" />
                                                <img
                                                    src={article.photo ? `/storage/${article.photo}` : '/placeholder.png'}
                                                    alt={article.photo_alt ?? article.title}
                                                    className="max-h-[80vh] max-w-[90vw] object-contain rounded shadow-lg z-10"
                                                />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{article.meta_title}</TableCell>
                                    <TableCell>{article.meta_description}</TableCell>
                                    <TableCell>{article.slug}</TableCell>
                                    <TableCell><pre className="max-h-24 overflow-auto">{article.code_snippet}</pre></TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                            onClick={() => router.visit(office.article.edit(article.id).url)}
                                        >
                                            <Pencil />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="destructive"
                                            className="bg-red-600 hover:bg-red-700 text-white"
                                            onClick={() => openDeleteModal(article.id)}
                                        >
                                            <Trash />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            
            {/* Confirm Delete Modal */}
            <ConfirmModal
                isOpen={isModalOpen}
                title={selectedArticle ? `Delete "${selectedArticle.title}"` : "Delete Article"}
                message={selectedArticle ? `Are you sure you want to delete this article "${selectedArticle.title}"?` : "Are you sure?"}
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </AppLayout>
    );
}