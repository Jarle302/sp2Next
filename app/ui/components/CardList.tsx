import Card from "./Card";
import React from "react";

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

const CardList = ({ data }: { data: ListingProps[] }) => {
  return (
    <div className=" flex gap-10 justify-between flex-wrap overflow-y-auto h-[90vh]">
      {data.length > 0 &&
        data.map((card, index) => <Card key={index} {...card} />)}
    </div>
  );
};

export default CardList;
