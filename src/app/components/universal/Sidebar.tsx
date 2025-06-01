import React from "react";

const Sidebar = () => {
    return (
        <nav className="fixed right-10 top-1/2 transform -translate-y-1/2 z-40">
            <ul className="flex flex-col gap-6">
                <li>
                    <a
                        href="#home"
                        className="text-white text-lg hover:text-gray-300 transition-colors duration-300 relative group">
                        <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span>
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className="text-white text-lg hover:text-gray-300 transition-colors duration-300 relative group">
                        <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span>
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="text-white text-lg hover:text-gray-300 transition-colors duration-300 relative group">
                        <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span>
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="text-white text-lg hover:text-gray-300 transition-colors duration-300 relative group">
                        <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
