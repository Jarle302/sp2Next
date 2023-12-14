"use client";

import React, { useContext, useState, useEffect, useMemo } from "react";
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

const Searchbar = ({ Component }: { Component?: React.FC<ListingProps> }) => {
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
    console.log(typeof Component);
  }

  return (
    <section className="w-full relative flex">
      <search className="m-auto">
        <form action="">
          <div className="flex text-gray-600">
            <input
              className="ml-[10px] flex-basis-[100%] p-3"
              onChange={handleChange}
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
        </form>
      </search>
      {searchQuery.search &&
      filteredListings.length > 0 &&
      typeof Component === "undefined" ? (
        <div className="absolute bg-gray-600 flex flex-col top-[60px] overflow-y-auto w-full px-2 h-[90vh] wrapAnywhere">
          {filteredListings.map((listing, index) => (
            <Link href={`/listings/${listing.id}`} key={index + listing.title}>
              {listing.title}
            </Link>
          ))}
        </div>
      ) : (
        <div className="overflow-y-auto flex flex-col md:flex-row md:flex-wrap gap-[20px]">
          {typeof Component !== "undefined" &&
            filteredListings.map((listing, index) => (
              <Component key={index} {...listing} />
            ))}
        </div>
      )}
    </section>
  );
};

export default Searchbar;
