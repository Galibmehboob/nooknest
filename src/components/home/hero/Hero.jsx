"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="mb-4 text-cyan-400 font-medium">
                        Smart Library Booking Platform
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Find Your Perfect
                        <span className="block bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                            Study Room
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-400 max-w-xl">
                        Book quiet, modern study spaces for focus,
                        collaboration, and productivity.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/rooms">
                            <button className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition font-medium">
                                Explore Rooms
                            </button>
                        </Link>

                        <Link href="/addRooms">
                            <button className="px-8 py-4 rounded-full border border-white/10 hover:border-indigo-500 transition font-medium">
                                Add Your Room
                            </button>
                        </Link>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <Swiper
                        modules={[Autoplay, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <Image
                                src="/bannar.jpg"
                                alt="Banner 1"
                                width={600}
                                height={400}
                                className="rounded-3xl border border-white/10 shadow-2xl"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src="/banner.jpg"
                                alt="Banner 2"
                                width={600}
                                height={400}
                                className=" h-[400px] w-[800px] cover rounded-3xl border border-white/10 shadow-2xl"
                            />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>

            </div>
        </section>
    );
}