"use client";
import React, { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden lg:flex fixed right-6 xl:right-10 top-1/2 transform -translate-y-1/2 z-40">
                <ul className="flex flex-col gap-6">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="text-white text-lg hover:text-gray-300 transition-colors duration-300 relative group"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}>
                                <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-6 right-6 z-50 bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-lg border border-gray-700 hover:bg-gray-700/80 transition-all duration-300">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
                    isOpen
                        ? "bg-black/50 backdrop-blur-sm"
                        : "pointer-events-none bg-transparent"
                }`}
                onClick={() => setIsOpen(false)}>
                <nav
                    className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-sm border-l border-gray-700 transition-transform duration-300 transform ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-col p-6 pt-20 gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-white text-lg hover:text-indigo-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-indigo-400"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
