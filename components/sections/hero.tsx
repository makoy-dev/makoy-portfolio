"use client"

import { delay, motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react";
import MobileHero from "./components/mobile-hero";
import DesktopHero from "./components/desktop-hero";
export default function Hero() {

    const { scrollY } = useScroll()

    const heroY = useTransform(scrollY, [0,  500], [0, -100])


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
                    <MobileHero />
                    {/* Desktop Layout */}
                    <DesktopHero />
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