"use client";

import React, { useContext, useState, useEffect, useMemo } from "react";
import { ReducerContext } from "@/app/ui/components/ListingReducerContext";
import useForm from "@/app/utils/customHooks/useForm";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";
import { ListingProps } from "@/app/utils/types/types";

const Searchbar = ({ Component,useCase }: { Component?: React.FC<ListingProps>,useCase:string }) => {
  const { state, dispatch } = useContext(ReducerContext);
  const [searchQuery, handleChange, reset, setSearchQuery] = useForm(
    {
      search: "",
    },
    () => ({})
  );

  let filteredListings: ListingProps[] = [];
  if (Array.isArray(state) && state.length > 0 && searchQuery.search) {
    filteredListings = state.filter((listing) => {
      return listing.title
        .toLowerCase()
        .includes(searchQuery.search.toLowerCase());
    });
  }

  return (
    <div className=" relative flex-wrap flex justify-between">
      <search className="basis-full m-auto">
        <form action="">
          <div className="flex bg-white  text-gray-600 mx-2 relative">
            <label htmlFor={`search${useCase}`} className="font-bold py-2 absolute bottom-[20px] ">Search</label>
            <input
              className="flex-basis-[100%] py-3 outline-none"
              onChange={handleChange}
              type="text"
              name={`search${useCase}`}
              id={`search${useCase}`}
              value={searchQuery.search}
            />
            <button
            aria-label="Reset search"
              className="text-[2rem]"
              onClick={(e) => {
                e.preventDefault();
                reset();
              }}>
              <IoMdCloseCircle />
            </button>
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
    </div>
  );
};

export default Searchbar;
