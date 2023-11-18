
import Card from "./Card";
import React, { Suspense } from 'react';

type ProductsProps = { listOf: string }
const Products = async ({ listOf }: ProductsProps) => {


    type Listing = { media: string[], id: number, title: string, description: string, endsAt: string, _count: { bids: number } }


    const response = await fetch("https://api.noroff.dev/api/v1/auction/listings")
    const products: Listing[] = await response.json()

    return (
        <Suspense fallback={<div>TEST TEST</div>}>
            <section>
                <h2>{listOf}</h2>
                <div className="flex gap-10 justify-between flex-wrap">
                    {products.length > 0 && products.map(product => <Card key={product.id} {...product} />)}
                </div>
            </section>
        </Suspense>
    )

}

export default Products