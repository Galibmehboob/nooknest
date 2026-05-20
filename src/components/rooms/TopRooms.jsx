import { fetchFeaturedRoomData } from "@/lib/roomdata";
import Image from "next/image";
import Link from "next/link";

const TopRooms = async () => {
    const rooms = await fetchFeaturedRoomData();

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 mt-18">


                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured Rooms
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Discover premium study rooms designed for focus,
                        comfort, and productivity.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {rooms?.map((room) => (
                        <div
                            key={room._id}
                            className="group bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2"
                        >

                            <div className="overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    height={300}
                                    width={400}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>


                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold line-clamp-1">
                                        {room.name}
                                    </h3>

                                    <span className="text-indigo-400 font-bold text-lg whitespace-nowrap">
                                        ${room.price}
                                    </span>
                                </div>

                                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                    {room.description}
                                </p>

                                <Link
                                    href={`/rooms/${room._id}`}
                                    className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 py-3 rounded-xl font-semibold"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center mt-14">
                    <Link
                        href="/rooms"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300"
                    >
                        Visit Rooms
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TopRooms;