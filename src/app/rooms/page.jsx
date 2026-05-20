import FilterCard from '@/components/rooms/FilterCard';
import RoomCard from '@/components/rooms/RoomCard';
import FiltersDrawer from '@/components/shared/FiltersDrawer';
import { fetchRoomData } from '@/lib/roomdata';
import { Search } from 'lucide-react';

const RoomPage = async ({ searchParams }) => {

    const params = await searchParams;

    const search = params?.search || '';
    const min = params?.min || '';
    const max = params?.max || '';
    const amenities = params?.amenities || '';

    const rooms = await fetchRoomData({
        search,
        min,
        max,
        amenities,
    });

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

                        <form
                            action="/rooms"
                            className="mt-6 relative"
                        >

                            <input
                                type="text"
                                name="search"
                                defaultValue={search}
                                placeholder="Search study rooms..."
                                className="w-full h-14 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl px-5 pr-14 outline-none focus:border-indigo-500 transition"
                            />

                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition flex items-center justify-center text-white"
                            >
                                <Search size={18} />
                            </button>

                        </form>
                    </div>
                </div>

                <FiltersDrawer />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <div className="hidden lg:block lg:col-span-3">
                        <FilterCard />
                    </div>

                    <div className="lg:col-span-9">

                        <div className="flex items-center justify-between mb-8">

                            <h3 className="text-md font-semibold">
                                Showing {rooms?.length} Rooms
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400">
                                Available Study Spaces
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                            {rooms?.map((room) => (
                                <RoomCard
                                    key={room._id}
                                    room={room}
                                />
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomPage;