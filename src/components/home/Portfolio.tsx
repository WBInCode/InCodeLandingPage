"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Layout, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Etui App (CustomCase)",
        category: "eCommerce Configurator",
        description: "Zaawansowany kreator 3D pozwalający na personalizację etui na telefon. Integracja z systemem produkcji i zamówień.",
        tags: ["React", "Three.js", "WebGL", "eComm"],
        gradient: "from-violet-600 to-indigo-600",
        image: "/img/portfolio-casestudio.png",
        link: "https://etui-app.vercel.app/",
        color: "#8b5cf6",
        icon: Smartphone
    },
    {
        title: "WB Rent",
        category: "Car Rental Platform",
        description: "Nowoczesna platforma do wynajmu samochodów. System rezerwacji, zarządzanie flotą i panel klienta.",
        tags: ["Next.js", "Tailwind", "Booking System"],
        gradient: "from-blue-600 to-cyan-500",
        image: "/img/portfolio-wbrent.png",
        link: "https://wb-rent.pl",
        color: "#3b82f6",
        icon: Globe
    },
    {
        title: "WB Trade",
        category: "Trading Platform",
        description: "Platforma handlowa z systemem analizy danych i panelem klienta.",
        tags: ["Fintech", "dashboard", "Analytics"],
        gradient: "from-amber-500 to-orange-600",
        image: "/img/portfolio-wbtrade.png",
        link: "https://wb-trade.pl",
        color: "#f97316",
        icon: Layout
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-background-dark border-y border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("/img/logo.png")', backgroundSize: '800px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
                            Wybrane realizacje
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white">
                            Nasze Projekty
                        </h2>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2 group">
                        Więcej realizacji <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative block rounded-[2.5rem] overflow-hidden bg-surface-dark border border-white/5 hover:border-primary/30 transition-all duration-500"
                        >
                            {/* Project Preview Area */}
                            <div className={`h-72 w-full relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-8 relative z-10 bg-[#0a0a0a]">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{project.category}</p>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
