import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    MapPin,
    Users,
    DollarSign,
    CalendarDays,
    BadgeCheck,
} from "lucide-react";
import { fetchRoomData } from "@/lib/roomdata";

const RoomsDetailPage = async ({ params }) => {

    const { id } = await params;


    const rooms = await fetchRoomData();

    const room = rooms.find((r) => r._id === id);

    return (
        <section className="min-h-screen py-14 px-4">
            <div className="max-w-7xl mx-auto">


                <Link
                    href="/rooms"
                    className="inline-flex items-center gap-2 text-white hover:text-indigo-400 transition mb-10"
                >
                    <ArrowLeft size={20} />
                    Back
                </Link>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left */}
                    <div className="lg:col-span-2">

                        {/* Image */}
                        <div className="overflow-hidden rounded-3xl border border-white/10">
                            <Image
                                src={room.image}
                                alt={room.name}
                                width={1200}
                                height={700}
                                className="w-full h-[500px] object-cover"
                            />
                        </div>


                        <div className="mt-8">

                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <h1 className="text-5xl font-bold">
                                    {room.name}
                                </h1>

                                <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full">
                                    <BadgeCheck size={18} />
                                    {room.bookings} bookings
                                </div>
                            </div>

                            <p className="text-gray-400 mt-3">
                                Listed {room.createdAt}
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed mt-8">
                                {room.description}
                            </p>
                        </div>


                        <div className="mt-14">
                            <h2 className="text-3xl font-bold mb-6">
                                Amenities
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {room?.amenities?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 text-gray-300"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6">


                        <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 sticky top-24">

                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h2 className="text-5xl font-bold text-indigo-400">
                                        ${room.price}
                                    </h2>

                                    <p className="text-gray-400 mt-2">
                                        per hour
                                    </p>
                                </div>
                            </div>


                            <div className="space-y-5 mb-8">

                                <div className="flex items-center gap-3 text-gray-300">
                                    <MapPin size={20} className="text-indigo-400" />
                                    {room.floor}
                                </div>

                                <div className="flex items-center gap-3 text-gray-300">
                                    <Users size={20} className="text-indigo-400" />
                                    Up to {room.capacity} people
                                </div>

                                <div className="flex items-center gap-3 text-gray-300">
                                    <DollarSign size={20} className="text-indigo-400" />
                                    {room.bookings} total bookings
                                </div>
                            </div>


                            <button className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 rounded-2xl py-4 text-lg font-semibold">
                                <span className="flex items-center justify-center gap-2">
                                    <CalendarDays size={20} />
                                    Book Now
                                </span>
                            </button>
                        </div>


                        <div className="bg-[#111827] border border-white/10 rounded-3xl p-8">

                            <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
                                Listed By
                            </p>

                            <div className="flex items-center gap-4">

                                <div className="h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center text-2xl font-bold">
                                    {room?.ownerName?.charAt(0)}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        {room.ownerName}
                                    </h3>

                                    <p className="text-gray-400">
                                        {room.ownerEmail}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomsDetailPage;