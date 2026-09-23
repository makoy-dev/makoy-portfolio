"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { cardVariants } from "@/lib/utils";

export default function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const href = project.liveUrl ?? project.githubUrl;

    return (
        <motion.article
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-7 transition-colors hover:border-cyan-300/25 sm:p-9"
        >
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-300/[0.06] blur-3xl transition group-hover:bg-cyan-300/[0.1]" />
            <div className="relative">
                <div className="mb-16 flex items-start justify-between gap-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                            {project.category}
                        </p>
                        <p className="mt-3 text-sm text-slate-500">0{index + 1} / Featured</p>
                    </div>
                    {href ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                        >
                            <ArrowUpRight size={19} />
                        </a>
                    ) : (
                        <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-500">
                            {project.outcome}
                        </span>
                    )}
                </div>

                <h3 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                    {project.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                    {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/[0.08] bg-slate-950/40 px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}
