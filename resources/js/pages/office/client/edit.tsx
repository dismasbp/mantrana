import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { type BreadcrumbItem } from "@/types";
import office from "@/routes/office";

type Client = {
    id: number;
    name: string;
    image?: string;
    status?: string | number;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Client", href: office.client.index().url },
    { title: "Edit", href: "#" },
];

export default function ClientEdit() {
    const { client } = usePage<{ client: Client }>().props;
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [form, setForm] = useState({
        _method: "put",
        name: client.name || "",
        image: null as File | null,
        status: client.status?.toString() || "0",
    });

    const MAX_FILE_SIZE = 1024 * 1024; // 1 MB

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > MAX_FILE_SIZE) {
                setError("Ukuran file maksimal 1 MB");
                setForm({ ...form, image: null });
                return;
            }
            setError(null);
            setForm({ ...form, image: file });
        }
    };

    const handleStatusChange = (value: string) => {
        setForm({ ...form, status: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.image && form.image.size > MAX_FILE_SIZE) {
            setError("Ukuran file maksimal 1 MB");
            return;
        }

        const formData = new FormData();
        formData.append("_method", "put");
        formData.append("name", form.name);
        formData.append("status", form.status);
        if (form.image) {
            formData.append("image", form.image);
        }

        router.post(office.client.update(client.id).url, formData, {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Client" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="max-w-md w-full">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Client Name */}
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

                        {/* Image Upload */}
                        <div>
                            <Label htmlFor="image">Image</Label>
                            <p className="text-sm text-gray-400">(Maks. 1 MB)</p>
                            <Input id="image" type="file" onChange={handleImage} accept="image/*" className="mt-2" />

                            {error && (
                                <p className="text-sm text-red-600 mt-2">
                                    {error}
                                </p>
                            )}

                            {client.image && (
                                <>
                                    <img
                                        src={
                                            client.image.startsWith("http") || client.image.startsWith("/storage")
                                                ? client.image
                                                : `/storage/${client.image}`
                                        }
                                        alt={client.name}
                                        onClick={() => setLightboxOpen(true)}
                                        className="w-24 h-24 object-cover mt-2 rounded-md border cursor-pointer hover:opacity-80 transition"
                                    />

                                    <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                                        <DialogContent className="max-w-3xl p-0 bg-transparent border-0 shadow-none">
                                            <img
                                                src={
                                                    client.image.startsWith("http") || client.image.startsWith("/storage")
                                                        ? client.image
                                                        : `/storage/${client.image}`
                                                }
                                                alt={client.name}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </DialogContent>
                                    </Dialog>
                                </>
                            )}
                        </div>

                        {/* Status Toggle */}
                        <div>
                            <Label htmlFor="status">Status</Label>
                            <div className="flex items-center gap-3 mt-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleStatusChange(form.status === "1" ? "0" : "1")
                                    }
                                    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                                        form.status === "1"
                                            ? "bg-green-500"
                                            : "bg-gray-300"
                                    }`}
                                >
                                    <span
                                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                                            form.status === "1"
                                                ? "translate-x-6"
                                                : "translate-x-1"
                                        }`}
                                    />
                                </button>
                                <span className="text-sm">
                                    {form.status === "1"
                                        ? "Aktif"
                                        : "Tidak Aktif"}
                                </span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2 mt-4">
                            <Button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
                                disabled={!!error}
                            >
                                Update Client
                            </Button>

                            <Button
                                type="button"
                                variant="destructive"
                                className="bg-red-600 hover:bg-red-700 text-white"
                                onClick={() =>
                                    router.visit(office.client.index().url)
                                }
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}