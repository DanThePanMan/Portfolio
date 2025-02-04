"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
}

export const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1.0], // Custom easing curve
            }}>
            {children}
        </motion.div>
    );
};
