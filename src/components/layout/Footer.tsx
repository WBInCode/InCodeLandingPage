import Link from "next/link";
import Image from "next/image";
import { Mail, Globe } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logonowe.png"
                                    alt="WB InCode Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">
                                WB <span className="text-primary">InCode</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Tworzymy nowoczesne rozwiązania cyfrowe, które pomagają firmom rosnąć.
                            Specjalizujemy się w Next.js, React i skalowalnych aplikacjach webowych.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Nawigacja</h4>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="text-gray-400 text-sm hover:text-primary transition-colors">Usługi</Link></li>
                            <li><Link href="#portfolio" className="text-gray-400 text-sm hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="#team" className="text-gray-400 text-sm hover:text-primary transition-colors">O nas</Link></li>
                            <li><Link href="#contact" className="text-gray-400 text-sm hover:text-primary transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Kontakt</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:technical-support@wb-partners.pl" className="flex items-center gap-2 text-gray-400 text-sm hover:text-primary transition-colors">
                                    <Mail size={16} />
                                    technical-support@wb-partners.pl
                                </a>
                                <span className="text-gray-500 text-xs mt-1 ml-6 block">Pon–Pią 9:00–17:00</span>
                            </li>
                            <li className="mt-4 pt-4 border-t border-white/5">
                                <a href="https://wb-partners.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 text-xs hover:text-white transition-colors group">
                                    <Globe size={14} className="group-hover:text-blue-400 transition-colors" />
                                    <span>Part of WB Partners Group</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} WB InCode. Wszelkie prawa zastrzeżone.
                    </p>
                    <div className="flex gap-6 flex-wrap justify-end">
                        <Link href="/polityka-prywatnosci" className="text-gray-500 text-xs hover:text-white transition-colors">Polityka Prywatności</Link>
                        <Link href="/regulamin" className="text-gray-500 text-xs hover:text-white transition-colors">Regulamin</Link>
                        <Link href="/polityka-cookies" className="text-gray-500 text-xs hover:text-white transition-colors">Cookies</Link>
                        <Link href="/rodo" className="text-gray-500 text-xs hover:text-white transition-colors">RODO</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
