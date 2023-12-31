"use client";
import listingReducer from "@/app/utils/listingReducer";
import { createContext, useReducer } from "react";
import { Bid, ListingProps, Seller } from "@/app/utils/types/types";


type Action =
  | { type: "ADD"; payload: ListingProps }
  | { type: "DELETE"; payload: { id: string } }
  | {
      type: "UPDATE";
      payload: {
        title: string;
        description?: string;
        tags?: string[];
        media?: string[];
        endsAt?: string;
        id?: string;
        bids?: Bid[];
        seller?: Seller;
        _count?: { bids: number };
      };
    };

type ListingReducerContextType = {
  state: ListingProps[];
  dispatch: React.Dispatch<Action>;
};

type ReducerType = React.Reducer<ListingProps[], Action>;

export const ReducerContext = createContext<ListingReducerContextType>({
  state: [],
  dispatch: (Action: Action) => {},
});
export default function ListingReducerContext({
  children,
  data,
}: {
  children: React.ReactNode;
  data: ListingProps[];
}) {
  const [state, dispatch] = useReducer<ReducerType>(listingReducer, data);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
}
