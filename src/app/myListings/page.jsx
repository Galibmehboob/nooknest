import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
    title: "Listings",
};

const fetchRooms = async (token) => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/myListings`,
        {
            cache: "no-store",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!res.ok) return [];

    return res.json();
};

const MyListingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const token = session?.token;

    const rooms = await fetchRooms(token);

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10">

            <div className="max-w-7xl mx-auto">

                <div className="flex justify-between mb-10">

                    <div>
                        <h1 className="text-5xl font-bold text-white">
                            My Listings
                        </h1>
                    </div>

                    <Link href="/addRooms">
                        <button className="bg-indigo-500 text-white px-6 py-3 rounded-xl">
                            Add Room
                        </button>
                    </Link>

                </div>

                {rooms?.length === 0 ? (
                    <div className="text-center text-white">
                        No Listings Yet
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {rooms.map((room) => (
                            <div key={room._id} className="bg-slate-900 rounded-3xl overflow-hidden">

                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    width={500}
                                    height={300}
                                    className="w-full h-60 object-cover"
                                />

                                <div className="p-5">
                                    <h2 className="text-white text-xl font-bold">
                                        {room.name}
                                    </h2>

                                    <p className="text-slate-400">
                                        {room.description}
                                    </p>

                                    <p className="text-indigo-400 mt-2">
                                        ${room.price}/hr
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
};

export default MyListingsPage;