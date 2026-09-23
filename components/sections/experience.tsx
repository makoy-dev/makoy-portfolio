"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/utils";
import SectionHeading from "@/components/ui/section-heading";

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="section-shell border-y border-white/[0.06] bg-white/[0.018]"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Experience"
                    title="A career shaped by building and improving real products."
                />

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="mt-14 divide-y divide-white/[0.08] border-y border-white/[0.08]"
                >
                    {EXPERIENCE.map((item, index) => (
                        <motion.article
                            key={`${item.company}-${item.period}`}
                            variants={itemVariants}
                            className="grid gap-4 py-8 sm:grid-cols-[180px_1fr] lg:grid-cols-[210px_0.8fr_1.2fr] lg:gap-10"
                        >
                            <p className="text-sm font-medium text-cyan-300">{item.period}</p>
                            <div>
                                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                                <p className="mt-1 text-sm text-slate-500">{item.company}</p>
                            </div>
                            <p className="text-sm leading-7 text-slate-400 sm:col-start-2 lg:col-start-auto">
                                {item.description}
                            </p>
                            <span className="sr-only">Experience item {index + 1}</span>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
