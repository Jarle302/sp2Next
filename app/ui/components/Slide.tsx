import { lato } from "../fonts/fonts";
import getTimeRemaining from "../../utils/getTimeRemaining";
import Link from "next/link";
import React from "react";

type SlideProps = {
  children?: React.ReactNode;
  title: string;
  _count: { bids: number };
  media: string[];
  endsAt: string;
  description: string;
  id: string;
  w?:string;
  h?:string
};
const Slide = ({ children, title, _count, media, endsAt, id,w="350px",h="350px" }: SlideProps) => {
  const timeRemaining = getTimeRemaining(endsAt);

  return (
    <Link href={`/listings/${id}`} className="flex justify-between flex-col max-w-[800px]">
      <h3 className="transform -translate-x-1 translate-y-12 bg-gray-700 text-orange-200 text-2xl p-2 m-auto">
        {title}
      </h3>
      {media && (
        <img
          className="w-[350px] h-[350px] object-cover rounded-2xl"
          src={media[0] || "/ListingPlaceholder.png"}
          alt="Carousel Item"
        />
      )}
      <div className="px-2 transform -translate-x-[1px] p-3 flex justify-between  -translate-y-[48px] rounded-bl-2xl rounded-br-2xl bg-gray-700 bg-opacity-90">
        <p className="text-orange-200">Bids {_count?.bids ? _count.bids : 0}</p>
        <p suppressHydrationWarning={true} className="text-orange-100">
          {timeRemaining.days >= 0 ? (
            <>
              <span className={`text-red-200 text-bold ${lato.className}`}>
                Ends in{" "}
              </span>
              {timeRemaining.days} d {timeRemaining.hours} h{" "}
              {timeRemaining.minutes} m
            </>
          ) : (
            "Auction has ended"
          )}
        </p>
      </div>
    </Link>
  );
};

export default Slide;
