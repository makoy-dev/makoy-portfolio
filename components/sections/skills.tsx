"use client"

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "@/lib/data";
import {
    containerVariants,
    itemVariants,
    imageVariants,
    textVariants,
    skillBarVariants,
    scrollToSection,
} from "@/lib/utils";

export default function Skills() {

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px"})

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return <section
                ref={sectionRef}
                id="skills"
                className="py-24 px-6 bg-gray-950 text-white relative overflow-hidden"
            >
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 overflow-hidden"
                >
                    <div
                        className="absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 bg-blue-500"
                    />
                    <div
                        className="absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 bg-purple-500"
                    />
                </motion.div>
                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        animate = { isInView ? "visible" : "hidden" }
                        variants={ containerVariants }
                        className="text-center mb-20"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-sm uppercase tracking-widest text-gray-500 mb-4"
                        >
                            Technical Expertise
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-5xl font-light mb-6"
                        >
                            Skills & <span className="text-blue-500 font-medium">Technologies</span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
                        >
                            A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
                        </motion.p>
                    </motion.div>
                    {/* Skills Grid */}
                    <motion.div
                        initial="hidden"
                        animate={ isInView ? "visible" : "hidden" }
                        variants={containerVariants}
                        className="grid md:grid-cols-2 gap-8 lg:gap-2"
                    >
                        {
                            SKILLS_CATEGORY.map((category, categoryIndex) => (
                                <motion.div
                                    key={category.title}
                                    variants={itemVariants}
                                    className="p-8 rounded-2xl border bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                                >
                                    {/* Category Header */}
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="p-3 rounded-xl bg-gray-800 mr-4"
                                        >
                                            <category.icon size={24} className="text-blue-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium mb-1">{category.title}</h3>
                                            <p className="text-sm text-gray-400">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Skills List */}
                                    <div className="space-y-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skill.name} className="group">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-medium">
                                                        { skill.name }
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        { skill.level }%
                                                    </span>
                                                </div>
                                                <div
                                                    className="h-2 rounded-full overflow-hidden bg-gray-800"
                                                >
                                                    <motion.div
                                                        variants={skillBarVariants}
                                                        initial="hidden"
                                                        animate={ isInView ? "visible" : "hidden" }
                                                        custom={skill.level}
                                                        className={`h-full ${skill.color} rounded-full relative`}
                                                    >
                                                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                    
                    {/* Additional Skills */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="mt-16"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-8">
                            <h3 className="text-xl font-medium mb-4">Also Working With</h3>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {TECH_STACK.map((tech, index) => (
                                <motion.span
                                key={tech}
                                whileHover={{ y: -2, scale: 1.05 }}
                                className="px-4 py-2 text-sm rounded-full border transition-all duration-300 bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                    {/* Stats */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8"
                    >
                        {STATS.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                className="text-center"
                            >
                                <div className="text-2xl md:text-3xl dont-light text-blue-500 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>


}