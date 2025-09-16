"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../universal/FadeIn";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "EmployMe! (uOttahack 7 Entry)",
            description:
                "A full-stack job application platform built with ReactJS, Next.js, and TypeScript. Features complete CRUD functionality for job postings and applications, with integrated semantic search and RAG (retrieval augmented generation) to recommend jobs and summarize resumes using AI.",
            technologies: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "MongoDB",
                "Supabase",
                "AI/RAG",
            ],
            githubUrl: "https://github.com/DanThePanMan/EmployMe",
            liveUrl: "#",
            images: ["/projects/employme-1.png"],
        },
        {
            id: 2,
            title: "Members Only",
            description:
                "A full-stack Node.js web application featuring robust authentication and role-based access control. Implements protected routes, user permissions (member/admin), and dynamic content rendering with secure session management.",
            technologies: [
                "Express.js",
                "PostgreSQL",
                "JavaScript",
                "Passport.js",
                "Tailwind CSS",
                "EJS",
                "Bcrypt",
            ],
            githubUrl: "https://github.com/DanThePanMan/members-only",
            liveUrl: "https://members-only-productio.up.railway.app/",
            images: [
                "/projects/members-only-1.png",
                "/projects/members-only-2.png",
            ],
        },
        {
            id: 3,
            title: "Palette Pal",
            description:
                "A fully responsive real-time color palette preview application built with React.js and TailwindCSS. Utilizes REST APIs to dynamically generate diverse color palettes, providing designers and developers with instant color inspiration.",
            technologies: [
                "React.js",
                "JavaScript",
                "HTML/CSS",
                "Tailwind CSS",
                "Web APIs",
                "Vercel",
            ],
            githubUrl: "https://github.com/DanThePanMan/palette-pal",
            liveUrl: "https://palettepal.vercel.app/",
            images: [
                "/projects/palettepal-1.png",
                "/projects/palettepal-2.png",
            ],
        },
        {
            id: 4,
            title: "Gunpla Hub",
            description:
                "A full-stack social media platform for Gundam model (Gunpla) enthusiasts. Features user authentication with JWT, real-time social feed for sharing builds, media uploads with Supabase storage, and a responsive UI. Built with React frontend and Express backend with PostgreSQL database.",
            technologies: [
                "React.js",
                "Express.js",
                "Node.js",
                "PostgreSQL",
                "Prisma ORM",
                "JWT",
                "Tailwind CSS",
                "Supabase",
            ],
            githubUrl: "https://github.com/DanThePanMan/gunpla-hub",
            liveUrl: "#",
            images: ["/projects/gunplahub.png"],
        },
        {
            id: 5,
            title: "Portfolio Website",
            description:
                "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, automatic light/dark mode following system preferences, and showcases my development skills and projects.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "React",
            ],
            githubUrl: "https://github.com/DanThePanMan/Portfolio",
            liveUrl: "#",
            images: ["/projects/portfolio.png"],
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
                        My Projects
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Here are some of the projects I've worked on. Each one
                        represents a unique challenge and learning experience in
                        my development journey.
                    </p>
                </motion.div>
            </FadeIn>

            <div className="grid gap-8 md:gap-12 lg:gap-16">
                {projects.map((project, index) => (
                    <FadeIn key={project.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${
                                index % 2 === 0
                                    ? "lg:flex-row"
                                    : "lg:flex-row-reverse"
                            } items-center gap-6 lg:gap-8 xl:gap-12`}>
                            {/* Project Image */}
                            <div className="w-full lg:w-1/2 xl:w-[45%]">
                                <ProjectCarousel
                                    images={project.images}
                                    projectTitle={project.title}
                                />
                            </div>

                            {/* Project Content */}
                            <div className="w-full lg:w-1/2 xl:w-[55%] space-y-4 lg:space-y-6">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 lg:mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-black dark:text-white font-semibold mb-3 text-sm sm:text-base">
                                        Technologies Used:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-full text-xs sm:text-sm border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300">
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Project Links */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        View Code
                                    </a>
                                    {project.liveUrl !== "#" && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 dark:bg-indigo-400 text-white rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </FadeIn>
                ))}
            </div>

            {/* Call to Action */}
            <FadeIn>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-16 border-t border-gray-300 dark:border-gray-800">
                    <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                        Interested in working together?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities and
                        interesting projects. Let's connect and see what we can
                        build together.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 dark:bg-indigo-400 text-white rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 text-lg font-semibold">
                        Get In Touch
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </FadeIn>
        </div>
    );
};

export default Projects;
