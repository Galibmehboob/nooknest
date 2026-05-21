import { NextResponse } from "next/server";

export async function POST(req) {

    const formData = await req.formData();

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    const updatedRoom = {
        name: formData.get("name"),
        description: formData.get("description"),
        image: formData.get("image"),
        price: parseInt(formData.get("price")),
    };

    await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`,
        {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedRoom),
        }
    );

    return NextResponse.redirect(
        new URL('/myListings', req.url)
    );
}