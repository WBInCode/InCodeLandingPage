"use client";

import { motion } from "framer-motion";

const companies = [
    "NEXT.JS", "VERCEL", "REACT", "SHOPIFY", "STRIPE", "AWS", "SUPABASE", "TAILWIND"
];

export default function TrustedBy() {
    return (
        <section className="py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden">
            <div className="flex overflow-hidden whitespace-nowrap mask-gradient-x">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                    className="flex gap-16 items-center px-8"
                >
                    {[...companies, ...companies, ...companies].map((company, i) => (
                        <span
                            key={i}
                            className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-gray-800 tracking-tight select-none opacity-50 hover:opacity-100 transition-opacity duration-300"
                        >
                            {company}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* CSS Utility for gradient mask (add to globals.css if needed, but inline style works too for specific cases) */}
            <style jsx>{`
        .mask-gradient-x {
           mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
        </section>
    );
}
