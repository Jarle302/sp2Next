"use client"
import { use } from "react";
import Listing from "./Listing"
import useLocalStorage from "@/app/utils/customHooks/useLocalStorage"

type CreateListFormProps = {
    title: string;
    description?: string;
    tags?: string[];
    media?: string[];
    endsAt: string;
  }
const ListingPreview = ({ title,description,tags,media,endsAt }: CreateListFormProps) => {
const placeholderBids = [2,4,5]
const placeholdeCount = {bids:0}
const seller = useLocalStorage("profile")

return(
    
    <Listing id="0002" seller={seller} bids={placeholderBids} _count={placeholdeCount} title={title} description={description} tags={tags} media={media} endsAt={endsAt} />
)
}


export default ListingPreview