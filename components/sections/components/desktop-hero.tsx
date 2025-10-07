import { delay, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
    containerVariants,
    itemVariants,
    imageVariants,
    textVariants,
    scrollToSection,
} from "@/lib/utils";

export default function DesktopHero() {
    return (
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
                    <span className={`text-white`}>Building digital</span>
                    <br />
                    <span className="text-blue-500 font-medium">
                        experiences
                    </span>
                    <br />
                    <span className="text-white">That matter</span>
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className={`text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-lg`}
                >
                    I craft beautiful, functional web applications with modern
                    technologies and thoughtfull user experiences
                </motion.p>
                <motion.div variants={itemVariants} className="flex gap-6 mb-8">
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
                        { icon: FiGithub, href: "#" },
                        { icon: FiLinkedin, href: "#" },
                        { icon: Mail, href: "#" },
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
                        <span className={`text-gray-600`}>React</span>
                        <span className={`text-gray-700`}>&middot;</span>
                        <span className={`text-gray-600`}>Laravel</span>
                        <span className={`text-gray-700`}>&middot;</span>
                        <span className={`text-gray-600`}>Typescript</span>
                        <span className={`text-gray-700`}>&middot;</span>
                        <span className={`text-gray-600`}>NextJS</span>
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
                            ease: "linear",
                        }}
                        className="absolute -inset-4 rounded-3xl border border-blue-500/20"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute -inset-8 rounded-3xl border border-purple-500/10"
                    />
                </div>
            </motion.div>
        </div>
    );
}
