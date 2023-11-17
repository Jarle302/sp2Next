"use client"

import { useEffect, useState } from "react";
import Card from "./Card";

type ProductsProps = { listOf: string }
const Products = ({ listOf }: ProductsProps) => {

    const [products, setProducts] = useState<Listing[]>([])

    type Listing = { media: string[], id: number, title: string, description: string, endsAt: string, _count: { bids: number } }

    useEffect(() => {
        fetch("https://api.noroff.dev/api/v1/auction/listings")
            .then(res => res.json())
            .then((data: Listing[]) => { console.log(data); setProducts(data.filter((listing: Listing) => listing.media.length > 0)) })
    }, [])

    return (<section>
        <h2>{listOf}</h2>
        <div className="flex gap-10 justify-between flex-wrap">
            {products.length >0 && products.map(product => <Card key={product.id} {...product} />)}
        </div>
    </section>
    )

}

export default Products