"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Ile kosztuje stworzenie strony internetowej/aplikacji?",
        answer: "Każdy projekt wyceniamy indywidualnie w zależności od skomplikowania, funkcjonalności i wymagań designu. Oferujemy rozwiązania 'szyte na miarę', zaczynając od prostych landing page'y, aż po zaawansowane systemy SaaS. Skorzystaj z naszego kalkulatora poniżej, aby otrzymać wstępną estymację."
    },
    {
        question: "Jak długo trwa realizacja projektu?",
        answer: "Prosta strona wizytówka to zazwyczaj 1-2 tygodnie. Sklep internetowy lub aplikacja webowa może zająć od 4 do 12 tygodni w zależności od złożoności. Zawsze przedstawiamy harmonogram prac przed startem."
    },
    {
        question: "W jakich technologiach pracujecie?",
        answer: "Specjalizujemy się w nowoczesnym stacku JavaScript: Next.js, React, Tailwind CSS, TypeScript. Dla backendu często wykorzystujemy rozwiązania serverless (Vercel, Supabase) lub Node.js."
    },
    {
        question: "Czy oferujecie wsparcie po wdrożeniu?",
        answer: "Tak! Oferujemy pakiety utrzymaniowe, w ramach których dbamy o aktualizacje, bezpieczeństwo i drobne zmiany na stronie. Nie zostawiamy Cię samego po starcie projektu."
    },
    {
        question: "Czy wystawiacie fakturę VAT?",
        answer: "Oczywiście. Jesteśmy legalnie działającą firmą (Software House & Design Studio) i na każdą usługę wystawiamy fakturę VAT."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        Pytania i Odpowiedzi
                    </h2>
                    <p className="text-gray-400">
                        Wszystko co musisz wiedzieć przed rozpoczęciem współpracy.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-white'} transition-colors`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full ${openIndex === index ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
