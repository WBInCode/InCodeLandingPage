"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Matrix Rain Effect Component
const MatrixRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@#%&";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(5, 5, 5, 0.05)"; // Black with fade
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0f7a44"; // Darker green text
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));

                // Randomly highlight some characters
                if (Math.random() > 0.98) {
                    ctx.fillStyle = "#30e87a"; // Bright primary green
                } else {
                    ctx.fillStyle = "#0f7a44";
                }

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />;
};

export default function Preloader({ onFinish }: { onFinish: () => void }) {
    const [loadingText, setLoadingText] = useState("Inicjalizacja...");

    useEffect(() => {
        const texts = [
            "Inicjalizacja systemu...",
            "Wczytywanie modułów...",
            "Konfiguracja Vibe-codera...",
            "Uruchamianie środowiska..."
        ];
        let i = 0;

        // Text cycle interval
        const textInterval = setInterval(() => {
            i = (i + 1) % texts.length;
            setLoadingText(texts[i]);
        }, 600);

        // Finish timer
        const timer = setTimeout(() => {
            clearInterval(textInterval);
            onFinish();
        }, 3000); // 3 seconds total load time

        return () => {
            clearTimeout(timer);
            clearInterval(textInterval);
        };
    }, [onFinish]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
            <MatrixRain />

            <div className="relative flex flex-col items-center justify-center z-10">
                {/* Animated Rings around Logo */}
                <div className="relative mb-8">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-10px] rounded-full border border-primary/20 border-t-primary/60 border-r-transparent w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-20px] rounded-full border border-emerald-500/20 border-b-emerald-500/60 border-l-transparent w-[200px] h-[200px] md:w-[240px] md:h-[240px]"
                    />

                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [0.9, 1, 0.9], opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full"
                    >
                        <img
                            src="/img/logo.png"
                            alt="WB InCode"
                            className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(48,232,122,0.5)]"
                        />
                    </motion.div>
                </div>

                {/* Dynamic Text */}
                <div className="h-8 flex items-center justify-center mb-4">
                    <motion.span
                        key={loadingText}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-primary font-mono text-sm tracking-[0.2em] uppercase"
                    >
                        {loadingText}
                    </motion.span>
                </div>

                {/* Advanced Progress Bar */}
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.8, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-emerald-400 to-primary box-shadow-[0_0_15px_#30e87a]"
                    />
                </div>
            </div>
        </motion.div>
    );
}
