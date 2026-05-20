"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Rooms",
            href: "/rooms",
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur-xl">
            <nav className="max-w-11/12 mx-auto px-4 h-20 flex items-center justify-between">


                <Link href="/">
                    <motion.h1
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent"
                    >
                        NookNest
                    </motion.h1>
                </Link>


                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>


                <div className="hidden md:flex items-center gap-4">


                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full border border-black/10 dark:border-white/10 hover:border-indigo-500 transition"
                    >
                        {theme === "dark" ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>

                    <Link href="/login">
                        <button className="px-5 py-2 rounded-full border border-black/10 dark:border-white/10 hover:border-indigo-500 transition">
                            Login
                        </button>
                    </Link>

                    <Link href="/register">
                        <button className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition">
                            Register
                        </button>
                    </Link>
                </div>

                <div className="flex items-center gap-3 md:hidden">


                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-black/10 dark:border-white/10"
                    >
                        {theme === "dark" ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>

                    <button onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>


            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden px-4 pb-6 bg-white dark:bg-black"
                >
                    <div className="flex flex-col gap-4">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link href="/login">
                            <button className="w-full py-2 rounded-full border border-black/10 dark:border-white/10">
                                Login
                            </button>
                        </Link>

                        <Link href="/register">
                            <button className="w-full py-2 rounded-full bg-indigo-600 text-white">
                                Register
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </header>
    );
}