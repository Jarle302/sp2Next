"use client";
import Listing from "@/app/ui/components/Listing";
import { ReducerContext } from "@/app/ui/components/ListingReducerContext";
import { useContext } from "react";

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

type ListingProps = {
  title: string;
  description?: string;
  tags?: string[];
  media?: string[];
  endsAt: string;
  id: string;
  bids: Bid[];
  seller: Seller;
  _count: { bids: number };
};

const ListingId = async ({ params }: paramType) => {
  const { state, dispatch } = useContext(ReducerContext);

  const product: ListingProps = state.find(
    (item) => item.id === params.listingId
  );
  return (
      <main className="flex justify-center">
        {product && <Listing {...product} />}
      </main>
    
  );
};

export default ListingId;
