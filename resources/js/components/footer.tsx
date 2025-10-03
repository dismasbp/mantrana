import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo + Description */}
                <div>
                    <img
                        src="/images/logo-white.svg"
                        alt="Mantrana"
                        className="h-12 mb-4"
                    />
                    <p className="text-sm leading-relaxed">
                        Berkembang dan bertumbuh dengan transformasi digital.
                        Akselerasi pertumbuhan bisnis Anda dengan teknologi
                        digital yang mengubah cara kerja menjadi lebih efisien
                        dan optimal.
                    </p>

                    {/* Social Media */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" target="_blank" className="hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/mantrana.co.id/" target="_blank" className="hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target="_blank" className="hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h6 className="text-white font-semibold mb-4">Services</h6>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/s/custom-software" className="hover:text-white">Custom Software</Link>
                        </li>
                        <li>
                            <Link href="/s/training-certification" className="hover:text-white">Training Certification</Link>
                        </li>
                        <li>
                            <Link href="/s/it-consultant" className="hover:text-white">IT Consultant</Link>
                        </li>
                        <li>
                            <Link href="/s/it-support" className="hover:text-white">IT Support</Link>
                        </li>
                        <li>
                            <Link href="/s/digital-marketing" className="hover:text-white">Digital Marketing</Link>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h6 className="text-white font-semibold mb-4">Quick Links</h6>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                    </ul>
                </div>

                {/* Get In Touch */}
                <div>
                    <h6 className="text-white font-semibold mb-4">Get In Touch</h6>
                    <p className="text-sm mb-2">
                        Besi Blok D12, Sukoharjo, Ngaglik, Sleman, D.I. Yogyakarta
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="mailto:info@mantrana.co.id" className="hover:text-white">
                                Email: info@mantrana.co.id
                            </a>
                        </li>
                        <li>
                            <a href="tel:+628112512192" className="hover:text-white">
                                Phone: +62 811-2512-192
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} Mantrana Cipta Dharma.
            </div>
        </footer>
    );
}