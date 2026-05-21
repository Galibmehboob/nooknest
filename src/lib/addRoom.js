export const addRoom = async (roomData) => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(roomData),
        }
    );

    return res.json();
};