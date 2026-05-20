"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

const FiltersDrawer = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="lg:hidden mt-8">

                <button
                    onClick={() => setOpen(true)}
                    className="h-12 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition text-white flex items-center gap-2"
                >
                    <SlidersHorizontal size={18} />
                    Filters
                </button>

            </div>


            <div
                className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"
                    }`}
            >

                <div
                    onClick={() => setOpen(false)}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                />

                <div
                    className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#111111] border-r border-black/10 dark:border-white/10 p-6 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                        }`}
                >


                    <div className="flex items-center justify-between">

                        <h3 className="text-2xl font-bold">
                            Filters
                        </h3>

                        <button
                            onClick={() => setOpen(false)}
                            className="p-2 rounded-xl border"
                        >
                            <X size={18} />
                        </button>

                    </div>



                    <div className="mt-8">

                        <h4 className="font-semibold mb-4">
                            Amenities
                        </h4>

                        <div className="space-y-3">

                            {[
                                "Whiteboard",
                                "Projector",
                                "Wi-Fi",
                                "Power Outlets",
                                "Quiet Zone",
                                "Air Conditioning",
                            ].map((item) => (

                                <label key={item} className="flex items-center gap-3">
                                    <input type="checkbox" />
                                    <span>{item}</span>
                                </label>

                            ))}

                        </div>
                    </div>

                    <div className="mt-8">

                        <h4 className="font-semibold mb-4">
                            Price Range
                        </h4>

                        <div className="grid grid-cols-2 gap-3">

                            <input
                                type="number"
                                placeholder="Min"
                                className="border p-2 rounded-xl"
                            />

                            <input
                                type="number"
                                placeholder="Max"
                                className="border p-2 rounded-xl"
                            />

                        </div>
                    </div>



                </div>
            </div>
        </>
    );
};

export default FiltersDrawer;