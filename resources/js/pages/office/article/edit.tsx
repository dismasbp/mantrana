import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import office from "@/routes/office";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Alignment, Bold, Essentials, Heading, Indent, IndentBlock, Italic, Link, List, MediaEmbed, Paragraph, Table as CKTable, Undo, Font, FontColor, FontBackgroundColor, Image, ImageCaption, ImageResize, ImageStyle,ImageToolbar, LinkImage, ImageUpload, FileRepository, } from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import { CustomUploadAdapterPlugin } from "@/utils/UploadAdapter";
import ReactSelect from "react-select";

interface Article {
    id: number;
    title: string;
    category_id: number;
    fulltext?: string;
    photo?: string;
    photo_alt?: string;
    photo_caption?: string;
    meta_title?: string;
    meta_description?: string;
    code_snippet?: string;
    tags?: { id: number; name: string }[];
}

interface Category {
    id: number;
    name: string;
}

interface Tag {
    id: number;
    name: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Article", href: office.article.index().url },
    { title: "Edit", href: "#" },
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

export default function ArticleEdit() {
    const { article, categories, tags } = usePage<{ article: Article; categories: Category[]; tags: Tag[] }>().props;

    const [form, setForm] = useState({
        _method: 'put',
        title: article.title,
        category_id: String(article.category_id),
        fulltext: article.fulltext ?? "",
        photo: null as File | null,
        photo_alt: article.photo_alt ?? "",
        photo_caption: article.photo_caption ?? "",
        meta_title: article.meta_title ?? "",
        meta_description: article.meta_description ?? "",
        code_snippet: article.code_snippet ?? "",
        tags: article.tags?.map(t => t.id) ?? [],
    });

    const [previewOpen, setPreviewOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) setForm({ ...form, photo: e.target.files[0] });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(office.article.update(article.id).url, form, {
            forceFormData: true,
        });
    };

    const categoryOptions = categories.map(cat => ({ value: String(cat.id), label: cat.name }));
    const tagOptions = tags.map(tag => ({ value: tag.id, label: tag.name }));

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Article" />

            <div className="p-6 max-w-3xl space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" value={form.title} onChange={handleChange} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="meta_title">Meta Title</Label>
                        <Input id="meta_title" name="meta_title" value={form.meta_title} onChange={handleChange} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="category_id">Category</Label>
                        <ReactSelect
                            className="mt-2"
                            options={categoryOptions}
                            value={categoryOptions.find(opt => opt.value === form.category_id) || null}
                            onChange={selected => setForm({ ...form, category_id: selected ? selected.value : "" })}
                            placeholder="Select category..."
                            isClearable
                            styles={selectCustomStyles}
                            theme={selectTheme}
                        />
                    </div>

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
                            data={form.fulltext}
                            onChange={(_, editor) => setForm({ ...form, fulltext: editor.getData() })}
                        />
                    </div>

                    <div>
                        <Label htmlFor="meta_description">Meta Description</Label>
                        <Input id="meta_description" name="meta_description" value={form.meta_description} onChange={handleChange} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="photo">Photo</Label>
                        <Input id="photo" type="file" onChange={handlePhoto} className="mt-2" />
                        <Input id="photo_alt" name="photo_alt" placeholder="Alt text" value={form.photo_alt} onChange={handleChange} className="mt-2" />
                        <Input id="photo_caption" name="photo_caption" placeholder="Caption" value={form.photo_caption} onChange={handleChange} className="mt-2" />
                    </div>

                    <div>
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

                    <div>
                        <Label htmlFor="code_snippet">Code Snippet</Label>
                        <Input id="code_snippet" name="code_snippet" value={form.code_snippet} onChange={handleChange} className="mt-2" />
                    </div>

                    <div className="flex gap-2 mt-4">
                        <Button type="button" variant="secondary" onClick={() => setPreviewOpen(true)}>Preview</Button>
                        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Update Article</Button>
                    </div>
                </form>
            </div>

            {/* Preview Modal */}
            {previewOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/70 p-4">
                    <div className="bg-white dark:bg-gray-800 w-full max-w-5xl p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Preview Article</h2>
                    <h3 className="text-xl font-semibold text-center">{form.title}</h3>

                    <div className="mt-4 flex justify-center">
                        <img
                            src={form.photo
                                ? URL.createObjectURL(form.photo)
                                : article.photo
                                    ? `/storage/${article.photo}`
                                    : ""
                            }
                            alt={form.photo_alt || "Preview Photo"}
                            className="max-w-full rounded"
                        />
                    </div>

                    <p className="text-sm text-gray-500 mb-2">Category: {categories.find(c => String(c.id) === form.category_id)?.name || "-"}</p>
                    <p className="text-sm text-gray-500 mb-2">
                        Tags: {form.tags.length > 0
                        ? form.tags.map(tagId => tags.find(t => t.id === tagId)?.name).filter(Boolean).join(", ")
                        : "-"}
                    </p>

                    <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: form.fulltext }} />

                    <div className="mt-4 flex justify-end">
                        <Button variant="outline" onClick={() => setPreviewOpen(false)}>Close</Button>
                    </div>
                    </div>
                </div>
                )}
        </AppLayout>
    );
}