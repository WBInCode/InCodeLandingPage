"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, PenTool, Rocket, Settings } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "Konsultacja",
        description: "Rozmawiamy o Twoich potrzebach, celach biznesowych i grupie docelowej. Ustalamy zakres prac i budżet."
    },
    {
        icon: PenTool,
        title: "Strategia & Design",
        description: "Tworzymy makiety UX/UI oraz dobieramy odpowiednie technologie. Projektujemy unikalny wygląd Twojej aplikacji."
    },
    {
        icon: Settings,
        title: "Development",
        description: "Nasi programiści zamieniają projekt w działający kod. Budujemy, testujemy i optymalizujemy każdy element."
    },
    {
        icon: Rocket,
        title: "Wdrożenie & Launch",
        description: "Publikujemy projekt na serwerze, konfigurujemy domeny i dbamy o to, by wszystko działało perfekcyjnie."
    }
];

export default function ProcessTimeline() {
    return (
        <section id="process" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
                        Jak działamy?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white">
                        Proces Współpracy
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent w-1/2 animate-shimmer" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative group"
                            >
                                {/* Icon Bubble */}
                                <div className="w-16 h-16 mx-auto bg-surface border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 relative z-10 shadow-lg">
                                    <step.icon className="text-gray-400 group-hover:text-primary transition-colors" size={32} />

                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background-dark border border-white/10 flex items-center justify-center text-xs font-bold text-primary">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
