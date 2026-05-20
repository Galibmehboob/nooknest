export const fetchRoomData = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms`,
        { cache: 'no-store' }
    );

    const rooms = await res.json();

    return rooms || [];

    // console.log(rooms);

};

export const fetchFeaturedRoomData = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/featured`,
        { cache: 'no-store' }
    );
    const data = await res.json();

    return data || null;
};