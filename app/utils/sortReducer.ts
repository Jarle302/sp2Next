import mergeSort from "./mergeSort";
import { stringsorter } from "@/app/utils/StringSorter";

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

function sortByTitle(left: ListingProps, right: ListingProps) {
  return stringsorter.compare(left.title, right.title) < 0 ? true : false;
}

function sortByPrice(left: ListingProps, right: ListingProps) {
  return (left?.bids[0]?.amount || 0) < (right?.bids[0]?.amount || 0)
    ? true
    : false;
}

function sortByDate(left: ListingProps, right: ListingProps) {
  const leftDate = new Date(left.endsAt);
  const rightDate = new Date(right.endsAt);
  return leftDate < rightDate ? true : false;
}

export default function searchReducer(
  state: ListingProps[],
  action: { type: string }
) {
  switch (action.type) {
    case "SORT_BY_PRICE": {
      return mergeSort(state, sortByPrice);
    }
    case "SORT_BY_TITLE": {
      return mergeSort(state, sortByTitle);
    }
    case "SORT_BY_DATE": {
      return mergeSort(state, sortByDate
      );
    }
    default:
      return state;
  }
}
