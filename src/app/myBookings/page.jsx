import { auth } from "@/lib/auth";
import { ListPlus } from "lucide-react";
import Link from "next/link";
import { headers } from 'next/headers';
import { fetchBookings } from "@/lib/bookings";
import Image from "next/image";
import CancelBookingButton from "./CancelBookingButton";

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const email = session?.user?.email;

    const bookings = await fetchBookings(email);


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

                {
                    bookings?.length === 0 ? (

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
                                    Ready to book a study room?
                                </p>

                                <Link href="/rooms">

                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-7 py-3 rounded-xl font-medium transition">
                                        Browse Rooms
                                    </button>

                                </Link>

                            </div>

                        </div>

                    ) : (

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {
                                bookings.map((booking) => (

                                    <div
                                        key={booking._id}
                                        className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden"
                                    >

                                        <Image
                                            src={booking.roomImage}
                                            alt={booking.roomName}
                                            width={500}
                                            height={300}
                                            className="w-full h-52 object-cover"
                                        />

                                        <div className="p-5 space-y-3">

                                            <h2 className="text-2xl font-bold text-white">
                                                {booking.roomName}
                                            </h2>

                                            <p className="text-slate-400">
                                                Date: {booking.bookingDate}
                                            </p>

                                            <p className="text-slate-400">
                                                Time: {booking.startTime} - {booking.endTime}
                                            </p>

                                            <p className="text-slate-400">
                                                Duration: {booking.duration} Hour
                                            </p>

                                            <p className="text-slate-400">
                                                Total: ${booking.totalPrice}
                                            </p>

                                            <p className="text-slate-400">
                                                Status:
                                                <span className={`ml-2 font-semibold ${booking.status === 'cancelled'
                                                    ? 'text-red-400'
                                                    : 'text-green-400'
                                                    }`}>
                                                    {booking.status}
                                                </span>
                                            </p>

                                            <CancelBookingButton booking={booking} />

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

export default MyBookingsPage;