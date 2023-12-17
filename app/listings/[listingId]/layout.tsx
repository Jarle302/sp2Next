import type { Metadata } from "next";
export const metadata: Metadata = {


    title: "Listing | Collection Chest",
    description: "Collection Chest - Discover unique details about this collectible, place your bid, and add a new treasure to your collection. Explore the world of collectibles with us today.",}


export default function ListingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}