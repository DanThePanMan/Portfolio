"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
}

export const FadeIn = ({ children, delay = 0.1 }: FadeInProps) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

    return (
        <motion.div
            className="flex flex-row justify-center items-center"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{
                duration: 0.4,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1.0],
            }}>
            {children}
        </motion.div>
    );
};
