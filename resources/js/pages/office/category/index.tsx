import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from '@/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TwoColumnLayout from "@/components/form-layout";
import office from '@/routes/office';
import { Trash, Pencil } from 'lucide-react';
import ConfirmModal from "@/components/modal-confirm";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Category', href: office.category.index().url },
];

export default function CategoryPage() {
    const { categories } = usePage<{ categories: any }>().props;
    const items = categories?.data ?? [];

    const [form, setForm] = useState({
        name: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(office.category.store().url, form, {
            onSuccess: () => setForm({ name: "", description: "" }),
        });
    };

    // Delete modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCatId, setSelectedCatId] = useState<number | null>(null);

    const openDeleteModal = (id: number) => {
        setSelectedCatId(id);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedCatId) {
            router.delete(office.category.destroy(selectedCatId).url);
            setIsModalOpen(false);
            setSelectedCatId(null);
        }
    };

    const selectedCat = items.find((i: any) => i.id === selectedCatId);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Category" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <TwoColumnLayout
                    left={
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="mt-2"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    className="mt-2"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
                            >
                                Save Category
                            </Button>
                        </form>
                    }
                    right={
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Name</TableHead>
                                    {/* <TableHead>Description</TableHead> */}
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center text-muted-foreground">
                                            No categories found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    items.map((cat: any, idx: number) => (
                                        <TableRow key={cat.id}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell>{cat.name}</TableCell>
                                            {/* <TableCell>{cat.description}</TableCell> */}
                                            <TableCell className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                                    onClick={() => router.visit(office.category.edit(cat.id).url)}
                                                >
                                                    <Pencil />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    className="bg-red-600 hover:bg-red-700 text-white"
                                                    onClick={() => openDeleteModal(cat.id)}
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
                title={selectedCat ? `Delete ${selectedCat.name}` : "Delete Category"}
                message={selectedCat ? `Are you sure you want to delete this category ${selectedCat.name}?` : "Are you sure?"}
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </AppLayout>
    );
}
