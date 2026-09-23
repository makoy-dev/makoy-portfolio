"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { VALUES } from "@/lib/data";
import { containerVariants, itemVariants, scrollToSection } from "@/lib/utils";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="about" ref={sectionRef} className="section-shell">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                    <SectionHeading
                        eyebrow="About"
                        title="I care about the space where people, product, and code meet."
                    />

                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="space-y-6 text-lg leading-8 text-slate-400">
                            <p>
                                I&apos;m a full-stack developer who enjoys translating complicated
                                requirements into software that feels straightforward. My work spans
                                interface design, application logic, data, and deployment.
                            </p>
                            <p>
                                I value clear communication, incremental delivery, and code that the
                                next developer can understand. Outside work, I enjoy movies, playing
                                guitar, exploring nature, and learning new ways to build better products.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-10 grid gap-4 sm:grid-cols-3"
                        >
                            {VALUES.map((value) => (
                                <article
                                    key={value.title}
                                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5"
                                >
                                    <value.icon size={20} className="text-cyan-300" />
                                    <h3 className="mt-5 font-semibold text-white">{value.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {value.description}
                                    </p>
                                </article>
                            ))}
                        </motion.div>

                        <motion.button
                            variants={itemVariants}
                            onClick={() => scrollToSection("contact")}
                            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                        >
                            Let&apos;s build something useful
                            <ArrowDownRight
                                size={18}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                            />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
