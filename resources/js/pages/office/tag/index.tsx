import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TwoColumnLayout from "@/components/form-layout";
import office from '@/routes/office';
import { type BreadcrumbItem } from '@/types';
import { Trash, Pencil } from 'lucide-react';
import ConfirmModal from "@/components/modal-confirm";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Tag', href: office.tag.index().url },
];

export default function TagPage() {
    const { tags } = usePage<{ tags: any }>().props;
    const items = tags?.data ?? [];

    // Form tambah tag
    const [form, setForm] = useState<{ name: string }>({ name: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.post(office.tag.store().url, form, {
            onSuccess: () => setForm({ name: "" }),
        });
    };

    // Delete modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTagId, setSelectedTagId] = useState<number | null>(null);

    const openDeleteModal = (id: number) => {
        setSelectedTagId(id);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedTagId) {
            router.delete(office.tag.destroy(selectedTagId).url);
            setIsModalOpen(false);
            setSelectedTagId(null);
        }
    };

    const selectedTag = items.find((i: any) => i.id === selectedTagId);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tag" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <TwoColumnLayout
                    left={
                        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                            <div>
                                <Label htmlFor="name">Tag Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="mt-2"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
                            >
                                Save Tag
                            </Button>
                        </form>
                    }
                    right={
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-center text-muted-foreground">
                                            No tags found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    items.map((tag: any, idx: number) => (
                                        <TableRow key={tag.id}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell>{tag.name}</TableCell>
                                            <TableCell className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                                    onClick={() => router.visit(office.tag.edit(tag.id).url)}
                                                >
                                                    <Pencil />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    className="bg-red-600 hover:bg-red-700 text-white"
                                                    onClick={() => openDeleteModal(tag.id)}
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
                title={selectedTag ? `Delete ${selectedTag.name}` : "Delete Tag"}
                message={selectedTag ? `Are you sure you want to delete this tag ${selectedTag.name}?` : "Are you sure?"}
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </AppLayout>
    );
}
