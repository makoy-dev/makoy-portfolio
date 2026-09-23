"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
            <nav
                aria-label="Primary navigation"
                className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.08] bg-slate-950/75 px-5 py-3 shadow-lg shadow-black/10 backdrop-blur-xl"
            >
                <button
                    onClick={() => navigate("home")}
                    className="flex items-center gap-2 text-sm font-semibold text-white"
                    aria-label="Go to the top of the page"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
                        <Code2 size={17} />
                    </span>
                    Makoy Cameña
                </button>

                <div className="hidden items-center gap-7 lg:flex">
                    {NAV_LINKS.slice(1).map((link) => (
                        <button
                            key={link.href}
                            onClick={() => navigate(link.href)}
                            className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400 transition hover:text-white"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="rounded-full border border-white/10 p-2 text-slate-300 lg:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
                    >
                        {NAV_LINKS.slice(1).map((link) => (
                            <button
                                key={link.href}
                                onClick={() => navigate(link.href)}
                                className="block w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
                            >
                                {link.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
