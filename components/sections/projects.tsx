"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { containerVariants } from "@/lib/utils";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "./components/project-card";

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="work" ref={sectionRef} className="section-shell border-y border-white/[0.06]">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Selected work"
                    title="Work that starts with the problem, not the technology."
                    description="A growing collection of products built around useful workflows, maintainable systems, and clear user experiences."
                />

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="mt-14 grid gap-6 lg:grid-cols-2"
                >
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>

                <p className="mt-8 max-w-2xl text-sm leading-6 text-slate-500">
                    Detailed project write-ups are being prepared. Each case study will cover
                    the problem, decisions, implementation, and outcome—not just screenshots.
                </p>
            </div>
        </section>
    );
}
