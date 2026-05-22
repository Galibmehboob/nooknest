export const fetchRoomsData = async (filters = {}) => {

    const query = new URLSearchParams(
        Object.fromEntries(
            Object.entries(filters).filter(([_, value]) =>
                value !== "" &&
                value !== null &&
                value !== undefined
            )
        )
    ).toString();

    const url = query
        ? `${process.env.NEXT_PUBLIC_API_URL}/rooms?${query}`
        : `${process.env.NEXT_PUBLIC_API_URL}/rooms`;

    const res = await fetch(url, {
        cache: "no-store",
    });

    return res.json();
};
export const fetchFeaturedRoomData = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/featured`,
        { cache: 'no-store' }
    );
    const data = await res.json();

    return data || null;
};

