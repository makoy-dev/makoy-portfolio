"use client"

import { Geist, Geist_Mono } from "next/font/google";
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Navbar() {

    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)

    const links = ["Home", "Skills", /* "Work",  */"About", "Contact"]

    const scrollToSection = (sectionId: string) => {

        const element = document.getElementById(sectionId)

        if (element) {
            element.scrollIntoView({ behavior: "smooth"})
            setIsMenuOpen(false)
        }

    }

    return <motion.nav 
            style={{ opacity: 1}}
            className={`fixed top-0 w-full z-50 px-6 py-4 bg-gray-950/80 backdrop-blur-md border-b border-gray-800`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <Code2 size={24} className="text-blue-500"/> {" "}
                        <span className="text-lg ml-1">Makoy Dev</span>
                    </motion.div>
                    {/* Desktop View */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ y: -2 }}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`text-sm uppercase tracking-wider transition-colors text-gray-400 hover:text-white`}
                            >
                                {item}
                            </motion.button>
                                    
                        ))}
                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            // onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
                            className={`p-2 rounded-full transition-colors text-gray-400 hover:text-white hover:bg-gray-800`}
                        >
                            <Sun size={18} />
                        </motion.button> */}
                    </div>
                    <div className="md:hidden flex items-center space-x-4">
                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}    
                            whileTap={{ scale: 0.95 }}
                            // onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
                            className={`p-2 rounded-full transition-colors text-gray-400 hover:text-white hover:bg-gray-800`}

                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button> */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-full transition-colors text-gray-400 hover:text-white hover:bg-gray-800`}
                        >
                            { isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <AnimatePresence>
                    { isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={`md:hidden mt-4 p-4 rounded-lg bg-gray-900 border border-gray-800`}
                        >
                            {links.map((item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors text-gray-400 hover:text-white`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </motion.div>
                    ) }
                </AnimatePresence>
            </motion.nav>

}
