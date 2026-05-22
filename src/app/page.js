import Hero from "@/components/home/hero/Hero";
import TopRooms from "@/components/rooms/TopRooms";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Hero />
      <TopRooms />
      <FeaturedSection />
      <TestimonialsSection />
    </main>
  );
}