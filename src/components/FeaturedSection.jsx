import Image from "next/image";
import Link from "next/link";

export default function FeaturedSection() {
    const features = [
        {
            id: 1,
            title: "Luxury Workspace",
            description:
                "Modern interiors with silent zones and premium comfort for focused productivity.",
            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Elite Private Rooms",
            description:
                "Experience premium study cabins with elegant lighting and distraction-free atmosphere.",
            image:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
            featured: true,
        },
        {
            id: 3,
            title: "24/7 Premium Access",
            description:
                "Access your workspace anytime with high-speed internet and luxury facilities.",
            image:
                "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4">


                <div className="text-center mb-16">
                    <p className="text-[#8ea3d0] uppercase tracking-[6px] font-semibold mb-4">
                        Premium Features
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Featured Spaces
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`
                                group rounded-[28px] overflow-hidden transition duration-500
                                ${feature.featured
                                    ? "bg-[#1f325b] scale-105 shadow-[0_20px_60px_rgba(31,50,91,0.6)]"
                                    : "bg-[#111111] hover:bg-[#161616]"
                                }
                            `}
                        >

                            <div className="relative overflow-hidden h-[320px]">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                                <span className="absolute top-5 left-5 bg-white text-[#1f325b] text-xs font-bold px-4 py-2 rounded-full">
                                    PREMIUM
                                </span>
                            </div>


                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-300 leading-relaxed mb-7">
                                    {feature.description}
                                </p>

                                <Link href="/login">
                                    <button className="bg-white cursor-pointer text-[#1f325b] font-semibold px-6 py-3 rounded-xl hover:bg-[#dbe4ff] transition">
                                        Explore More
                                    </button></Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}