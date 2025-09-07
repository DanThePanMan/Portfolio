import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Daniel Chen - Portfolio",
    description: "Full-stack developer passionate about creating innovative solutions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-sans antialiased bg-white dark:bg-black text-black dark:text-white">
                {children}
            </body>
        </html>
    );
}
