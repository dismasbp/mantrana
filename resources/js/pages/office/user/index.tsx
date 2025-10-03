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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Users', href: office.user.index().url },
];

export default function UserPage() {
    const { users, roles } = usePage<{ users: any, roles: any[] }>().props;
    const items = users?.data ?? [];

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (value: string) => {
        setForm({ ...form, role: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(office.user.store().url, form, {
            onSuccess: () =>
                setForm({
                    name: "",
                    username: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                    role: "",
                }),
        });
    };

    // Delete modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    const openDeleteModal = (id: number) => {
        setSelectedUserId(id);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedUserId) {
            router.delete(office.user.destroy(selectedUserId).url);
            setIsModalOpen(false);
            setSelectedUserId(null);
        }
    };

    const selectedUser = items.find((i: any) => i.id === selectedUserId);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
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
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    className="mt-2"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="mt-2"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="mt-2"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="password_confirmation">Confirm Password</Label>
                                <Input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    value={form.password_confirmation}
                                    onChange={handleChange}
                                    className="mt-2"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="role">Role</Label>
                                <Select value={form.role} onValueChange={handleRoleChange}>
                                    <SelectTrigger className="mt-2">
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {roles.map((role: any) => (
                                            <SelectItem key={role.id} value={role.name}>
                                                {role.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button
                                type="submit"
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
                            >
                                Save User
                            </Button>
                        </form>
                    }
                    right={
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Username</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center text-muted-foreground">
                                            No users found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    items.map((user: any, idx: number) => (
                                        <TableRow key={user.id}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>{user.roles.map((r: any) => r.name).join(", ")}</TableCell>
                                            <TableCell className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                                    onClick={() => router.visit(office.user.edit(user.id).url)}
                                                >
                                                    <Pencil />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    className="bg-red-600 hover:bg-red-700 text-white"
                                                    onClick={() => openDeleteModal(user.id)}
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
                title={selectedUser ? `Delete ${selectedUser.name}` : "Delete User"}
                message={selectedUser ? `Are you sure you want to delete user ${selectedUser.name}?` : "Are you sure?"}
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </AppLayout>
    );
}
