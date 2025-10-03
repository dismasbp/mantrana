// import {
//     SidebarGroup,
//     SidebarGroupLabel,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
// } from '@/components/ui/sidebar';
// import { type NavItem } from '@/types';
// import { Link, usePage } from '@inertiajs/react';

// export function NavMain({ items = [] }: { items: NavItem[] }) {
//     const page = usePage();
//     return (
//         <SidebarGroup className="px-2 py-0">
//             {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
//             <SidebarMenu>
//                 {items.map((item) => (
//                     <SidebarMenuItem key={item.title}>
//                         <SidebarMenuButton
//                             asChild
//                             isActive={page.url.startsWith(
//                                 typeof item.href === 'string'
//                                     ? item.href
//                                     : item.href.url,
//                             )}
//                             tooltip={{ children: item.title }}
//                         >
//                             <Link href={item.href} prefetch>
//                                 {item.icon && <item.icon />}
//                                 <span>{item.title}</span>
//                             </Link>
//                         </SidebarMenuButton>
//                     </SidebarMenuItem>
//                 ))}
//             </SidebarMenu>
//         </SidebarGroup>
//     );
// }

import { NavItem } from "@/types"
import { Link } from "@inertiajs/react"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function NavMain({ items }: { items: NavItem[] }) {
    return (
        <SidebarMenu>
            {items.map((item, i) => (
                <NavItemComponent key={i} item={item} />
            ))}
        </SidebarMenu>
    )
}

function NavItemComponent({ item }: { item: NavItem }) {
    const [open, setOpen] = useState(false)

    if (item.children && item.children.length > 0) {
        return (
            <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setOpen(!open)}>
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    <span>{item.title}</span>
                <ChevronDown
                    className={`ml-auto h-4 w-4 transition-transform ${
                    open ? "rotate-180" : ""
                    }`}
                />
                </SidebarMenuButton>
                {open && (
                    <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child, i) => (
                        <Link
                            key={i}
                            href={child.href ?? "#"}
                            className="block rounded px-2 py-1 text-sm hover:bg-muted"
                        >
                            {child.title}
                        </Link>
                        ))}
                    </div>
                )}
            </SidebarMenuItem>
        )
    }

    return (
        <SidebarMenuItem>
            <SidebarMenuButton asChild>
                <Link href={item.href ?? "#"}>
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    <span>{item.title}</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}
