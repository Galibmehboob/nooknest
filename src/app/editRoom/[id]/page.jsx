const fetchRoom = async (id) => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`,
        {
            cache: 'no-store'
        }
    );

    return res.json();
};

const EditRoomPage = async ({ params }) => {

    const room = await fetchRoom(params.id);

    return (
        <div className="min-h-screen bg-slate-950 py-10 px-4">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-5xl font-bold text-white mb-10">
                    Edit Room
                </h1>

                <form
                    action={`/api/edit-room?id=${room._id}`}
                    method="POST"
                    className="space-y-6 bg-slate-900 p-8 rounded-3xl"
                >

                    <input
                        name="name"
                        defaultValue={room.name}
                        className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white"
                    />

                    <textarea
                        name="description"
                        defaultValue={room.description}
                        rows={5}
                        className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white"
                    />

                    <input
                        name="image"
                        defaultValue={room.image}
                        className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white"
                    />

                    <input
                        name="price"
                        type="number"
                        defaultValue={room.price}
                        className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white"
                    />

                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl">
                        Update Room
                    </button>

                </form>

            </div>

        </div>
    );
};

export default EditRoomPage;