import Navbar from "@/components/shared/navbar/Navbar";
import Hero from "@/components/home/hero/Hero";
import LatestRooms from "@/components/home/latest-rooms/LatestRooms";
import Footer from "@/components/shared/footer/Footer";
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