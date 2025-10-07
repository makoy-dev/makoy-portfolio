"use client"

import { delay, motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
export default function Hero() {

    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0,  500], [0, -100])

    const scrollToSection = (sectionId: string) => {

        const element = document.getElementById(sectionId)

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }

    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChilder: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y:30, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    }

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut" as const,
                delay: 0.5
            }
        }
    }

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    }

    return (
        <div className={`min-h-screen transition-all duration-500 bg-gray-950 text-white`}>
            <motion.section
                id="home"
                style={{ y: heroY }}
                className="min-h-screen flex items-center justify-center relative px-6 pt-10"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10  bg-blue-500`}
                    >
                        <motion.div
                            animate={{
                                scale: [1.1, 1, 1.1],
                                rotate: [360, 180, 0]
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className={`absolute bottom-20 left-20 w-48 h-48 rounded=full blue-3xl opacity-10 bg-purple-500`}
                        >
                            
                        </motion.div>
                    </motion.div>
                </div>
                <div className="max-w-7xl mx-auto w-full z-10 mt-20">
                    {/* Mobile Layout */}
                    <div className="block lg:hidden">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="text-center"
                        >
                            <motion.div 
                                variants={imageVariants}
                                className="mb-8"
                            >
                                <div className="w-32 h-32 mx-auto relative">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`w-full h-32 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl`}
                                    >
                                        <img 
                                            src={"/images/profpic2.png"}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={textVariants}
                                className={`text-sm uppercase tracking-widest text-gray-500 mb-4`}
                            >
                                Full Stack Developer
                            </motion.div>
                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
                            >
                                <span
                                    className={`text-white`}
                                >
                                    Building digital
                                </span>
                                <span className="text-blue-500 font-medium ml-2">
                                    experiences
                                </span>
                                <br />
                                <span className={`text-white`}>
                                    that matter
                                </span>
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className={`text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed`}
                            >
                                I craft beautiful, functional web applications with modern technologies and thoughtful user experiences
                            </motion.p>
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("work")}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                                >
                                    View Work
                                </motion.button>
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("contact")}
                                    className={`border border-gray-700 hover:border-gray-600 text-gray-300 px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                                >
                                    Get in Touch
                                </motion.button>                                
                            </motion.div>
                            {/* Social Links - Mobile */}
                            <motion.div
                                variants={itemVariants}
                                className="flex justify-center space-x-6 mb-8"
                            >
                                {[
                                    { icon: FiGithub, href: "#" },
                                    { icon: FiLinkedin, href: "#" },
                                    { icon: Mail, href: "#" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className={`p-3 rounded-full transition-colors text-gray-400 hover:text-white hover:bg-gray-800`}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))
                                }
                            </motion.div>
                            {/* Tech Stack - Mobile */}
                            <motion.div
                                variants={itemVariants}
                                className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap"
                            >
                                <span
                                    className={`text-gray-600`}
                                >
                                    React
                                </span>
                                <span
                                    className={`text-gray-700`}
                                >
                                    &middot;
                                </span>
                                <span
                                    className={`text-gray-600`}
                                >
                                    Laravel
                                </span>
                                <span
                                    className={`text-gray-700`}
                                >
                                    &middot;
                                </span>
                                <span
                                    className={`text-gray-600`}
                                >
                                    Typescript
                                </span>
                                <span
                                    className={`text-gray-700`}
                                >
                                    &middot;
                                </span>
                                <span
                                    className={`text-gray-600`}
                                >
                                    NextJS
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={textVariants}
                                className={`text-sm uppercase tracking-widest text-gray-500 mb-6`}
                            >
                                Full Stack Developer
                            </motion.div>
                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
                            >
                                <span 
                                    className={`text-white`}
                                >
                                    Building digital
                                </span>
                                <br />
                                <span className="text-blue-500 font-medium">
                                    experiences
                                </span>
                                <br />
                                <span className="text-white">
                                    That matter
                                </span>
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className={`text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-lg`}
                            >
                                I craft beautiful, functional web applications with modern technologies and thoughtfull user experiences
                            </motion.p>
                            <motion.div
                                variants={itemVariants}
                                className="flex gap-6 mb-8"
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("work")}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                                >
                                    View Work
                                </motion.button>
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("contact")}
                                    className={`border border-gray-700 hover:border-gray-600 text-gray-300 px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                                >
                                    Get in Touch
                                </motion.button>                                
                            </motion.div>
                            {/* Social LInks Desktop */}
                            <motion.div
                                variants={itemVariants}
                                className="flex space-x-6 mb-12"
                            >
                                {[
                                    { icon: FiGithub, href: "#"},
                                    { icon: FiLinkedin, href: "#"},
                                    { icon: Mail, href: "#"}
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className="p-3 rounded-full transition colors text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                        {/* Right Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                {/* Tech Stack Desktop X*/}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 -left-28"
                                >
                                    <span
                                        className={`text-gray-600`}
                                    >
                                        React
                                    </span>
                                    <span
                                        className={`text-gray-700`}
                                    >
                                        &middot;
                                    </span>
                                    <span
                                        className={`text-gray-600`}
                                    >
                                        Laravel
                                    </span>
                                    <span
                                        className={`text-gray-700`}
                                    >
                                        &middot;
                                    </span>
                                    <span
                                        className={`text-gray-600`}
                                    >
                                        Typescript
                                    </span>
                                    <span
                                        className={`text-gray-700`}
                                    >
                                        &middot;
                                    </span>
                                    <span
                                        className={`text-gray-600`}
                                    >
                                        NextJS
                                    </span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl"
                                >
                                    <img
                                        src={"/images/profpic2.png"}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                {/* Decorative Elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute -inset-4 rounded-3xl border border-blue-500/20"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        duration: 30,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute -inset-8 rounded-3xl border border-purple-500/10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Scroll Indication */}
                <motion.div
                    animate={{ y: [ 0, 8, 0 ] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <ArrowDown
                        size={20}
                        className={`text-gray-600`}
                    />
                </motion.div>
            </motion.section>
        </div>
    )

}