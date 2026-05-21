"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

export default function TestimonialsSection() {
    const reviews = [
        {
            id: 1,
            name: "Sarah Ahmed",
            role: "UI Designer",
            review:
                "The environment feels incredibly premium and peaceful. Perfect for focused work sessions.",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "James Walker",
            role: "Developer",
            review:
                "Absolutely love the modern setup and 24/7 access. The vibe is unmatched.",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            role: "Student",
            review:
                "Best premium workspace experience I’ve ever had. Super clean and comfortable.",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: 4,
            name: "Michael Lee",
            role: "Entrepreneur",
            review:
                "The interiors and lighting create an amazing productive atmosphere.",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
        },
    ];

    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-[#8ea3d0] uppercase tracking-[6px] font-semibold mb-4">
                        Client Reviews
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        What People Say
                    </h2>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="bg-[#111111] border border-white/10 rounded-[30px] p-8 h-full hover:border-[#1f325b] transition duration-500 group">

                                {/* User */}
                                <div className="flex items-center gap-4 mb-6">

                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-white text-xl font-semibold">
                                            {review.name}
                                        </h3>

                                        <p className="text-[#8ea3d0] text-sm">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Review */}
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {review.review}
                                </p>

                                {/* Stars */}
                                <div className="flex gap-1 text-yellow-400 text-xl">
                                    ★★★★★
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}