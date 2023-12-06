import CreateListingForm from "./ui/components/CreateListingForm";
import Hero from "./ui/components/Hero";
import ListingsSection from "./ui/components/ListingsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen text-gray-600 flex-col items-center justify-between p-[20px]">
      <Hero />
      <ListingsSection />
    </main>
  );
}
