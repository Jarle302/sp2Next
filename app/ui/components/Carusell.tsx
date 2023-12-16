"use client";
import { useState, useEffect, FC } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const slideIntervalTime: number = 5000;

type CarousellProps = { Component: FC<any>; items: any[] };
const Carousell = ({ Component, items }: CarousellProps) => {
  const [count, setCount] = useState(0);

  function handleClick(decrement: boolean = true) {
    if (!decrement) {
      if (count === items.length - 1) {
        setCount(0);
        console.log(count);
      } else {
        setCount((prev) => prev + 1);
        console.log(count);
      }
      return;
    } else {
      if (count === 0) {
        setCount(items.length - 1);
        console.log(count);
      } else {
        setCount((prev) => prev - 1);
        console.log(count);
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % items.length);
    }, slideIntervalTime);

    return () => clearInterval(interval);
  }, [items]);

  return (
    < div className="relative">
     { <button
        className="absolute top-[42%]  p-5 rounded-r-[12px] px-1 py-4 bg-gray-600 text-orange-100 "
        onClick={() => {
          handleClick();
        }}>
        <MdArrowForwardIos className="rotate-180" />
      </button>}
      {items && <Component {...items[count]} />}

      <button
        className="absolute top-[42%] right-[0] p-5  rounded-l-[12px] px-1 py-4  bg-gray-600 text-orange-100"
        onClick={() => {
          handleClick(false);
        }}>
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default Carousell;
