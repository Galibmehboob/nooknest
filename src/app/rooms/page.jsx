import RoomCard from '@/components/rooms/RoomCard';
import FiltersDrawer from '@/components/shared/FiltersDrawer';
import { Search } from 'lucide-react';

const RoomPage = async () => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms`,
        { cache: "no-store" }
    );

    const rooms = await res.json();

    console.log(rooms);

    return (
        <section className="py-16 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
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
                                <Search size={18} />
                            </button>

                        </div>
                    </div>
                </div>


                <FiltersDrawer />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">

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

                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {rooms?.map((room) => (
                            <RoomCard key={room._id} room={room} />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomPage;