import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

interface NavItem {
    label: string;
    href?: string; // optional karena parent bisa tidak punya link
    children?: NavItem[];
}

interface NavbarProps {
    links: NavItem[];
}

export default function Navbar({ links }: NavbarProps) {
    const { url } = usePage();

    return (
        <header className="bg-white shadow fixed top-0 w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-indigo-600">
                    Mantrana
                </Link>

                {/* Navigation */}
                <nav className="flex space-x-6 relative">
                    {links.map((link) => {
                        const isActive = url === link.href;
                        const hasChildren = link.children && link.children.length > 0;

                        return (
                            <div key={link.label} className="relative group">
                                {/* Parent link */}
                                {link.href ? (
                                    <Link
                                        href={link.href}
                                        className={
                                        isActive
                                            ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                                            : "text-gray-700 hover:text-indigo-600"
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <span className="cursor-pointer text-gray-700 hover:text-indigo-600">
                                        {link.label}
                                    </span>
                                )}

                                {/* Dropdown */}
                                {hasChildren && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                                        {link.children!.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href!}
                                                className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

            </div>
        </header>
    );
}