"use client";
import { playfair, lato } from "../fonts/fonts";
import Carousel from "./Carusell";
import Slide from "./Slide";
import Link from "next/link";
import { useContext } from "react";
import { ReducerContext } from "./ListingReducerContext";

export default function Hero() {
  const { state } = useContext(ReducerContext);
  const items = state.slice(0, 10);
  return (
    <section className="flex gap-10 justify-center flex-wrap w-full">

        <h1
          className={`${playfair.className} mt-[74px] font-bold text-gray-600 text-center fs-3 custom-responsive-font border-b-2 border-red-200 rounded-2xl max-w-max basis-full`}>
          Collective chest
        </h1>
        <div className="flex justify-evenly  mt-8 items-center flex-wrap basis-full">
          <div className="flex flex-col gap-8">
            <h2
              className={`${lato.className} self-start font-bold text-gray-600 text-3xl`}>
              Shared Passion, Exceptional Finds
            </h2>
            <p className="max-w-[400px] leading-relaxed">
              Explore <strong>Collective Chest</strong> for a{" "}
              <em>fun and easy</em> auction experience! Find{" "}
              <strong>unique art</strong>, <em>vintage treasures</em>, and more
              in our lively online community. Start your treasure hunt with us{" "}
              <strong>today</strong>!
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                className="bg-red-200 drop-shadow-md rounded-[9px] p-[10px] font-semibold text-gray-600 box-border"
                href="/listings/create">
                Add listing
              </Link>
            </div>
          </div>
          {items.length > 0 && <Carousel Component={Slide} items={items} />}
        </div>
      
      
    </section>
  );
}
