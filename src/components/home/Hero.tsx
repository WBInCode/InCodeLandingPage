"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Database, LayoutTemplate, Smartphone } from "lucide-react";
import RetroGrid from "@/components/ui/RetroGrid";

const technologies = [
    { icon: Code2, name: "React", intlColor: "#61DAFB" },
    { icon: Smartphone, name: "Next.js", intlColor: "#FFFFFF" },
    { icon: LayoutTemplate, name: "Tailwind", intlColor: "#38BDF8" },
    { icon: Database, name: "TypeScript", intlColor: "#3178C6" },
];

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden bg-background-dark">
            {/* Dynamic Background Grid */}
            <RetroGrid />

            {/* Large Decorative Logo in Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none z-0 select-none grayscale rotate-12">
                <img src="/img/InCodeLogo.png" alt="" className="w-full h-full object-contain" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

                {/* Main Logo Showcase */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-8"
                >
                    <img
                        src="/img/logo.png"
                        alt="WB InCode"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(48,232,122,0.1)]"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">
                        Software House & Design Studio
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1]"
                >
                    <span className="block text-white drop-shadow-xl mb-2">
                        WB InCode
                    </span>
                    <span className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 block">
                        Future of Web Development
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
                >
                    Tworzymy zaawansowane aplikacje i strony, które wyróżniają się designem i wydajnością.
                    Zainwestuj w jakość, która przyciąga klientów.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-20"
                >
                    <Link
                        href="#contact"
                        className="group relative h-14 px-10 rounded-full bg-accent text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(15,122,68,0.6)] transition-all flex items-center justify-center overflow-hidden"
                    >
                        <span className="relative z-10">Rozpocznij współpracę</span>
                        <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                    <Link
                        href="#portfolio"
                        className="h-14 px-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-lg transition-all flex items-center justify-center gap-2 group backdrop-blur-sm"
                    >
                        <span>Zobacz portfolio</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Technologies Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-xl" />
                    <div className="flex flex-wrap justify-center gap-3 relative z-10">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-black/40 backdrop-blur-md hover:border-primary/30 transition-colors shadow-lg"
                            >
                                <tech.icon size={20} style={{ color: tech.intlColor }} />
                                <span className="text-sm font-bold text-gray-300">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>
    );
}
