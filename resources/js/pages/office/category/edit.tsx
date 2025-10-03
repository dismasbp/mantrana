import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type BreadcrumbItem } from "@/types";
import office from "@/routes/office";

type Category = {
    id: number;
    name: string;
    description?: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Category", href: office.category.index().url },
    { title: "Edit", href: "#" },
];

export default function CategoryEdit() {
    const { category } = usePage<{ category: Category }>().props;

    const [form, setForm] = useState({
        name: category.name,
        description: category.description ?? "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.put(office.category.update(category.id).url, form);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Category" />

            <div className="p-6 space-y-4 max-w-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="mt-2"
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
                    <div className="flex gap-2 mt-4">
                        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Update</Button>
                        <Button
                            type="button"
                            variant="destructive"
                            className="bg-red-600 hover:bg-red-700 text-white"
                            onClick={() => router.visit(office.category.index().url)}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}