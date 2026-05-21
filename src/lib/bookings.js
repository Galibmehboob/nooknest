export const fetchBookings = async (email) => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings?email=${email}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch bookings");
    }

    return res.json();
};