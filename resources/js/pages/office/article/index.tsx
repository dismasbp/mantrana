import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Table, TableBody, TableCell, TableHead,
    TableHeader, TableRow,
} from "@/components/ui/table";
import TwoColumnLayout from "@/components/form-layout";
import office from "@/routes/office";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
    ClassicEditor, Alignment, Bold, Essentials, Heading, Indent, IndentBlock, Italic,
    Link, List, MediaEmbed, Paragraph, Table as CKTable, Undo,
    Font, FontColor, FontBackgroundColor, Image, ImageCaption, ImageResize, ImageStyle,
	ImageToolbar, LinkImage, ImageUpload, FileRepository,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import { CustomUploadAdapterPlugin } from "@/utils/UploadAdapter";
import ReactSelect from "react-select";
import { Trash, Pencil } from 'lucide-react';
import ConfirmModal from "@/components/modal-confirm";

interface ArticleProps {
    categories: { id: number; name: string }[];
    tags: { id: number; name: string }[];
}

interface ArticleItem {
    id: number;
    title: string;
    category_id: string;
    category_name: string | null;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Article", href: office.article.index().url },
];

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

export default function Article({ categories, tags }: ArticleProps) {
    const { articles } = usePage<{ articles: any }>().props;
    // const [items, setItems] = useState<ArticleItem[]>(articles?.data ?? []);
    const items: ArticleItem[] = articles?.data ?? [];

    const [form, setForm] = useState({
        category_id: "",
        title: "",
        fulltext: "",
        photo: null as File | null,
        photo_alt: "",
        photo_caption: "",
        meta_title: "",
        meta_description: "",
        code_snippet: "",
        tags: [] as number[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0])
            setForm({ ...form, photo: e.target.files[0] });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(office.article.store().url, form, {
            onSuccess: () => {
                setForm({
                    category_id: "",
                    title: "",
                    fulltext: "",
                    photo: null,
                    photo_alt: "",
                    photo_caption: "",
                    meta_title: "",
                    meta_description: "",
                    code_snippet: "",
                    tags: [],
                });
            },
        });
    };

    const categoryOptions = categories.map(cat => ({
        value: String(cat.id),
        label: cat.name,
    }));

    const tagOptions = tags.map(tag => ({
        value: tag.id,
        label: tag.name,
    }));

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

    // Preview
    const [previewOpen, setPreviewOpen] = useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>Article</title>
                <meta name="description" content="Manage articles" />
            </Head>

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <TwoColumnLayout
                    left={
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Title input */}
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    className="mt-2"
                                />
                            </div>

                            {/* Meta Title Input */}
                            <div>
                                <Label htmlFor="meta_title">Meta Title</Label>
                                <Input
                                    id="meta_title"
                                    name="meta_title"
                                    value={form.meta_title}
                                    onChange={handleChange}
                                    className="mt-2"
                                />
                            </div>

                            {/* Category select */}
                            <div>
                                <Label htmlFor="category_id">Category</Label>
                                <ReactSelect
                                    className="mt-2"
                                    options={categoryOptions}
                                    value={categoryOptions.find(opt => opt.value === form.category_id) || null}
                                    onChange={selected =>
                                        setForm({ ...form, category_id: selected ? selected.value : "" })
                                    }
                                    placeholder="Select category..."
                                    isClearable
                                    styles={selectCustomStyles}
                                    theme={selectTheme}
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <label className="block text-sm font-medium mt-4">Content</label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={{
                                        licenseKey: "GPL",
                                        extraPlugins: [CustomUploadAdapterPlugin],
                                        toolbar: ["undo","redo","|","heading","|","bold","italic","|","fontSize", "fontFamily", "fontColor", "fontBackgroundColor", "|", "alignment:left", "alignment:right", "alignment:center", "alignment:justify", "|", "insertImage", "|","link","insertTable","mediaEmbed","|","bulletedList","numberedList","indent","outdent"],
                                        plugins: [ Alignment, Bold, Essentials, Heading, Indent, IndentBlock, Italic, Link, List, MediaEmbed, Paragraph, CKTable, Undo, Font, FontColor, FontBackgroundColor, Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize, LinkImage, ImageUpload, FileRepository],
                                        image: {
                                            toolbar: [
                                                "imageTextAlternative",
                                                "toggleImageCaption",
                                                "|",
                                                "resizeImage:25",
                                                "resizeImage:50",
                                                "resizeImage:75",
                                                "resizeImage:original",
                                                "|",
                                                "imageStyle:inline",
                                                "imageStyle:block",
                                                "imageStyle:side"
                                            ],
                                            styles: {
                                                options: [
                                                    "inline",
                                                    "block",
                                                    "side"
                                                ]
                                            }
                                        }
                                    }}
                                    onChange={(_, editor) =>
                                        setForm({ ...form, fulltext: editor.getData() })
                                    }
                                    data={form.fulltext}
                                />
                            </div>

                            {/* Meta Description Input */}
                            <div>
                                <Label htmlFor="meta_description">Meta Description</Label>
                                <Input
                                    id="meta_description"
                                    name="meta_description"
                                    value={form.meta_description}
                                    onChange={handleChange}
                                    className="mt-2"
                                />
                            </div>

                            {/* Photo */}
                            <div>
                                <Label htmlFor="photo">Photo</Label>
                                <Input
                                    id="photo"
                                    type="file"
                                    onChange={handlePhoto}
                                    className="mt-2"
                                />
                                <Input
                                    id="photo_alt"
                                    name="photo_alt"
                                    placeholder="Alt text"
                                    value={form.photo_alt}
                                    onChange={handleChange}
                                    className="mt-2"
                                />
                                <Input
                                    id="photo_caption"
                                    name="photo_caption"
                                    placeholder="Caption"
                                    value={form.photo_caption}
                                    onChange={handleChange}
                                    className="mt-2"
                                />
                            </div>

                            {/* Tags */}
                            <div>
                                <Label htmlFor="tag">Tags</Label>
                                <ReactSelect
                                    className="mt-2"
                                    options={tagOptions}
                                    value={tagOptions.filter(opt => form.tags.includes(opt.value))}
                                    onChange={selected => {
                                        const selectedIds = selected ? selected.map((s: any) => s.value) : [];
                                        setForm({ ...form, tags: selectedIds });
                                    }}
                                    placeholder="Select tags..."
                                    isMulti
                                    styles={selectCustomStyles}
                                    theme={selectTheme}
                                />
                            </div>

                            {/* Code Snippet */}
                            <div>
                                <Label htmlFor="code_snippet">Code Snippet</Label>
                                <Input
                                    id="code_snippet"
                                    name="code_snippet"
                                    value={form.code_snippet}
                                    onChange={handleChange}
                                    className="mt-2"
                                />
                            </div>
                            
                            <div className="flex gap-2 mt-4">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={() => setPreviewOpen(true)}
                                >
                                    Preview
                                </Button>

                                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                                    Save Article
                                </Button>
                            </div>
                        </form>
                        
                    }

                    right={
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Category</TableHead>
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
                    }
                />
            </div>
            
            {/* Confirm Delete Modal */}
            <ConfirmModal
                isOpen={isModalOpen}
                title={selectedArticle ? `Delete "${selectedArticle.title}"` : "Delete Article"}
                message={selectedArticle ? `Are you sure you want to delete this article "${selectedArticle.title}"?` : "Are you sure?"}
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsModalOpen(false)}
            />

            {/* Preview Modal */}
            {previewOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[90%] max-w-2xl overflow-auto">
                        <h2 className="text-xl font-bold mb-4">Preview Article</h2>

                        <h3 className="text-lg font-semibold text-center">{form.title}</h3>

                        {form.photo && (
                            <div className="mt-4">
                                <img
                                    src={URL.createObjectURL(form.photo)}
                                    alt={form.photo_alt || "Preview Photo"}
                                    className="max-w-full rounded"
                                />
                            </div>
                        )}
                        <p className="text-sm text-gray-500 mb-2">Category: {categories.find(c => String(c.id) === form.category_id)?.name || "-"}</p>
                        <p className="text-sm text-gray-500 mb-2">
                            Tags: {form.tags.length > 0
                                ? form.tags
                                    .map(tagId => tags.find(t => t.id === tagId)?.name)
                                    .filter(Boolean)
                                    .join(", ")
                                : "-"}
                        </p>

                        <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: form.fulltext }} />

                        <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setPreviewOpen(false)}>Close</Button>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}