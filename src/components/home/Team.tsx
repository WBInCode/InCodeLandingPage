"use client";

import { motion } from "framer-motion";
import { User, Code, Terminal, Database, Sparkles } from "lucide-react";

// Team Data
const leader = {
    name: "Miłosz Wiater",
    role: "CEO & Lead Architect",
    icon: User,
    color: "text-primary",
    bg: "bg-primary/20",
    border: "border-primary/50",
    gradient: "from-primary/20 via-primary/5 to-transparent"
};

const members = [
    {
        name: "Jakub Maziarz",
        role: "Frontend Developer",
        icon: Code,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        gradient: "from-blue-500/20 via-blue-500/5 to-transparent"
    },
    {
        name: "Jakub Sosnowski",
        role: "Backend Developer",
        icon: Database,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent"
    },
    {
        name: "Kacper Franczyk",
        role: "Vibe-coder",
        icon: Sparkles,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        gradient: "from-purple-500/20 via-purple-500/5 to-transparent"
    },
];

export default function Team() {
    return (
        <section id="team" className="py-32 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
                        Core Team
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Mózgi operacji
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Mały zespół z wielkimi możliwościami.
                    </p>
                </div>

                {/* Tree Layout Container */}
                <div className="relative flex flex-col items-center">

                    {/* SVG Connections Layer (Desktop Only) */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0">
                        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                            {/* Defs for gradients */}
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#30e87a" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#30e87a" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* Central Line Down */}
                            <path d="M 500 100 L 500 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />

                            {/* Branching Horizontal */}
                            <path d="M 200 200 L 800 200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />

                            {/* Branches Down to Members */}
                            {/* Left */}
                            <path d="M 200 200 L 200 250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                            {/* Center */}
                            <path d="M 500 200 L 500 250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                            {/* Right */}
                            <path d="M 800 200 L 800 250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        </svg>
                    </div>

                    {/* Level 1: Leader */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="match-structure relative z-20 mb-20 md:mb-32"
                    >
                        <div className="relative group">
                            <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-emerald-500 to-primary opacity-20 group-hover:opacity-50 blur transition duration-500 animate-gradient-x`}></div>
                            <div className="relative w-72 p-1 rounded-3xl bg-surface-dark">
                                <div className="rounded-[1.3rem] bg-surface-dark border border-white/10 p-6 flex flex-col items-center text-center overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-b ${leader.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className={`w-24 h-24 rounded-full ${leader.bg} flex items-center justify-center mb-4 border border-white/10 group-hover:border-primary/50 transition-colors relative z-10 shadow-[0_0_20px_rgba(48,232,122,0.2)]`}>
                                        <leader.icon size={40} className={leader.color} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1 relative z-10">{leader.name}</h3>
                                    <p className="text-sm font-bold text-primary uppercase tracking-wider relative z-10">{leader.role}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Level 2: Members */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                        {members.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center"
                            >
                                {/* Mobile Connector */}
                                <div className="md:hidden w-px h-10 bg-gradient-to-b from-white/10 to-transparent mb-4"></div>

                                <div className={`w-full group hover:-translate-y-2 transition-transform duration-500`}>
                                    <div className={`h-full p-6 rounded-2xl bg-surface/40 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        <div className="relative z-10 flex items-center gap-5">
                                            <div className={`w-14 h-14 rounded-xl ${member.bg} flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                                <member.icon size={24} className={member.color} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white group-hover:text-white/90">{member.name}</h4>
                                                <p className={`text-xs font-bold ${member.color} uppercase tracking-wide flex items-center gap-1`}>
                                                    {member.role}
                                                    {member.role === "Vibe-coder" && <span className="animate-pulse">✨</span>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
