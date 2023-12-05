import { IoSearchCircleSharp } from "react-icons/io5";
import { useContext, useState, useEffect, useMemo } from "react";
import { ReducerContext } from "@/app/ui/components/ListingReducerContext";
import useForm from "@/app/utils/customHooks/useForm";
import Link from "next/link";

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

const Searchbar = () => {
  const { state, dispatch } = useContext(ReducerContext);
  console.log({ state });
  const [searchQuery, handleChange, reset, setSearchQuery] = useForm({
    search: "",
  });

  let filteredListings: ListingProps[] = [];
  if (Array.isArray(state) && state.length > 0 && searchQuery.search) {
    filteredListings = state.filter((listing) => {
      return listing.title
        .toLowerCase()
        .includes(searchQuery.search.toLowerCase());
    });
    console.log("rerender", filteredListings);
  }

  return (
    <section>
      <search>
        <form action="">
          <div className="flex">
            <input
              onChange={handleChange}
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
            <button className="bg-red-200 text-gray-600 w-[57pxpx] p-[4px]">
              <IoSearchCircleSharp />
              Search
            </button>
          </div>
        </form>
      </search>
      <div className="flex flex-col overflow-y-auto w-[200px] h-[300px]">
        {filteredListings.length > 0 &&
          searchQuery &&
          filteredListings.map((listing, index) => (
            <Link href={`/listings/${listing.id}`} key={index + listing.title}>
              {listing.title}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Searchbar;
