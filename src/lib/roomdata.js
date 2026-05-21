

export const fetchRoomsData = async () => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms`,
        {
            cache: 'no-store',
        }
    );

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