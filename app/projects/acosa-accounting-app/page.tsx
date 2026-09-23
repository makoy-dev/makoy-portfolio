import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe2 } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const project = PROJECTS.find((item) => item.slug === "acosa-accounting-app")!;

export const metadata: Metadata = {
    title: "ACOSA Accounting App — Makoy Cameña",
    description:
        "A case study of ACOSA Accounting App, a connected accounting operations platform built with Laravel and React.",
};

export default function AcosaAccountingAppPage() {
    return (
        <main className="overflow-hidden px-6 pb-24 pt-36">
            <div className="mx-auto max-w-7xl">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
                >
                    <ArrowLeft size={17} /> Back to selected work
                </Link>

                <header className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                            <Globe2 size={14} className="text-cyan-300" /> Live project
                        </div>
                        <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
                            Business operations platform
                        </p>
                        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
                            ACOSA Accounting App
                        </h1>
                    </div>
                    <div>
                        <p className="text-lg leading-8 text-slate-400">{project.description}</p>
                        <div className="mt-7 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                        >
                            Visit live project <ArrowUpRight size={17} />
                        </a>
                    </div>
                </header>

                <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/20">
                    <Image
                        src={project.coverImage}
                        alt="ACOSA Accounting App action center dashboard"
                        width={1890}
                        height={911}
                        priority
                        className="h-auto w-full"
                    />
                </div>

                <section className="grid gap-10 border-b border-white/[0.08] py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
                            Project overview
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                            One workspace for recurring accounting operations.
                        </h2>
                    </div>
                    <div className="space-y-6 text-lg leading-8 text-slate-400">
                        <p>
                            Commissioned by Acosa Accounting Office, ACOSA connects client
                            records, compliance periods, billing,
                            collections, disbursements, bank monitoring, documents, approvals,
                            and reporting. The product gives teams a shared view of work that
                            would otherwise be distributed across separate spreadsheets and files.
                        </p>
                        <p>
                            The interface is organized around role-aware workflows, focused work
                            queues, reusable filters, and traceable updates. Dense operational
                            screens retain the detail accounting teams need while making ownership,
                            status, and the next required action easier to understand.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
                            Product walkthrough
                        </p>
                        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                            A closer look at the connected workspace.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            The screenshots below use demonstration data and show the product&apos;s
                            primary operational and administrative surfaces.
                        </p>
                    </div>

                    <div className="mt-14 space-y-14">
                        {project.screenshots.slice(1).map((screenshot, index) => (
                            <article key={screenshot.src} className="group">
                                <a
                                    href={screenshot.src}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="relative block overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-slate-900 transition hover:border-cyan-300/30"
                                >
                                    <Image
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        width={1890}
                                        height={910}
                                        sizes="(max-width: 1280px) 100vw, 1280px"
                                        className="h-auto w-full transition duration-500 group-hover:scale-[1.01]"
                                    />
                                    <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/80 p-2.5 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                                        <ArrowUpRight size={17} />
                                    </span>
                                </a>
                                <div className="mt-5 grid gap-2 sm:grid-cols-[220px_1fr] sm:gap-8">
                                    <h3 className="font-semibold text-white">
                                        {String(index + 2).padStart(2, "0")} · {screenshot.title}
                                    </h3>
                                    <p className="text-sm leading-6 text-slate-500">
                                        {screenshot.caption}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] px-6 py-14 text-center sm:px-10">
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                        Want to discuss the work?
                    </p>
                    <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                        Let&apos;s talk about building clear tools for complex operations.
                    </h2>
                    <Link
                        href="/#contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                        Start a conversation <ArrowUpRight size={17} />
                    </Link>
                </section>
            </div>
        </main>
    );
}
