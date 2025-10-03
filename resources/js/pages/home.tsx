import GuestLayout from "@/layouts/guest-layout";

export default function Home() {
    return (
        <GuestLayout>
            <section className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Build Faster with Mantrana
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    A modern starter kit for building SEO-friendly apps.
                </p>
                <a
                    href='/contact'
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
                >
                    Get Started
                </a>
            </section>
        </GuestLayout>
    );
}