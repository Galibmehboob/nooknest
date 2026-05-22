
'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";


const amenitiesList = [
    "Wi-Fi",
    "Projector",
    "Quiet Zone",
    "Whiteboard",
    "Air Conditioning",
    "Power Outlets",
];




const FilterCard = () => {
    const router = useRouter();


    const handleFilter = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const min = form.get("min");
        const max = form.get("max");
        const search = form.get("search");


        const amenities = form.getAll("amenities").join(",");

        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (min) params.append("min", min);
        if (max) params.append("max", max);
        if (amenities) params.append("amenities", amenities);

        router.push(`/rooms?${params.toString()}`);
    };

    return (
        <div className="border rounded-3xl p-6 sticky top-24">

            <h2 className="text-2xl font-bold mb-6">
                Filters
            </h2>

            <form onSubmit={handleFilter} className="space-y-8">



                <div>

                    <label className="block mb-2 font-medium">
                        Min Price
                    </label>

                    <input
                        type="number"
                        name="min"
                        placeholder="0"
                        className="w-full border rounded-xl px-4 py-3 bg-transparent"
                    />

                </div>



                <div>

                    <label className="block mb-2 font-medium">
                        Max Price
                    </label>

                    <input
                        type="number"
                        name="max"
                        placeholder="100"
                        className="w-full border rounded-xl px-4 py-3 bg-transparent"
                    />

                </div>



                <div>

                    <h3 className="font-semibold mb-4">
                        Amenities
                    </h3>

                    <div className="space-y-3">

                        {amenitiesList.map((item) => (

                            <label
                                key={item}
                                className="flex items-center gap-3"
                            >

                                <input
                                    type="checkbox"
                                    name="amenities"
                                    value={item}
                                />

                                <span>
                                    {item}
                                </span>

                            </label>
                        ))}

                    </div>

                </div>

                <button
                    type="submit"
                    className="w-full bg-[#1f325b] hover:bg-cyan-600 text-white py-3 rounded-2xl font-semibold"
                >
                    Apply Filters
                </button>

            </form>

        </div>
    );
};

export default FilterCard;