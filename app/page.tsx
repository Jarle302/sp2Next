import CreateListingForm from './ui/components/CreateListingForm'
import Hero from './ui/components/Hero'
import Products from './ui/components/ProductList'
export default function Home() {

console.log(process.env.TEST)
  return (
    <main className="flex min-h-screen text-gray-600 flex-col items-center justify-between p-24">
      <Hero />
      <Products listOf={"Listings"} />
    </main>
  )
}
