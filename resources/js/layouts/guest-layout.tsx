import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Head } from "@inertiajs/react";

interface NavItem {
    label: string;
    href?: string;
    children?: NavItem[];
}

interface GuestLayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

export default function GuestLayout({ title, description, children }: GuestLayoutProps) {
    const navLinks: NavItem[] = [
        { label: 'Home', href: '/' },
        { 
            label: 'Solution',
            children: [
                { label: 'Asset Management', href: '/p/asset-management-system' },
                { label: 'Inventory', href: '/p/inventory' },
                { label: 'E-Ticketing', href: '/p/ticketing' },
            ]
        },
        { 
            label: 'Services',
            children: [
                { label: 'Custom Software', href: '/s/custom-software' },
                { label: 'IT Consultant', href: '/s/it-consultant' },
                { label: 'IT Support', href: '/s/it-support' },
                { label: 'Training & Certification', href: '/s/training-certification' },
                { label: 'Digital Marketing', href: '/s/digital-marketing' },
            ]
        },
        { 
            label: 'Use Cases',
            children: [
                { label: 'Pariwisata', href: '/i/pariwisata' },
                { label: 'Manufacturing', href: '/i/manufacturing' },
                { label: 'Construction', href: '/i/construction' },
                { label: 'Real Estate', href: '/i/real-estate' },
                { label: 'Retail', href: '/i/retail' },
                { label: 'Logistik', href: '/i/logistik' },
                { label: 'Hotel', href: '/i/hotel' },
                { label: 'Pendidikan', href: '/i/pendidikan' },
            ]
        },
        { label: 'Blog', href: '/blog' },
        { label: 'About Us', href: '/about-us' },
        // { label: 'Insight', href: '/insight' },
        // { label: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <Head>
                <title>{title ? `${title} | Mantrana` : "Mantrana"}</title>
                {description && <meta name="description" content={description} />}
            </Head>

            <div className="bg-[#13161B] flex flex-col min-h-screen">
                <Navbar links={navLinks} />

                <main className="flex-1 pt-20">
                    {children}
                </main>

                <Footer />
            </div>
        </>
    );
}