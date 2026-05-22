import { auth } from "@/lib/auth";
import { BadgeCheck, Calendar, Clock, DollarSign, ListPlus, Timer, XCircle } from "lucide-react";
import Link from "next/link";
import { headers } from 'next/headers';
import { fetchBookings } from "@/lib/bookings";
import Image from "next/image";
import CancelBookingButton from "./CancelBookingButton";
import LoadingSpinner from "../loading";



export const metadata = {
    title: "Bookings",
};


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



                        <div className="grid grid-cols-1 gap-5">

                            {bookings.map((booking) => (

                                <div
                                    key={booking._id}
                                    className="flex flex-col md:flex-row bg-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition"
                                >

                                    {/* Image */}
                                    <div className="md:w-56 w-full h-44 md:h-auto">
                                        <Image
                                            src={booking.roomImage}
                                            alt={booking.roomName}
                                            width={400}
                                            height={300}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>


                                    <div className="flex-1 p-5 flex flex-col justify-between">


                                        <div>

                                            <div className="flex items-start justify-between gap-3">

                                                <h2 className="text-lg font-semibold text-white">
                                                    {booking.roomName}
                                                </h2>

                                                <span className={`px-3 py-1 text-xs rounded-full border flex items-center gap-1 ${booking.status === "cancelled"
                                                    ? "border-red-500/30 text-red-400"
                                                    : "border-green-500/30 text-green-400"
                                                    }`}>
                                                    {booking.status === "cancelled" ? (
                                                        <XCircle size={14} />
                                                    ) : (
                                                        <BadgeCheck size={14} />
                                                    )}
                                                    {booking.status}
                                                </span>

                                            </div>

                                            <div className="mt-3 space-y-2 text-sm text-slate-400">

                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} />
                                                    {booking.bookingDate}
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Clock size={16} />
                                                    {booking.startTime} - {booking.endTime}
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Timer size={16} />
                                                    {booking.duration} hour
                                                </div>

                                                <div className="flex items-center gap-2 text-slate-200 font-medium">
                                                    <DollarSign size={16} />
                                                    {booking.totalPrice}
                                                </div>

                                            </div>

                                        </div>


                                        <div className="mt-5 flex items-center justify-between">

                                            <p className="text-xs text-slate-500">
                                                ID: {booking._id.slice(-6)}
                                            </p>

                                            <CancelBookingButton booking={booking} />

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

export default MyBookingsPage;