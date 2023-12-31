

import type { Metadata } from "next";
export const metadata: Metadata = {


    title: "About | Collection Chest",
    description: "Collection Chest - Learn more about our auction house. Discover our history, values, and how we're committed to helping you build your unique collection. Get to know us better today.",};



export default function About() {


    
    return (
        <main className="max-w-[1300px] p-[40px] flex">
            <div className="w-3/5 text-gray-600 flex flex-col gap-8 m-[40px]">
                <h1 className="custom-responsive-font">About</h1>
                <section >
                    <h2 className="text-2xl">Collection Chest: Exclusive Treasures for a Greener Future</h2>

                    <p>Join <em>Collection Chest</em> in redefining treasure hunting with sustainability at its heart. Each unique find in our limited-edition auctions marks a commitment to eco-friendly living.</p>
                </section>
                <section >

                    <h2 className="text-2xl" >Rediscover, Reuse, Rejoice</h2>

                    <p>Discover rare collectibles and modern must-haves. Every bid supports a sustainable future, making each acquisition both a personal triumph and an environmental victory.</p>
                </section>
                <section >



                    <h2 className="text-2xl">Act Now, Impact Tomorrow</h2>

                    <p>Be part of a movement shaping a greener planet. Your choices with Collection Chest echo a powerful message for conservation.</p>
                </section>
                <section >

                    <h2 className="text-2xl">Join & Make a Difference</h2>

                    <p>Seize the opportunity to make meaningful purchases. Every item, every bid counts towards a sustainable world. Do not wait be part of this journey today.</p>

                    <h3 className="text-xl">Collection Chest: Where Rarity Meets Responsibility</h3>
                </section>  </div>
           
        </main >
    )
}