"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Smartphone, ArrowUpRight, Layout } from "lucide-react";

const services = [
    {
        title: "Niestandardowe aplikacje webowe",
        description: "Platformy SaaS na zamówienie i narzędzia wewnętrzne zbudowane w React i Next.js dla maksymalnej wydajności.",
        icon: Layout,
        colSpan: "lg:col-span-1",
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "E-commerce Headless",
        description: "Błyskawicznie szybkie witryny sklepowe korzystające z Shopify Hydrogen lub niestandardowych rozwiązań handlowych Next.js.",
        icon: ShoppingCart,
        colSpan: "lg:col-span-1",
        gradient: "from-emerald-500/20 to-teal-500/20",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "Progressive Web Apps (PWA)",
        description: "Doświadczenia mobilne, które działają offline i wyglądają natywnie, bez kłopotów ze sklepem aplikacji.",
        icon: Smartphone,
        colSpan: "lg:col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Kompleksowe </span>
                        <span className="text-gray-500">usługi</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Dostarczamy rozwiązania end-to-end. Od architektury po deployment.
                        Twój sukces techniczny to nasz priorytet.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl bg-surface border border-white/5 overflow-hidden hover:bg-surface-hover transition-colors duration-500 ${service.colSpan}`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:bg-white/10">
                                        <service.icon className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                                    Dowiedz się więcej <ArrowUpRight size={16} />
                                </div>
                            </div>

                            {/* Border glow effect */}
                            <div className={`absolute inset-0 border border-transparent ${service.border} rounded-3xl transition-colors duration-500 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
