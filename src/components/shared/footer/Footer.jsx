"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="max-w-11/12 mx-auto px-4 py-16">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


                    <div>
                        <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                            NookNest
                        </h2>

                        <p className="mt-4 text-gray-400 leading-relaxed">
                            Find and book quiet, modern study rooms for
                            productivity, collaboration, and focused learning.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-400">
                            <Link
                                href="/"
                                className="hover:text-white transition"
                            >
                                Home
                            </Link>

                            <Link
                                href="/rooms"
                                className="hover:text-white transition"
                            >
                                Rooms
                            </Link>

                            <Link
                                href="/login"
                                className="hover:text-white transition"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="hover:text-white transition"
                            >
                                Register
                            </Link>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Contact
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <div className="flex items-center gap-3 hover:text-white transition">
                                <Mail size={18} />
                                <p>firmbiz@nooknest.com</p>
                            </div>

                            <div className="flex items-center gap-3 hover:text-white transition">
                                <Phone size={18} />
                                <p>+880 1234-567890</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="p-3 rounded-full border border-white/10 hover:border-blue-600 hover:bg-blue-600/10 transition duration-300"
                            >
                                <FaFacebook
                                    size={20}
                                    className="transition duration-300 hover:text-blue-600"
                                />
                            </a>

                            <a
                                href="#"
                                className="p-3 rounded-full border border-white/10 hover:border-white hover:bg-white/10 transition duration-300"
                            >
                                <FaXTwitter
                                    size={20}
                                    className="transition duration-300 hover:text-white"
                                />
                            </a>

                            <a
                                href="#"
                                className="p-3 rounded-full border border-white/10 hover:border-pink-500 hover:bg-pink-500/10 transition duration-300"
                            >
                                <FaInstagram
                                    size={20}
                                    className="transition duration-300 hover:text-pink-500"
                                />
                            </a>

                            <a
                                href="#"
                                className="p-3 rounded-full border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition duration-300"
                            >
                                <FaLinkedin
                                    size={20}
                                    className="transition duration-300 hover:text-blue-500"
                                />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2026 NookNest. All rights reserved.
                    </p>

                    <p className="text-gray-500 text-sm">
                        Designed with Next.js & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}