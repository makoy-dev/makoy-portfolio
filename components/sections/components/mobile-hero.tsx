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

export default function MobileHero() {
    return (
        <div className="block lg:hidden">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center"
            >
                <motion.div variants={imageVariants} className="mb-8">
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
                                ease: "linear",
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
                    <span className={`text-white`}>Building digital</span>
                    <span className="text-blue-500 font-medium ml-2">
                        experiences
                    </span>
                    <br />
                    <span className={`text-white`}>that matter</span>
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className={`text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed`}
                >
                    I craft beautiful, functional web applications with modern
                    technologies and thoughtful user experiences
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
                        { icon: FiLinkedin, href: "https://www.linkedin.com/in/makoy-came%C3%B1a-14a42312b/" },
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
                    ))}
                </motion.div>
                {/* Tech Stack - Mobile */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap"
                >
                    <span className={`text-gray-600`}>React</span>
                    <span className={`text-gray-700`}>&middot;</span>
                    <span className={`text-gray-600`}>Laravel</span>
                    <span className={`text-gray-700`}>&middot;</span>
                    <span className={`text-gray-600`}>Typescript</span>
                    <span className={`text-gray-700`}>&middot;</span>
                    <span className={`text-gray-600`}>NextJS</span>
                </motion.div>
            </motion.div>
        </div>
    );
}
