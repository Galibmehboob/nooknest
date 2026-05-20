"use client";

import { motion } from "framer-motion";
import { Layers3, Users, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RoomCard({ room }) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-xl"
        >

            <div className="overflow-hidden">
                <Image
                    src={room.image}
                    alt={room.name}
                    loading="eager"
                    height={200}
                    width={400}
                    className="w-full h-64 object-cover"
                />
            </div>


            <div className="p-6">


                <div className="flex items-start justify-between gap-4">

                    <Link href={`/rooms/${room._id}`} className="flex-1 block">
                        <h3 className="text-2xl font-bold line-clamp-1">
                            {room.name}
                        </h3>
                    </Link>

                    <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                        ${room.price}/hr
                    </div>
                </div>


                <p className="mt-4 text-gray-600 dark:text-gray-400 line-clamp-2">
                    {room.description}
                </p>


                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">

                    <div className="flex items-center gap-2">
                        <Layers3 size={16} />
                        <span>{room.floor}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{room.capacity} people</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <DollarSign size={16} />
                        <span>{room.bookings} bookings</span>
                    </div>
                </div>


                <div className="mt-5 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((item) => (
                        <span
                            key={item}
                            className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-sm"
                        >
                            {item}
                        </span>
                    ))}

                    {room.amenities.length > 3 && (
                        <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-sm">
                            +{room.amenities.length - 3} more
                        </span>
                    )}
                </div>


                <Link href={`/rooms/${room._id}`}>
                    <button className="mt-8 w-full py-4 rounded-2xl border border-black/10 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition font-medium">
                        View Details
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}