"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import CareerSidebar from "@/components/layout/CareerSidebar";

const navLinks = [
    { name: "Start", href: "#hero" },
    { name: "Usługi", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Zespół", href: "#team" },
    { name: "Kontakt", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCareerOpen, setIsCareerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative h-10 w-auto">
                                <img
                                    src="/logonowe.png"
                                    alt="WB InCode Logo"
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                                </Link>
                            ))}
                            <button
                                onClick={() => setIsCareerOpen(true)}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                            >
                                Kariera
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </button>
                            <Link
                                href="#contact"
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-primary hover:text-background-dark hover:border-primary transition-all duration-300"
                            >
                                Wycena projektu
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-x-0 top-[60px] z-40 bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsCareerOpen(true);
                                }}
                                className="text-base font-medium text-primary hover:text-primary/80 transition-colors px-4 py-2 rounded-lg hover:bg-white/5 text-left"
                            >
                                Kariera
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CareerSidebar isOpen={isCareerOpen} onClose={() => setIsCareerOpen(false)} />
        </>
    );
}
