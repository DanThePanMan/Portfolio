"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectCarouselProps {
    images: string[];
    projectTitle: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
    images,
    projectTitle,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    if (images.length === 0) {
        return (
            <div className="relative bg-gray-200 dark:bg-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 h-48 sm:h-56 md:h-64 flex items-center justify-center border border-gray-300 dark:border-gray-700">
                <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-500 dark:bg-indigo-400 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <span className="text-lg sm:text-2xl font-bold text-white">
                            {projectTitle.charAt(0)}
                        </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        Project Preview
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative group">
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0">
                        <Image
                            src={images[currentIndex]}
                            alt={`${projectTitle} screenshot ${
                                currentIndex + 1
                            }`}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/50 hover:bg-white/90 dark:hover:bg-black/70 text-gray-900 dark:text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/50 hover:bg-white/90 dark:hover:bg-black/70 text-gray-900 dark:text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </>
                )}

                {/* Image indicator dots */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToImage(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "bg-indigo-500 dark:bg-indigo-400 w-6"
                                        : "bg-gray-600/70 dark:bg-white/50 hover:bg-gray-800/90 dark:hover:bg-white/80"
                                }`}
                            />
                        ))}
                    </div>
                )}

                {/* Image counter */}
                {images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/50 text-gray-900 dark:text-white text-sm px-2 py-1 rounded z-10 shadow-lg">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCarousel;
