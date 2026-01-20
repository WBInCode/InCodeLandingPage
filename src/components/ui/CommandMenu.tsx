"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Search, Folder, Mail, User, Home, Code, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CommandMenu() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <Command label="Global Command Menu" className="bg-transparent">

                    <div className="flex items-center border-b border-white/10 px-4">
                        <Search className="w-5 h-5 text-gray-500 mr-2" />
                        <Command.Input
                            placeholder="Wpisz komendę lub szukaj..."
                            className="flex-1 h-12 bg-transparent text-white placeholder:text-gray-500 outline-none text-sm font-medium"
                        />
                    </div>

                    <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                        <Command.Empty className="py-6 text-center text-sm text-gray-500">
                            Nie znaleziono wyników.
                        </Command.Empty>

                        <Command.Group heading="Nawigacja" className="text-xs font-bold text-gray-500 px-2 py-1.5 mb-1 uppercase tracking-wider">
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("#hero"))}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
                            >
                                <Home className="w-4 h-4" />
                                <span>Strona Główna</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("#portfolio"))}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
                            >
                                <Folder className="w-4 h-4" />
                                <span>Portfolio</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("#services"))}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
                            >
                                <Code className="w-4 h-4" />
                                <span>Usługi</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("#team"))}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
                            >
                                <User className="w-4 h-4" />
                                <span>Zespół</span>
                            </Command.Item>
                        </Command.Group>

                        <Command.Group heading="Akcje" className="text-xs font-bold text-gray-500 px-2 py-1.5 mt-2 mb-1 uppercase tracking-wider">
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("#contact"))}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Kontakt / Wycena</span>
                                <span className="ml-auto text-xs opacity-50">↵ Enter</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>

                    <div className="border-t border-white/10 px-4 py-2 flex justify-between items-center text-[10px] text-gray-600 font-medium bg-white/[0.02]">
                        <div className="flex gap-2">
                            <span>↑↓ nawigacja</span>
                            <span>↵ wybierz</span>
                        </div>
                        <span>ESC zamknij</span>
                    </div>
                </Command>
            </div>
        </div>
    );
}
