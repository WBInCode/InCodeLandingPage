"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2, Loader2, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareerSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const positions = [
    "Frontend Developer",
    "Fullstack Developer",
    "Backend Developer",
    "UX/UI Designer",
    "Project Manager",
    "Inne"
];

export default function CareerSidebar({ isOpen, onClose }: CareerSidebarProps) {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
    const [fileName, setFileName] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("submitting");

        const formData = new FormData(e.currentTarget);
        // Explicitly check for checkbox because sometimes browsers are weird with uncontrolled form data in React
        if (!e.currentTarget.gdprConsent.checked) {
            formData.set('gdprConsent', '');
        } else {
            formData.set('gdprConsent', 'on');
        }

        try {
            const response = await fetch("/api/career", {
                method: "POST",
                body: formData, // Browser sets Content-Type to multipart/form-data
            });

            if (!response.ok) throw new Error("Failed to send application");

            setFormState("success");
            e.currentTarget.reset();
            setFileName(null);
        } catch (error) {
            console.error(error);
            alert("Wystąpił błąd podczas wysyłania aplikacji. Spróbuj ponownie.");
            setFormState("idle");
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-[101] w-full md:w-[500px] bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Briefcase className="text-primary" size={24} />
                                Kariera w InCode
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                            {formState === "success" ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary animate-in zoom-in duration-300">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Aplikacja wysłana!</h3>
                                    <p className="text-gray-400 max-w-xs mx-auto mb-8">
                                        Dziękujemy za przesłanie zgłoszenia. Nasz zespół HR przeanalizuje Twoje CV i odezwie się wkrótce.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors"
                                    >
                                        Zamknij
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        Szukamy utalentowanych inżynierów. Wybierz ofertę i prześlij swoje CV — skontaktujemy się wkrótce.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="career-name" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Imię i nazwisko</label>
                                            <input
                                                type="text"
                                                id="career-name"
                                                name="name"
                                                required
                                                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="career-email" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Email</label>
                                            <input
                                                type="email"
                                                id="career-email"
                                                name="email"
                                                required
                                                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="career-phone" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Telefon (opcjonalnie)</label>
                                            <input
                                                type="tel"
                                                id="career-phone"
                                                name="phone"
                                                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="career-position" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Stanowisko</label>
                                            <div className="relative">
                                                <select
                                                    id="career-position"
                                                    name="position"
                                                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                                >
                                                    {positions.map(pos => (
                                                        <option key={pos} value={pos}>{pos}</option>
                                                    ))}
                                                </select>
                                                {/* Custom Arrow */}
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▼</div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="career-motivation" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">List motywacyjny / Opis</label>
                                            <textarea
                                                id="career-motivation"
                                                name="motivation"
                                                rows={4}
                                                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">CV (PDF / DOCX)</label>
                                            <label className="flex items-center gap-3 p-3 border border-dashed border-white/20 rounded-xl cursor-pointer hover:border-primary/50 hover:bg-white/5 transition-all group">
                                                <input
                                                    type="file"
                                                    name="cv"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    required
                                                />
                                                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
                                                    <Upload size={20} />
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    {fileName ? <span className="text-white font-medium">{fileName}</span> : "Wybierz plik z dysku"}
                                                </div>
                                            </label>
                                        </div>

                                        <label className="flex items-start gap-3 cursor-pointer group pt-2">
                                            <input
                                                type="checkbox"
                                                name="gdprConsent"
                                                required
                                                className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 checked:bg-primary checked:border-primary focus:ring-primary/50 transition-all"
                                            />
                                            <span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                                Wyrażam zgodę na przetwarzanie danych osobowych w celu rekrutacji zgodnie z <a href="/polityka-prywatnosci" target="_blank" className="text-primary hover:underline">Polityką Prywatności</a>.
                                            </span>
                                        </label>

                                        <button
                                            type="submit"
                                            disabled={formState === "submitting"}
                                            className={cn(
                                                "w-full py-4 rounded-xl bg-primary text-background-dark font-bold text-lg hover:shadow-[0_0_20px_rgba(48,232,122,0.4)] transition-all flex items-center justify-center gap-2",
                                                formState === "submitting" && "opacity-70 cursor-not-allowed"
                                            )}
                                        >
                                            {formState === "submitting" ? (
                                                <>
                                                    <Loader2 size={20} className="animate-spin" />
                                                    Wysyłanie...
                                                </>
                                            ) : (
                                                "Wyślij CV"
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
