'use client';

import { useState } from 'react';

import {
    Modal,
    Button,
    Input,
    TextArea,
} from '@heroui/react';

import {
    CalendarDays,
    Clock3,
} from 'lucide-react';

const BookingModal = ({ room }) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onPress={() => setOpen(true)}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl py-7 text-lg font-semibold"
            >
                <span className="flex items-center gap-2">
                    <CalendarDays size={20} />
                    Book Now
                </span>
            </Button>

            <Modal
                open={open}
                onOpenChange={setOpen}
            >

                <div className="bg-[#111827] text-white rounded-3xl p-8 max-w-2xl mx-auto mt-20 border border-white/10">

                    <h2 className="text-3xl font-bold">
                        Book {room.name}
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Reserve your study room easily.
                    </p>

                    <div className="space-y-6 mt-8">

                        <Input
                            type="date"
                            label="Booking Date"
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    "bg-black/20 border border-white/10",
                            }}
                        />

                        <div className="grid grid-cols-2 gap-4">

                            <Input
                                type="time"
                                label="Start Time"
                                variant="bordered"
                                startContent={
                                    <Clock3
                                        size={18}
                                        className="text-gray-400"
                                    />
                                }
                                classNames={{
                                    inputWrapper:
                                        "bg-black/20 border border-white/10",
                                }}
                            />

                            <Input
                                type="time"
                                label="End Time"
                                variant="bordered"
                                startContent={
                                    <Clock3
                                        size={18}
                                        className="text-gray-400"
                                    />
                                }
                                classNames={{
                                    inputWrapper:
                                        "bg-black/20 border border-white/10",
                                }}
                            />

                        </div>

                        <TextArea
                            label="Special Note"
                            placeholder="Write something..."
                            minRows={4}
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    "bg-black/20 border border-white/10",
                            }}
                        />

                        <div className="bg-black/20 border border-white/10 rounded-2xl p-5 flex items-center justify-between">

                            <span className="text-gray-400">
                                Total Cost
                            </span>

                            <span className="text-4xl font-bold text-indigo-400">
                                ${room.price}
                            </span>

                        </div>

                        <div className="flex justify-end gap-4">

                            <Button
                                variant="light"
                                onPress={() => setOpen(false)}
                                className="text-white"
                            >
                                Cancel
                            </Button>

                            <Button
                                onPress={() => {

                                    alert('Booking Confirmed');

                                    setOpen(false);
                                }}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white"
                            >
                                Confirm Booking
                            </Button>

                        </div>

                    </div>

                </div>

            </Modal>
        </>
    );
};

export default BookingModal;