'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';

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
    const { data: session } = useSession();

    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const handleAmenity = (value) => {

        if (selectedAmenities.includes(value)) {
            setSelectedAmenities(selectedAmenities.filter(item => item !== value));
        } else {
            setSelectedAmenities([...selectedAmenities, value]);
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
        };

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${session?.token}`,
            },
            body: JSON.stringify(roomData),
        });

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

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <input name="name" required placeholder="Room Name"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" />

                        <textarea name="description" required rows={5}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" />

                        <input name="image" type="url" required placeholder="Image URL"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" />

                        <div className="grid md:grid-cols-3 gap-5">

                            <input name="floor" placeholder="Floor"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" />

                            <input name="capacity" type="number" placeholder="Capacity"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" />

                            <input name="price" type="number" placeholder="Price"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" />

                        </div>

                        <div className="grid md:grid-cols-3 gap-4">

                            {amenitiesList.map((item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input type="checkbox" onChange={() => handleAmenity(item)} />
                                    <span className="text-white">{item}</span>
                                </label>
                            ))}

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