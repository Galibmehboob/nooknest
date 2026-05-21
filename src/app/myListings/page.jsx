import Link from "next/link";

import { headers } from "next/headers";

import { auth } from "@/lib/auth";

import { fetchMyListings } from "@/lib/fetchMyListings";
import Image from "next/image";

const MyListingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const email = session?.user?.email;

    const rooms = await fetchMyListings(email);

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10">

            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

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

                                <h2 className="text-3xl font-semibold text-white mb-2">
                                    No listings yet
                                </h2>

                            </div>

                        </div>

                    ) : (

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                            {
                                rooms?.map((room) => (

                                    <div
                                        key={room._id}
                                        className="bg-slate-900 border border-indigo-500/20 rounded-3xl overflow-hidden"
                                    >

                                        <Image
                                            src={room.image}
                                            alt={room.name}
                                            height={120}
                                            width={120}
                                            className="h-60 w-full object-cover"
                                        />

                                        <div className="p-5">

                                            <h2 className="text-2xl font-bold text-white mb-2">
                                                {room.name}
                                            </h2>

                                            <p className="text-slate-400 text-sm mb-4">
                                                {room.description}
                                            </p>

                                            <div className="flex items-center justify-between">

                                                <span className="text-indigo-400 font-semibold">
                                                    ${room.price}/hr
                                                </span>

                                                <span className="text-slate-400">
                                                    {room.floor}
                                                </span>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyListingsPage;