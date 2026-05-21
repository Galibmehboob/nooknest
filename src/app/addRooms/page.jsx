'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
];





const AddRoomsPage = () => {

    const router = useRouter();

    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const handleAmenity = (value) => {

        if (selectedAmenities.includes(value)) {

            setSelectedAmenities(
                selectedAmenities.filter(item => item !== value)
            );

        } else {

            setSelectedAmenities([
                ...selectedAmenities,
                value
            ]);
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const form = e.target;

        const roomData = {
            name: form.name.value,
            description: form.description.value,
            image: form.image.value,
            floor: form.floor.value,
            capacity: parseInt(form.capacity.value),
            price: parseInt(form.price.value),
            amenities: selectedAmenities,
            ownerEmail: 'galibmehbub11@gmail.com',
        };

        await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/rooms`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(roomData),
            }
        );

        router.push('/myListings');
    };

    return (
        <div className="min-h-screen bg-slate-950 py-10 px-4">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-5xl font-bold text-white mb-3">
                    Add a New Room
                </h1>

                <p className="text-slate-400 mb-10 text-lg">
                    Share your study room with others.
                </p>

                <div className="bg-slate-900 border border-indigo-500/20 rounded-3xl p-8 shadow-xl">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div>

                            <label className="block text-white font-medium mb-2">
                                Room Name
                            </label>

                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                            />

                        </div>

                        <div>

                            <label className="block text-white font-medium mb-2">
                                Description
                            </label>

                            <textarea
                                name="description"
                                rows={5}
                                required
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                            />

                        </div>

                        <div>

                            <label className="block text-white font-medium mb-2">
                                Image URL
                            </label>

                            <input
                                name="image"
                                type="url"
                                required
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                            />

                        </div>

                        <div className="grid md:grid-cols-3 gap-5">

                            <input
                                name="floor"
                                placeholder="Floor"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                            />

                            <input
                                name="capacity"
                                type="number"
                                placeholder="Capacity"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                            />

                            <input
                                name="price"
                                type="number"
                                placeholder="Price"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                            />

                        </div>

                        <div>

                            <h3 className="text-white font-medium mb-4">
                                Amenities
                            </h3>

                            <div className="grid md:grid-cols-3 gap-4">

                                {amenitiesList.map((item) => (

                                    <label
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 cursor-pointer"
                                    >

                                        <input
                                            type="checkbox"
                                            onChange={() => handleAmenity(item)}
                                            className="w-5 h-5 accent-indigo-500"
                                        />

                                        <span className="text-white">
                                            {item}
                                        </span>

                                    </label>
                                ))}

                            </div>

                        </div>

                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl">
                            Publish Room
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default AddRoomsPage;