import { Plus, ListPlus } from "lucide-react";
import Link from "next/link";

const MyBookingsPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-5xl font-bold text-white">
                            My Bookings
                        </h1>
                        <p className="text-slate-400 mt-2 text-lg">
                            Rooms that you have booked on NookNest.
                        </p>
                    </div>


                </div>


                <div className="border border-indigo-500/20 rounded-3xl bg-slate-900 min-h-[420px] flex items-center justify-center">
                    <div className="text-center">
                        <div className="flex justify-center mb-5">
                            <ListPlus
                                size={50}
                                className="text-indigo-400"
                                strokeWidth={1.5}
                            />
                        </div>

                        <h2 className="text-3xl font-semibold text-white mb-2">
                            No bookings yet
                        </h2>

                        <p className="text-slate-400 mb-8">
                            Ready to book a study room? Browse available listings and secure your spot.
                        </p>

                        <Link href="/rooms">
                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-7 py-3 rounded-xl font-medium transition">
                                Browse Rooms
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingsPage;