"use client"
import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from "react-icons/md";


const slideIntervalTime: number = 5000

const Carousell = ({ Component, items }) => {
    const [count, setCount] = useState(0);


    function handleClick(decrement: boolean = true) {
        if (!decrement) {
            if (count === items.length - 1) {
                setCount(0)
                console.log(count)
            } else {
                setCount((prev) => prev + 1)
                console.log(count)

            }
            return
        }

        else {
            if (count === 0) {
                setCount(items.length - 1)
                console.log(count)

            } else {
                setCount((prev) => prev - 1)
                console.log(count)

            }
        }

    }

    useEffect(() => {
        const interval = setInterval(() => { setCount(prev => (prev + 1) % items.length) }, slideIntervalTime);

        return () => clearInterval(interval)
    }, [items, slideIntervalTime])

    return (
        <div className="relative">
            <button className='absolute top-[42%] right-[90%] p-5 rounded-r-[12px] px-1 py-4 bg-white ' onClick={() => { handleClick() }}><MdArrowForwardIos className="rotate-180" />
            </button>
            {items && <Component {...items[count]} />}

            <button className='absolute top-[42%] left-[90%] p-5  rounded-l-[12px] px-1 py-4  bg-white ' onClick={() => { handleClick(false) }}><MdArrowForwardIos />
            </button>
        </div>
    )
}


export default Carousell