"use client";

import React, { useContext, useReducer } from "react";
import { ReducerContext } from "@/app/ui/components/ListingReducerContext";
import sortReducer from "@/app/utils/sortReducer";
import CardList from "@/app/ui/components/CardList";
import Searchbar from "@/app/ui/components/Searchbar";
import Card from "./Card";

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
  const { state, dispatch } =
    useContext<ListingReducerContextType>(ReducerContext);

  const [sortState, sortDispatch] = useReducer(sortReducer, state);

  return (
    <section className="relative bg-orange-100 text-gray-600">
      <h2>Listings</h2>
      <div className="flex text-orange-100">
        <h3>Sort by</h3>
        <button
          className="text-orange-100 bg-gray-600 p-3"
          onClick={() => {
            sortDispatch({ type: "SORT_BY_PRICE" });
          }}>
          Price
        </button>
        <button
          className="text-orange-100 bg-gray-600 p-3"
          onClick={() => {
            sortDispatch({ type: "SORT_BY_TITLE" });
          }}>
          Title
        </button>
        <button
          className="text-orange-100 bg-gray-600 p-3"
          onClick={() => {
            sortDispatch({ type: "SORT_BY_DATE" });
          }}>
          Date
        </button>
      </div>
      <Searchbar Component={Card} />
      <CardList data={sortState} />
    </section>
  );
}