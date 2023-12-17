"use client";
import { use } from "react";
import Listing from "./Listing";
import useLocalStorage from "@/app/utils/customHooks/useLocalStorage";
import { Bid, Seller } from "@/app/utils/types";
type CreateListFormProps = {
  title: string;
  description?: string;
  tags?: string[];
  media?: string[];
  endsAt: string;
};


const ListingPreview = ({
  title,
  description,
  tags,
  media,
  endsAt,
}: CreateListFormProps) => {
  const placeholderBids: Bid[] = [
    {
      id: "0001",
      amount: 0,
      bidderName: "placeholder",
      created: "placeholder",
    },
  ];
  const placeholdeCount = { bids: 0 };
  const profile = {
    name: "placeholder",
    email: "placeholder",
    avatar: "placeholder",
  };
  const seller: Seller =
    useLocalStorage("profile", {
      name: "placeholder",
      email: "placeholder",
      avatar: "placeholder",
    }) || profile;

  return (
    <div className="transform scale-[50%] absolute top-[-138px] right-[0]">
      <Listing
        id="0002"
        seller={seller}
        bids={placeholderBids}
        _count={placeholdeCount}
        title={title}
        description={description}
        tags={tags}
        media={media}
        endsAt={endsAt}
      />
    </div>
  );
};

export default ListingPreview;
