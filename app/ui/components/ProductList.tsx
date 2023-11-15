"use client"

import { useEffect, useState } from "react";
import Slide from "./Slide";


const Products = ({ children, listOf }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.noroff.dev/api/v1/auction/listings")
            .then(res => res.json())
            .then(data => { console.log(data); setProducts(data.filter(listing => listing.media.length > 0)) })
    }, [])

    return (<section>
        <h2>{listOf}</h2>
        <div className="flex gap-10 justify-between flex-wrap">
            {products.map(product => <Slide key={product.id} {...product} />)}
        </div>
    </section>
    )

}

export default Products