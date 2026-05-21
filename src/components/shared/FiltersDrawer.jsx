'use client';

import { useState } from "react";

const amenitiesList = [
    "Wi-Fi",
    "Projector",
    "Quiet Zone",
    "Whiteboard",
    "Air Conditioning",
    "Power Outlets",
];

const FiltersDrawer = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="lg:hidden mb-8">

            <button
                onClick={() => setOpen(!open)}
                className="border px-5 py-3 rounded-2xl"
            >
                Filters
            </button>

            {
                open && (

                    <div className="mt-5 border rounded-3xl p-6">

                        <form
                            action="/rooms"
                            className="space-y-6"
                        >

                            <input
                                type="number"
                                name="min"
                                placeholder="Min Price"
                                className="w-full border rounded-xl px-4 py-3 bg-transparent"
                            />

                            <input
                                type="number"
                                name="max"
                                placeholder="Max Price"
                                className="w-full border rounded-xl px-4 py-3 bg-transparent"
                            />

                            <div className="space-y-3">

                                {amenitiesList.map((item) => (

                                    <label
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <input
                                            type="radio"
                                            name="amenities"
                                            value={item}
                                        />

                                        <span>{item}</span>

                                    </label>
                                ))}

                            </div>

                            <button
                                type="submit"
                                className="w-full bg-cyan-500 text-white py-3 rounded-2xl"
                            >
                                Apply Filters
                            </button>

                        </form>

                    </div>
                )
            }

        </div>
    );
};

export default FiltersDrawer;