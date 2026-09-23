"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Mail, MapPin } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { containerVariants, itemVariants, scrollToSection } from "@/lib/utils";

const stack = ["React", "Next.js", "Laravel", "TypeScript"];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
        >
            <div className="hero-grid absolute inset-0 opacity-40" />
            <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
            >
                <div>
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                    >
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Available for thoughtful product work
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300"
                    >
                        Full-stack developer · Iloilo, Philippines
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl"
                    >
                        I turn complex workflows into clear digital products.
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
                    >
                        I&apos;m Makoy, a full-stack developer building reliable web
                        applications across product interfaces, backend systems, and
                        the data between them.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <button
                            onClick={() => scrollToSection("work")}
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                        >
                            Explore selected work
                            <ArrowDownRight
                                size={18}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                            />
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.05]"
                        >
                            <Mail size={17} /> Start a conversation
                        </button>
                    </motion.div>
                </div>

                <motion.aside
                    variants={itemVariants}
                    className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
                >
                    <motion.div
                        animate={{ rotate: [3, 363] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute -inset-4 rounded-[2rem] border border-cyan-300/15"
                    />
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-cyan-950/40">
                        <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1.25rem] bg-slate-800">
                            <Image
                                src="/images/profpic2.png"
                                alt="Makoy Cameña"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 36vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent p-6 pt-24">
                                <p className="text-xl font-semibold text-white">Makoy Cameña</p>
                                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-300">
                                    <MapPin size={14} /> Iloilo, Philippines
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                        {stack.map((technology) => (
                            <span key={technology}>{technology}</span>
                        ))}
                    </div>
                    <div className="mt-7 flex gap-3">
                        <a
                            href="https://www.linkedin.com/in/makoy-came%C3%B1a-14a42312b/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Makoy on LinkedIn"
                            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                        >
                            <FiLinkedin size={18} />
                        </a>
                        <a
                            href="mailto:khristiancamena@gmail.com"
                            aria-label="Email Makoy"
                            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </motion.aside>
            </motion.div>
        </section>
    );
}
