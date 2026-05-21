"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { theme, toggleTheme } = useTheme();

    const router = useRouter();

    const { data: session, isPending } = useSession();

    const [profileOpen, setProfileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogOut = async () => {
        await signOut();

        router.push("/");
    };

    const navLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Rooms",
            href: "/rooms",
        },
        {
            name: "Add Room",
            href: "/addRooms",
        },
        {
            name: "My Listings",
            href: "/myListings",
        },
        {
            name: "My Bookings",
            href: "/myBookings",
        },
    ];

    return (
        <header
            className={`sticky top-0 z-50 border-b border-black/10 dark:border-white/10 backdrop-blur-xl transition-all duration-300 ${scrolled
                ? "bg-white/90 dark:bg-black/80"
                : "bg-white/70 dark:bg-black/30"
                }`}
        >
            <nav className="max-w-11/12 mx-auto px-4 h-20 flex items-center justify-between">

                <Link href="/">
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Image
                            src="/logo.png"
                            alt="NookNest Logo"
                            loading="eager"
                            height={100}
                            width={100}
                            className="inline-block"
                        />
                    </motion.div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {!session
                        ? navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-bold dark:text-gray-300 hover:text-indigo-500 transition"
                            >
                                {link.name}
                            </Link>
                        ))
                        : navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-bold dark:text-gray-300 hover:text-indigo-500 transition"
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

                    {isPending ? (
                        <div className="text-sm text-gray-500">
                            Loading...
                        </div>
                    ) : session ? (
                        <>
                            <div className="relative">
                                <Image
                                    onClick={() => setProfileOpen(!profileOpen)}
                                    src={
                                        session?.user?.image ||
                                        "https://i.ibb.co/2s3mLZP/default-avatar.png"
                                    }
                                    alt="user"
                                    width={40}
                                    height={40}
                                    className="rounded-full h-10 w-10 border border-indigo-500 object-cover cursor-pointer"
                                />

                                {profileOpen && (
                                    <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl p-5 z-50">


                                        <div className="border-b border-slate-700 pb-4">
                                            <h3 className="text-white font-semibold text-lg">
                                                {session?.user?.name}
                                            </h3>

                                            <p className="text-sm text-slate-400 break-all">
                                                {session?.user?.email}
                                            </p>
                                        </div>


                                        <div className="flex flex-col gap-2 mt-4">

                                            <Link
                                                href="/myListings"
                                                className="px-4 py-2 rounded-xl text-slate-200 hover:bg-slate-800 transition"
                                            >
                                                My Listings
                                            </Link>

                                            <Link
                                                href="/myBookings"
                                                className="px-4 py-2 rounded-xl text-slate-200 hover:bg-slate-800 transition"
                                            >
                                                My Bookings
                                            </Link>

                                            <button
                                                onClick={handleLogOut}
                                                className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <button className="px-5 py-2 rounded-full font-semibold border border-black/10 dark:border-white/10 hover:border-indigo-500 transition">
                                    Login
                                </button>
                            </Link>

                            <Link href="/register">
                                <button className="px-5 py-2 rounded-full bg-[#1f325b] hover:bg-indigo-500 text-white font-semibold transition">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
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

                        {(!session
                            ? navLinks.slice(0, 2)
                            : navLinks
                        ).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {session ? (
                            <button
                                onClick={handleLogOut}
                                className="w-full py-2 rounded-full bg-red-500 text-white"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
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
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </header>
    );
}