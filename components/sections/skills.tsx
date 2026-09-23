"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES, TECH_STACK } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/utils";
import SectionHeading from "@/components/ui/section-heading";

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="capabilities" ref={sectionRef} className="section-shell">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <SectionHeading
                            eyebrow="Capabilities"
                            title="End-to-end thinking, grounded in delivery."
                            description="I work across the stack, but the goal stays the same: ship software that is clear to use and practical to maintain."
                        />

                        <div className="mt-10 flex flex-wrap gap-2">
                            {TECH_STACK.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs font-medium text-slate-400"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2"
                    >
                        {CAPABILITIES.map((capability) => (
                            <motion.article
                                key={capability.title}
                                variants={itemVariants}
                                className="bg-slate-950 p-7 sm:p-8"
                            >
                                <capability.icon size={24} className="text-cyan-300" />
                                <h3 className="mt-7 text-xl font-semibold text-white">
                                    {capability.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {capability.description}
                                </p>
                                <ul className="mt-6 space-y-2">
                                    {capability.skills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-3 text-sm text-slate-300">
                                            <span className="h-px w-4 bg-cyan-300/60" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
