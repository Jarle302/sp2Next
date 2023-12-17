"use client";

import React, { useContext, useReducer } from "react";
import { ReducerContext } from "@/app/ui/components/ListingReducerContext";
import sortReducer from "@/app/utils/sortReducer";
import CardList from "@/app/ui/components/CardList";
import Searchbar from "@/app/ui/components/Searchbar";
import Card from "./Card";
import { useState } from "react";
import PaginationButtonGenerator from "./PaginationButtonGenerator";
import { ListingProps } from "@/app/utils/types/types";
type Action = {
  payload: ListingProps;
  type: string;
};

type ListingReducerContextType = {
  state: ListingProps[];
  dispatch: React.Dispatch<Action>;
};

const words = [
  "id",
  "title",
  "description",
  "tags",
  "created",
  "updated",
  "endsAt",
  "_count",
  "bids",
  "seller",
];

export default function ListingsSection() {
  const { state, dispatch } = useContext(ReducerContext);

  const [count, setCount] = useState(0);

  const initalPagination = 10;

  const [sortState, sortDispatch] = useReducer(sortReducer, state);

  const buttonStyle="text-orange-100 bg-gray-600 p-3"

  const handleClick = (page: number) => {
    setCount((page - 1) * 10);
  };
  return (
    <section className="relative bg-orange-100 text-gray-600">
      <h2 className="text-3xl md:text-4xl font-bold">Listings</h2>
      <div className="flex text-orange-100 mb-3 flex-wrap">
        <h3 className="text-gray-600 text-2xl md:text-3xl basis-full my-2">Sort by</h3>
        <button
          className={buttonStyle}
          onClick={() => {
            sortDispatch({ type: "SORT_BY_PRICE" });
          }}>
          Price
        </button>
        <button
          className={buttonStyle}
          onClick={() => {
            sortDispatch({ type: "SORT_BY_TITLE" });
          }}>
          Title
        </button>
        <button
          className={buttonStyle}
          onClick={() => {
            sortDispatch({ type: "SORT_BY_DATE" });
          }}>
          Date
        </button>
        <button
          className={buttonStyle}
          onClick={() => {
            sortDispatch({ type: "REVERSE" });
          }}>
          Reverse
        </button>
      </div>
      <div className="flex flex-col md:flex-row">
        <Searchbar Component={Card} useCase="mainSearch" />
      </div>
      <CardList data={sortState.slice(0 + count, initalPagination + count)} />

      <PaginationButtonGenerator array={sortState} handleClick={handleClick} />
    </section>
  );
}
