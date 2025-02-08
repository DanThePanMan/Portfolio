"use client";
import AboutMe from "./components/AboutMe";
import { FadeIn } from "./components/FadeIn";
import { HeroHighlight } from "./components/HeroHighlight";
import { TitleCard } from "./components/TitleCard";
import { TitleToBody } from "./components/TitleToBody";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 2000); // Animation will last 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 bg-black z-50 flex items-center justify-center pointer-events-none">
                        <motion.h1
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-6xl font-bold text-white">
                            todo: make this actually cool somehow
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <HeroHighlight className="h-screen flex items-center justify-center">
                <FadeIn>
                    <TitleCard />
                </FadeIn>
            </HeroHighlight>
            <FadeIn>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    className="fill-black dark:fill-white absolute bottom-0 left-0 right-0 mx-auto mb-4 animate-bounce"
                    viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                    />
                </svg>
            </FadeIn>
            <TitleToBody />
            <div className="p-32 flex flex-col justify-start items-center w-[100%]">
                <FadeIn>
                    <AboutMe />
                </FadeIn>
            </div>
        </>
    );
}
