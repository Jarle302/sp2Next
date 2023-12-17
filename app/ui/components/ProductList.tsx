import Card from "./Card";
import React, { Suspense } from "react";
import {ListingProps as CardProps } from "@/app/utils/types/types";

type ProductsProps = { url: string };
const Products = async ({ url }: ProductsProps) => {
  const response = await fetch(url, { cache: "no-store" });
  const products: CardProps[] = await response.json();
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
