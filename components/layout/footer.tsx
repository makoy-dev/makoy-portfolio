"use client";

import { ArrowUp, Code2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.06] px-6 py-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Code2 size={17} className="text-cyan-300" />
                        Makoy Cameña
                    </div>
                    <p className="mt-2 text-sm text-slate-500">
                        © {new Date().getFullYear()} · Built with Next.js and Framer Motion
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target={social.url.startsWith("http") ? "_blank" : undefined}
                            rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                            className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                        >
                            {social.name}
                        </a>
                    ))}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                        Back to top <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
