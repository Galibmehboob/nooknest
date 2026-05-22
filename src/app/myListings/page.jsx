import Image from "next/image";
import Link from "next/link";



export const metadata = {
    title: "Listings",
};


const fetchRooms = async () => {

    try {

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/myListings?email=galibmehbub11@gmail.com`,
            {
                cache: 'no-store'
            }
        );

        if (!res.ok) {
            return [];
        }

        return res.json();

    } catch (error) {

        return [];
    }
};

const MyListingsPage = async () => {

    const rooms = await fetchRooms();

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10">

            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-10">

                    <div>

                        <h1 className="text-5xl font-bold text-white">
                            My Listings
                        </h1>

                        <p className="text-slate-400 mt-2 text-lg">
                            Rooms that currently host on NookNest.
                        </p>

                    </div>

                    <Link href="/addRooms">

                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl">
                            Add Room
                        </button>

                    </Link>

                </div>

                {
                    rooms?.length === 0 ? (

                        <div className="border border-indigo-500/20 rounded-3xl bg-slate-900 min-h-[420px] flex items-center justify-center">

                            <div className="text-center">

                                <h2 className="text-3xl font-semibold text-white mb-3">
                                    No Listings Yet
                                </h2>

                                <p className="text-slate-400 mb-8">
                                    You haven,t published any room yet.
                                </p>

                                <Link href="/addRooms">

                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-7 py-3 rounded-xl font-medium transition">
                                        Publish Your First Room
                                    </button>

                                </Link>

                            </div>

                        </div>

                    ) : (

                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                            {rooms.map((room) => (

                                <div
                                    key={room._id}
                                    className="bg-slate-900 border border-indigo-500/20 rounded-3xl overflow-hidden"
                                >

                                    <Image
                                        src={room?.image || "https://placehold.co/600x400/png"}
                                        alt={room?.name || "Room"}
                                        width={500}
                                        height={300}
                                        className="w-full h-60 object-cover"
                                    />

                                    <div className="p-5">

                                        <h2 className="text-2xl font-bold text-white mb-2">
                                            {room.name}
                                        </h2>

                                        <p className="text-slate-400 mb-4 line-clamp-2">
                                            {room.description}
                                        </p>

                                        <div className="flex justify-between mb-5">

                                            <span className="text-indigo-400 font-semibold">
                                                ${room.price}/hr
                                            </span>

                                            <span className="text-slate-400">
                                                {room.floor}
                                            </span>

                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-3">

                                            <Link
                                                href={`/editRoom/${room._id}`}
                                                className="flex-1"
                                            >

                                                <button className="w-full bg-[#1f325b] hover:bg-indigo-600 text-white py-3 rounded-xl">
                                                    Edit
                                                </button>

                                            </Link>

                                            <form
                                                action={`/api/delete-room?id=${room._id}`}
                                                method="POST"
                                                className="flex-1"
                                            >

                                                <button className="w-full bg-red-300 hover:bg-red-600 text-white py-3 rounded-xl">
                                                    Delete
                                                </button>

                                            </form>

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default MyListingsPage;