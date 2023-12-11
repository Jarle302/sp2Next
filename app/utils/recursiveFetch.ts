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

export default async function recursiveFetch(
  offset: number,
  payload: ListingProps[],
  limit = 100
) {
  const response = await fetch(
    `https://api.noroff.dev/api/v1/auction/listings?offset=${offset}&limit=${limit}&_bids=true&_active=true&_seller=true`,
    { cache: "no-store" }
  );
  const data = await response.json();
  console.log(data, "logged");
  console.log(data.length, "length");
  if (data.length < 100) {
    return [...data, ...payload];
  }

  return recursiveFetch(offset + 100, [...payload, ...data]);
}
