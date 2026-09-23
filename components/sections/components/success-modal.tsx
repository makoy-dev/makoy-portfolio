

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Sparkles } from 'lucide-react'
import { Dispatch, SetStateAction } from "react";
export default function SuccessModal({
    showSuccess,
    setShowSuccess
}: {
    showSuccess: boolean;
    setShowSuccess: Dispatch<SetStateAction<boolean>>;
}) { 
    return <AnimatePresence>
        {showSuccess && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={() => setShowSuccess(false)}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 p-8 text-center shadow-2xl"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={() => setShowSuccess(false)}
                        className="absolute top-4 right-4 p-1 rounded-full transition-colors hover:bg-gray-700"
                    >
                        <X size={18} />
                    </button>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15"
                    >
                        <CheckCircle size={32} className="text-emerald-300" />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-medium mb-2"
                    >
                        Message sent
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 mb-6"
                    >
                        Thanks for reaching out. I&apos;ll get back to you as soon as I can.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center"
                    >
                        <Sparkles className="text-yellow-500" size={24} />
                    </motion.div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
}
