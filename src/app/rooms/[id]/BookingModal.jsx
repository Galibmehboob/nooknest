'use client';
import { useSession } from '@/lib/auth-client';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

import {
    Button,
    Input,
} from '@heroui/react';

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@heroui/modal';

import {
    CalendarDays,
    X,
} from 'lucide-react';

const BookNowModal = ({ room }) => {

    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [note, setNote] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    const duration = useMemo(() => {

        if (!startTime || !endTime) return 0;

        const start = new Date(`2000-01-01T${startTime}`);
        const end = new Date(`2000-01-01T${endTime}`);

        const diff = (end - start) / (1000 * 60 * 60);

        if (diff <= 0) return 0;

        return diff;

    }, [startTime, endTime]);

    const totalPrice = useMemo(() => {

        if (!room?.price) return 0;

        return duration * room.price;

    }, [duration, room]);

    const handleBooking = async () => {


        if (!date || !startTime || !endTime) {
            toast.error('Please fill all fields');
            return;
        }

        if (duration <= 0) {
            toast.error('End time must be greater than start time');
            return;
        }

        const bookingData = {
            roomId: room?._id,
            roomName: room?.name,
            roomImage: room?.image,
            roomPrice: room?.price,

            bookingDate: date,
            startTime,
            endTime,
            duration,
            totalPrice,
            note,

            userName: session?.user?.name,
            userEmail: session?.user?.email,

            status: 'confirmed',
        };

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            const data = await res.json();

            if (data.insertedId) {

                toast.success('Booking confirmed');

                setIsOpen(false);

                setDate('');
                setStartTime('');
                setEndTime('');
                setNote('');
            }

        } catch (error) {

            toast.error('Booking failed');
        }
    };

    return (
        <>
            <Button
                onPress={() => setIsOpen(true)}
                className="flex w-full items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 rounded-2xl py-7 text-lg font-semibold"
            >
                <CalendarDays size={20} />
                Book Now
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                placement="center"
                hideCloseButton
                backdrop="blur"
            >
                <ModalContent className="max-w-md bg-[#0B1120] border border-white/10 rounded-2xl">

                    {(onClose) => (
                        <>
                            <ModalHeader className="flex items-center justify-between px-5 pt-5 pb-2">

                                <div>
                                    <h2 className="text-lg font-semibold text-white">
                                        Book {room?.name}
                                    </h2>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Pick date & time
                                    </p>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <X size={18} />
                                </button>

                            </ModalHeader>

                            <ModalBody className="px-5 py-3 space-y-4">

                                <div>

                                    <label className="text-sm text-white mb-2 block">
                                        Date
                                    </label>

                                    <Input
                                        type="date"
                                        variant="bordered"
                                        className="text-white"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />

                                </div>

                                <div className="grid grid-cols-2 gap-3">

                                    <div>

                                        <label className="text-sm text-white mb-2 block">
                                            Start Time
                                        </label>

                                        <Input
                                            type="time"
                                            variant="bordered"
                                            className="text-white"
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                        />

                                    </div>

                                    <div>

                                        <label className="text-sm text-white mb-2 block">
                                            End Time
                                        </label>

                                        <Input
                                            type="time"
                                            variant="bordered"
                                            className="text-white"
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                        />

                                    </div>

                                </div>

                                <div>

                                    <label className="text-sm text-white mb-2 block">
                                        Note
                                    </label>

                                    <textarea
                                        placeholder="Optional note"
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        className="w-full min-h-[120px] rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:border-indigo-500"
                                    />

                                </div>

                                <div className="space-y-3 border border-white/10 rounded-xl px-4 py-4">

                                    <div className="flex items-center justify-between">

                                        <span className="text-sm text-gray-400">
                                            Price Per Hour
                                        </span>

                                        <span className="text-white font-semibold">
                                            ${room?.price || 0}
                                        </span>

                                    </div>

                                    <div className="flex items-center justify-between">

                                        <span className="text-sm text-gray-400">
                                            Duration
                                        </span>

                                        <span className="text-white font-semibold">
                                            {duration || 0} Hour
                                        </span>

                                    </div>

                                    <div className="border-t border-white/10 pt-3 flex items-center justify-between">

                                        <span className="text-sm text-gray-400">
                                            Total
                                        </span>

                                        <span className="text-2xl font-bold text-indigo-500">
                                            ${totalPrice || 0}
                                        </span>

                                    </div>

                                </div>

                            </ModalBody>

                            <ModalFooter className="px-5 pb-5 pt-2">

                                <Button
                                    variant="light"
                                    onPress={onClose}
                                    className="text-white"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    onPress={handleBooking}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl"
                                >
                                    Confirm
                                </Button>

                            </ModalFooter>
                        </>
                    )}

                </ModalContent>
            </Modal>
        </>
    );
};

export default BookNowModal;