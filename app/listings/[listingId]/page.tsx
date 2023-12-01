import { Suspense } from "react";
import Listing from "@/app/ui/components/Listing";

type paramType = {
  params: { listingId: string };
};
type Bid = {
  id: string;
  amount: number;
  bidderName: string;
  created: string;
};

type Seller = {
  name: string;
  email: string;
  avatar: string;
};

type ProductProps = {
  title: string;
  _count: { bids: number };
  media: string[];
  endsAt: string;
  description: string;
  id: string;
  bids: Bid[];
  seller: Seller;
};
const ListingId = async ({ params }: paramType) => {
  const response = await fetch(
    `https://api.noroff.dev/api/v1/auction/listings/${params.listingId}?_bids=true&_seller=true`,
    { cache: "no-store" }
  );
  const product: ProductProps = await response.json();
  const { title, _count, media, endsAt, description, id, bids, seller } =
    product;
  console.log(product);
  return (
    <Suspense fallback={<div>LOADING....</div>}>
      <main className="flex justify-center">
        <Listing {...product} />
      </main>
    </Suspense>
  );
};

export default ListingId;
