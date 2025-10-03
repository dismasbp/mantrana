import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import { usePage } from "@inertiajs/react";

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children, breadcrumbs, ...props }: AppLayoutProps) {
    const { flash } = usePage<{ flash: { success?: string; error?: string } }>().props;

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {flash?.success && (
                <div className="mb-4 rounded bg-green-100 p-2 text-green-700">
                    {flash.success}
                </div>
            )}
            {flash?.error && (
                <div className="mb-4 rounded bg-red-100 p-2 text-red-700">
                    {flash.error}
                </div>
            )}

            {children}
        </AppLayoutTemplate>
    );
}
