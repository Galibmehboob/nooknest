export const fetchMyListings = async (email) => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/myListings?email=${email}`,
        {
            cache: "no-store",
        }
    );

    return res.json();
};