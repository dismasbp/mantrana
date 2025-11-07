import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TwoColumnLayout from "@/components/form-layout";
import office from "@/routes/office";
import { type BreadcrumbItem } from "@/types";
import { Trash, Pencil } from "lucide-react";
import ConfirmModal from "@/components/modal-confirm";

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Client", href: office.client.index().url },
];

export default function ClientPage() {
    const { clients } = usePage<{ clients: any }>().props;
    const items = clients?.data ?? [];
    const [form, setForm] = useState<{ name: string; status: string }>({
        name: "",
        status: "0",
    });
    const [image, setImage] = useState<File | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);

    const MAX_IMAGE_SIZE = 1 * 1024 * 1024;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > MAX_IMAGE_SIZE) {
                setImage(null);
                setImageError("Ukuran file maksimal 1 MB.");
                try {
                    (e.target as HTMLInputElement).value = "";
                } catch (_) {}
                return;
            }
            setImage(file);
            setImageError(null);
        }
    };

    const handleStatusChange = (value: string) => {
        setForm({ ...form, status: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image && image.size > MAX_IMAGE_SIZE) {
            setImageError("Image must be under 1 MB.");
            return;
        }

        const data = new FormData();
        data.append("name", form.name);
        data.append("status", form.status);
        if (image) data.append("image", image);

        router.post(office.client.store().url, data, {
            onSuccess: () => {
                setForm({ name: "", status: "0" });
                setImage(null);
                setImageError(null);
            },
        });
    };

    // Delete modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClientId, setSelectedClientId] = useState<number | null>(null);

    const openDeleteModal = (id: number) => {
        setSelectedClientId(id);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedClientId) {
            router.delete(office.client.destroy(selectedClientId).url);
            setIsModalOpen(false);
            setSelectedClientId(null);
        }
    };

    const selectedClient = items.find((i: any) => i.id === selectedClientId);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Client" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <TwoColumnLayout
                    left={
                        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                            <div>
                                <Label htmlFor="name">Client Name</Label>
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
                                <Label htmlFor="image">Image</Label>
                                <p className="text-sm text-gray-400">(Maks. 1 MB)</p>
                                <Input
                                    id="image"
                                    type="file"
                                    onChange={handleImage}
                                    className="mt-2"
                                    accept="image/*"
                                />
                                {imageError && <p className="text-sm text-red-600 mt-1">{imageError}</p>}
                            </div>

                            <div>
                                <Label htmlFor="status">Status</Label>
                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        type="button"
                                        onClick={() => handleStatusChange(form.status === "1" ? "0" : "1")}
                                        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                                            form.status === "1" ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                                                form.status === "1" ? "translate-x-6" : "translate-x-1"
                                            }`}
                                        />
                                    </button>
                                    <span className="text-sm">
                                        {form.status === "1" ? "Aktif" : "Tidak Aktif"}
                                    </span>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
                            >
                                Save Client
                            </Button>
                        </form>
                    }
                    right={
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center text-muted-foreground">
                                            No client found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    items.map((client: any, idx: number) => (
                                        <TableRow key={client.id}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell>{client.name}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <input type="checkbox" id={`lightbox-${client.id}`} className="hidden peer" />
                                                    <label htmlFor={`lightbox-${client.id}`} className="cursor-pointer inline-block">
                                                        {client.image ? (
                                                            <img
                                                                src={`/storage/${client.image}`}
                                                                alt={client.name}
                                                                className="w-12 h-12 object-cover rounded-md"
                                                            />
                                                        ) : (
                                                            <span className="text-muted-foreground">No image</span>
                                                        )}
                                                    </label>

                                                    {/* Lightbox overlay */}
                                                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 opacity-0 pointer-events-none transition-opacity duration-200 peer-checked:opacity-100 peer-checked:pointer-events-auto">
                                                        <label htmlFor={`lightbox-${client.id}`} className="absolute inset-0 cursor-default" />
                                                        {client.image && (
                                                            <img
                                                                src={`/storage/${client.image}`}
                                                                alt={client.name}
                                                                className="max-h-[80vh] max-w-[90vw] object-contain rounded shadow-lg z-10"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {client.status !== null && client.status !== undefined
                                                    ? String(client.status) === "1"
                                                        ? "Aktif"
                                                        : "Tidak Aktif"
                                                    : "-"}
                                            </TableCell>
                                            <TableCell className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                                    onClick={() => router.visit(office.client.edit(client.id).url)}
                                                >
                                                    <Pencil />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    className="bg-red-600 hover:bg-red-700 text-white"
                                                    onClick={() => openDeleteModal(client.id)}
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
                title={selectedClient ? `Delete ${selectedClient.name}` : "Delete Client"}
                message={
                    selectedClient
                        ? `Are you sure you want to delete client "${selectedClient.name}"?`
                        : "Are you sure?"
                }
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </AppLayout>
    );
}