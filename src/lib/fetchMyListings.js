export const fetchMyListings = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/myListings`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) return [];

    return res.json();
};