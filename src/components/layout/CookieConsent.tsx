"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasAccepted = localStorage.getItem("cookieConsent");
        if (!hasAccepted) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookieConsent", "false");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="relative overflow-hidden rounded-2xl bg-surface/95 backdrop-blur-xl border border-white/10 shadow-2xl">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                            
                            {/* Content */}
                            <div className="relative p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                            <Cookie className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-lg font-semibold text-white">
                                            Używamy plików cookie
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            Nasza strona wykorzystuje pliki cookie, aby zapewnić Ci najlepsze wrażenia z przeglądania. 
                                            Kontynuując korzystanie ze strony, wyrażasz zgodę na ich używanie zgodnie z naszą{" "}
                                            <Link 
                                                href="/polityka-cookies" 
                                                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                                            >
                                                polityką cookies
                                            </Link>
                                            {" "}i{" "}
                                            <Link 
                                                href="/polityka-prywatnosci" 
                                                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                                            >
                                                polityką prywatności
                                            </Link>
                                            .
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                                        <button
                                            onClick={handleReject}
                                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300 whitespace-nowrap"
                                        >
                                            Odrzuć
                                        </button>
                                        <button
                                            onClick={handleAccept}
                                            className="px-6 py-3 rounded-full bg-primary border border-primary text-sm font-medium text-background hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 whitespace-nowrap"
                                        >
                                            Akceptuję
                                        </button>
                                    </div>

                                    {/* Close button for desktop */}
                                    <button
                                        onClick={handleReject}
                                        className="hidden sm:block absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300"
                                        aria-label="Zamknij"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
