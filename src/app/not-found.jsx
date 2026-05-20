"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4 overflow-hidden">

            {/* Glow */}
            <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 text-center"
            >

                <h1 className="text-8xl md:text-9xl font-black bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                    404
                </h1>


                <h2 className="mt-6 text-3xl md:text-5xl font-bold">
                    Page Not Found
                </h2>


                <p className="mt-5 max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    The page you are looking for doesn't exist
                    or may have been moved.
                </p>


                <Link href="/">
                    <button className="mt-10 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium shadow-lg shadow-indigo-500/20">
                        Back To Home
                    </button>
                </Link>
            </motion.div>
        </main>
    );
}