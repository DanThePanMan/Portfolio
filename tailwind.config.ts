import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                move: "move 5s linear infinite",
                aurora: "aurora 60s linear infinite",
            },
            keyframes: {
                move: {
                    "0%": { transform: "translateX(-200px)" },
                    "100%": { transform: "translateX(200px)" },
                },
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            backgroundImage: {
                "dot-thick-neutral-300": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3e%3ccircle fill='%23d1d5db' id='pattern-circle' cx='10' cy='10' r='2.5'%3e%3c/circle%3e%3c/svg%3e")`,
                "dot-thick-neutral-800": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3e%3ccircle fill='%23374151' id='pattern-circle' cx='10' cy='10' r='2.5'%3e%3c/circle%3e%3c/svg%3e")`,
                "dot-thick-indigo-500": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3e%3ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3e%3c/circle%3e%3c/svg%3e")`,
            },
        },
    },
    plugins: [],
} satisfies Config;
