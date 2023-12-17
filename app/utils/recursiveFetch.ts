import { ListingProps } from "./types/types";

export default async function recursiveFetch(
  offset: number,
  payload: ListingProps[],
  limit = 100
) {
  try{
  const response = await fetch(
    `https://api.noroff.dev/api/v1/auction/listings?offset=${offset}&limit=${limit}&_bids=true&_active=true&_seller=true`,
    { cache: "no-store" }
  );
  const data = await response.json();

  if(!data){

    return payload
  }
 const allListings = [...payload, ...data]

 //Need to limit the amount of data that gets fetched to prevent rate limiting.
  if (data.length < 100 || allListings.length >= 800) {
    return [...data, ...payload];
  }

  return recursiveFetch(offset + 100, [...payload, ...data]);}
  catch(err){
    console.log(err)
  }
}
