"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/utils";
import SectionHeading from "@/components/ui/section-heading";
import TextInput from "@/components/input/text-input";
import SuccessModal from "./components/success-modal";

const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_fl15lwd";
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_ltywa7n";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "TqhyjczcrpplPoZYN";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (key: string, value: string) => {
        setFormData((current) => ({ ...current, [key]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setError("");

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setFormData({ name: "", email: "", message: "" });
            setShowSuccess(true);
        } catch {
            setError("Your message could not be sent. Please email me directly instead.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="section-shell border-t border-white/[0.06] bg-white/[0.018]"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Contact"
                    title="Have a product problem worth solving?"
                    description="Tell me what you are building, where it is stuck, or what you want to improve. I will get back to you as soon as I can."
                />

                <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="rounded-[1.75rem] border border-white/[0.08] bg-slate-950/50 p-6 sm:p-8"
                    >
                        <motion.div variants={itemVariants} className="grid gap-5 sm:grid-cols-2">
                            <TextInput
                                value={formData.name}
                                handleInputChange={handleInputChange}
                                label="Your name"
                                inputKey="name"
                            />
                            <TextInput
                                value={formData.email}
                                handleInputChange={handleInputChange}
                                label="Email address"
                                inputKey="email"
                                type="email"
                            />
                            <div className="sm:col-span-2">
                                <TextInput
                                    value={formData.message}
                                    textarea
                                    handleInputChange={handleInputChange}
                                    label="Project or message"
                                    inputKey="message"
                                />
                            </div>
                        </motion.div>

                        {error && (
                            <p role="alert" className="mt-4 text-sm text-rose-300">
                                {error}
                            </p>
                        )}

                        <motion.button
                            variants={itemVariants}
                            disabled={isSubmitting}
                            type="submit"
                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-60"
                        >
                            {isSubmitting ? "Sending…" : "Send message"}
                            {!isSubmitting && <Send size={17} />}
                        </motion.button>
                    </motion.form>

                    <motion.aside
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="space-y-4"
                    >
                        {CONTACT_INFO.map((info) => (
                            <motion.div
                                key={info.label}
                                variants={itemVariants}
                                className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                                    <info.icon size={19} />
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                                        {info.label}
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-slate-200">{info.value}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div variants={itemVariants} className="flex gap-3 pt-3">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target={social.url.startsWith("http") ? "_blank" : undefined}
                                    rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
                                >
                                    <social.icon size={16} />
                                    {social.name}
                                </a>
                            ))}
                        </motion.div>
                    </motion.aside>
                </div>
            </div>

            <SuccessModal showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
        </section>
    );
}
