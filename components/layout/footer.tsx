
"use client"
import {  useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
    Mail,
    Heart,
    ArrowUp,
    Code2
} from 'lucide-react'

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { containerVariants, itemVariants } from "@/lib/utils";

export default function Footer() { 

    const footerRef = useRef(null)
    const isInView = useInView(footerRef, { once: true, margin: "-50px" })

    const { scrollYProgress } = useScroll()
    const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50])

    const socialLinks = [
        // {
        //     name: 'GitHub',
        //     icon: FiGithub,
        //     url: 'https://github.com',
        //     color: 'hover:text-gray-400'
        // },
        {
            name: 'LinkedIn',
            icon: FiLinkedin,
            url: 'https://linkedin.com',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:khristiancamena@gmail.com',
            color: 'hover:text-green-400'
        }
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const AnimatedGradientLine = () => (
        <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
            <motion.div
                className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                initial={{ width: '0%', opacity: 0 }}
                animate={isInView ? { width: '100%', opacity: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-0 h-px w-32 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 blur-sm"
                animate={{x: ['-50%', 'calc(100vw + 50%)']}}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 6,
                        ease: "linear",
                        delay: 1
                    }
                }}
            />
        </div>
    )

    return (
        <footer
            ref={footerRef}
            className="relative bg-gray-900 text-white overflow-hidden"
        >
            <AnimatedGradientLine />

            <motion.div
                style={{ y: scrollY }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                <div className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-3 bg-blue-500" />
                <div className="absolute top-10 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-3 bg-purple-500" />
            </motion.div>
            <div className="relative z-10 px-6 py-16">
                <div className="max-x-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-center space-y-8"
                    >

                        <motion.div variants={itemVariants} className="space-y-4">
                            <motion.div
                                className="inline-flex items-center space-x-2 text-2xl font-medium"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear"}}
                                    className="text-blue-500"
                                >
                                    <Code2 size={28} />
                                </motion.div>
                                <span>Makoy Cameña</span>
                            </motion.div>
                            <motion.p
                                variants={itemVariants}
                                className="text-sm text-gray-400"
                            >
                                Crafting digital experiences with passion and precision
                            </motion.p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex justify-center space-x-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -2,
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.4, ease: "easeInOut" }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        delay: index * 0.1 + 0.5,
                                        type: "spring",
                                        stiffness: 300
                                    }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center justify-center space-x-4"
                        >
                            <div className="h-px w-16 bg-gray-700" />
                            <motion.div
                                animate={{ scale: [1, 1.4, 1]}}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-black"
                            >
                                <Heart size={16} fill="currentColor" />
                            </motion.div>
                            <div className="h-px w-16 bg-gray-700" />
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="space-y-2">
                            <p className="text-sm text-gray-500">
                                &copy; {new Date().getFullYear()}. All rights reserved.
                            </p>
                            <p className="text-xs text-gray-600">
                                Built with NextJS & Framer Motion
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </footer>
    )

}