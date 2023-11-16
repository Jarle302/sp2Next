
import Hero from './ui/components/hero'
import Products from './ui/components/ProductList'
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Products listOf={"Listings"} />
    </main>
  )
}
