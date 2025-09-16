"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../universal/FadeIn";

const Contact = () => {
    const contactInfo = [
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
            label: "Email",
            value: "danielchenschw@gmail.com",
            href: "mailto:danielchenschw@gmail.com",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            label: "LinkedIn",
            value: "daniel-chen-uottawa",
            href: "https://linkedin.com/in/daniel-chen-uottawa/",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
            label: "GitHub",
            value: "DanThePanMan",
            href: "https://github.com/DanThePanMan",
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-4 lg:mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        I&apos;m always interested in new opportunities and
                        exciting projects. Whether you have a question, want to
                        collaborate, or just want to say hello, feel free to
                        reach out!
                    </p>
                </motion.div>
            </FadeIn>

            <div className="max-w-5xl mx-auto">
                <div className="space-y-12">
                    {/* Contact Options */}
                    <FadeIn>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center space-y-6 lg:space-y-8">
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 lg:mb-6">
                                    Let&apos;s Connect
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8 lg:mb-12 max-w-2xl mx-auto">
                                    I&apos;m currently a Computer Science
                                    student at the University of Ottawa.
                                    I&apos;m passionate about full-stack
                                    development, data engineering, and building
                                    innovative solutions. Feel free to reach
                                    out!
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        target={
                                            item.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            item.href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center gap-4 p-6 bg-white/80 dark:bg-gray-800/30 rounded-2xl border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-white dark:hover:bg-gray-800/50 transition-all duration-300 group min-h-[180px] shadow-sm hover:shadow-md">
                                        <div className="w-16 h-16 bg-indigo-500 dark:bg-indigo-400 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-all duration-300 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="text-center w-full">
                                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                                                {item.label}
                                            </p>
                                            <p className="text-gray-900 dark:text-white font-semibold text-base break-words leading-tight">
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="pt-8">
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                    Currently based in:
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-8 h-8 bg-indigo-500 dark:bg-indigo-400 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-gray-900 dark:text-white font-semibold text-lg">
                                        Ottawa, Ontario, Canada
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Contact;
