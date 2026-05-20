'use client';

const FilterCard = () => {

    return (
        <>
            <div className="sticky top-28 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-6">

                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">
                        Filters
                    </h3>

                    <button
                        className="text-sm text-red-400 hover:text-red-300 transition"
                    >
                        Reset
                    </button>
                </div>

                <div className="mt-8">

                    <h4 className="font-semibold mb-5">
                        Amenities
                    </h4>

                    <div className="space-y-4">

                        {[
                            "Whiteboard",
                            "Projector",
                            "Wi-Fi",
                            "Power Outlets",
                            "Quiet Zone",
                            "Air Conditioning",
                        ].map((item) => (

                            <label
                                key={item}
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-indigo-500"
                                />

                                <span className="text-gray-700 dark:text-gray-300">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-10">

                    <h4 className="font-semibold mb-5">
                        Hourly rate ($)
                    </h4>

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="number"
                            placeholder="Min"
                            className="h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-transparent px-4 outline-none focus:border-indigo-500"
                        />

                        <input
                            type="number"
                            placeholder="Max"
                            className="h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-transparent px-4 outline-none focus:border-indigo-500"
                        />
                    </div>
                </div>

                <button
                    className="w-full mt-8 h-12 rounded-2xl bg-[#1f325b] hover:bg-indigo-500 transition text-white font-semibold"
                >
                    Filter Rooms
                </button>

            </div>
        </>
    );
};

export default FilterCard;