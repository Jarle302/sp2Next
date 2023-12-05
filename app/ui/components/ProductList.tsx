import Card from "./Card";
import React, { Suspense } from "react";

type ProductsProps = { url: string };
const Products = async ({ url }: ProductsProps) => {
  type Listing = {
    media: string[];
    id: string;
    title: string;
    description: string;
    endsAt: string;
    _count: { bids: number };
  };

  const response = await fetch(url, { cache: "no-store" });
  const products: Listing[] = await response.json();
  console.log("Products", products);
  console.log("URL", url);
  return (
    <Suspense fallback={<div>TEST TEST</div>}>
      <section>
        <div className="flex gap-10 justify-between flex-wrap">
          {products.length > 0 &&
            products.map((product) => <Card key={product.id} {...product} />)}
        </div>
      </section>
    </Suspense>
  );
};

export default Products;
