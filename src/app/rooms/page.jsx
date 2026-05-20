"use client";

import RoomsGrid from '@/components/rooms/RoomsGrid';
import { roomsData } from '@/lib/roomdata';
import { SlidersHorizontal, X } from 'lucide-react';
import React, { useState } from 'react';

const RoomPage = () => {

    const [open, setOpen] = useState(false);

    return (
        <section className="py-24">
            <div className="max-w-11/12 mx-auto px-4">


                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">


                    <div>
                        <p className="text-cyan-400 font-medium">
                            Available Study Rooms
                        </p>

                        <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                            Latest Rooms
                        </h2>
                    </div>


                    <div className="w-full lg:max-w-xl">

                        <p className="text-gray-600 dark:text-gray-400">
                            Browse modern, quiet, and fully equipped study
                            rooms designed for productivity and collaboration.
                        </p>


                        <div className="mt-6 relative">

                            <input
                                type="text"
                                placeholder="Search study rooms..."
                                className="w-full h-14 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl px-5 pr-14 outline-none focus:border-indigo-500 transition"
                            />

                            <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition flex items-center justify-center text-white">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>


                {/* Mobile Filter Button */}
                <div className="lg:hidden mt-8">

                    <button
                        onClick={() => setOpen(true)}
                        className="h-12 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition text-white flex items-center gap-2"
                    >
                        <SlidersHorizontal size={18} />
                        Filters
                    </button>
                </div>


                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">


                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block lg:col-span-3">

                        <div className="sticky top-28 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-6">


                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold">
                                    Filters
                                </h3>

                                <button className="text-sm text-red-400 hover:text-red-300 transition">
                                    Reset
                                </button>
                            </div>


                            <div className="mt-8">

                                <h4 className="font-semibold mb-5">
                                    Amenities
                                </h4>

                                <div className="space-y-4">

                                    {[
                                        "Whiteboard",
                                        "Projector",
                                        "Wi-Fi",
                                        "Power Outlets",
                                        "Quiet Zone",
                                        "Air Conditioning",
                                    ].map((item) => (

                                        <label
                                            key={item}
                                            className="flex items-center gap-3 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 accent-indigo-500"
                                            />

                                            <span className="text-gray-700 dark:text-gray-300">
                                                {item}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-10">

                                <h4 className="font-semibold mb-5">
                                    Hourly rate ($)
                                </h4>

                                <div className="grid grid-cols-2 gap-4">

                                    <input
                                        type="number"
                                        placeholder="Min"
                                        className="h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-transparent px-4 outline-none focus:border-indigo-500"
                                    />

                                    <input
                                        type="number"
                                        placeholder="Max"
                                        className="h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-transparent px-4 outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Rooms */}
                    <div className="lg:col-span-9">

                        <RoomsGrid rooms={roomsData} />

                    </div>
                </div>
            </div>


            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${open
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
            >

                {/* Overlay */}
                <div
                    onClick={() => setOpen(false)}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                />

                {/* Drawer */}
                <div
                    className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#111111] border-r border-black/10 dark:border-white/10 p-6 transition-transform duration-300 ${open
                            ? "translate-x-0"
                            : "-translate-x-full"
                        }`}
                >

                    {/* Top */}
                    <div className="flex items-center justify-between">

                        <h3 className="text-2xl font-bold">
                            Filters
                        </h3>

                        <button
                            onClick={() => setOpen(false)}
                            className="p-2 rounded-xl border border-black/10 dark:border-white/10"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Amenities */}
                    <div className="mt-8">

                        <h4 className="font-semibold mb-5">
                            Amenities
                        </h4>

                        <div className="space-y-4">

                            {[
                                "Whiteboard",
                                "Projector",
                                "Wi-Fi",
                                "Power Outlets",
                                "Quiet Zone",
                                "Air Conditioning",
                            ].map((item) => (

                                <label
                                    key={item}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-indigo-500"
                                    />

                                    <span className="text-gray-700 dark:text-gray-300">
                                        {item}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mt-10">

                        <h4 className="font-semibold mb-5">
                            Hourly rate ($)
                        </h4>

                        <div className="grid grid-cols-2 gap-4">

                            <input
                                type="number"
                                placeholder="Min"
                                className="h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-transparent px-4 outline-none focus:border-indigo-500"
                            />

                            <input
                                type="number"
                                placeholder="Max"
                                className="h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-transparent px-4 outline-none focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomPage;