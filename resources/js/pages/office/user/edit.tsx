import { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import office from "@/routes/office";

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Users", href: office.user.index().url },
    { title: "Edit User", href: "#" },
];

export default function EditUserPage() {
    const { user, roles } = usePage<{ user: any; roles: any[] }>().props;

    const [form, setForm] = useState({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
        role: user.roles.length ? user.roles[0].name : "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (value: string) => {
        setForm({ ...form, role: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.put(office.user.update(user.id).url, form);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit User" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
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
                        <Label htmlFor="password">Password (kosongkan jika tidak ganti)</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="mt-2"
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
                    <div className="flex gap-2 mt-4">
                        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Update</Button>
                        <Button
                            type="button"
                            variant="destructive"
                            className="bg-red-600 hover:bg-red-700 text-white"
                            onClick={() => router.visit(office.user.index().url)}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}