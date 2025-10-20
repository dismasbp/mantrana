import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import office from "@/routes/office";

interface Permission {
    id: number;
    name: string;
}

export default function RoleEdit() {
    const { role, permissions, rolePermissions } = usePage<{
        role: any;
        permissions: Permission[];
        rolePermissions: string[];
    }>().props;

    const [form, setForm] = useState({
        name: role.name,
        permissions: rolePermissions,
    });

    const togglePermission = (perm: string) => {
        setForm((prev) => ({
            ...prev,
            permissions: prev.permissions.includes(perm)
                ? prev.permissions.filter((p) => p !== perm)
                : [...prev.permissions, perm],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.put(office.role.update(role.id).url, form);
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: "Article", href: office.role.index().url },
                { title: "Edit", href: "#" },
            ]}
        >
            <Head title={`Edit Role - ${role.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Role Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="mt-2"
                            required
                        />
                    </div>

                    <div>
                        <Label>Permissions</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2 border rounded-lg p-3 max-h-64 overflow-y-auto">
                            {permissions.map((perm) => (
                                <label key={perm.id} className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={form.permissions.includes(perm.name)}
                                        onChange={() => togglePermission(perm.name)}
                                    />
                                    {perm.name}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Update</Button>
                        <Button
                            type="button"
                            variant="destructive"
                            className="bg-red-600 hover:bg-red-700 text-white"
                            onClick={() => router.visit(office.role.index().url)}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
