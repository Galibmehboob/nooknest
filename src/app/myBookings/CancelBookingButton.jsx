'use client';

import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const CancelBookingButton = ({ booking }) => {

    const router = useRouter();

    const handleCancel = async () => {

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/bookings/${booking._id}`,
            {
                method: 'PATCH',
            }
        );

        const data = await res.json();

        if (data.modifiedCount > 0) {

            toast.success('Booking cancelled');

            router.refresh();
        }
    };

    return (
        <button
            onClick={handleCancel}
            disabled={booking.status === 'cancelled'}
            className={` p-3 rounded-xl font-semibold transition ${booking.status === 'cancelled'
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-500 text-white'
                }`}
        >
            {
                booking.status === 'cancelled'
                    ? 'Cancelled'
                    : <Trash></Trash>
            }
        </button>
    );
};

export default CancelBookingButton;