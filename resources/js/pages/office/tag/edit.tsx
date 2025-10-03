import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type BreadcrumbItem } from "@/types";
import office from "@/routes/office";

type Tag = {
    id: number;
    name: string;
    slug: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Tag", href: office.tag.index().url },
    { title: "Edit", href: "#" },
];

export default function TagEdit() {
    const { tag } = usePage<{ tag: Tag }>().props;
    const [form, setForm] = useState({ name: tag.name });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.put(office.tag.update(tag.id).url, form);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Tag" />
            <div className="p-6 space-y-4 max-w-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Tag Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={form.name}
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
                            onClick={() => router.visit(office.tag.index().url)}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
