import CreateListingForm from "./ui/components/CreateListingForm";
import Hero from "./ui/components/Hero";
import ListingsSection from "./ui/components/ListingsSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "| Home | Collection Chest",
  description: "Collection Chest - Discover and bid on unique collectibles from around the world. Start your collection journey with us today.",
};


export default function Home() {
  return (
    <main className="flex min-h-screen text-gray-600 flex-col items-center justify-between p-[20px]">
      <Hero />
      <ListingsSection />
    </main>
  );
}
