import Card from "./Card";
import React from "react";
import { ListingProps } from "@/app/utils/types/types";





const CardList = ({ data }: { data: ListingProps[] }) => {
  return (
    <div className=" flex gap-10 justify-between flex-wrap overflow-y-auto h-[90vh]">
      {data.length > 0 &&
        data.map((card, index) => <Card key={index} {...card} />)}
    </div>
  );
};

export default CardList;
