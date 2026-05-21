import FilterCard from '@/components/rooms/FilterCard';
import RoomCard from '@/components/rooms/RoomCard';
import FiltersDrawer from '@/components/shared/FiltersDrawer';
import { fetchRoomsData } from '@/lib/roomdata';
import { Search } from 'lucide-react';
import LoadingSpinner from '../loading';

export const metadata = {
    title: "Rooms",
};

const RoomPage = async ({ searchParams }) => {

    const params = searchParams;

    const search = params?.search || '';
    const min = params?.min || '';
    const max = params?.max || '';
    const amenities = params?.amenities || '';

    const rooms = await fetchRoomsData({
        search,
        min,
        max,
        amenities,
    });

    const loading = false;

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

                        <form action="/rooms" className="max-w-xl mx-auto relative mb-10">
                            <input
                                type="text"
                                name="search"
                                defaultValue={search}
                                placeholder="Search rooms..."
                                className="w-full h-14 px-5 pr-14 rounded-2xl border"
                            />

                            <button
                                type="submit"
                                className="absolute right-3 bg-indigo-500 text-white p-2 rounded-lg top-1/2 -translate-y-1/2"
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

                            {
                                loading ? (
                                    <div className="col-span-full flex justify-center items-center py-20">
                                        <div className="w-16 h-16 border-[5px] border-white/10 border-t-[#1f325b] rounded-full animate-spin"></div>
                                    </div>
                                ) : (
                                    rooms?.map((room) => (
                                        <RoomCard
                                            key={room._id}
                                            room={room}
                                        />
                                    ))
                                )
                            }

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomPage;