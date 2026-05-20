const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
];

const AddRoomsPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-white mb-3">
                    Add a New Room
                </h1>

                <p className="text-slate-400 mb-10 text-lg">
                    Share your study room with others. You can edit or remove it any
                    time.
                </p>

                <div className="bg-slate-900 border border-indigo-500/20 rounded-3xl p-8 shadow-xl">
                    <form className="space-y-6">

                        <div>
                            <label className="block text-white font-medium mb-2">
                                Room Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter room name"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>


                        <div>
                            <label className="block text-white font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Write room description..."
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>


                        <div>
                            <label className="block text-white font-medium mb-2">
                                Image URL
                            </label>
                            <input
                                type="url"
                                placeholder="https://..."
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>


                        <div className="grid md:grid-cols-3 gap-5">
                            <div>
                                <label className="block text-white font-medium mb-2">
                                    Floor
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 3rd Floor"
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">
                                    Capacity
                                </label>
                                <input
                                    type="number"
                                    placeholder="2"
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">
                                    Hourly Rate ($)
                                </label>
                                <input
                                    type="number"
                                    placeholder="5"
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                            </div>
                        </div>


                        <div>
                            <h3 className="text-white font-medium mb-4">Amenities</h3>

                            <div className="grid md:grid-cols-3 gap-4">
                                {amenitiesList.map((item) => (
                                    <label
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 cursor-pointer hover:border-indigo-500 transition"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 accent-indigo-500"
                                        />
                                        <span className="text-white">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>


                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl transition duration-200"
                        >
                            Publish Room
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoomsPage;