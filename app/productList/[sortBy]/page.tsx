import { sortListingBy } from "@/app/utils/api/endpoints";
import Product from "@/app/ui/components/ProductList";
import { Suspense } from "react";
const sortBy = async ({ params }: { params: { sortBy: string } }) => {
  console.log(params.sortBy);
  return (
      <main className="flex justify-center">
        <Product url={sortListingBy(params.sortBy)} />
      </main>
  );
};

export default sortBy;
