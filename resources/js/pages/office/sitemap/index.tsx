import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from '@/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import { Trash, Pencil } from "lucide-react";
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table"
import office from "@/routes/office";
import ConfirmModal from "@/components/modal-confirm";

interface SitemapForm {
    loc: string;
    changefreq: string;
    priority: number;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Sitemap', href: office.sitemap.index().url },
];

export default function SitemapIndex() {
    const { flash, entries } = usePage().props as any;
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<SitemapForm>({
        loc: "",
        changefreq: "weekly",
        priority:  0.8,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        // Validation URL (loc)
        const newErrors: Record<string, string> = {};
        if (!form.loc) newErrors.loc = "URL wajib diisi";
        // Validation Change Frequency
        const validFreq = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
        if (!validFreq.includes(form.changefreq)) {
            newErrors.changefreq = "Pilih salah satu: " + validFreq.join(", ");
        }
        // Validation Priority
        if (form.priority < 0.1 || form.priority > 1.0)
            newErrors.priority = "Priority harus antara 0.1 dan 1.0";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleGenerate = () => {
        setLoading(true);
        router.post(office.sitemap.generate().url, {}, {
            preserveScroll: true,
            onFinish: () => setLoading(false),
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        router.post("/office/sitemap", form as Record<string, any>, {
            preserveScroll: true,
            onSuccess: () => {
                setForm({ loc: "", changefreq: "weekly", priority: 0.8 });
                setErrors({});
            },
        });
    };

    // Delete modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEntryId, setSelectedEntryId] = useState<number | null>(null);

    const openDeleteModal = (id: number) => {
        setSelectedEntryId(id);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedEntryId) {
            router.delete(office.sitemap.destroy(selectedEntryId).url);
            setIsModalOpen(false);
            setSelectedEntryId(null);
        }
    };

    const selectedEntry = entries.find((i: any) => i.id === selectedEntryId);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Sitemap Management" />
            <div className="p-6 space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold">Sitemap Management</h2>
                    <p className="text-gray-500 mt-1">
                        Generate dan tambahkan URL baru ke sitemap.xml Anda.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Button onClick={handleGenerate} disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white">
                        {loading ? "Generating..." : "Generate Sitemap"}
                    </Button>
                    {flash?.success && <div className="text-green-600">{flash.success}</div>}
                </div>

                <Separator className="my-6" />

                {/* Form Tambah URL */}
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-3 gap-3">
                        <div>
                            <Input
                                className="w-full h-10 px-3 py-2 bg-gray-500 border rounded-md"
                                placeholder="URL (loc)"
                                value={form.loc}
                                onChange={(e) =>
                                    setForm({ ...form, loc: e.target.value })
                                }
                            />
                            {errors.loc && (
                                <p className="text-red-500 text-xs mt-1">{errors.loc}</p>
                            )}
                        </div>

                        <div>
                            <select
                                className="border rounded-md w-full p-2 bg-gray-500"
                                value={form.changefreq}
                                onChange={(e) =>
                                    setForm({ ...form, changefreq: e.target.value })
                                }
                            >
                                {[
                                    "always",
                                    "hourly",
                                    "daily",
                                    "weekly",
                                    "monthly",
                                    "yearly",
                                    "never",
                                ].map((freq) => (
                                    <option key={freq} value={freq}>
                                        {freq}
                                    </option>
                                ))}
                            </select>
                            {errors.changefreq && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.changefreq}
                                </p>
                            )}
                        </div>

                        <div>
                            <Input
                                className="w-full h-10 px-3 py-2 bg-gray-500 border rounded-md"
                                placeholder="Priority (0.1 - 1.0)"
                                type="number"
                                step="0.1"
                                min="0.1"
                                max="1.0"
                                value={form.priority}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        priority: parseFloat(e.target.value) || 0.8,
                                    })
                                }
                            />
                            {errors.priority && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.priority}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
                    >
                        Save Sitemap
                    </Button>
                </form>

                {/* Daftar URL */}
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>URL (loc)</TableHead>
                                <TableHead>Change Frequency</TableHead>
                                <TableHead>Priority</TableHead>
                                <TableHead>Last Modified</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {entries.length ? (
                                entries.map((entry: any) => (
                                    <TableRow key={entry.id}>
                                        <TableCell className="truncate max-w-[250px]" title={entry.loc}>
                                            {entry.loc}
                                        </TableCell>
                                        <TableCell>{entry.changefreq}</TableCell>
                                        <TableCell>{entry.priority}</TableCell>
                                        <TableCell>{entry.lastmod}</TableCell>
                                        <TableCell className="flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                                onClick={() =>
                                                    router.visit(office.sitemap.edit(entry.id).url)
                                                }
                                            >
                                                <Pencil />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="destructive"
                                                className="bg-red-600 hover:bg-red-700 text-white"
                                                onClick={() => openDeleteModal(entry.id)}
                                            >
                                                <Trash />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={4}
                                        className="text-center text-muted-foreground py-3"
                                    >
                                        Belum ada URL.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
            
            {/* Confirm Delete Modal */}
            <ConfirmModal
                isOpen={isModalOpen}
                title={selectedEntry ? `Delete ${selectedEntry}` : "Delete Sitemap"}
                message={selectedEntry ? `Are you sure you want to delete this sitemap ${selectedEntry.loc}?` : "Are you sure?"}
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </AppLayout>
    );
}
