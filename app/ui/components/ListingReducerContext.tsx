"use client";
import listingReducer from "@/app/utils/listingReducer";
import { createContext, useReducer } from "react";

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
