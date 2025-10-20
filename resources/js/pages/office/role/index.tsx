import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import TwoColumnLayout from "@/components/form-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash, Pencil } from "lucide-react";
import ConfirmModal from "@/components/modal-confirm";
import office from "@/routes/office";

interface Permission {
    id: number;
    name: string;
}

export default function RolePage() {
    const { roles, permissions } = usePage<{ roles: any; permissions: Permission[] }>().props;
    const items = roles?.data ?? [];

    const [form, setForm] = useState({
        name: "",
        permissions: [] as string[],
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
        router.post(office.role.store().url, form, {
            onSuccess: () => setForm({ name: "", permissions: [] }),
        });
    };

    // Modal delete
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<any>(null);

    const openDeleteModal = (role: any) => {
        setSelectedRole(role);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedRole) {
            router.delete(office.role.destroy(selectedRole.id).url);
            setIsModalOpen(false);
        }
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: "Roles", href: office.role.index().url },
            ]}
        >
            <Head title="Roles" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <TwoColumnLayout
                    left={
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

                            <Button
                                type="submit"
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                            >
                                Save Role
                            </Button>
                        </form>
                    }
                    right={
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Permissions</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center text-muted-foreground">
                                            No roles found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    items.map((role: any, idx: number) => (
                                        <TableRow key={role.id}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell>{role.name}</TableCell>
                                            <TableCell>
                                                <div
                                                    className="max-w-[300px] truncate"
                                                    title={role.permissions.map((p: any) => p.name).join(", ")}
                                                >
                                                    {role.permissions.map((p: any) => p.name).join(", ")}
                                                </div>
                                            </TableCell>
                                            <TableCell className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                                    onClick={() =>
                                                        router.visit(office.role.edit(role.id).url)
                                                    }
                                                >
                                                    <Pencil />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    className="bg-red-600 hover:bg-red-700 text-white"
                                                    onClick={() => openDeleteModal(role)}
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
                title={selectedRole ? `Delete ${selectedRole.name}` : "Delete Role"}
                message={
                    selectedRole
                        ? `Are you sure you want to delete role ${selectedRole.name}?`
                        : "Are you sure?"
                }
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </AppLayout>
    );
}
