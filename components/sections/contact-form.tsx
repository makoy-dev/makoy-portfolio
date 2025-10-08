"use client"

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Send } from 'lucide-react'
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/utils";
import TextInput from "../input/text-input";
import SuccessModal from "./components/success-modal";

export default function ContactForm() {  

    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [ showSuccess, setShowSuccess ] = useState(false)
    const [ isSubmitting, setIsSubmitting ] = useState(false)

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: [ "start end", "end start" ]
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])

    const handleInputChange = (key: string, value: string) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        
        e.preventDefault()
        setIsSubmitting(true)

        await new Promise((resolve) => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setShowSuccess(true)
        setFormData({ name: "", email: "", message: "" })

        setTimeout(() => setShowSuccess(false), 3000)

    }

    return (
        <section
                id="contact"
                ref={sectionRef}
                className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden"
            >
                {/* Background Elements */}
                <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
                    <div 
                        className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 bg-blue-500"
                    />
                    <div 
                        className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 bg-purple-500"
                    />
                </motion.div>
                <div className="max-w-6xl mx-auto relative z-10">

                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-center mb-20"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-sm uppercase tracking-widest text-gray-500 mb-4"
                        >
                            Let&apos;s Connect
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-5xl font-light mb-6"
                        >
                            Get In <span className="text-blue-500 font-medium">Touch</span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl max-x-2xl mx-auto text-gray-400"
                        >
                            Ready to start your next project? Let&apos;s discuss how we can bring your ideas to life.
                        </motion.p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Form */}
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={itemVariants}
                                className="p-8 rounded-2xl border bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                            >
                                <h3 className="text-2xl font-medium mb-8">Send me a message</h3>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <TextInput
                                            value={formData.name}
                                            handleInputChange={(text: string) => handleInputChange("name", text)}
                                            label="Your Name"
                                        />
                                        <TextInput
                                            value={formData.email}
                                            handleInputChange={(text: string) => handleInputChange("email", text)}
                                            label="Email Address"
                                        />
                                    </div>
                                    <TextInput
                                        value={formData.message}
                                        textarea
                                        handleInputChange={(text: string) => handleInputChange("message", text)}
                                        label="Your Message"
                                    />
                                    <motion.button
                                        disabled={isSubmitting}
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                                        onClick={handleSubmit}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }}
                                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Info & Social Links */}
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={containerVariants}
                            className="space-y-8"
                        >
                            <motion.div
                                variants={itemVariants}
                            >
                                <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    {CONTACT_INFO.map((info, index) => (
                                        <motion.div
                                            key={info.label}
                                            variants={itemVariants}
                                            whileHover={{ x: 4 }}
                                            className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300"
                                        >
                                            <div className="p-3 rounded-lg bg-gray-700">
                                                <info.icon size={20} className="text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500">
                                                    {info.label}
                                                </div>
                                                <div className="font-medium">
                                                    {info.value}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-medium mb-6">Follow Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {SOCIAL_LINKS.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 bg-gray-800/50 border-gray-700 hover:border-gray-600 ${social.bgColor} ${social.color}`}
                                    >
                                        <social.icon size={20} />
                                        <span className="font-medium">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="p-6 rounded-xl border bg-green-500/10 border-green-500/20"
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium text-green-500">
                                    Available for work
                                </span>
                            </div>
                            <p className="text-sm text-gray-400">
                                I&apos;m currently available for freelance projects and full-time opportunities.
                            </p>
                        </motion.div>
                    </div>

                    {/* <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-center mt-20"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="max-w-2xl mx-auto p-8 rounded-2xl border bg-gray-800/30 border-gray-700"
                        >
                            <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
                            <p className="text-gray-400 mb-6">Sometimes a conversation is worth a thousand messages. Feel free to schedule a call to discuss your project.</p>
                            <motion.button
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-3 rounded-full border font-medium transition-all duration-300 border-gray-600 hover:border-blue-500 hover:text-blue-400"
                            >
                                Schedule a Call
                            </motion.button>
                        </motion.div>
                    </motion.div> */}
                </div>
                <SuccessModal showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
        </section>
    )
}