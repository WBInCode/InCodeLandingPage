"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import WorldGlobe from "./WorldGlobe";

export default function Contact() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("submitting");
        const form = e.currentTarget;

        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            gdprConsent: formData.get("gdprConsent") === "on",
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setFormState("success");
            form.reset();
        } catch (error) {
            console.error(error);
            alert("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub napisz bezpośrednio na maila.");
            setFormState("idle");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Globe */}
            <div className="absolute inset-0 z-0 opacity-40">
                <WorldGlobe />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <div className="mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
                        Rozpocznij projekt
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Porozmawiajmy o Twoim pomyśle
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin z darmową wyceną.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-3xl mx-auto relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {formState === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12"
                            >
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Wiadomość wysłana!</h3>
                                <p className="text-gray-400">Dziękujemy za kontakt. Odpiszemy wkrótce.</p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="mt-8 text-sm text-primary hover:text-primary/80 font-medium"
                                >
                                    Wyślij kolejną wiadomość
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
                            >
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Imię i Nazwisko</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Jan Kowalski"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Adres Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="jan@firma.pl"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Wiadomość</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Opisz swój projekt..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="gdprConsent"
                                            required
                                            className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 checked:bg-primary checked:border-primary focus:ring-primary/50 transition-all"
                                        />
                                        <span className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu.
                                            Więcej informacji w <a href="/polityka-prywatnosci" className="text-primary hover:underline">Polityce Prywatności</a>.
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-2 mt-4 flex justify-between items-center group">
                                    <a href="mailto:support@wb-partners.pl" className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                                        <Mail size={16} />
                                        lub napisz bezpośrednio
                                    </a>
                                    <button
                                        type="submit"
                                        disabled={formState === "submitting"}
                                        className={cn(
                                            "w-full md:w-auto px-8 py-3 rounded-full bg-primary text-background-dark font-bold text-base hover:shadow-[0_0_20px_rgba(48,232,122,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
                                            formState === "submitting" && "brightness-90"
                                        )}
                                    >
                                        {formState === "submitting" ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Wysyłanie...
                                            </>
                                        ) : (
                                            <>
                                                Wyślij zgłoszenie
                                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
