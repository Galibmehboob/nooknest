import { NextResponse } from "next/server";

export async function POST(req) {

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`,
        {
            method: "DELETE",
        }
    );

    return NextResponse.redirect(
        new URL('/myListings', req.url)
    );
}